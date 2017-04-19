import HlsJs from 'hls.js/lib/hls';
import Metadata from './Metadata';

class Hls extends Meister.MediaPlugin {
    constructor(config, meister, next) {
        super(config, meister);

        this.dvrThreshold = this.config.dvrThreshold || 300;

        this.hls = null;
        this.hlsVersion = HlsJs.version;

        this.manifestParsed = false;

        this.audioMode = false;

        this.metadata = [];
        this.previousMetadata = null;

        // Middleware promise chain.
        this.next = next;

        // -1 for automatic quality selection
        this.previousLevel = -1;
        this.lowestLevel = 0;

        // Auto recover properties
        this.recoverDecodingErrorDate = null;
        this.recoverSwapAudioCodecDate = null;
    }

    static get pluginName() {
        return 'Hls';
    }

    isItemSupported(item) {
        return new Promise((resolve) => {
            if (item.type !== 'm3u8' && item.type !== 'm3u') {
                return resolve({
                    supported: false,
                    errorCode: Meister.ErrorCodes.WRONG_TYPE,
                });
            }

            if (this.config.disabled || !HlsJs.isSupported()
                || (this.meister.browser.isSamsung && !window.MediaSource)
                || (this.meister.browser.isiOS && this.config.iosMobileDisabled)
            ) {
                return resolve({
                    supported: false,
                    errorCode: Meister.ErrorCodes.NOT_SUPPORTED,
                });
            }

            if (item.drm || item.drmConfig) {
                return resolve({
                    supported: false,
                    errorCode: Meister.ErrorCodes.NO_DRM,
                });
            } else {
                return resolve({
                    supported: true,
                });
            }
        });
    }

    resetPrivates() {
        this.metadata = [];
        this.previousMetadata = null;

        this.manifestParsed = false;

        this.previousLevel = -1;
        this.lowestLevel = 0;
        this.duration = 0;
        this.item = null;
    }

    process(item) {
        return this.next(item).then((newItem) => {
            this.player = this.meister.getPlayerByType('html5', newItem);
            if (this.meister.config.audioOnly || newItem.mediaType === 'audio') {
                this.audioMode = true;
            } else {
                this.audioMode = false;
            }

            return newItem;
        }).catch((err) => {
            console.error(`Something went wrong while processing middlewares. ${err}`);
        });
    }

    load(item) {
        super.load(item);
        this.item = item;

        const startPosition = Number.isFinite(item.startPosition) && item.startPosition > 0 ? item.startPosition : -1;

        return new Promise((resolve) => {
            // TODO: Handle not being able to initiate a player.
            const mediaElement = this.player.mediaElement;

            this.hls = new HlsJs({
                autoStartLoad: false,
            });

            // Display the correct title.
            this.on('_playerTimeUpdate', this._onPlayerTimeUpdate.bind(this));
            this.on('_playerSeek', this._onPlayerSeek.bind(this));
            this.on('requestSeek', this.onRequestSeek.bind(this));
            this.on('playerError', this.onPlayerError.bind(this));

            // Listen to control events.
            this.on('requestBitrate', this.onRequestBitrate.bind(this));
            this.on('requestGoLive', () => this.onRequestGoLive());

            // Trigger this to make it look pretty.
            this.hls.on(HlsJs.Events.MANIFEST_LOADED, (event, data) => {
                // data.levels contains audio stream here
                if (this.audioMode) {
                    let onlyAudio = true;

                    for (let i = 0; i < data.levels.length; i++) {
                        const subLevel = data.levels[i];

                        if (subLevel.videoCodec) {
                            onlyAudio = false;
                            break;
                        }
                    }

                    if (!onlyAudio) {
                        for (let i = 0; i < data.levels.length; i++) {
                            const subLevel = data.levels[i];

                            if (!subLevel.videoCodec) {
                                this.hls.loadSource(subLevel.url[0]);
                                return;
                            }
                        }
                    } else {
                        if (this.meister.config.autoplay) {
                            this.hls.startLoad(startPosition);
                        } else {
                            this.one('requestPlay', () => {
                                if (this.manifestParsed) {
                                    this.hls.startLoad(startPosition);
                                } else {
                                    const startPlayback = () => {
                                        this.hls.startLoad(startPosition);
                                        this.hls.off(HlsJs.Events.MANIFEST_PARSED, startPlayback);
                                    };
                                    this.hls.on(HlsJs.Events.MANIFEST_PARSED, startPlayback);
                                }
                            });
                        }
                        resolve();
                    }
                }

                if (!this.audioMode && this.meister.config.autoplay) {
                    this.hls.startLoad(startPosition);
                }

                if (!this.config.splashTitle) {
                    return;
                }

                this.meister.trigger('uiEvent', {
                    type: 'splash',
                    info: {
                        title: this.config.splashTitle,
                        description: this.config.splashDescription,
                        thumbnailURL: this.config.splashThumbnail,
                    },
                });
            });

            // Find the lowest level when the levels have been parsed, and notify UI of bitrates.
            this.hls.on(HlsJs.Events.MANIFEST_PARSED, (event, data) => {
                this.onManifestParsed(data.levels, data.firstLevel);
            });

            // Announce whether the level is live or not.
            this.hls.on(HlsJs.Events.LEVEL_LOADED, (event, data) => {
                const live = data.details.live;
                let hasDVR = false;

                this.duration = data.details.totalduration;

                if (live && this.duration > this.dvrThreshold) {
                    hasDVR = true;
                }

                if (!this.config.dvrEnabled) {
                    hasDVR = false;
                }

                this.meister.trigger('itemTimeInfo', {
                    hasDVR,
                    isLive: live,
                    duration: this.duration,
                });
            });

            // Parse the metadata and store it.
            this.hls.on(HlsJs.Events.FRAG_PARSING_METADATA, (event, data) => {
                this.processMetadata(data);
            });

            // Monitor automatic quality switching.
            this.hls.on(HlsJs.Events.LEVEL_SWITCH, this.onQualityChanged.bind(this));

            // Prepare for playback.
            this.hls.attachMedia(mediaElement);
            this.hls.loadSource(item.src);

            // Error handling.
            this.hls.on(HlsJs.Events.ERROR, (e, data) => this.onError(e, data));

            // Only start loading the stream when playback is requested.
            if (this.meister.config.autoplay) {
                if (!this.config.disableVisibilitySwitch) {
                    this.on('windowVisibilityChange', this.visibilityChange.bind(this));
                }
                resolve();
            } else if (!this.audioMode) {
                this.one('requestPlay', () => {
                    if (this.manifestParsed) {
                        this.hls.startLoad(startPosition);
                    } else {
                        const startPlayback = () => {
                            this.hls.startLoad(startPosition);
                            this.hls.off(HlsJs.Events.MANIFEST_PARSED, startPlayback);
                        };
                        this.hls.on(HlsJs.Events.MANIFEST_PARSED, startPlayback);
                    }

                    if (!this.config.disableVisibilitySwitch) {
                        this.on('windowVisibilityChange', (e) => this.visibilityChange(e));
                    }
                });

                resolve();
            }
        });
    }

    playerLoadedMetadata() {
        // override the base function because HLSjs has its own startPosition handling
    }

    onQualityChanged(event, data) {
        // Manual triggers are handled when setting the quality.
        if (!this.hls.autoLevelEnabled) { return; }

        const newBitrate = this.hls.levels[data.level].bitrate;
        this.meister.trigger('playerAutoSwitchBitrate', {
            newBitrate,
            newBitrateIndex: data.level,
        });
    }

    _onPlayerTimeUpdate() {
        const playOffset = this.meister.duration - this.duration;

        this.meister.trigger('playerTimeUpdate', {
            currentTime: this.meister.currentTime - playOffset,
            duration: this.duration,
        });

        this.broadcastTitle();
    }

    _onPlayerSeek() {
        const playOffset = this.meister.duration - this.duration;

        const currentTime = this.meister.currentTime - playOffset;
        const duration = this.duration;
        const relativePosition = currentTime / duration;

        this.meister.trigger('playerSeek', {
            relativePosition,
            currentTime,
            duration,
        });
    }

    onRequestSeek(e) {
        let targetTime;

        if (Number.isFinite(e.relativePosition)) {
            const playOffset = this.meister.duration - this.duration;
            targetTime = (this.duration * e.relativePosition) + playOffset;
        } else if (Number.isFinite(e.timeOffset)) {
            targetTime = this.meister.currentTime + e.timeOffset;
        } else if (Number.isFinite(e.targetTime)) {
            const playOffset = this.meister.duration - this.duration;
            targetTime = e.targetTime + playOffset;
        }

        if (!e.forcedStart && this.blockSeekForward && targetTime > this.meister.currentTime) { return; }

        if (Number.isFinite(targetTime)) {
            this.meister.currentTime = targetTime;
        }
    }

    onRequestGoLive() {
        const duration = this.meister.duration;
        const targetDuration = this.hls.levels[this.hls.currentLevel].details.targetduration;
        const liveSync = this.hls.config.liveSyncDurationCount;

        const liveOffset = targetDuration * liveSync;

        const liveTime = duration - liveOffset;

        this.meister.currentTime = liveTime;
    }

    processMetadata(data) {
        const newMetadata = Metadata.parse(data);
        if (!newMetadata) {
            return;
        }

        for (let i = this.metadata.length - 1; i >= 0; i--) {
            const loopData = this.metadata[i];

            if (newMetadata.title === loopData.title) {
                // Update the end time should it have changed.
                loopData.end = newMetadata.end;
                return;
            }
        }

        // No early return, metadata must be new.
        this.metadata.push(newMetadata);
    }

    broadcastTitle() {
        const time = this.meister.currentTime;
        // No need to spam events.
        if (this.previousMetadata &&
                (this.previousMetadata.start < time && time < this.previousMetadata.end)
            ) {
            return;
        }

        // Still playing the same item.
        const currentMetadata = this.currentlyPlaying;
        if (this.previousMetadata &&
                (currentMetadata.title === this.previousMetadata.title)
            ) {
            return;
        }

        // Remember the current metadata for the next call.
        this.previousMetadata = currentMetadata;

        // Broadcast event for the ui.
        this.meister.trigger('itemMetadata', {
            title: currentMetadata.title,
        });
    }

    onManifestParsed(levels) {
        this.manifestParsed = true;

        // Should there be no levels do nothing.
        if (levels.length === 0 || this.audioMode) {
            return;
        }

        // TODO: Find audio stream.
        let lowestBitrate = levels[0].bitrate;
        for (let i = 0; i < levels.length; i++) {
            const level = levels[i];

            if (level.bitrate < lowestBitrate) {
                lowestBitrate = level.bitrate;
                this.lowestLevel = i;
            }
        }

        // Format bitrates and notify UI.
        const bitrates = [];
        // Use bitrate 0 for automatic switching.
        bitrates.push({
            bitrate: 0,
            index: -1,
        });

        for (let i = 0; i < levels.length; i++) {
            const level = levels[i];

            bitrates.push({
                bitrate: level.bitrate,
                index: i,
            });
        }

        this.meister.trigger('itemBitrates', {
            bitrates,
            currentIndex: -1,
        });
    }

    onRequestBitrate(e) {
        this.hls.nextLevel = e.bitrateIndex;

        // No need to broadcast auto selection
        if (e.bitrateIndex === -1) return;

        const newBitrate = this.hls.levels[e.bitrateIndex].bitrate;
        this.meister.trigger('playerSwitchBitrate', {
            newBitrate,
            newBitrateIndex: e.bitrateIndex,
        });
    }

    visibilityChange(e) {
        if (e.visibility === 'visible') {
            // Restore quality to previous level.
            this.hls.nextLevel = this.previousLevel;
        } else if (e.visibility === 'hidden') {
            // Check whether the quality was automatic and save it as previous state.
            if (this.hls.autoLevelEnabled) {
                this.previousLevel = -1;
            } else {
                this.previousLevel = this.hls.currentLevel;
            }

            this.hls.nextLevel = this.lowestLevel;
        }
    }

    recoverFromMediaError() {
        const now = performance.now();

        // First try a normal recover. The server may have returned faulty data or
        // the decoder could have crashed.
        // 3000 gives HLS the chance to recover instead of imidiatly trying to recover again.
        if (!this.recoverDecodingErrorDate || (now - this.recoverDecodingErrorDate) > 3000) {
            this.recoverDecodingErrorDate = performance.now();
            console.warn('Fatal error in Hls. Will attempt to recover.');

            // Try to recover from our media error.
            this.hls.recoverMediaError();

            // Since autoStartLoad is false we need to resume the load manually.
            this.hls.startLoad();
            this.meister.trigger('requestPlay');
        } else if (!this.recoverSwapAudioCodecDate || (now - this.recoverSwapAudioCodecDate) > 3000) {
            // We still could not recover from our fatal error. We shall try swapping the audio codec.
            this.recoverSwapAudioCodecDate = performance.now();
            console.warn('Fatal error in Hls. Will attempt to swap audio codecs.');

            // Swap audio codecs and try recovering again.
            this.hls.swapAudioCodec();
            this.hls.recoverMediaError();

            // Since autoStartLoad is false we need to resume the load manually.
            this.hls.startLoad();
            this.meister.trigger('requestPlay');
        }
    }

    // HLS errors
    onError(e, data) {
        console.warn(`Error in ${this.name}, type: ${data.details}, will attempt to recover.`);
        if (data.fatal) {
            console.error(`Can not recover from ${data.type}: ${data.details}.`);

            if (data.type === HlsJs.ErrorTypes.NETWORK_ERROR) {
                this.meister.error('Network error', 'HLS-0001', data.details);
            }

            // We can recover from a media error.
            // This is slower but can result in a playing video. (As seen in Firefox)
            if (data.type === HlsJs.ErrorTypes.MEDIA_ERROR && this.config.autoRecoverMode) {
                this.recoverFromMediaError();
            }
        }
    }

    // Player errors (Errors from the videoElement)
    onPlayerError(error) {
        // We can recover from decode errors. This will swap codecs and try again..
        if (error.code === error.MEDIA_ERR_DECODE && this.config.autoRecoverMode) {
            this.recoverFromMediaError();
        }
    }

    get currentItem() {
        const metadata = this.currentlyPlaying;

        const currentItem = {
            src: this.item.src,
            type: this.item.type,
            title: metadata.title,
            bitrate: metadata.bitrate,
        };

        return currentItem;
    }

    get currentlyPlaying() {
        // Nothing has been loaded yet.
        if (!this.hls || !this.hls.levels) return { bitrate: 0, title: '' };

        // Prepare return object.
        const currentLevel = this.hls.currentLevel;
        const metadata = {
            bitrate: this.hls.levels[currentLevel] ? this.hls.levels[currentLevel].bitrate : 0,
            title: '',
        };

        // Traverse backwards since it is more likely that the player is near the end
        let data = null;
        const time = this.meister.currentTime;
        for (let i = this.metadata.length - 1; i >= 0; i--) {
            if (this.metadata[i].start < time && time < this.metadata[i].end) {
                data = this.metadata[i];
                break;
            }
        }

        if (data) {
            metadata.title = data.title;
            metadata.start = data.start;
            metadata.end = data.end;
            metadata.duration = data.end - data.start;
        }

        return metadata;
    }

    unload() {
        super.unload();
        this.resetPrivates();

        if (this.hls && this.hls.media) {
            this.hls.detachMedia();
        }

        if (this.hls) {
            this.hls.destroy();
        }
    }

    destroy() {
        super.destroy();
        if (this.hls) this.hls.destroy();
    }
}

Meister.registerPlugin('hls', Hls);
Meister.registerPlugin(Hls.pluginName, Hls);
export default Hls;
