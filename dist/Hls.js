module.exports = /******/
function(modules) {
    /******/
    /******/
    // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (installedModules[moduleId]) /******/
        return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: !1,
            /******/
            exports: {}
        };
        /******/
        /******/
        // Return the exports of the module
        /******/
        /******/
        /******/
        // Execute the module function
        /******/
        /******/
        /******/
        // Flag the module as loaded
        /******/
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    // webpackBootstrap
    /******/
    // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/
    // Load entry module and return exports
    /******/
    /******/
    /******/
    /******/
    // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/
    // expose the module cache
    /******/
    /******/
    /******/
    // identity function for calling harmony imports with the correct context
    /******/
    /******/
    /******/
    // define getter function for harmony exports
    /******/
    /******/
    /******/
    // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/
    /******/
    // Object.prototype.hasOwnProperty.call
    /******/
    /******/
    /******/
    // __webpack_public_path__
    /******/
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.i = function(value) {
        return value;
    }, __webpack_require__.d = function(exports, name, getter) {
        /******/
        __webpack_require__.o(exports, name) || /******/
        Object.defineProperty(exports, name, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ? /******/
        function() {
            return module.default;
        } : /******/
        function() {
            return module;
        };
        /******/
        /******/
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "/", __webpack_require__(__webpack_require__.s = 68);
}([ /* 0 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function noop() {}
    /*globals self: false */
    //let lastCallTime;
    // function formatMsgWithTimeInfo(type, msg) {
    //   const now = Date.now();
    //   const diff = lastCallTime ? '+' + (now - lastCallTime) : '0';
    //   lastCallTime = now;
    //   msg = (new Date(now)).toISOString() + ' | [' +  type + '] > ' + msg + ' ( ' + diff + ' ms )';
    //   return msg;
    // }
    function formatMsg(type, msg) {
        return msg = "[" + type + "] > " + msg;
    }
    function consolePrintFn(type) {
        var func = self.console[type];
        return func ? function() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            args[0] && (args[0] = formatMsg(type, args[0])), func.apply(self.console, args);
        } : noop;
    }
    function exportLoggerFunctions(debugConfig) {
        for (var _len2 = arguments.length, functions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) functions[_key2 - 1] = arguments[_key2];
        functions.forEach(function(type) {
            exportedLogger[type] = debugConfig[type] ? debugConfig[type].bind(debugConfig) : consolePrintFn(type);
        });
    }
    var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _typeof = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function(obj) {
        return void 0 === obj ? "undefined" : _typeof2(obj);
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : void 0 === obj ? "undefined" : _typeof2(obj);
    }, fakeLogger = {
        trace: noop,
        debug: noop,
        log: noop,
        warn: noop,
        info: noop,
        error: noop
    }, exportedLogger = fakeLogger;
    exports.enableLogs = function(debugConfig) {
        if (!0 === debugConfig || "object" === (void 0 === debugConfig ? "undefined" : _typeof(debugConfig))) {
            exportLoggerFunctions(debugConfig, // Remove out from list here to hard-disable a log-level
            //'trace',
            "debug", "log", "info", "warn", "error");
            // Some browsers don't allow to use bind on console object anyway
            // fallback to default if needed
            try {
                exportedLogger.log();
            } catch (e) {
                exportedLogger = fakeLogger;
            }
        } else exportedLogger = fakeLogger;
    }, exports.logger = exportedLogger;
}, /* 1 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = {
        // fired before MediaSource is attaching to media element - data: { media }
        MEDIA_ATTACHING: "hlsMediaAttaching",
        // fired when MediaSource has been succesfully attached to media element - data: { }
        MEDIA_ATTACHED: "hlsMediaAttached",
        // fired before detaching MediaSource from media element - data: { }
        MEDIA_DETACHING: "hlsMediaDetaching",
        // fired when MediaSource has been detached from media element - data: { }
        MEDIA_DETACHED: "hlsMediaDetached",
        // fired when we buffer is going to be reset - data: { }
        BUFFER_RESET: "hlsBufferReset",
        // fired when we know about the codecs that we need buffers for to push into - data: {tracks : { container, codec, levelCodec, initSegment, metadata }}
        BUFFER_CODECS: "hlsBufferCodecs",
        // fired when sourcebuffers have been created - data: { tracks : tracks }
        BUFFER_CREATED: "hlsBufferCreated",
        // fired when we append a segment to the buffer - data: { segment: segment object }
        BUFFER_APPENDING: "hlsBufferAppending",
        // fired when we are done with appending a media segment to the buffer - data : { parent : segment parent that triggered BUFFER_APPENDING, pending : nb of segments waiting for appending for this segment parent}
        BUFFER_APPENDED: "hlsBufferAppended",
        // fired when the stream is finished and we want to notify the media buffer that there will be no more data - data: { }
        BUFFER_EOS: "hlsBufferEos",
        // fired when the media buffer should be flushed - data { startOffset, endOffset }
        BUFFER_FLUSHING: "hlsBufferFlushing",
        // fired when the media buffer has been flushed - data: { }
        BUFFER_FLUSHED: "hlsBufferFlushed",
        // fired to signal that a manifest loading starts - data: { url : manifestURL}
        MANIFEST_LOADING: "hlsManifestLoading",
        // fired after manifest has been loaded - data: { levels : [available quality levels], audioTracks : [ available audio tracks], url : manifestURL, stats : { trequest, tfirst, tload, mtime}}
        MANIFEST_LOADED: "hlsManifestLoaded",
        // fired after manifest has been parsed - data: { levels : [available quality levels], firstLevel : index of first quality level appearing in Manifest}
        MANIFEST_PARSED: "hlsManifestParsed",
        // fired when a level switch is requested - data: { level : id of new level } // deprecated in favor LEVEL_SWITCHING
        LEVEL_SWITCH: "hlsLevelSwitch",
        // fired when a level switch is requested - data: { level : id of new level }
        LEVEL_SWITCHING: "hlsLevelSwitching",
        // fired when a level switch is effective - data: { level : id of new level }
        LEVEL_SWITCHED: "hlsLevelSwitched",
        // fired when a level playlist loading starts - data: { url : level URL, level : id of level being loaded}
        LEVEL_LOADING: "hlsLevelLoading",
        // fired when a level playlist loading finishes - data: { details : levelDetails object, level : id of loaded level, stats : { trequest, tfirst, tload, mtime} }
        LEVEL_LOADED: "hlsLevelLoaded",
        // fired when a level's details have been updated based on previous details, after it has been loaded - data: { details : levelDetails object, level : id of updated level }
        LEVEL_UPDATED: "hlsLevelUpdated",
        // fired when a level's PTS information has been updated after parsing a fragment - data: { details : levelDetails object, level : id of updated level, drift: PTS drift observed when parsing last fragment }
        LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
        // fired to notify that audio track lists has been updated - data: { audioTracks : audioTracks }
        AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
        // fired when an audio track switch occurs - data: { id : audio track id } // deprecated in favor AUDIO_TRACK_SWITCHING
        AUDIO_TRACK_SWITCH: "hlsAudioTrackSwitch",
        // fired when an audio track switching is requested - data: { id : audio track id }
        AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
        // fired when an audio track switch actually occurs - data: { id : audio track id }
        AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
        // fired when an audio track loading starts - data: { url : audio track URL, id : audio track id }
        AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
        // fired when an audio track loading finishes - data: { details : levelDetails object, id : audio track id, stats : { trequest, tfirst, tload, mtime } }
        AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
        // fired to notify that subtitle track lists has been updated - data: { subtitleTracks : subtitleTracks }
        SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
        // fired when an subtitle track switch occurs - data: { id : subtitle track id }
        SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
        // fired when a subtitle track loading starts - data: { url : subtitle track URL, id : subtitle track id }
        SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
        // fired when a subtitle track loading finishes - data: { details : levelDetails object, id : subtitle track id, stats : { trequest, tfirst, tload, mtime } }
        SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
        // fired when a subtitle fragment has been processed - data: { success : boolean, frag : the processed frag }
        SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
        // fired when the first timestamp is found - data: { id : demuxer id, initPTS: initPTS, frag : fragment object }
        INIT_PTS_FOUND: "hlsInitPtsFound",
        // fired when a fragment loading starts - data: { frag : fragment object }
        FRAG_LOADING: "hlsFragLoading",
        // fired when a fragment loading is progressing - data: { frag : fragment object, { trequest, tfirst, loaded } }
        FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
        // Identifier for fragment load aborting for emergency switch down - data: { frag : fragment object }
        FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
        // fired when a fragment loading is completed - data: { frag : fragment object, payload : fragment payload, stats : { trequest, tfirst, tload, length } }
        FRAG_LOADED: "hlsFragLoaded",
        // fired when a fragment has finished decrypting - data: { id : demuxer id, frag: fragment object, stats : { tstart, tdecrypt } }
        FRAG_DECRYPTED: "hlsFragDecrypted",
        // fired when Init Segment has been extracted from fragment - data: { id : demuxer id, frag: fragment object, moov : moov MP4 box, codecs : codecs found while parsing fragment }
        FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
        // fired when parsing sei text is completed - data: { id : demuxer id, frag: fragment object, samples : [ sei samples pes ] }
        FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
        // fired when parsing id3 is completed - data: { id : demuxer id, frag: fragment object, samples : [ id3 samples pes ] }
        FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
        // fired when data have been extracted from fragment - data: { id : demuxer id, frag: fragment object, data1 : moof MP4 box or TS fragments, data2 : mdat MP4 box or null}
        FRAG_PARSING_DATA: "hlsFragParsingData",
        // fired when fragment parsing is completed - data: { id : demuxer id, frag: fragment object }
        FRAG_PARSED: "hlsFragParsed",
        // fired when fragment remuxed MP4 boxes have all been appended into SourceBuffer - data: { id : demuxer id, frag : fragment object, stats : { trequest, tfirst, tload, tparsed, tbuffered, length, bwEstimate } }
        FRAG_BUFFERED: "hlsFragBuffered",
        // fired when fragment matching with current media position is changing - data : { id : demuxer id, frag : fragment object }
        FRAG_CHANGED: "hlsFragChanged",
        // Identifier for a FPS drop event - data: { curentDropped, currentDecoded, totalDroppedFrames }
        FPS_DROP: "hlsFpsDrop",
        //triggered when FPS drop triggers auto level capping - data: { level, droppedlevel }
        FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
        // Identifier for an error event - data: { type : error type, details : error details, fatal : if true, hls.js cannot/will not try to recover, if false, hls.js will try to recover,other error specific data }
        ERROR: "hlsError",
        // fired when hls.js instance starts destroying. Different from MEDIA_DETACHED as one could want to detach and reattach a media to the instance of hls.js to handle mid-rolls for example - data: { }
        DESTROYING: "hlsDestroying",
        // fired when a decrypt key loading starts - data: { frag : fragment object }
        KEY_LOADING: "hlsKeyLoading",
        // fired when a decrypt key loading is completed - data: { frag : fragment object, payload : key payload, stats : { trequest, tfirst, tload, length } }
        KEY_LOADED: "hlsKeyLoaded",
        // fired upon stream controller state transitions - data: { previousState, nextState }
        STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
    };
}, /* 2 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    exports.ErrorTypes = {
        // Identifier for a network error (loading error / timeout ...)
        NETWORK_ERROR: "networkError",
        // Identifier for a media Error (video/parsing/mediasource error)
        MEDIA_ERROR: "mediaError",
        // Identifier for a mux Error (demuxing/remuxing)
        MUX_ERROR: "muxError",
        // Identifier for all other errors
        OTHER_ERROR: "otherError"
    }, exports.ErrorDetails = {
        // Identifier for a manifest load error - data: { url : faulty URL, response : { code: error code, text: error text }}
        MANIFEST_LOAD_ERROR: "manifestLoadError",
        // Identifier for a manifest load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
        MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
        // Identifier for a manifest parsing error - data: { url : faulty URL, reason : error reason}
        MANIFEST_PARSING_ERROR: "manifestParsingError",
        // Identifier for a manifest with only incompatible codecs error - data: { url : faulty URL, reason : error reason}
        MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
        // Identifier for a level load error - data: { url : faulty URL, response : { code: error code, text: error text }}
        LEVEL_LOAD_ERROR: "levelLoadError",
        // Identifier for a level load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
        LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
        // Identifier for a level switch error - data: { level : faulty level Id, event : error description}
        LEVEL_SWITCH_ERROR: "levelSwitchError",
        // Identifier for an audio track load error - data: { url : faulty URL, response : { code: error code, text: error text }}
        AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
        // Identifier for an audio track load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
        AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
        // Identifier for fragment load error - data: { frag : fragment object, response : { code: error code, text: error text }}
        FRAG_LOAD_ERROR: "fragLoadError",
        // Identifier for fragment loop loading error - data: { frag : fragment object}
        FRAG_LOOP_LOADING_ERROR: "fragLoopLoadingError",
        // Identifier for fragment load timeout error - data: { frag : fragment object}
        FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
        // Identifier for a fragment decryption error event - data: {id : demuxer Id,frag: fragment object, reason : parsing error description }
        FRAG_DECRYPT_ERROR: "fragDecryptError",
        // Identifier for a fragment parsing error event - data: { id : demuxer Id, reason : parsing error description }
        // will be renamed DEMUX_PARSING_ERROR and switched to MUX_ERROR in the next major release
        FRAG_PARSING_ERROR: "fragParsingError",
        // Identifier for a remux alloc error event - data: { id : demuxer Id, frag : fragment object, bytes : nb of bytes on which allocation failed , reason : error text }
        REMUX_ALLOC_ERROR: "remuxAllocError",
        // Identifier for decrypt key load error - data: { frag : fragment object, response : { code: error code, text: error text }}
        KEY_LOAD_ERROR: "keyLoadError",
        // Identifier for decrypt key load timeout error - data: { frag : fragment object}
        KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
        // Triggered when an exception occurs while adding a sourceBuffer to MediaSource - data : {  err : exception , mimeType : mimeType }
        BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
        // Identifier for a buffer append error - data: append error description
        BUFFER_APPEND_ERROR: "bufferAppendError",
        // Identifier for a buffer appending error event - data: appending error description
        BUFFER_APPENDING_ERROR: "bufferAppendingError",
        // Identifier for a buffer stalled error event
        BUFFER_STALLED_ERROR: "bufferStalledError",
        // Identifier for a buffer full event
        BUFFER_FULL_ERROR: "bufferFullError",
        // Identifier for a buffer seek over hole event
        BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
        // Identifier for a buffer nudge on stall (playback is stuck although currentTime is in a buffered area)
        BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
        // Identifier for an internal exception happening inside hls.js while handling an event
        INTERNAL_EXCEPTION: "internalException",
        // Malformed WebVTT contents
        WEBVTT_EXCEPTION: "webVTTException"
    };
}, /* 3 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _typeof = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function(obj) {
        return void 0 === obj ? "undefined" : _typeof2(obj);
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : void 0 === obj ? "undefined" : _typeof2(obj);
    }, _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _logger = __webpack_require__(0), _errors = __webpack_require__(2), _events = __webpack_require__(1), _events2 = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }(_events), EventHandler = function() {
        function EventHandler(hls) {
            _classCallCheck(this, EventHandler), this.hls = hls, this.onEvent = this.onEvent.bind(this);
            for (var _len = arguments.length, events = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) events[_key - 1] = arguments[_key];
            this.handledEvents = events, this.useGenericHandler = !0, this.registerListeners();
        }
        return _createClass(EventHandler, [ {
            key: "destroy",
            value: function() {
                this.unregisterListeners();
            }
        }, {
            key: "isEventHandler",
            value: function() {
                return "object" === _typeof(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent;
            }
        }, {
            key: "registerListeners",
            value: function() {
                this.isEventHandler() && this.handledEvents.forEach(function(event) {
                    if ("hlsEventGeneric" === event) throw new Error("Forbidden event name: " + event);
                    this.hls.on(event, this.onEvent);
                }, this);
            }
        }, {
            key: "unregisterListeners",
            value: function() {
                this.isEventHandler() && this.handledEvents.forEach(function(event) {
                    this.hls.off(event, this.onEvent);
                }, this);
            }
        }, {
            key: "onEvent",
            value: function(event, data) {
                this.onEventGeneric(event, data);
            }
        }, {
            key: "onEventGeneric",
            value: function(event, data) {
                var eventToFunction = function(event, data) {
                    var funcName = "on" + event.replace("hls", "");
                    if ("function" != typeof this[funcName]) throw new Error("Event " + event + " has no generic handler in this " + this.constructor.name + " class (tried " + funcName + ")");
                    return this[funcName].bind(this, data);
                };
                try {
                    eventToFunction.call(this, event, data).call();
                } catch (err) {
                    _logger.logger.error("internal error happened while processing " + event + ":" + err.message), 
                    this.hls.trigger(_events2.default.ERROR, {
                        type: _errors.ErrorTypes.OTHER_ERROR,
                        details: _errors.ErrorDetails.INTERNAL_EXCEPTION,
                        fatal: !1,
                        event: event,
                        err: err
                    });
                }
            }
        } ]), EventHandler;
    }();
    exports.default = EventHandler;
}, /* 4 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    /**
 * Buffer Helper utils, providing methods dealing buffer length retrieval
*/
    var BufferHelper = {
        isBuffered: function(media, position) {
            if (media) for (var buffered = media.buffered, i = 0; i < buffered.length; i++) if (position >= buffered.start(i) && position <= buffered.end(i)) return !0;
            return !1;
        },
        bufferInfo: function(media, pos, maxHoleDuration) {
            if (media) {
                var i, vbuffered = media.buffered, buffered = [];
                for (i = 0; i < vbuffered.length; i++) buffered.push({
                    start: vbuffered.start(i),
                    end: vbuffered.end(i)
                });
                return this.bufferedInfo(buffered, pos, maxHoleDuration);
            }
            return {
                len: 0,
                start: pos,
                end: pos,
                nextStart: void 0
            };
        },
        bufferedInfo: function(buffered, pos, maxHoleDuration) {
            var // bufferStart and bufferEnd are buffer boundaries around current video position
            bufferLen, bufferStart, bufferEnd, bufferStartNext, i, buffered2 = [];
            // there might be some small holes between buffer time range
            // consider that holes smaller than maxHoleDuration are irrelevant and build another
            // buffer time range representations that discards those holes
            for (// sort on buffer.start/smaller end (IE does not always return sorted buffered range)
            buffered.sort(function(a, b) {
                var diff = a.start - b.start;
                return diff || b.end - a.end;
            }), i = 0; i < buffered.length; i++) {
                var buf2len = buffered2.length;
                if (buf2len) {
                    var buf2end = buffered2[buf2len - 1].end;
                    // if small hole (value between 0 or maxHoleDuration ) or overlapping (negative)
                    buffered[i].start - buf2end < maxHoleDuration ? // merge overlapping time ranges
                    // update lastRange.end only if smaller than item.end
                    // e.g.  [ 1, 15] with  [ 2,8] => [ 1,15] (no need to modify lastRange.end)
                    // whereas [ 1, 8] with  [ 2,15] => [ 1,15] ( lastRange should switch from [1,8] to [1,15])
                    buffered[i].end > buf2end && (buffered2[buf2len - 1].end = buffered[i].end) : // big hole
                    buffered2.push(buffered[i]);
                } else // first value
                buffered2.push(buffered[i]);
            }
            for (i = 0, bufferLen = 0, bufferStart = bufferEnd = pos; i < buffered2.length; i++) {
                var start = buffered2[i].start, end = buffered2[i].end;
                //logger.log('buf start/end:' + buffered.start(i) + '/' + buffered.end(i));
                if (pos + maxHoleDuration >= start && pos < end) // play position is inside this buffer TimeRange, retrieve end of buffer position and buffer length
                bufferStart = start, bufferEnd = end, bufferLen = bufferEnd - pos; else if (pos + maxHoleDuration < start) {
                    bufferStartNext = start;
                    break;
                }
            }
            return {
                len: bufferLen,
                start: bufferStart,
                end: bufferEnd,
                nextStart: bufferStartNext
            };
        }
    };
    module.exports = BufferHelper;
}, /* 5 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    // Copyright Joyent, Inc. and other Node contributors.
    //
    // Permission is hereby granted, free of charge, to any person obtaining a
    // copy of this software and associated documentation files (the
    // "Software"), to deal in the Software without restriction, including
    // without limitation the rights to use, copy, modify, merge, publish,
    // distribute, sublicense, and/or sell copies of the Software, and to permit
    // persons to whom the Software is furnished to do so, subject to the
    // following conditions:
    //
    // The above copyright notice and this permission notice shall be included
    // in all copies or substantial portions of the Software.
    //
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
    // USE OR OTHER DEALINGS IN THE SOFTWARE.
    function EventEmitter() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }
    function isFunction(arg) {
        return "function" == typeof arg;
    }
    function isNumber(arg) {
        return "number" == typeof arg;
    }
    function isObject(arg) {
        return "object" === (void 0 === arg ? "undefined" : _typeof(arg)) && null !== arg;
    }
    function isUndefined(arg) {
        return void 0 === arg;
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    module.exports = EventEmitter, // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter, EventEmitter.prototype._events = void 0, 
    EventEmitter.prototype._maxListeners = void 0, // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10, // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
        return this._maxListeners = n, this;
    }, EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;
        // If there is no 'error' event listener then throw.
        if (this._events || (this._events = {}), "error" === type && (!this._events.error || isObject(this._events.error) && !this._events.error.length)) {
            if ((er = arguments[1]) instanceof Error) throw er;
            // At least give some kind of context to the user
            var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
            throw err.context = er, err;
        }
        if (handler = this._events[type], isUndefined(handler)) return !1;
        if (isFunction(handler)) switch (arguments.length) {
          // fast cases
            case 1:
            handler.call(this);
            break;

          case 2:
            handler.call(this, arguments[1]);
            break;

          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;

          // slower
            default:
            args = Array.prototype.slice.call(arguments, 1), handler.apply(this, args);
        } else if (isObject(handler)) for (args = Array.prototype.slice.call(arguments, 1), 
        listeners = handler.slice(), len = listeners.length, i = 0; i < len; i++) listeners[i].apply(this, args);
        return !0;
    }, EventEmitter.prototype.addListener = function(type, listener) {
        var m;
        if (!isFunction(listener)) throw TypeError("listener must be a function");
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        // If we've already got an array, just append.
        // Adding the second element, need to change to array.
        // Optimize the case of one listener. Don't need the extra array object.
        // Check for listener leak
        // not supported in IE 10
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener), 
        this._events[type] ? isObject(this._events[type]) ? this._events[type].push(listener) : this._events[type] = [ this._events[type], listener ] : this._events[type] = listener, 
        isObject(this._events[type]) && !this._events[type].warned && (m = isUndefined(this._maxListeners) ? EventEmitter.defaultMaxListeners : this._maxListeners) && m > 0 && this._events[type].length > m && (this._events[type].warned = !0, 
        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length), 
        "function" == typeof console.trace && console.trace()), this;
    }, EventEmitter.prototype.on = EventEmitter.prototype.addListener, EventEmitter.prototype.once = function(type, listener) {
        function g() {
            this.removeListener(type, g), fired || (fired = !0, listener.apply(this, arguments));
        }
        if (!isFunction(listener)) throw TypeError("listener must be a function");
        var fired = !1;
        return g.listener = listener, this.on(type, g), this;
    }, // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;
        if (!isFunction(listener)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[type]) return this;
        if (list = this._events[type], length = list.length, position = -1, list === listener || isFunction(list.listener) && list.listener === listener) delete this._events[type], 
        this._events.removeListener && this.emit("removeListener", type, listener); else if (isObject(list)) {
            for (i = length; i-- > 0; ) if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                position = i;
                break;
            }
            if (position < 0) return this;
            1 === list.length ? (list.length = 0, delete this._events[type]) : list.splice(position, 1), 
            this._events.removeListener && this.emit("removeListener", type, listener);
        }
        return this;
    }, EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;
        if (!this._events) return this;
        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[type] && delete this._events[type], 
        this;
        // emit removeListener for all listeners on all events
        if (0 === arguments.length) {
            for (key in this._events) "removeListener" !== key && this.removeAllListeners(key);
            return this.removeAllListeners("removeListener"), this._events = {}, this;
        }
        if (listeners = this._events[type], isFunction(listeners)) this.removeListener(type, listeners); else if (listeners) // LIFO order
        for (;listeners.length; ) this.removeListener(type, listeners[listeners.length - 1]);
        return delete this._events[type], this;
    }, EventEmitter.prototype.listeners = function(type) {
        return this._events && this._events[type] ? isFunction(this._events[type]) ? [ this._events[type] ] : this._events[type].slice() : [];
    }, EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];
            if (isFunction(evlistener)) return 1;
            if (evlistener) return evlistener.length;
        }
        return 0;
    }, EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };
}, /* 6 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), ID3 = function() {
        function ID3() {
            _classCallCheck(this, ID3);
        }
        return _createClass(ID3, null, [ {
            key: "isHeader",
            /**
     * Returns true if an ID3 header can be found at offset in data
     * @param {Uint8Array} data - The data to search in
     * @param {number} offset - The offset at which to start searching
     * @return {boolean} - True if an ID3 header is found
     */
            value: function(data, offset) {
                /*
      * http://id3.org/id3v2.3.0
      * [0]     = 'I'
      * [1]     = 'D'
      * [2]     = '3'
      * [3,4]   = {Version}
      * [5]     = {Flags}
      * [6-9]   = {ID3 Size}
      *
      * An ID3v2 tag can be detected with the following pattern:
      *  $49 44 33 yy yy xx zz zz zz zz
      * Where yy is less than $FF, xx is the 'flags' byte and zz is less than $80
      */
                return offset + 10 <= data.length && 73 === data[offset] && 68 === data[offset + 1] && 51 === data[offset + 2] && data[offset + 3] < 255 && data[offset + 4] < 255 && data[offset + 6] < 128 && data[offset + 7] < 128 && data[offset + 8] < 128 && data[offset + 9] < 128;
            }
        }, {
            key: "isFooter",
            value: function(data, offset) {
                /*
      * The footer is a copy of the header, but with a different identifier
      */
                return offset + 10 <= data.length && 51 === data[offset] && 68 === data[offset + 1] && 73 === data[offset + 2] && data[offset + 3] < 255 && data[offset + 4] < 255 && data[offset + 6] < 128 && data[offset + 7] < 128 && data[offset + 8] < 128 && data[offset + 9] < 128;
            }
        }, {
            key: "getID3Data",
            value: function(data, offset) {
                for (var front = offset, length = 0; ID3.isHeader(data, offset); ) {
                    //ID3 header is 10 bytes
                    length += 10;
                    length += ID3._readSize(data, offset + 6), ID3.isFooter(data, offset + 10) && (//ID3 footer is 10 bytes
                    length += 10), offset += length;
                }
                if (length > 0) return data.subarray(front, front + length);
            }
        }, {
            key: "_readSize",
            value: function(data, offset) {
                var size = 0;
                return size = (127 & data[offset]) << 21, size |= (127 & data[offset + 1]) << 14, 
                size |= (127 & data[offset + 2]) << 7, size |= 127 & data[offset + 3];
            }
        }, {
            key: "getTimeStamp",
            value: function(data) {
                for (var frames = ID3.getID3Frames(data), i = 0; i < frames.length; i++) {
                    var frame = frames[i];
                    if (ID3.isTimeStampFrame(frame)) return ID3._readTimeStamp(frame);
                }
            }
        }, {
            key: "isTimeStampFrame",
            value: function(frame) {
                return frame && "PRIV" === frame.key && "com.apple.streaming.transportStreamTimestamp" === frame.info;
            }
        }, {
            key: "_getFrameData",
            value: function(data) {
                /*
      Frame ID       $xx xx xx xx (four characters)
      Size           $xx xx xx xx
      Flags          $xx xx
      */
                var type = String.fromCharCode(data[0], data[1], data[2], data[3]), size = ID3._readSize(data, 4);
                return {
                    type: type,
                    size: size,
                    data: data.subarray(10, 10 + size)
                };
            }
        }, {
            key: "getID3Frames",
            value: function(id3Data) {
                for (var offset = 0, frames = []; ID3.isHeader(id3Data, offset); ) {
                    var size = ID3._readSize(id3Data, offset + 6);
                    //skip past ID3 header
                    offset += 10;
                    //loop through frames in the ID3 tag
                    for (var end = offset + size; offset + 8 < end; ) {
                        var frameData = ID3._getFrameData(id3Data.subarray(offset)), frame = ID3._decodeFrame(frameData);
                        frame && frames.push(frame), //skip frame header and frame data
                        offset += frameData.size + 10;
                    }
                    ID3.isFooter(id3Data, offset) && (offset += 10);
                }
                return frames;
            }
        }, {
            key: "_decodeFrame",
            value: function(frame) {
                return "PRIV" === frame.type ? ID3._decodePrivFrame(frame) : "T" === frame.type[0] ? ID3._decodeTextFrame(frame) : "W" === frame.type[0] ? ID3._decodeURLFrame(frame) : void 0;
            }
        }, {
            key: "_readTimeStamp",
            value: function(timeStampFrame) {
                if (8 === timeStampFrame.data.byteLength) {
                    var data = new Uint8Array(timeStampFrame.data), pts33Bit = 1 & data[3], timestamp = (data[4] << 23) + (data[5] << 15) + (data[6] << 7) + data[7];
                    return timestamp /= 45, pts33Bit && (timestamp += 47721858.84), Math.round(timestamp);
                }
            }
        }, {
            key: "_decodePrivFrame",
            value: function(frame) {
                /*
      Format: <text string>\0<binary data>
      */
                if (!(frame.size < 2)) {
                    var owner = ID3._utf8ArrayToStr(frame.data), privateData = new Uint8Array(frame.data.subarray(owner.length + 1));
                    return {
                        key: frame.type,
                        info: owner,
                        data: privateData.buffer
                    };
                }
            }
        }, {
            key: "_decodeTextFrame",
            value: function(frame) {
                if (!(frame.size < 2)) {
                    if ("TXXX" === frame.type) {
                        /*
        Format:
        [0]   = {Text Encoding}
        [1-?] = {Description}\0{Value}
        */
                        var index = 1, description = ID3._utf8ArrayToStr(frame.data.subarray(index));
                        index += description.length + 1;
                        var value = ID3._utf8ArrayToStr(frame.data.subarray(index));
                        return {
                            key: frame.type,
                            info: description,
                            data: value
                        };
                    }
                    /*
        Format:
        [0]   = {Text Encoding}
        [1-?] = {Value}
        */
                    var text = ID3._utf8ArrayToStr(frame.data.subarray(1));
                    return {
                        key: frame.type,
                        data: text
                    };
                }
            }
        }, {
            key: "_decodeURLFrame",
            value: function(frame) {
                if ("WXXX" === frame.type) {
                    /*
        Format:
        [0]   = {Text Encoding}
        [1-?] = {Description}\0{URL}
        */
                    if (frame.size < 2) return;
                    var index = 1, description = ID3._utf8ArrayToStr(frame.data.subarray(index));
                    index += description.length + 1;
                    var value = ID3._utf8ArrayToStr(frame.data.subarray(index));
                    return {
                        key: frame.type,
                        info: description,
                        data: value
                    };
                }
                /*
        Format:
        [0-?] = {URL}
        */
                var url = ID3._utf8ArrayToStr(frame.data);
                return {
                    key: frame.type,
                    data: url
                };
            }
        }, {
            key: "_utf8ArrayToStr",
            value: function(array) {
                for (var char2 = void 0, char3 = void 0, out = "", i = 0, length = array.length; i < length; ) {
                    var c = array[i++];
                    switch (c >> 4) {
                      case 0:
                        return out;

                      case 1:
                      case 2:
                      case 3:
                      case 4:
                      case 5:
                      case 6:
                      case 7:
                        // 0xxxxxxx
                        out += String.fromCharCode(c);
                        break;

                      case 12:
                      case 13:
                        // 110x xxxx   10xx xxxx
                        char2 = array[i++], out += String.fromCharCode((31 & c) << 6 | 63 & char2);
                        break;

                      case 14:
                        // 1110 xxxx  10xx xxxx  10xx xxxx
                        char2 = array[i++], char3 = array[i++], out += String.fromCharCode((15 & c) << 12 | (63 & char2) << 6 | (63 & char3) << 0);
                    }
                }
                return out;
            }
        } ]), ID3;
    }();
    exports.default = ID3;
}, /* 7 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    var BinarySearch = {
        /**
     * Searches for an item in an array which matches a certain condition.
     * This requires the condition to only match one item in the array,
     * and for the array to be ordered.
     *
     * @param {Array} list The array to search.
     * @param {Function} comparisonFunction
     *      Called and provided a candidate item as the first argument.
     *      Should return:
     *          > -1 if the item should be located at a lower index than the provided item.
     *          > 1 if the item should be located at a higher index than the provided item.
     *          > 0 if the item is the item you're looking for.
     *
     * @return {*} The object if it is found or null otherwise.
     */
        search: function(list, comparisonFunction) {
            for (var minIndex = 0, maxIndex = list.length - 1, currentIndex = null, currentElement = null; minIndex <= maxIndex; ) {
                currentIndex = (minIndex + maxIndex) / 2 | 0, currentElement = list[currentIndex];
                var comparisonResult = comparisonFunction(currentElement);
                if (comparisonResult > 0) minIndex = currentIndex + 1; else {
                    if (!(comparisonResult < 0)) return currentElement;
                    maxIndex = currentIndex - 1;
                }
            }
            return null;
        }
    };
    module.exports = BinarySearch;
}, /* 8 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _aesCrypto = __webpack_require__(31), _aesCrypto2 = _interopRequireDefault(_aesCrypto), _fastAesKey = __webpack_require__(33), _fastAesKey2 = _interopRequireDefault(_fastAesKey), _aesDecryptor = __webpack_require__(32), _aesDecryptor2 = _interopRequireDefault(_aesDecryptor), _errors = __webpack_require__(2), _logger = __webpack_require__(0), Decrypter = function() {
        function Decrypter(observer, config) {
            _classCallCheck(this, Decrypter), this.observer = observer, this.config = config, 
            this.logEnabled = !0;
            try {
                var browserCrypto = crypto || self.crypto;
                this.subtle = browserCrypto.subtle || browserCrypto.webkitSubtle;
            } catch (e) {}
            this.disableWebCrypto = !this.subtle;
        }
        return _createClass(Decrypter, [ {
            key: "isSync",
            value: function() {
                return this.disableWebCrypto && this.config.enableSoftwareAES;
            }
        }, {
            key: "decrypt",
            value: function(data, key, iv, callback) {
                var _this = this;
                if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                    this.logEnabled && (_logger.logger.log("JS AES decrypt"), this.logEnabled = !1);
                    var decryptor = this.decryptor;
                    decryptor || (this.decryptor = decryptor = new _aesDecryptor2.default()), decryptor.expandKey(key), 
                    callback(decryptor.decrypt(data, 0, iv));
                } else {
                    this.logEnabled && (_logger.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1);
                    var subtle = this.subtle;
                    this.key !== key && (this.key = key, this.fastAesKey = new _fastAesKey2.default(subtle, key)), 
                    this.fastAesKey.expandKey().then(function(aesKey) {
                        new _aesCrypto2.default(subtle, iv).decrypt(data, aesKey).catch(function(err) {
                            _this.onWebCryptoError(err, data, key, iv, callback);
                        }).then(function(result) {
                            callback(result);
                        });
                    }).catch(function(err) {
                        _this.onWebCryptoError(err, data, key, iv, callback);
                    });
                }
            }
        }, {
            key: "onWebCryptoError",
            value: function(err, data, key, iv, callback) {
                this.config.enableSoftwareAES ? (_logger.logger.log("WebCrypto Error, disable WebCrypto API"), 
                this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(data, key, iv, callback)) : (_logger.logger.error("decrypting error : " + err.message), 
                this.observer.trigger(Event.ERROR, {
                    type: _errors.ErrorTypes.MEDIA_ERROR,
                    details: _errors.ErrorDetails.FRAG_DECRYPT_ERROR,
                    fatal: !0,
                    reason: err.message
                }));
            }
        }, {
            key: "destroy",
            value: function() {
                var decryptor = this.decryptor;
                decryptor && (decryptor.destroy(), this.decryptor = void 0);
            }
        } ]), Decrypter;
    }();
    exports.default = Decrypter;
}, /* 9 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    var _logger = __webpack_require__(0), _errors = __webpack_require__(2), ADTS = {
        getAudioConfig: function(observer, data, offset, audioCodec) {
            var adtsObjectType, // :int
            adtsSampleingIndex, // :int
            adtsExtensionSampleingIndex, // :int
            adtsChanelConfig, // :int
            config, userAgent = navigator.userAgent.toLowerCase(), manifestCodec = audioCodec, adtsSampleingRates = [ 96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350 ];
            // byte 2
            // byte 3
            // firefox: freq less than 24kHz = AAC SBR (HE-AAC)
            // HE-AAC uses SBR (Spectral Band Replication) , high frequencies are constructed from low frequencies
            // there is a factor 2 between frame sample rate and output sample rate
            // multiply frequency by 2 (see table below, equivalent to substract 3)
            /*  for other browsers (Chrome/Vivaldi/Opera ...)
          always force audio type to be HE-AAC SBR, as some browsers do not support audio codec switch properly (like Chrome ...)
      */
            // if (manifest codec is HE-AAC or HE-AACv2) OR (manifest codec not specified AND frequency less than 24kHz)
            // HE-AAC uses SBR (Spectral Band Replication) , high frequencies are constructed from low frequencies
            // there is a factor 2 between frame sample rate and output sample rate
            // multiply frequency by 2 (see table below, equivalent to substract 3)
            // if (manifest codec is AAC) AND (frequency less than 24kHz AND nb channel is 1) OR (manifest codec not specified and mono audio)
            // Chrome fails to play back with low frequency AAC LC mono when initialized with HE-AAC.  This is not a problem with stereo.
            /* refer to http://wiki.multimedia.cx/index.php?title=MPEG-4_Audio#Audio_Specific_Config
        ISO 14496-3 (AAC).pdf - Table 1.13 — Syntax of AudioSpecificConfig()
      Audio Profile / Audio Object Type
      0: Null
      1: AAC Main
      2: AAC LC (Low Complexity)
      3: AAC SSR (Scalable Sample Rate)
      4: AAC LTP (Long Term Prediction)
      5: SBR (Spectral Band Replication)
      6: AAC Scalable
     sampling freq
      0: 96000 Hz
      1: 88200 Hz
      2: 64000 Hz
      3: 48000 Hz
      4: 44100 Hz
      5: 32000 Hz
      6: 24000 Hz
      7: 22050 Hz
      8: 16000 Hz
      9: 12000 Hz
      10: 11025 Hz
      11: 8000 Hz
      12: 7350 Hz
      13: Reserved
      14: Reserved
      15: frequency is written explictly
      Channel Configurations
      These are the channel configurations:
      0: Defined in AOT Specifc Config
      1: 1 channel: front-center
      2: 2 channels: front-left, front-right
    */
            // audioObjectType = profile => profile, the MPEG-4 Audio Object Type minus 1
            // samplingFrequencyIndex
            // channelConfiguration
            // adtsExtensionSampleingIndex
            // adtsObjectType (force to 2, chrome is checking that object type is less than 5 ???
            //    https://chromium.googlesource.com/chromium/src.git/+/master/media/formats/mp4/aac.cc
            return adtsObjectType = 1 + ((192 & data[offset + 2]) >>> 6), (adtsSampleingIndex = (60 & data[offset + 2]) >>> 2) > adtsSampleingRates.length - 1 ? void observer.trigger(Event.ERROR, {
                type: _errors.ErrorTypes.MEDIA_ERROR,
                details: _errors.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: !0,
                reason: "invalid ADTS sampling index:" + adtsSampleingIndex
            }) : (adtsChanelConfig = (1 & data[offset + 2]) << 2, adtsChanelConfig |= (192 & data[offset + 3]) >>> 6, 
            _logger.logger.log("manifest codec:" + audioCodec + ",ADTS data:type:" + adtsObjectType + ",sampleingIndex:" + adtsSampleingIndex + "[" + adtsSampleingRates[adtsSampleingIndex] + "Hz],channelConfig:" + adtsChanelConfig), 
            /firefox/i.test(userAgent) ? adtsSampleingIndex >= 6 ? (adtsObjectType = 5, config = new Array(4), 
            adtsExtensionSampleingIndex = adtsSampleingIndex - 3) : (adtsObjectType = 2, config = new Array(2), 
            adtsExtensionSampleingIndex = adtsSampleingIndex) : -1 !== userAgent.indexOf("android") ? (adtsObjectType = 2, 
            config = new Array(2), adtsExtensionSampleingIndex = adtsSampleingIndex) : (adtsObjectType = 5, 
            config = new Array(4), audioCodec && (-1 !== audioCodec.indexOf("mp4a.40.29") || -1 !== audioCodec.indexOf("mp4a.40.5")) || !audioCodec && adtsSampleingIndex >= 6 ? adtsExtensionSampleingIndex = adtsSampleingIndex - 3 : ((audioCodec && -1 !== audioCodec.indexOf("mp4a.40.2") && (adtsSampleingIndex >= 6 && 1 === adtsChanelConfig || /vivaldi/i.test(userAgent)) || !audioCodec && 1 === adtsChanelConfig) && (adtsObjectType = 2, 
            config = new Array(2)), adtsExtensionSampleingIndex = adtsSampleingIndex)), config[0] = adtsObjectType << 3, 
            config[0] |= (14 & adtsSampleingIndex) >> 1, config[1] |= (1 & adtsSampleingIndex) << 7, 
            config[1] |= adtsChanelConfig << 3, 5 === adtsObjectType && (config[1] |= (14 & adtsExtensionSampleingIndex) >> 1, 
            config[2] = (1 & adtsExtensionSampleingIndex) << 7, config[2] |= 8, config[3] = 0), 
            {
                config: config,
                samplerate: adtsSampleingRates[adtsSampleingIndex],
                channelCount: adtsChanelConfig,
                codec: "mp4a.40." + adtsObjectType,
                manifestCodec: manifestCodec
            });
        },
        isHeaderPattern: function(data, offset) {
            return 255 === data[offset] && 240 == (246 & data[offset + 1]);
        },
        getHeaderLength: function(data, offset) {
            return 1 & data[offset + 1] ? 7 : 9;
        },
        getFullFrameLength: function(data, offset) {
            return (3 & data[offset + 3]) << 11 | data[offset + 4] << 3 | (224 & data[offset + 5]) >>> 5;
        },
        isHeader: function(data, offset) {
            // Look for ADTS header | 1111 1111 | 1111 X00X | where X can be either 0 or 1
            // Layer bits (position 14 and 15) in header should be always 0 for ADTS
            // More info https://wiki.multimedia.cx/index.php?title=ADTS
            return !!(offset + 1 < data.length && this.isHeaderPattern(data, offset));
        },
        probe: function(data, offset) {
            // same as isHeader but we also check that ADTS frame follows last ADTS frame
            // or end of data is reached
            if (offset + 1 < data.length && this.isHeaderPattern(data, offset)) {
                // ADTS header Length
                var headerLength = this.getHeaderLength(data, offset), frameLength = headerLength;
                offset + 5 < data.length && (frameLength = this.getFullFrameLength(data, offset));
                var newOffset = offset + frameLength;
                if (newOffset === data.length || newOffset + 1 < data.length && this.isHeaderPattern(data, newOffset)) return !0;
            }
            return !1;
        },
        initTrackConfig: function(track, observer, data, offset, audioCodec) {
            if (!track.samplerate) {
                var config = this.getAudioConfig(observer, data, offset, audioCodec);
                track.config = config.config, track.samplerate = config.samplerate, track.channelCount = config.channelCount, 
                track.codec = config.codec, track.manifestCodec = config.manifestCodec, _logger.logger.log("parsed codec:" + track.codec + ",rate:" + config.samplerate + ",nb channel:" + config.channelCount);
            }
        },
        getFrameDuration: function(samplerate) {
            return 9216e4 / samplerate;
        },
        appendFrame: function(track, data, offset, pts, frameIndex) {
            var frameDuration = this.getFrameDuration(track.samplerate), header = this.parseFrameHeader(data, offset, pts, frameIndex, frameDuration);
            if (header) {
                var stamp = header.stamp, headerLength = header.headerLength, frameLength = header.frameLength, aacSample = {
                    unit: data.subarray(offset + headerLength, offset + headerLength + frameLength),
                    pts: stamp,
                    dts: stamp
                };
                return track.samples.push(aacSample), track.len += frameLength, {
                    sample: aacSample,
                    length: frameLength + headerLength
                };
            }
        },
        parseFrameHeader: function(data, offset, pts, frameIndex, frameDuration) {
            var headerLength, frameLength, stamp, length = data.length;
            if (// The protection skip bit tells us if we have 2 bytes of CRC data at the end of the ADTS header
            headerLength = this.getHeaderLength(data, offset), // retrieve frame size
            frameLength = this.getFullFrameLength(data, offset), (frameLength -= headerLength) > 0 && offset + headerLength + frameLength <= length) //logger.log(`AAC frame, offset/length/total/pts:${offset+headerLength}/${frameLength}/${data.byteLength}/${(stamp/90).toFixed(0)}`);
            return stamp = pts + frameIndex * frameDuration, {
                headerLength: headerLength,
                frameLength: frameLength,
                stamp: stamp
            };
        }
    };
    module.exports = ADTS;
}, /* 10 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _errors = __webpack_require__(2), _decrypter = __webpack_require__(8), _decrypter2 = _interopRequireDefault(_decrypter), _aacdemuxer = __webpack_require__(34), _aacdemuxer2 = _interopRequireDefault(_aacdemuxer), _mp4demuxer = __webpack_require__(38), _mp4demuxer2 = _interopRequireDefault(_mp4demuxer), _tsdemuxer = __webpack_require__(40), _tsdemuxer2 = _interopRequireDefault(_tsdemuxer), _mp3demuxer = __webpack_require__(37), _mp3demuxer2 = _interopRequireDefault(_mp3demuxer), _mp4Remuxer = __webpack_require__(47), _mp4Remuxer2 = _interopRequireDefault(_mp4Remuxer), _passthroughRemuxer = __webpack_require__(48), _passthroughRemuxer2 = _interopRequireDefault(_passthroughRemuxer), DemuxerInline = function() {
        function DemuxerInline(observer, typeSupported, config, vendor) {
            _classCallCheck(this, DemuxerInline), this.observer = observer, this.typeSupported = typeSupported, 
            this.config = config, this.vendor = vendor;
        }
        return _createClass(DemuxerInline, [ {
            key: "destroy",
            value: function() {
                var demuxer = this.demuxer;
                demuxer && demuxer.destroy();
            }
        }, {
            key: "push",
            value: function(data, decryptdata, initSegment, audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS) {
                if (data.byteLength > 0 && null != decryptdata && null != decryptdata.key && "AES-128" === decryptdata.method) {
                    var decrypter = this.decrypter;
                    null == decrypter && (decrypter = this.decrypter = new _decrypter2.default(this.observer, this.config));
                    var startTime, localthis = this;
                    try {
                        startTime = performance.now();
                    } catch (error) {
                        startTime = Date.now();
                    }
                    decrypter.decrypt(data, decryptdata.key.buffer, decryptdata.iv.buffer, function(decryptedData) {
                        var endTime;
                        try {
                            endTime = performance.now();
                        } catch (error) {
                            endTime = Date.now();
                        }
                        localthis.observer.trigger(_events2.default.FRAG_DECRYPTED, {
                            stats: {
                                tstart: startTime,
                                tdecrypt: endTime
                            }
                        }), localthis.pushDecrypted(new Uint8Array(decryptedData), decryptdata, new Uint8Array(initSegment), audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS);
                    });
                } else this.pushDecrypted(new Uint8Array(data), decryptdata, new Uint8Array(initSegment), audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS);
            }
        }, {
            key: "pushDecrypted",
            value: function(data, decryptdata, initSegment, audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS) {
                var demuxer = this.demuxer;
                if (!demuxer || // in case of continuity change, we might switch from content type (AAC container to TS container for example)
                // so let's check that current demuxer is still valid
                discontinuity && !this.probe(data)) {
                    // probe for content type
                    for (var observer = this.observer, typeSupported = this.typeSupported, config = this.config, muxConfig = [ {
                        demux: _aacdemuxer2.default,
                        remux: _mp4Remuxer2.default
                    }, {
                        demux: _mp3demuxer2.default,
                        remux: _mp4Remuxer2.default
                    }, {
                        demux: _tsdemuxer2.default,
                        remux: _mp4Remuxer2.default
                    }, {
                        demux: _mp4demuxer2.default,
                        remux: _passthroughRemuxer2.default
                    } ], i = 0, len = muxConfig.length; i < len; i++) {
                        var mux = muxConfig[i], probe = mux.demux.probe;
                        if (probe(data)) {
                            var _remuxer = this.remuxer = new mux.remux(observer, config, typeSupported, this.vendor);
                            demuxer = new mux.demux(observer, _remuxer, config, typeSupported), this.probe = probe;
                            break;
                        }
                    }
                    if (!demuxer) return void observer.trigger(_events2.default.ERROR, {
                        type: _errors.ErrorTypes.MEDIA_ERROR,
                        details: _errors.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "no demux matching with content found"
                    });
                    this.demuxer = demuxer;
                }
                var remuxer = this.remuxer;
                (discontinuity || trackSwitch) && (demuxer.resetInitSegment(initSegment, audioCodec, videoCodec, duration), 
                remuxer.resetInitSegment()), discontinuity && (demuxer.resetTimeStamp(defaultInitPTS), 
                remuxer.resetTimeStamp(defaultInitPTS)), "function" == typeof demuxer.setDecryptData && demuxer.setDecryptData(decryptdata), 
                demuxer.append(data, timeOffset, contiguous, accurateTimeOffset);
            }
        } ]), DemuxerInline;
    }();
    exports.default = DemuxerInline;
}, /* 11 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _demuxerInline = __webpack_require__(10), _demuxerInline2 = _interopRequireDefault(_demuxerInline), _demuxerWorker = __webpack_require__(35), _demuxerWorker2 = _interopRequireDefault(_demuxerWorker), _logger = __webpack_require__(0), _errors = __webpack_require__(2), _events3 = __webpack_require__(5), _events4 = _interopRequireDefault(_events3), Demuxer = function() {
        function Demuxer(hls, id) {
            _classCallCheck(this, Demuxer), this.hls = hls, this.id = id;
            // observer setup
            var observer = this.observer = new _events4.default(), config = hls.config;
            observer.trigger = function(event) {
                for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) data[_key - 1] = arguments[_key];
                observer.emit.apply(observer, [ event, event ].concat(data));
            }, observer.off = function(event) {
                for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) data[_key2 - 1] = arguments[_key2];
                observer.removeListener.apply(observer, [ event ].concat(data));
            };
            var forwardMessage = function(ev, data) {
                data = data || {}, data.frag = this.frag, data.id = this.id, hls.trigger(ev, data);
            }.bind(this);
            // forward events to main thread
            observer.on(_events2.default.FRAG_DECRYPTED, forwardMessage), observer.on(_events2.default.FRAG_PARSING_INIT_SEGMENT, forwardMessage), 
            observer.on(_events2.default.FRAG_PARSING_DATA, forwardMessage), observer.on(_events2.default.FRAG_PARSED, forwardMessage), 
            observer.on(_events2.default.ERROR, forwardMessage), observer.on(_events2.default.FRAG_PARSING_METADATA, forwardMessage), 
            observer.on(_events2.default.FRAG_PARSING_USERDATA, forwardMessage), observer.on(_events2.default.INIT_PTS_FOUND, forwardMessage);
            var typeSupported = {
                mp4: MediaSource.isTypeSupported("video/mp4"),
                mpeg: MediaSource.isTypeSupported("audio/mpeg"),
                mp3: MediaSource.isTypeSupported('audio/mp4; codecs="mp3"')
            }, vendor = navigator.vendor;
            if (config.enableWorker && "undefined" != typeof Worker) {
                _logger.logger.log("demuxing in webworker");
                var w = void 0;
                try {
                    var work = __webpack_require__(59);
                    w = this.w = work(_demuxerWorker2.default), this.onwmsg = this.onWorkerMessage.bind(this), 
                    w.addEventListener("message", this.onwmsg), w.onerror = function(event) {
                        hls.trigger(_events2.default.ERROR, {
                            type: _errors.ErrorTypes.OTHER_ERROR,
                            details: _errors.ErrorDetails.INTERNAL_EXCEPTION,
                            fatal: !0,
                            event: "demuxerWorker",
                            err: {
                                message: event.message + " (" + event.filename + ":" + event.lineno + ")"
                            }
                        });
                    }, w.postMessage({
                        cmd: "init",
                        typeSupported: typeSupported,
                        vendor: vendor,
                        id: id,
                        config: JSON.stringify(config)
                    });
                } catch (err) {
                    _logger.logger.error("error while initializing DemuxerWorker, fallback on DemuxerInline"), 
                    w && // revoke the Object URL that was used to create demuxer worker, so as not to leak it
                    URL.revokeObjectURL(w.objectURL), this.demuxer = new _demuxerInline2.default(observer, typeSupported, config, vendor), 
                    this.w = void 0;
                }
            } else this.demuxer = new _demuxerInline2.default(observer, typeSupported, config, vendor);
        }
        return _createClass(Demuxer, [ {
            key: "destroy",
            value: function() {
                var w = this.w;
                if (w) w.removeEventListener("message", this.onwmsg), w.terminate(), this.w = null; else {
                    var demuxer = this.demuxer;
                    demuxer && (demuxer.destroy(), this.demuxer = null);
                }
                var observer = this.observer;
                observer && (observer.removeAllListeners(), this.observer = null);
            }
        }, {
            key: "push",
            value: function(data, initSegment, audioCodec, videoCodec, frag, duration, accurateTimeOffset, defaultInitPTS) {
                var w = this.w, timeOffset = isNaN(frag.startDTS) ? frag.start : frag.startDTS, decryptdata = frag.decryptdata, lastFrag = this.frag, discontinuity = !(lastFrag && frag.cc === lastFrag.cc), trackSwitch = !(lastFrag && frag.level === lastFrag.level), nextSN = lastFrag && frag.sn === lastFrag.sn + 1, contiguous = !trackSwitch && nextSN;
                if (discontinuity && _logger.logger.log(this.id + ":discontinuity detected"), trackSwitch && _logger.logger.log(this.id + ":switch detected"), 
                this.frag = frag, w) // post fragment payload as transferable objects (no copy)
                w.postMessage({
                    cmd: "demux",
                    data: data,
                    decryptdata: decryptdata,
                    initSegment: initSegment,
                    audioCodec: audioCodec,
                    videoCodec: videoCodec,
                    timeOffset: timeOffset,
                    discontinuity: discontinuity,
                    trackSwitch: trackSwitch,
                    contiguous: contiguous,
                    duration: duration,
                    accurateTimeOffset: accurateTimeOffset,
                    defaultInitPTS: defaultInitPTS
                }, [ data ]); else {
                    var demuxer = this.demuxer;
                    demuxer && demuxer.push(data, decryptdata, initSegment, audioCodec, videoCodec, timeOffset, discontinuity, trackSwitch, contiguous, duration, accurateTimeOffset, defaultInitPTS);
                }
            }
        }, {
            key: "onWorkerMessage",
            value: function(ev) {
                var data = ev.data, hls = this.hls;
                //console.log('onWorkerMessage:' + data.event);
                switch (data.event) {
                  case "init":
                    // revoke the Object URL that was used to create demuxer worker, so as not to leak it
                    URL.revokeObjectURL(this.w.objectURL);
                    break;

                  // special case for FRAG_PARSING_DATA: data1 and data2 are transferable objects
                    case _events2.default.FRAG_PARSING_DATA:
                    data.data.data1 = new Uint8Array(data.data1), data.data2 && (data.data.data2 = new Uint8Array(data.data2));

                  /* falls through */
                    default:
                    data.data = data.data || {}, data.data.frag = this.frag, data.data.id = this.id, 
                    hls.trigger(data.event, data.data);
                }
            }
        } ]), Demuxer;
    }();
    exports.default = Demuxer;
}, /* 12 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    /**
 *  MPEG parser helper
 */
    var MpegAudio = {
        BitratesMap: [ 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160 ],
        SamplingRateMap: [ 44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3 ],
        appendFrame: function(track, data, offset, pts, frameIndex) {
            // Using http://www.datavoyage.com/mpgscript/mpeghdr.htm as a reference
            if (!(offset + 24 > data.length)) {
                var header = this.parseHeader(data, offset);
                if (header && offset + header.frameLength <= data.length) {
                    var frameDuration = 10368e4 / header.sampleRate, stamp = pts + frameIndex * frameDuration, sample = {
                        unit: data.subarray(offset, offset + header.frameLength),
                        pts: stamp,
                        dts: stamp
                    };
                    return track.config = [], track.channelCount = header.channelCount, track.samplerate = header.sampleRate, 
                    track.samples.push(sample), track.len += header.frameLength, {
                        sample: sample,
                        length: header.frameLength
                    };
                }
            }
        },
        parseHeader: function(data, offset) {
            var headerB = data[offset + 1] >> 3 & 3, headerC = data[offset + 1] >> 1 & 3, headerE = data[offset + 2] >> 4 & 15, headerF = data[offset + 2] >> 2 & 3, headerG = !!(2 & data[offset + 2]);
            if (1 !== headerB && 0 !== headerE && 15 !== headerE && 3 !== headerF) {
                var columnInBitrates = 3 === headerB ? 3 - headerC : 3 === headerC ? 3 : 4, bitRate = 1e3 * MpegAudio.BitratesMap[14 * columnInBitrates + headerE - 1], columnInSampleRates = 3 === headerB ? 0 : 2 === headerB ? 1 : 2, sampleRate = MpegAudio.SamplingRateMap[3 * columnInSampleRates + headerF], padding = headerG ? 1 : 0;
                return {
                    sampleRate: sampleRate,
                    channelCount: data[offset + 3] >> 6 == 3 ? 1 : 2,
                    frameLength: 3 === headerC ? (3 === headerB ? 12 : 6) * bitRate / sampleRate + padding << 2 : (3 === headerB ? 144 : 72) * bitRate / sampleRate + padding | 0
                };
            }
        },
        isHeaderPattern: function(data, offset) {
            return 255 === data[offset] && 224 == (224 & data[offset + 1]) && 0 != (6 & data[offset + 1]);
        },
        isHeader: function(data, offset) {
            // Look for MPEG header | 1111 1111 | 111X XYZX | where X can be either 0 or 1 and Y or Z should be 1
            // Layer bits (position 14 and 15) in header should be always different from 0 (Layer I or Layer II or Layer III)
            // More info http://www.mp3-tech.org/programmer/frame_header.html
            return !!(offset + 1 < data.length && this.isHeaderPattern(data, offset));
        },
        probe: function(data, offset) {
            // same as isHeader but we also check that MPEG frame follows last MPEG frame 
            // or end of data is reached
            if (offset + 1 < data.length && this.isHeaderPattern(data, offset)) {
                // MPEG header Length
                var header = this.parseHeader(data, offset), frameLength = 4;
                header && header.frameLength && (frameLength = header.frameLength);
                var newOffset = offset + frameLength;
                if (newOffset === data.length || newOffset + 1 < data.length && this.isHeaderPattern(data, newOffset)) return !0;
            }
            return !1;
        }
    };
    module.exports = MpegAudio;
}, /* 13 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    var _logger = __webpack_require__(0), LevelHelper = {
        mergeDetails: function(oldDetails, newDetails) {
            var PTSFrag, start = Math.max(oldDetails.startSN, newDetails.startSN) - newDetails.startSN, end = Math.min(oldDetails.endSN, newDetails.endSN) - newDetails.startSN, delta = newDetails.startSN - oldDetails.startSN, oldfragments = oldDetails.fragments, newfragments = newDetails.fragments, ccOffset = 0;
            // check if old/new playlists have fragments in common
            if (end < start) return void (newDetails.PTSKnown = !1);
            // loop through overlapping SN and update startPTS , cc, and duration if any found
            for (var i = start; i <= end; i++) {
                var oldFrag = oldfragments[delta + i], newFrag = newfragments[i];
                newFrag && oldFrag && (ccOffset = oldFrag.cc - newFrag.cc, isNaN(oldFrag.startPTS) || (newFrag.start = newFrag.startPTS = oldFrag.startPTS, 
                newFrag.endPTS = oldFrag.endPTS, newFrag.duration = oldFrag.duration, newFrag.backtracked = oldFrag.backtracked, 
                newFrag.dropped = oldFrag.dropped, PTSFrag = newFrag));
            }
            if (ccOffset) for (_logger.logger.log("discontinuity sliding from playlist, take drift into account"), 
            i = 0; i < newfragments.length; i++) newfragments[i].cc += ccOffset;
            // if at least one fragment contains PTS info, recompute PTS information for all fragments
            if (PTSFrag) LevelHelper.updateFragPTSDTS(newDetails, PTSFrag, PTSFrag.startPTS, PTSFrag.endPTS, PTSFrag.startDTS, PTSFrag.endDTS); else // ensure that delta is within oldfragments range
            // also adjust sliding in case delta is 0 (we could have old=[50-60] and new=old=[50-61])
            // in that case we also need to adjust start offset of all fragments
            if (delta >= 0 && delta < oldfragments.length) {
                // adjust start by sliding offset
                var sliding = oldfragments[delta].start;
                for (i = 0; i < newfragments.length; i++) newfragments[i].start += sliding;
            }
            // if we are here, it means we have fragments overlapping between
            // old and new level. reliable PTS info is thus relying on old level
            newDetails.PTSKnown = oldDetails.PTSKnown;
        },
        updateFragPTSDTS: function(details, frag, startPTS, endPTS, startDTS, endDTS) {
            // update frag PTS/DTS
            var maxStartPTS = startPTS;
            if (!isNaN(frag.startPTS)) {
                // delta PTS between audio and video
                var deltaPTS = Math.abs(frag.startPTS - startPTS);
                isNaN(frag.deltaPTS) ? frag.deltaPTS = deltaPTS : frag.deltaPTS = Math.max(deltaPTS, frag.deltaPTS), 
                maxStartPTS = Math.max(startPTS, frag.startPTS), startPTS = Math.min(startPTS, frag.startPTS), 
                endPTS = Math.max(endPTS, frag.endPTS), startDTS = Math.min(startDTS, frag.startDTS), 
                endDTS = Math.max(endDTS, frag.endDTS);
            }
            var drift = startPTS - frag.start;
            frag.start = frag.startPTS = startPTS, frag.maxStartPTS = maxStartPTS, frag.endPTS = endPTS, 
            frag.startDTS = startDTS, frag.endDTS = endDTS, frag.duration = endPTS - startPTS;
            var sn = frag.sn;
            // exit if sn out of range
            if (!details || sn < details.startSN || sn > details.endSN) return 0;
            var fragIdx, fragments, i;
            // adjust fragment PTS/duration from seqnum-1 to frag 0
            for (fragIdx = sn - details.startSN, fragments = details.fragments, // update frag reference in fragments array
            // rationale is that fragments array might not contain this frag object.
            // this will happpen if playlist has been refreshed between frag loading and call to updateFragPTSDTS()
            // if we don't update frag, we won't be able to propagate PTS info on the playlist
            // resulting in invalid sliding computation
            fragments[fragIdx] = frag, i = fragIdx; i > 0; i--) LevelHelper.updatePTS(fragments, i, i - 1);
            // adjust fragment PTS/duration from seqnum to last frag
            for (i = fragIdx; i < fragments.length - 1; i++) LevelHelper.updatePTS(fragments, i, i + 1);
            //logger.log(`                                            frag start/end:${startPTS.toFixed(3)}/${endPTS.toFixed(3)}`);
            return details.PTSKnown = !0, drift;
        },
        updatePTS: function(fragments, fromIdx, toIdx) {
            var fragFrom = fragments[fromIdx], fragTo = fragments[toIdx], fragToPTS = fragTo.startPTS;
            // if we know startPTS[toIdx]
            isNaN(fragToPTS) ? // we dont know startPTS[toIdx]
            fragTo.start = toIdx > fromIdx ? fragFrom.start + fragFrom.duration : Math.max(fragFrom.start - fragTo.duration, 0) : // update fragment duration.
            // it helps to fix drifts between playlist reported duration and fragment real duration
            toIdx > fromIdx ? (fragFrom.duration = fragToPTS - fragFrom.start, fragFrom.duration < 0 && _logger.logger.warn("negative duration computed for frag " + fragFrom.sn + ",level " + fragFrom.level + ", there should be some duration drift between playlist and fragment!")) : (fragTo.duration = fragFrom.start - fragToPTS, 
            fragTo.duration < 0 && _logger.logger.warn("negative duration computed for frag " + fragTo.sn + ",level " + fragTo.level + ", there should be some duration drift between playlist and fragment!"));
        }
    };
    /**
    * Level Helper class, providing methods dealing with playlist sliding and drift
   */
    module.exports = LevelHelper;
}, /* 14 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    /**
 *  TimeRanges to string helper
 */
    var TimeRanges = {
        toString: function(r) {
            for (var log = "", len = r.length, i = 0; i < len; i++) log += "[" + r.start(i).toFixed(3) + "," + r.end(i).toFixed(3) + "]";
            return log;
        }
    };
    module.exports = TimeRanges;
}, /* 15 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    /*
    * Source: https://github.com/mozilla/vtt.js/blob/master/dist/vtt.js#L1716
    */
    function VTTParser() {
        this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new StringDecoder(), 
        this.regionList = [];
    }
    // Try to parse input as a time stamp.
    function parseTimeStamp(input) {
        function computeSeconds(h, m, s, f) {
            return 3600 * (0 | h) + 60 * (0 | m) + (0 | s) + (0 | f) / 1e3;
        }
        var m = input.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return m ? m[3] ? computeSeconds(m[1], m[2], m[3].replace(":", ""), m[4]) : m[1] > 59 ? computeSeconds(m[1], m[2], 0, m[4]) : computeSeconds(0, m[1], m[2], m[4]) : null;
    }
    // A settings object holds key/value pairs and will ignore anything but the first
    // assignment to a specific key.
    function Settings() {
        this.values = Object.create(null);
    }
    // Helper function to parse input into groups separated by 'groupDelim', and
    // interprete each group as a key/value pair separated by 'keyValueDelim'.
    function parseOptions(input, callback, keyValueDelim, groupDelim) {
        var groups = groupDelim ? input.split(groupDelim) : [ input ];
        for (var i in groups) if ("string" == typeof groups[i]) {
            var kv = groups[i].split(keyValueDelim);
            if (2 === kv.length) {
                var k = kv[0], v = kv[1];
                callback(k, v);
            }
        }
    }
    function parseCue(input, cue, regionList) {
        // 4.1 WebVTT timestamp
        function consumeTimeStamp() {
            var ts = parseTimeStamp(input);
            if (null === ts) throw new Error("Malformed timestamp: " + oInput);
            // Remove time stamp from input.
            return input = input.replace(/^[^\sa-zA-Z-]+/, ""), ts;
        }
        function skipWhitespace() {
            input = input.replace(/^\s+/, "");
        }
        // Remember the original input if we need to throw an error.
        var oInput = input;
        if (// 4.1 WebVTT cue timings.
        skipWhitespace(), cue.startTime = consumeTimeStamp(), // (1) collect cue start time
        skipWhitespace(), "--\x3e" !== input.substr(0, 3)) // (3) next characters must match '-->'
        throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + oInput);
        input = input.substr(3), skipWhitespace(), cue.endTime = consumeTimeStamp(), // (5) collect cue end time
        // 4.1 WebVTT cue settings list.
        skipWhitespace(), // 4.4.2 WebVTT cue settings
        function(input, cue) {
            var settings = new Settings();
            parseOptions(input, function(k, v) {
                switch (k) {
                  case "region":
                    // Find the last region we parsed with the same region id.
                    for (var i = regionList.length - 1; i >= 0; i--) if (regionList[i].id === v) {
                        settings.set(k, regionList[i].region);
                        break;
                    }
                    break;

                  case "vertical":
                    settings.alt(k, v, [ "rl", "lr" ]);
                    break;

                  case "line":
                    var vals = v.split(","), vals0 = vals[0];
                    settings.integer(k, vals0), settings.percent(k, vals0) && settings.set("snapToLines", !1), 
                    settings.alt(k, vals0, [ "auto" ]), 2 === vals.length && settings.alt("lineAlign", vals[1], [ "start", center, "end" ]);
                    break;

                  case "position":
                    vals = v.split(","), settings.percent(k, vals[0]), 2 === vals.length && settings.alt("positionAlign", vals[1], [ "start", center, "end", "line-left", "line-right", "auto" ]);
                    break;

                  case "size":
                    settings.percent(k, v);
                    break;

                  case "align":
                    settings.alt(k, v, [ "start", center, "end", "left", "right" ]);
                }
            }, /:/, /\s/), // Apply default values for any missing fields.
            cue.region = settings.get("region", null), cue.vertical = settings.get("vertical", "");
            var line = settings.get("line", "auto");
            "auto" === line && -1 === defaults.line && (// set numeric line number for Safari
            line = -1), cue.line = line, cue.lineAlign = settings.get("lineAlign", "start"), 
            cue.snapToLines = settings.get("snapToLines", !0), cue.size = settings.get("size", 100), 
            cue.align = settings.get("align", center);
            var position = settings.get("position", "auto");
            "auto" === position && 50 === defaults.position && (// set numeric position for Safari
            position = "start" === cue.align || "left" === cue.align ? 0 : "end" === cue.align || "right" === cue.align ? 100 : 50), 
            cue.position = position;
        }(input, cue);
    }
    function fixLineBreaks(input) {
        return input.replace(/<br(?: \/)?>/gi, "\n");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.fixLineBreaks = void 0;
    var _vttcue = __webpack_require__(55), _vttcue2 = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }(_vttcue), StringDecoder = function() {
        return {
            decode: function(data) {
                if (!data) return "";
                if ("string" != typeof data) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(data));
            }
        };
    };
    Settings.prototype = {
        // Only accept the first assignment to any key.
        set: function(k, v) {
            this.get(k) || "" === v || (this.values[k] = v);
        },
        // Return the value for a key, or a default value.
        // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
        // a number of possible default values as properties where 'defaultKey' is
        // the key of the property that will be chosen; otherwise it's assumed to be
        // a single value.
        get: function(k, dflt, defaultKey) {
            return defaultKey ? this.has(k) ? this.values[k] : dflt[defaultKey] : this.has(k) ? this.values[k] : dflt;
        },
        // Check whether we have a value for a key.
        has: function(k) {
            return k in this.values;
        },
        // Accept a setting if its one of the given alternatives.
        alt: function(k, v, a) {
            for (var n = 0; n < a.length; ++n) if (v === a[n]) {
                this.set(k, v);
                break;
            }
        },
        // Accept a setting if its a valid (signed) integer.
        integer: function(k, v) {
            /^-?\d+$/.test(v) && // integer
            this.set(k, parseInt(v, 10));
        },
        // Accept a setting if its a valid percentage.
        percent: function(k, v) {
            return !!(v.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (v = parseFloat(v)) >= 0 && v <= 100) && (this.set(k, v), 
            !0);
        }
    };
    var defaults = new _vttcue2.default(0, 0, 0), center = "middle" === defaults.align ? "middle" : "center";
    VTTParser.prototype = {
        parse: function(data) {
            function collectNextLine() {
                var buffer = self.buffer, pos = 0;
                for (buffer = fixLineBreaks(buffer); pos < buffer.length && "\r" !== buffer[pos] && "\n" !== buffer[pos]; ) ++pos;
                var line = buffer.substr(0, pos);
                // Advance the buffer early in case we fail below.
                return "\r" === buffer[pos] && ++pos, "\n" === buffer[pos] && ++pos, self.buffer = buffer.substr(pos), 
                line;
            }
            var self = this;
            // If there is no data then we won't decode it, but will just try to parse
            // whatever is in buffer already. This may occur in circumstances, for
            // example when flush() is called.
            data && (// Try to decode the data that we received.
            self.buffer += self.decoder.decode(data, {
                stream: !0
            }));
            // 5.1 WebVTT file parsing.
            try {
                var line;
                if ("INITIAL" === self.state) {
                    // We can't start parsing until we have the first line.
                    if (!/\r\n|\n/.test(self.buffer)) return this;
                    line = collectNextLine();
                    var m = line.match(/^WEBVTT([ \t].*)?$/);
                    if (!m || !m[0]) throw new Error("Malformed WebVTT signature.");
                    self.state = "HEADER";
                }
                for (var alreadyCollectedLine = !1; self.buffer; ) {
                    // We can't parse a line until we have the full line.
                    if (!/\r\n|\n/.test(self.buffer)) return this;
                    switch (alreadyCollectedLine ? alreadyCollectedLine = !1 : line = collectNextLine(), 
                    self.state) {
                      case "HEADER":
                        // 13-18 - Allow a header (metadata) under the WEBVTT line.
                        /:/.test(line) ? // 3.2 WebVTT metadata header syntax
                        function(input) {
                            parseOptions(input, function(k, v) {
                                switch (k) {
                                  case "Region":
                                    // 3.3 WebVTT region metadata header syntax
                                    console.log("parse region", v);
                                }
                            }, /:/);
                        }(line) : line || (// An empty line terminates the header and starts the body (cues).
                        self.state = "ID");
                        continue;

                      case "NOTE":
                        // Ignore NOTE blocks.
                        line || (self.state = "ID");
                        continue;

                      case "ID":
                        // Check for the start of NOTE blocks.
                        if (/^NOTE($|[ \t])/.test(line)) {
                            self.state = "NOTE";
                            break;
                        }
                        // 19-29 - Allow any number of line terminators, then initialize new cue values.
                        if (!line) continue;
                        // 30-39 - Check if self line contains an optional identifier or timing data.
                        if (self.cue = new _vttcue2.default(0, 0, ""), self.state = "CUE", -1 === line.indexOf("--\x3e")) {
                            self.cue.id = line;
                            continue;
                        }

                      // Process line as start of a cue.
                        /*falls through*/
                        case "CUE":
                        // 40 - Collect cue timings and settings.
                        try {
                            parseCue(line, self.cue, self.regionList);
                        } catch (e) {
                            // In case of an error ignore rest of the cue.
                            self.cue = null, self.state = "BADCUE";
                            continue;
                        }
                        self.state = "CUETEXT";
                        continue;

                      case "CUETEXT":
                        var hasSubstring = -1 !== line.indexOf("--\x3e");
                        // 34 - If we have an empty line then report the cue.
                        // 35 - If we have the special substring '-->' then report the cue,
                        // but do not collect the line as we need to process the current
                        // one as a new cue.
                        if (!line || hasSubstring && (alreadyCollectedLine = !0)) {
                            // We are done parsing self cue.
                            self.oncue && self.oncue(self.cue), self.cue = null, self.state = "ID";
                            continue;
                        }
                        self.cue.text && (self.cue.text += "\n"), self.cue.text += line;
                        continue;

                      case "BADCUE":
                        // BADCUE
                        // 54-62 - Collect and discard the remaining cue.
                        line || (self.state = "ID");
                        continue;
                    }
                }
            } catch (e) {
                // If we are currently parsing a cue, report what we have.
                "CUETEXT" === self.state && self.cue && self.oncue && self.oncue(self.cue), self.cue = null, 
                // Enter BADWEBVTT state if header was not parsed correctly otherwise
                // another exception occurred so enter BADCUE state.
                self.state = "INITIAL" === self.state ? "BADWEBVTT" : "BADCUE";
            }
            return this;
        },
        flush: function() {
            var self = this;
            try {
                // If we've flushed, parsed, and we're still on the INITIAL state then
                // that means we don't have enough of the stream to parse the first
                // line.
                if (// Finish decoding the stream.
                self.buffer += self.decoder.decode(), // Synthesize the end of the current cue or region.
                (self.cue || "HEADER" === self.state) && (self.buffer += "\n\n", self.parse()), 
                "INITIAL" === self.state) throw new Error("Malformed WebVTT signature.");
            } catch (e) {
                throw e;
            }
            return self.onflush && self.onflush(), this;
        }
    }, exports.fixLineBreaks = fixLineBreaks, exports.default = VTTParser;
}, /* 16 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    /* WEBPACK VAR INJECTION */
    (function(module) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        // see https://tools.ietf.org/html/rfc1808
        /* jshint ignore:start */
        !function(root) {
            /* jshint ignore:end */
            var URL_REGEX = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, FIRST_SEGMENT_REGEX = /^([^\/;?#]*)(.*)$/, SLASH_DOT_REGEX = /(?:\/|^)\.(?=\/)/g, SLASH_DOT_DOT_REGEX = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, URLToolkit = {
                // jshint ignore:line
                // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
                // E.g
                // With opts.alwaysNormalize = false (default, spec compliant)
                // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
                // With opts.alwaysNormalize = true (not spec compliant)
                // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
                buildAbsoluteURL: function(baseURL, relativeURL, opts) {
                    if (opts = opts || {}, // remove any remaining space and CRLF
                    baseURL = baseURL.trim(), !(relativeURL = relativeURL.trim())) {
                        // 2a) If the embedded URL is entirely empty, it inherits the
                        // entire base URL (i.e., is set equal to the base URL)
                        // and we are done.
                        if (!opts.alwaysNormalize) return baseURL;
                        var basePartsForNormalise = URLToolkit.parseURL(baseURL);
                        if (!basePartsForNormalise) throw new Error("Error trying to parse base URL.");
                        return basePartsForNormalise.path = URLToolkit.normalizePath(basePartsForNormalise.path), 
                        URLToolkit.buildURLFromParts(basePartsForNormalise);
                    }
                    var relativeParts = URLToolkit.parseURL(relativeURL);
                    if (!relativeParts) throw new Error("Error trying to parse relative URL.");
                    if (relativeParts.scheme) // 2b) If the embedded URL starts with a scheme name, it is
                    // interpreted as an absolute URL and we are done.
                    // 2b) If the embedded URL starts with a scheme name, it is
                    // interpreted as an absolute URL and we are done.
                    return opts.alwaysNormalize ? (relativeParts.path = URLToolkit.normalizePath(relativeParts.path), 
                    URLToolkit.buildURLFromParts(relativeParts)) : relativeURL;
                    var baseParts = URLToolkit.parseURL(baseURL);
                    if (!baseParts) throw new Error("Error trying to parse base URL.");
                    if (!baseParts.netLoc && baseParts.path && "/" !== baseParts.path[0]) {
                        // If netLoc missing and path doesn't start with '/', assume everthing before the first '/' is the netLoc
                        // This causes 'example.com/a' to be handled as '//example.com/a' instead of '/example.com/a'
                        var pathParts = FIRST_SEGMENT_REGEX.exec(baseParts.path);
                        baseParts.netLoc = pathParts[1], baseParts.path = pathParts[2];
                    }
                    baseParts.netLoc && !baseParts.path && (baseParts.path = "/");
                    var builtParts = {
                        // 2c) Otherwise, the embedded URL inherits the scheme of
                        // the base URL.
                        scheme: baseParts.scheme,
                        netLoc: relativeParts.netLoc,
                        path: null,
                        params: relativeParts.params,
                        query: relativeParts.query,
                        fragment: relativeParts.fragment
                    };
                    if (!relativeParts.netLoc && (// 3) If the embedded URL's <net_loc> is non-empty, we skip to
                    // Step 7.  Otherwise, the embedded URL inherits the <net_loc>
                    // (if any) of the base URL.
                    builtParts.netLoc = baseParts.netLoc, "/" !== relativeParts.path[0])) if (relativeParts.path) {
                        // 6) The last segment of the base URL's path (anything
                        // following the rightmost slash "/", or the entire path if no
                        // slash is present) is removed and the embedded URL's path is
                        // appended in its place.
                        var baseURLPath = baseParts.path, newPath = baseURLPath.substring(0, baseURLPath.lastIndexOf("/") + 1) + relativeParts.path;
                        builtParts.path = URLToolkit.normalizePath(newPath);
                    } else // 5) If the embedded URL path is empty (and not preceded by a
                    // slash), then the embedded URL inherits the base URL path
                    builtParts.path = baseParts.path, // 5a) if the embedded URL's <params> is non-empty, we skip to
                    // step 7; otherwise, it inherits the <params> of the base
                    // URL (if any) and
                    relativeParts.params || (builtParts.params = baseParts.params, // 5b) if the embedded URL's <query> is non-empty, we skip to
                    // step 7; otherwise, it inherits the <query> of the base
                    // URL (if any) and we skip to step 7.
                    relativeParts.query || (builtParts.query = baseParts.query));
                    return null === builtParts.path && (builtParts.path = opts.alwaysNormalize ? URLToolkit.normalizePath(relativeParts.path) : relativeParts.path), 
                    URLToolkit.buildURLFromParts(builtParts);
                },
                parseURL: function(url) {
                    var parts = URL_REGEX.exec(url);
                    return parts ? {
                        scheme: parts[1] || "",
                        netLoc: parts[2] || "",
                        path: parts[3] || "",
                        params: parts[4] || "",
                        query: parts[5] || "",
                        fragment: parts[6] || ""
                    } : null;
                },
                normalizePath: function(path) {
                    // 6c) All occurrences of "<segment>/../", where <segment> is a
                    // complete path segment not equal to "..", are removed.
                    // Removal of these path segments is performed iteratively,
                    // removing the leftmost matching pattern on each iteration,
                    // until no matching pattern remains.
                    // 6d) If the path ends with "<segment>/..", where <segment> is a
                    // complete path segment not equal to "..", that
                    // "<segment>/.." is removed.
                    for (// The following operations are
                    // then applied, in order, to the new path:
                    // 6a) All occurrences of "./", where "." is a complete path
                    // segment, are removed.
                    // 6b) If the path ends with "." as a complete path segment,
                    // that "." is removed.
                    path = path.split("").reverse().join("").replace(SLASH_DOT_REGEX, ""); path.length !== (path = path.replace(SLASH_DOT_DOT_REGEX, "")).length; ) ;
                    // jshint ignore:line
                    return path.split("").reverse().join("");
                },
                buildURLFromParts: function(parts) {
                    return parts.scheme + parts.netLoc + parts.path + parts.params + parts.query + parts.fragment;
                }
            };
            /* jshint ignore:start */
            "object" === _typeof(exports) && "object" === _typeof(module) ? module.exports = URLToolkit : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], 
            void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return URLToolkit;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }();
    }).call(exports, __webpack_require__(58)(module));
}, /* 17 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _Hls = __webpack_require__(60), _Hls2 = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }(_Hls);
    exports.default = _Hls2.default;
}, /* 18 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    /**
 * HLS config
 */
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.hlsDefaultConfig = void 0;
    var _abrController = __webpack_require__(19), _abrController2 = _interopRequireDefault(_abrController), _bufferController = __webpack_require__(22), _bufferController2 = _interopRequireDefault(_bufferController), _capLevelController = __webpack_require__(23), _capLevelController2 = _interopRequireDefault(_capLevelController), _fpsController = __webpack_require__(24), _fpsController2 = _interopRequireDefault(_fpsController), _xhrLoader = __webpack_require__(57), _xhrLoader2 = _interopRequireDefault(_xhrLoader), _audioTrackController = __webpack_require__(21), _audioTrackController2 = _interopRequireDefault(_audioTrackController), _audioStreamController = __webpack_require__(20), _audioStreamController2 = _interopRequireDefault(_audioStreamController), _cues = __webpack_require__(51), _cues2 = _interopRequireDefault(_cues), _timelineController = __webpack_require__(30), _timelineController2 = _interopRequireDefault(_timelineController), _subtitleTrackController = __webpack_require__(29), _subtitleTrackController2 = _interopRequireDefault(_subtitleTrackController), _subtitleStreamController = __webpack_require__(28), _subtitleStreamController2 = _interopRequireDefault(_subtitleStreamController);
    exports.hlsDefaultConfig = {
        autoStartLoad: !0,
        // used by stream-controller
        startPosition: -1,
        // used by stream-controller
        defaultAudioCodec: void 0,
        // used by stream-controller
        debug: !1,
        // used by logger
        capLevelOnFPSDrop: !1,
        // used by fps-controller
        capLevelToPlayerSize: !1,
        // used by cap-level-controller
        initialLiveManifestSize: 1,
        // used by stream-controller
        maxBufferLength: 30,
        // used by stream-controller
        maxBufferSize: 6e7,
        // used by stream-controller
        maxBufferHole: .5,
        // used by stream-controller
        maxSeekHole: 2,
        // used by stream-controller
        lowBufferWatchdogPeriod: .5,
        // used by stream-controller
        highBufferWatchdogPeriod: 3,
        // used by stream-controller
        nudgeOffset: .1,
        // used by stream-controller
        nudgeMaxRetry: 3,
        // used by stream-controller
        maxFragLookUpTolerance: .25,
        // used by stream-controller
        liveSyncDurationCount: 3,
        // used by stream-controller
        liveMaxLatencyDurationCount: 1 / 0,
        // used by stream-controller
        liveSyncDuration: void 0,
        // used by stream-controller
        liveMaxLatencyDuration: void 0,
        // used by stream-controller
        maxMaxBufferLength: 600,
        // used by stream-controller
        enableWorker: !0,
        // used by demuxer
        enableSoftwareAES: !0,
        // used by decrypter
        manifestLoadingTimeOut: 1e4,
        // used by playlist-loader
        manifestLoadingMaxRetry: 1,
        // used by playlist-loader
        manifestLoadingRetryDelay: 1e3,
        // used by playlist-loader
        manifestLoadingMaxRetryTimeout: 64e3,
        // used by playlist-loader
        startLevel: void 0,
        // used by level-controller
        levelLoadingTimeOut: 1e4,
        // used by playlist-loader
        levelLoadingMaxRetry: 4,
        // used by playlist-loader
        levelLoadingRetryDelay: 1e3,
        // used by playlist-loader
        levelLoadingMaxRetryTimeout: 64e3,
        // used by playlist-loader
        fragLoadingTimeOut: 2e4,
        // used by fragment-loader
        fragLoadingMaxRetry: 6,
        // used by fragment-loader
        fragLoadingRetryDelay: 1e3,
        // used by fragment-loader
        fragLoadingMaxRetryTimeout: 64e3,
        // used by fragment-loader
        fragLoadingLoopThreshold: 3,
        // used by stream-controller
        startFragPrefetch: !1,
        // used by stream-controller
        fpsDroppedMonitoringPeriod: 5e3,
        // used by fps-controller
        fpsDroppedMonitoringThreshold: .2,
        // used by fps-controller
        appendErrorMaxRetry: 3,
        // used by buffer-controller
        loader: _xhrLoader2.default,
        //loader: FetchLoader,
        fLoader: void 0,
        pLoader: void 0,
        xhrSetup: void 0,
        fetchSetup: void 0,
        abrController: _abrController2.default,
        bufferController: _bufferController2.default,
        capLevelController: _capLevelController2.default,
        fpsController: _fpsController2.default,
        //#if altaudio
        audioStreamController: _audioStreamController2.default,
        audioTrackController: _audioTrackController2.default,
        //#endif
        //#if subtitle
        subtitleStreamController: _subtitleStreamController2.default,
        subtitleTrackController: _subtitleTrackController2.default,
        timelineController: _timelineController2.default,
        cueHandler: _cues2.default,
        enableCEA708Captions: !0,
        // used by timeline-controller
        enableWebVTT: !0,
        // used by timeline-controller
        captionsTextTrack1Label: "English",
        // used by timeline-controller
        captionsTextTrack1LanguageCode: "en",
        // used by timeline-controller
        captionsTextTrack2Label: "Spanish",
        // used by timeline-controller
        captionsTextTrack2LanguageCode: "es",
        // used by timeline-controller
        //#endif
        stretchShortVideoTrack: !1,
        // used by mp4-remuxer
        forceKeyFrameOnDiscontinuity: !0,
        // used by ts-demuxer
        abrEwmaFastLive: 3,
        // used by abr-controller
        abrEwmaSlowLive: 9,
        // used by abr-controller
        abrEwmaFastVoD: 3,
        // used by abr-controller
        abrEwmaSlowVoD: 9,
        // used by abr-controller
        abrEwmaDefaultEstimate: 5e5,
        // 500 kbps  // used by abr-controller
        abrBandWidthFactor: .95,
        // used by abr-controller
        abrBandWidthUpFactor: .7,
        // used by abr-controller
        abrMaxWithRealBitrate: !1,
        // used by abr-controller
        maxStarvationDelay: 4,
        // used by abr-controller
        maxLoadingDelay: 4,
        // used by abr-controller
        minAutoBitrate: 0
    };
}, /* 19 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _bufferHelper = __webpack_require__(4), _bufferHelper2 = _interopRequireDefault(_bufferHelper), _errors = __webpack_require__(2), _logger = __webpack_require__(0), _ewmaBandwidthEstimator = __webpack_require__(53), _ewmaBandwidthEstimator2 = _interopRequireDefault(_ewmaBandwidthEstimator), AbrController = function(_EventHandler) {
        function AbrController(hls) {
            _classCallCheck(this, AbrController);
            var _this = _possibleConstructorReturn(this, (AbrController.__proto__ || Object.getPrototypeOf(AbrController)).call(this, hls, _events2.default.FRAG_LOADING, _events2.default.FRAG_LOADED, _events2.default.FRAG_BUFFERED, _events2.default.ERROR));
            return _this.lastLoadedFragLevel = 0, _this._nextAutoLevel = -1, _this.hls = hls, 
            _this.timer = null, _this._bwEstimator = null, _this.onCheck = _this._abandonRulesCheck.bind(_this), 
            _this;
        }
        return _inherits(AbrController, _EventHandler), _createClass(AbrController, [ {
            key: "destroy",
            value: function() {
                this.clearTimer(), _eventHandler2.default.prototype.destroy.call(this);
            }
        }, {
            key: "onFragLoading",
            value: function(data) {
                var frag = data.frag;
                if ("main" === frag.type) {
                    // lazy init of bw Estimator, rationale is that we use different params for Live/VoD
                    // so we need to wait for stream manifest / playlist type to instantiate it.
                    if (this.timer || (this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator) {
                        var hls = this.hls, level = data.frag.level, isLive = hls.levels[level].details.live, config = hls.config, ewmaFast = void 0, ewmaSlow = void 0;
                        isLive ? (ewmaFast = config.abrEwmaFastLive, ewmaSlow = config.abrEwmaSlowLive) : (ewmaFast = config.abrEwmaFastVoD, 
                        ewmaSlow = config.abrEwmaSlowVoD), this._bwEstimator = new _ewmaBandwidthEstimator2.default(hls, ewmaSlow, ewmaFast, config.abrEwmaDefaultEstimate);
                    }
                    this.fragCurrent = frag;
                }
            }
        }, {
            key: "_abandonRulesCheck",
            value: function() {
                /*
        monitor fragment retrieval time...
        we compute expected time of arrival of the complete fragment.
        we compare it to expected time of buffer starvation
      */
                var hls = this.hls, v = hls.media, frag = this.fragCurrent, loader = frag.loader, minAutoLevel = hls.minAutoLevel;
                // if loader has been destroyed or loading has been aborted, stop timer and return
                if (!loader || loader.stats && loader.stats.aborted) return _logger.logger.warn("frag loader destroy or aborted, disarm abandonRules"), 
                void this.clearTimer();
                var stats = loader.stats;
                /* only monitor frag retrieval time if
      (video not paused OR first fragment being loaded(ready state === HAVE_NOTHING = 0)) AND autoswitching enabled AND not lowest level (=> means that we have several levels) */
                if (v && stats && (!v.paused && 0 !== v.playbackRate || !v.readyState) && frag.autoLevel && frag.level) {
                    var requestDelay = performance.now() - stats.trequest, playbackRate = Math.abs(v.playbackRate);
                    // monitor fragment load progress after half of expected fragment duration,to stabilize bitrate
                    if (requestDelay > 500 * frag.duration / playbackRate) {
                        var levels = hls.levels, loadRate = Math.max(1, stats.bw ? stats.bw / 8 : 1e3 * stats.loaded / requestDelay), // byte/s; at least 1 byte/s to avoid division by zero
                        // compute expected fragment length using frag duration and level bitrate. also ensure that expected len is gte than already loaded size
                        level = levels[frag.level], levelBitrate = level.realBitrate ? Math.max(level.realBitrate, level.bitrate) : level.bitrate, expectedLen = stats.total ? stats.total : Math.max(stats.loaded, Math.round(frag.duration * levelBitrate / 8)), pos = v.currentTime, fragLoadedDelay = (expectedLen - stats.loaded) / loadRate, bufferStarvationDelay = (_bufferHelper2.default.bufferInfo(v, pos, hls.config.maxBufferHole).end - pos) / playbackRate;
                        // consider emergency switch down only if we have less than 2 frag buffered AND
                        // time to finish loading current fragment is bigger than buffer starvation delay
                        // ie if we risk buffer starvation if bw does not increase quickly
                        if (bufferStarvationDelay < 2 * frag.duration / playbackRate && fragLoadedDelay > bufferStarvationDelay) {
                            var fragLevelNextLoadedDelay = void 0, nextLoadLevel = void 0;
                            // lets iterate through lower level and try to find the biggest one that could avoid rebuffering
                            // we start from current level - 1 and we step down , until we find a matching level
                            for (nextLoadLevel = frag.level - 1; nextLoadLevel > minAutoLevel; nextLoadLevel--) {
                                // compute time to load next fragment at lower level
                                // 0.8 : consider only 80% of current bw to be conservative
                                // 8 = bits per byte (bps/Bps)
                                var levelNextBitrate = levels[nextLoadLevel].realBitrate ? Math.max(levels[nextLoadLevel].realBitrate, levels[nextLoadLevel].bitrate) : levels[nextLoadLevel].bitrate;
                                if ((fragLevelNextLoadedDelay = frag.duration * levelNextBitrate / (6.4 * loadRate)) < bufferStarvationDelay) // we found a lower level that be rebuffering free with current estimated bw !
                                break;
                            }
                            // only emergency switch down if it takes less time to load new fragment at lowest level instead
                            // of finishing loading current one ...
                            fragLevelNextLoadedDelay < fragLoadedDelay && (_logger.logger.warn("loading too slow, abort fragment loading and switch to level " + nextLoadLevel + ":fragLoadedDelay[" + nextLoadLevel + "]<fragLoadedDelay[" + (frag.level - 1) + "];bufferStarvationDelay:" + fragLevelNextLoadedDelay.toFixed(1) + "<" + fragLoadedDelay.toFixed(1) + ":" + bufferStarvationDelay.toFixed(1)), 
                            // force next load level in auto mode
                            hls.nextLoadLevel = nextLoadLevel, // update bw estimate for this fragment before cancelling load (this will help reducing the bw)
                            this._bwEstimator.sample(requestDelay, stats.loaded), //abort fragment loading
                            loader.abort(), // stop abandon rules timer
                            this.clearTimer(), hls.trigger(_events2.default.FRAG_LOAD_EMERGENCY_ABORTED, {
                                frag: frag,
                                stats: stats
                            }));
                        }
                    }
                }
            }
        }, {
            key: "onFragLoaded",
            value: function(data) {
                var frag = data.frag;
                if ("main" === frag.type && !isNaN(frag.sn)) {
                    // compute level average bitrate
                    if (// stop monitoring bw once frag loaded
                    this.clearTimer(), // store level id after successful fragment load
                    this.lastLoadedFragLevel = frag.level, // reset forced auto level value so that next level will be selected
                    this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                        var level = this.hls.levels[frag.level], loadedBytes = (level.loaded ? level.loaded.bytes : 0) + data.stats.loaded, loadedDuration = (level.loaded ? level.loaded.duration : 0) + data.frag.duration;
                        level.loaded = {
                            bytes: loadedBytes,
                            duration: loadedDuration
                        }, level.realBitrate = Math.round(8 * loadedBytes / loadedDuration);
                    }
                    // if fragment has been loaded to perform a bitrate test,
                    if (data.frag.bitrateTest) {
                        var stats = data.stats;
                        stats.tparsed = stats.tbuffered = stats.tload, this.onFragBuffered(data);
                    }
                }
            }
        }, {
            key: "onFragBuffered",
            value: function(data) {
                var stats = data.stats, frag = data.frag;
                // only update stats on first frag buffering
                // if same frag is loaded multiple times, it might be in browser cache, and loaded quickly
                // and leading to wrong bw estimation
                // on bitrate test, also only update stats once (if tload = tbuffered == on FRAG_LOADED)
                if (!(!0 === stats.aborted || 1 !== frag.loadCounter || "main" !== frag.type || isNaN(frag.sn) || frag.bitrateTest && stats.tload !== stats.tbuffered)) {
                    // use tparsed-trequest instead of tbuffered-trequest to compute fragLoadingProcessing; rationale is that  buffer appending only happens once media is attached
                    // in case we use config.startFragPrefetch while media is not attached yet, fragment might be parsed while media not attached yet, but it will only be buffered on media attached
                    // as a consequence it could happen really late in the process. meaning that appending duration might appears huge ... leading to underestimated throughput estimation
                    var fragLoadingProcessingMs = stats.tparsed - stats.trequest;
                    _logger.logger.log("latency/loading/parsing/append/kbps:" + Math.round(stats.tfirst - stats.trequest) + "/" + Math.round(stats.tload - stats.tfirst) + "/" + Math.round(stats.tparsed - stats.tload) + "/" + Math.round(stats.tbuffered - stats.tparsed) + "/" + Math.round(8 * stats.loaded / (stats.tbuffered - stats.trequest))), 
                    this._bwEstimator.sample(fragLoadingProcessingMs, stats.loaded), stats.bwEstimate = this._bwEstimator.getEstimate(), 
                    // if fragment has been loaded to perform a bitrate test, (hls.startLevel = -1), store bitrate test delay duration
                    frag.bitrateTest ? this.bitrateTestDelay = fragLoadingProcessingMs / 1e3 : this.bitrateTestDelay = 0;
                }
            }
        }, {
            key: "onError",
            value: function(data) {
                // stop timer in case of frag loading error
                switch (data.details) {
                  case _errors.ErrorDetails.FRAG_LOAD_ERROR:
                  case _errors.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    this.clearTimer();
                }
            }
        }, {
            key: "clearTimer",
            value: function() {
                clearInterval(this.timer), this.timer = null;
            }
        }, {
            key: "_findBestLevel",
            value: function(currentLevel, currentFragDuration, currentBw, minAutoLevel, maxAutoLevel, maxFetchDuration, bwFactor, bwUpFactor, levels) {
                for (var i = maxAutoLevel; i >= minAutoLevel; i--) {
                    var levelInfo = levels[i], levelDetails = levelInfo.details, avgDuration = levelDetails ? levelDetails.totalduration / levelDetails.fragments.length : currentFragDuration, live = !!levelDetails && levelDetails.live, adjustedbw = void 0;
                    // follow algorithm captured from stagefright :
                    // https://android.googlesource.com/platform/frameworks/av/+/master/media/libstagefright/httplive/LiveSession.cpp
                    // Pick the highest bandwidth stream below or equal to estimated bandwidth.
                    // consider only 80% of the available bandwidth, but if we are switching up,
                    // be even more conservative (70%) to avoid overestimating and immediately
                    // switching back.
                    adjustedbw = i <= currentLevel ? bwFactor * currentBw : bwUpFactor * currentBw;
                    var bitrate = levels[i].realBitrate ? Math.max(levels[i].realBitrate, levels[i].bitrate) : levels[i].bitrate, fetchDuration = bitrate * avgDuration / adjustedbw;
                    // if adjusted bw is greater than level bitrate AND
                    if (_logger.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + i + "/" + Math.round(adjustedbw) + "/" + bitrate + "/" + avgDuration + "/" + maxFetchDuration + "/" + fetchDuration), 
                    adjustedbw > bitrate && (// fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
                    // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
                    // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that _findBestLevel will return -1
                    !fetchDuration || live && !this.bitrateTestDelay || fetchDuration < maxFetchDuration)) // as we are looping from highest to lowest, this will return the best achievable quality level
                    return i;
                }
                // not enough time budget even with quality level 0 ... rebuffering might happen
                return -1;
            }
        }, {
            key: "nextAutoLevel",
            get: function() {
                var forcedAutoLevel = this._nextAutoLevel, bwEstimator = this._bwEstimator;
                // in case next auto level has been forced, and bw not available or not reliable, return forced value
                if (!(-1 === forcedAutoLevel || bwEstimator && bwEstimator.canEstimate())) return forcedAutoLevel;
                // compute next level using ABR logic
                var nextABRAutoLevel = this._nextABRAutoLevel;
                // if forced auto level has been defined, use it to cap ABR computed quality level
                return -1 !== forcedAutoLevel && (nextABRAutoLevel = Math.min(forcedAutoLevel, nextABRAutoLevel)), 
                nextABRAutoLevel;
            },
            set: function(nextLevel) {
                this._nextAutoLevel = nextLevel;
            }
        }, {
            key: "_nextABRAutoLevel",
            get: function() {
                var hls = this.hls, maxAutoLevel = hls.maxAutoLevel, levels = hls.levels, config = hls.config, minAutoLevel = hls.minAutoLevel, v = hls.media, currentLevel = this.lastLoadedFragLevel, currentFragDuration = this.fragCurrent ? this.fragCurrent.duration : 0, pos = v ? v.currentTime : 0, // playbackRate is the absolute value of the playback rate; if v.playbackRate is 0, we use 1 to load as
                // if we're playing back at the normal rate.
                playbackRate = v && 0 !== v.playbackRate ? Math.abs(v.playbackRate) : 1, avgbw = this._bwEstimator ? this._bwEstimator.getEstimate() : config.abrEwmaDefaultEstimate, // bufferStarvationDelay is the wall-clock time left until the playback buffer is exhausted.
                bufferStarvationDelay = (_bufferHelper2.default.bufferInfo(v, pos, config.maxBufferHole).end - pos) / playbackRate, bestLevel = this._findBestLevel(currentLevel, currentFragDuration, avgbw, minAutoLevel, maxAutoLevel, bufferStarvationDelay, config.abrBandWidthFactor, config.abrBandWidthUpFactor, levels);
                if (bestLevel >= 0) return bestLevel;
                _logger.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                // not possible to get rid of rebuffering ... let's try to find level that will guarantee less than maxStarvationDelay of rebuffering
                // if no matching level found, logic will return 0
                var maxStarvationDelay = currentFragDuration ? Math.min(currentFragDuration, config.maxStarvationDelay) : config.maxStarvationDelay, bwFactor = config.abrBandWidthFactor, bwUpFactor = config.abrBandWidthUpFactor;
                if (0 === bufferStarvationDelay) {
                    // in case buffer is empty, let's check if previous fragment was loaded to perform a bitrate test
                    var bitrateTestDelay = this.bitrateTestDelay;
                    if (bitrateTestDelay) {
                        maxStarvationDelay = (currentFragDuration ? Math.min(currentFragDuration, config.maxLoadingDelay) : config.maxLoadingDelay) - bitrateTestDelay, 
                        _logger.logger.trace("bitrate test took " + Math.round(1e3 * bitrateTestDelay) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * maxStarvationDelay) + " ms"), 
                        // don't use conservative factor on bitrate test
                        bwFactor = bwUpFactor = 1;
                    }
                }
                return bestLevel = this._findBestLevel(currentLevel, currentFragDuration, avgbw, minAutoLevel, maxAutoLevel, bufferStarvationDelay + maxStarvationDelay, bwFactor, bwUpFactor, levels), 
                Math.max(bestLevel, 0);
            }
        } ]), AbrController;
    }(_eventHandler2.default);
    exports.default = AbrController;
}, /* 20 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _binarySearch = __webpack_require__(7), _binarySearch2 = _interopRequireDefault(_binarySearch), _bufferHelper = __webpack_require__(4), _bufferHelper2 = _interopRequireDefault(_bufferHelper), _demuxer = __webpack_require__(11), _demuxer2 = _interopRequireDefault(_demuxer), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _levelHelper = __webpack_require__(13), _levelHelper2 = _interopRequireDefault(_levelHelper), _timeRanges = __webpack_require__(14), _timeRanges2 = _interopRequireDefault(_timeRanges), _errors = __webpack_require__(2), _logger = __webpack_require__(0), _discontinuities = __webpack_require__(52), State = {
        STOPPED: "STOPPED",
        STARTING: "STARTING",
        IDLE: "IDLE",
        PAUSED: "PAUSED",
        KEY_LOADING: "KEY_LOADING",
        FRAG_LOADING: "FRAG_LOADING",
        FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
        WAITING_TRACK: "WAITING_TRACK",
        PARSING: "PARSING",
        PARSED: "PARSED",
        BUFFER_FLUSHING: "BUFFER_FLUSHING",
        ENDED: "ENDED",
        ERROR: "ERROR",
        WAITING_INIT_PTS: "WAITING_INIT_PTS"
    }, AudioStreamController = function(_EventHandler) {
        function AudioStreamController(hls) {
            _classCallCheck(this, AudioStreamController);
            var _this = _possibleConstructorReturn(this, (AudioStreamController.__proto__ || Object.getPrototypeOf(AudioStreamController)).call(this, hls, _events2.default.MEDIA_ATTACHED, _events2.default.MEDIA_DETACHING, _events2.default.AUDIO_TRACKS_UPDATED, _events2.default.AUDIO_TRACK_SWITCHING, _events2.default.AUDIO_TRACK_LOADED, _events2.default.KEY_LOADED, _events2.default.FRAG_LOADED, _events2.default.FRAG_PARSING_INIT_SEGMENT, _events2.default.FRAG_PARSING_DATA, _events2.default.FRAG_PARSED, _events2.default.ERROR, _events2.default.BUFFER_CREATED, _events2.default.BUFFER_APPENDED, _events2.default.BUFFER_FLUSHED, _events2.default.INIT_PTS_FOUND));
            return _this.config = hls.config, _this.audioCodecSwap = !1, _this.ticks = 0, _this._state = State.STOPPED, 
            _this.ontick = _this.tick.bind(_this), _this.initPTS = [], _this.waitingFragment = null, 
            _this.videoTrackCC = null, _this;
        }
        return _inherits(AudioStreamController, _EventHandler), _createClass(AudioStreamController, [ {
            key: "destroy",
            value: function() {
                this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), _eventHandler2.default.prototype.destroy.call(this), 
                this.state = State.STOPPED;
            }
        }, {
            key: "onInitPtsFound",
            value: function(data) {
                var demuxerId = data.id, cc = data.frag.cc, initPTS = data.initPTS;
                "main" === demuxerId && (//Always update the new INIT PTS
                //Can change due level switch
                this.initPTS[cc] = initPTS, this.videoTrackCC = cc, _logger.logger.log("InitPTS for cc:" + cc + " found from video track:" + initPTS), 
                //If we are waiting we need to demux/remux the waiting frag
                //With the new initPTS
                this.state === State.WAITING_INIT_PTS && this.tick());
            }
        }, {
            key: "startLoad",
            value: function(startPosition) {
                if (this.tracks) {
                    var lastCurrentTime = this.lastCurrentTime;
                    this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), this.fragLoadError = 0, 
                    lastCurrentTime > 0 && -1 === startPosition ? (_logger.logger.log("audio:override startPosition with lastCurrentTime @" + lastCurrentTime.toFixed(3)), 
                    this.state = State.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : startPosition, 
                    this.state = State.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, 
                    this.tick();
                } else this.startPosition = startPosition, this.state = State.STOPPED;
            }
        }, {
            key: "stopLoad",
            value: function() {
                var frag = this.fragCurrent;
                frag && (frag.loader && frag.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, 
                this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = State.STOPPED;
            }
        }, {
            key: "tick",
            value: function() {
                1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), 
                this.ticks = 0);
            }
        }, {
            key: "doTick",
            value: function() {
                var pos, track, trackDetails, hls = this.hls, config = hls.config;
                //logger.log('audioStream:' + this.state);
                switch (this.state) {
                  case State.ERROR:
                  //don't do anything in error state to avoid breaking further ...
                    case State.PAUSED:
                  //don't do anything in paused state either ...
                    case State.BUFFER_FLUSHING:
                    break;

                  case State.STARTING:
                    this.state = State.WAITING_TRACK, this.loadedmetadata = !1;
                    break;

                  case State.IDLE:
                    var tracks = this.tracks;
                    // audio tracks not received => exit loop
                    if (!tracks) break;
                    // if video not attached AND
                    // start fragment already requested OR start frag prefetch disable
                    // exit loop
                    // => if media not attached but start frag prefetch is enabled and start frag not requested yet, we will not exit loop
                    if (!this.media && (this.startFragRequested || !config.startFragPrefetch)) break;
                    // determine next candidate fragment to be loaded, based on current position and
                    //  end of buffer position
                    // if we have not yet loaded any fragment, start loading from start position
                    if (this.loadedmetadata) pos = this.media.currentTime; else if (void 0 === (pos = this.nextLoadPosition)) break;
                    var media = this.mediaBuffer ? this.mediaBuffer : this.media, bufferInfo = _bufferHelper2.default.bufferInfo(media, pos, config.maxBufferHole), bufferLen = bufferInfo.len, bufferEnd = bufferInfo.end, fragPrevious = this.fragPrevious, maxBufLen = config.maxMaxBufferLength, audioSwitch = this.audioSwitch, trackId = this.trackId;
                    // if buffer length is less than maxBufLen try to load a new fragment
                    if ((bufferLen < maxBufLen || audioSwitch) && trackId < tracks.length) {
                        // if track info not retrieved yet, switch state and wait for track retrieval
                        if (void 0 === (trackDetails = tracks[trackId].details)) {
                            this.state = State.WAITING_TRACK;
                            break;
                        }
                        // we just got done loading the final fragment, check if we need to finalize media stream
                        if (!audioSwitch && !trackDetails.live && fragPrevious && fragPrevious.sn === trackDetails.endSN && (!this.media.seeking || this.media.duration - bufferEnd < fragPrevious.duration / 2)) {
                            // Finalize the media stream
                            this.hls.trigger(_events2.default.BUFFER_EOS, {
                                type: "audio"
                            }), this.state = State.ENDED;
                            break;
                        }
                        // find fragment index, contiguous with end of buffer position
                        var fragments = trackDetails.fragments, fragLen = fragments.length, start = fragments[0].start, end = fragments[fragLen - 1].start + fragments[fragLen - 1].duration, frag = void 0;
                        // When switching audio track, reload audio as close as possible to currentTime
                        if (audioSwitch) if (trackDetails.live && !trackDetails.PTSKnown) _logger.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"), 
                        bufferEnd = 0; else // if currentTime (pos) is less than alt audio playlist start time, it means that alt audio is ahead of currentTime
                        if (bufferEnd = pos, trackDetails.PTSKnown && pos < start) {
                            // if everything is buffered from pos to start or if audio buffer upfront, let's seek to start
                            if (!(bufferInfo.end > start || bufferInfo.nextStart)) return;
                            _logger.logger.log("alt audio track ahead of main track, seek to start of alt audio track"), 
                            this.media.currentTime = start + .05;
                        }
                        if (trackDetails.initSegment && !trackDetails.initSegment.data) frag = trackDetails.initSegment; else if (bufferEnd <= start) {
                            if (frag = fragments[0], null !== this.videoTrackCC && frag.cc !== this.videoTrackCC && (// Ensure we find a fragment which matches the continuity of the video track
                            frag = (0, _discontinuities.findFragWithCC)(fragments, this.videoTrackCC)), trackDetails.live && frag.loadIdx && frag.loadIdx === this.fragLoadIdx) {
                                // we just loaded this first fragment, and we are still lagging behind the start of the live playlist
                                // let's force seek to start
                                var nextBuffered = bufferInfo.nextStart ? bufferInfo.nextStart : start;
                                return _logger.logger.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (nextBuffered + .05)), 
                                void (this.media.currentTime = nextBuffered + .05);
                            }
                        } else {
                            var foundFrag = void 0, maxFragLookUpTolerance = config.maxFragLookUpTolerance, fragNext = fragPrevious ? fragments[fragPrevious.sn - fragments[0].sn + 1] : void 0, fragmentWithinToleranceTest = function(candidate) {
                                // offset should be within fragment boundary - config.maxFragLookUpTolerance
                                // this is to cope with situations like
                                // bufferEnd = 9.991
                                // frag[Ø] : [0,10]
                                // frag[1] : [10,20]
                                // bufferEnd is within frag[0] range ... although what we are expecting is to return frag[1] here
                                //              frag start               frag start+duration
                                //                  |-----------------------------|
                                //              <--->                         <--->
                                //  ...--------><-----------------------------><---------....
                                // previous frag         matching fragment         next frag
                                //  return -1             return 0                 return 1
                                //logger.log(`level/sn/start/end/bufEnd:${level}/${candidate.sn}/${candidate.start}/${(candidate.start+candidate.duration)}/${bufferEnd}`);
                                // Set the lookup tolerance to be small enough to detect the current segment - ensures we don't skip over very small segments
                                var candidateLookupTolerance = Math.min(maxFragLookUpTolerance, candidate.duration);
                                return candidate.start + candidate.duration - candidateLookupTolerance <= bufferEnd ? 1 : candidate.start - candidateLookupTolerance > bufferEnd && candidate.start ? -1 : 0;
                            };
                            bufferEnd < end ? (bufferEnd > end - maxFragLookUpTolerance && (maxFragLookUpTolerance = 0), 
                            // Prefer the next fragment if it's within tolerance
                            foundFrag = fragNext && !fragmentWithinToleranceTest(fragNext) ? fragNext : _binarySearch2.default.search(fragments, fragmentWithinToleranceTest)) : // reach end of playlist
                            foundFrag = fragments[fragLen - 1], foundFrag && (frag = foundFrag, start = foundFrag.start, 
                            //logger.log('find SN matching with pos:' +  bufferEnd + ':' + frag.sn);
                            fragPrevious && frag.level === fragPrevious.level && frag.sn === fragPrevious.sn && (frag.sn < trackDetails.endSN ? (frag = fragments[frag.sn + 1 - trackDetails.startSN], 
                            _logger.logger.log("SN just loaded, load next one: " + frag.sn)) : frag = null));
                        }
                        if (frag) //logger.log('      loading frag ' + i +',pos/bufEnd:' + pos.toFixed(3) + '/' + bufferEnd.toFixed(3));
                        if (frag.decryptdata && null != frag.decryptdata.uri && null == frag.decryptdata.key) _logger.logger.log("Loading key for " + frag.sn + " of [" + trackDetails.startSN + " ," + trackDetails.endSN + "],track " + trackId), 
                        this.state = State.KEY_LOADING, hls.trigger(_events2.default.KEY_LOADING, {
                            frag: frag
                        }); else {
                            if (_logger.logger.log("Loading " + frag.sn + ", cc: " + frag.cc + " of [" + trackDetails.startSN + " ," + trackDetails.endSN + "],track " + trackId + ", currentTime:" + pos + ",bufferEnd:" + bufferEnd.toFixed(3)), 
                            // ensure that we are not reloading the same fragments in loop ...
                            void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, frag.loadCounter) {
                                frag.loadCounter++;
                                var maxThreshold = config.fragLoadingLoopThreshold;
                                // if this frag has already been loaded 3 times, and if it has been reloaded recently
                                if (frag.loadCounter > maxThreshold && Math.abs(this.fragLoadIdx - frag.loadIdx) < maxThreshold) return void hls.trigger(_events2.default.ERROR, {
                                    type: _errors.ErrorTypes.MEDIA_ERROR,
                                    details: _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR,
                                    fatal: !1,
                                    frag: frag
                                });
                            } else frag.loadCounter = 1;
                            frag.loadIdx = this.fragLoadIdx, this.fragCurrent = frag, this.startFragRequested = !0, 
                            isNaN(frag.sn) || (this.nextLoadPosition = frag.start + frag.duration), hls.trigger(_events2.default.FRAG_LOADING, {
                                frag: frag
                            }), this.state = State.FRAG_LOADING;
                        }
                    }
                    break;

                  case State.WAITING_TRACK:
                    track = this.tracks[this.trackId], // check if playlist is already loaded
                    track && track.details && (this.state = State.IDLE);
                    break;

                  case State.FRAG_LOADING_WAITING_RETRY:
                    var now = performance.now(), retryDate = this.retryDate;
                    media = this.media;
                    var isSeeking = media && media.seeking;
                    // if current time is gt than retryDate, or if media seeking let's switch to IDLE state to retry loading
                    (!retryDate || now >= retryDate || isSeeking) && (_logger.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), 
                    this.state = State.IDLE);
                    break;

                  case State.WAITING_INIT_PTS:
                    var videoTrackCC = this.videoTrackCC;
                    if (void 0 === this.initPTS[videoTrackCC]) break;
                    // Ensure we don't get stuck in the WAITING_INIT_PTS state if the waiting frag CC doesn't match any initPTS
                    var waitingFrag = this.waitingFragment;
                    if (waitingFrag) {
                        var waitingFragCC = waitingFrag.frag.cc;
                        videoTrackCC !== waitingFragCC ? (track = this.tracks[this.trackId], track.details && track.details.live && (_logger.logger.warn("Waiting fragment CC (" + waitingFragCC + ") does not match video track CC (" + videoTrackCC + ")"), 
                        this.waitingFragment = null, this.state = State.IDLE)) : (this.state = State.FRAG_LOADING, 
                        this.onFragLoaded(this.waitingFragment), this.waitingFragment = null);
                    } else this.state = State.IDLE;
                    break;

                  case State.STOPPED:
                  case State.FRAG_LOADING:
                  case State.PARSING:
                  case State.PARSED:
                  case State.ENDED:
                }
            }
        }, {
            key: "onMediaAttached",
            value: function(data) {
                var media = this.media = this.mediaBuffer = data.media;
                this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), 
                media.addEventListener("seeking", this.onvseeking), media.addEventListener("ended", this.onvended);
                var config = this.config;
                this.tracks && config.autoStartLoad && this.startLoad(config.startPosition);
            }
        }, {
            key: "onMediaDetaching",
            value: function() {
                var media = this.media;
                media && media.ended && (_logger.logger.log("MSE detaching and video ended, reset startPosition"), 
                this.startPosition = this.lastCurrentTime = 0);
                // reset fragment loading counter on MSE detaching to avoid reporting FRAG_LOOP_LOADING_ERROR after error recovery
                var tracks = this.tracks;
                tracks && // reset fragment load counter
                tracks.forEach(function(track) {
                    track.details && track.details.fragments.forEach(function(fragment) {
                        fragment.loadCounter = void 0;
                    });
                }), // remove video listeners
                media && (media.removeEventListener("seeking", this.onvseeking), media.removeEventListener("ended", this.onvended), 
                this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, 
                this.loadedmetadata = !1, this.stopLoad();
            }
        }, {
            key: "onMediaSeeking",
            value: function() {
                this.state === State.ENDED && (// switch to IDLE state to check for potential new fragment
                this.state = State.IDLE), this.media && (this.lastCurrentTime = this.media.currentTime), 
                // avoid reporting fragment loop loading error in case user is seeking several times on same position
                void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold), 
                // tick to speed up processing
                this.tick();
            }
        }, {
            key: "onMediaEnded",
            value: function() {
                // reset startPosition and lastCurrentTime to restart playback @ stream beginning
                this.startPosition = this.lastCurrentTime = 0;
            }
        }, {
            key: "onAudioTracksUpdated",
            value: function(data) {
                _logger.logger.log("audio tracks updated"), this.tracks = data.audioTracks;
            }
        }, {
            key: "onAudioTrackSwitching",
            value: function(data) {
                // if any URL found on new audio track, it is an alternate audio track
                var altAudio = !!data.url;
                this.trackId = data.id, this.fragCurrent = null, this.state = State.PAUSED, this.waitingFragment = null, 
                // destroy useless demuxer when switching audio to main
                altAudio ? // switching to audio track, start timer if not already started
                this.timer || (this.timer = setInterval(this.ontick, 100)) : this.demuxer && (this.demuxer.destroy(), 
                this.demuxer = null), //should we switch tracks ?
                altAudio && (this.audioSwitch = !0, //main audio track are handled by stream-controller, just do something if switching to alt audio track
                this.state = State.IDLE, // increase fragment load Index to avoid frag loop loading error after buffer flush
                void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold)), 
                this.tick();
            }
        }, {
            key: "onAudioTrackLoaded",
            value: function(data) {
                var newDetails = data.details, trackId = data.id, track = this.tracks[trackId], duration = newDetails.totalduration, sliding = 0;
                if (_logger.logger.log("track " + trackId + " loaded [" + newDetails.startSN + "," + newDetails.endSN + "],duration:" + duration), 
                newDetails.live) {
                    var curDetails = track.details;
                    curDetails && newDetails.fragments.length > 0 ? (// we already have details for that level, merge them
                    _levelHelper2.default.mergeDetails(curDetails, newDetails), sliding = newDetails.fragments[0].start, 
                    // TODO
                    //this.liveSyncPosition = this.computeLivePosition(sliding, curDetails);
                    newDetails.PTSKnown ? _logger.logger.log("live audio playlist sliding:" + sliding.toFixed(3)) : _logger.logger.log("live audio playlist - outdated PTS, unknown sliding")) : (newDetails.PTSKnown = !1, 
                    _logger.logger.log("live audio playlist - first load, unknown sliding"));
                } else newDetails.PTSKnown = !1;
                // compute start position
                if (track.details = newDetails, !this.startFragRequested) {
                    // compute start position if set to -1. use it straight away if value is defined
                    if (-1 === this.startPosition) {
                        // first, check if start time offset has been set in playlist, if yes, use this value
                        var startTimeOffset = newDetails.startTimeOffset;
                        isNaN(startTimeOffset) ? this.startPosition = 0 : (_logger.logger.log("start time offset found in playlist, adjust startPosition to " + startTimeOffset), 
                        this.startPosition = startTimeOffset);
                    }
                    this.nextLoadPosition = this.startPosition;
                }
                // only switch batck to IDLE state if we were waiting for track to start downloading a new fragment
                this.state === State.WAITING_TRACK && (this.state = State.IDLE), //trigger handler right now
                this.tick();
            }
        }, {
            key: "onKeyLoaded",
            value: function() {
                this.state === State.KEY_LOADING && (this.state = State.IDLE, this.tick());
            }
        }, {
            key: "onFragLoaded",
            value: function(data) {
                var fragCurrent = this.fragCurrent, fragLoaded = data.frag;
                if (this.state === State.FRAG_LOADING && fragCurrent && "audio" === fragLoaded.type && fragLoaded.level === fragCurrent.level && fragLoaded.sn === fragCurrent.sn) {
                    var track = this.tracks[this.trackId], details = track.details, duration = details.totalduration, trackId = fragCurrent.level, sn = fragCurrent.sn, cc = fragCurrent.cc, audioCodec = this.config.defaultAudioCodec || track.audioCodec || "mp4a.40.2", stats = this.stats = data.stats;
                    if ("initSegment" === sn) this.state = State.IDLE, stats.tparsed = stats.tbuffered = performance.now(), 
                    details.initSegment.data = data.payload, this.hls.trigger(_events2.default.FRAG_BUFFERED, {
                        stats: stats,
                        frag: fragCurrent,
                        id: "audio"
                    }), this.tick(); else {
                        this.state = State.PARSING, // transmux the MPEG-TS data to ISO-BMFF segments
                        this.appended = !1, this.demuxer || (this.demuxer = new _demuxer2.default(this.hls, "audio"));
                        //Check if we have video initPTS
                        // If not we need to wait for it
                        var initPTS = this.initPTS[cc], initSegmentData = details.initSegment ? details.initSegment.data : [];
                        if (details.initSegment || void 0 !== initPTS) {
                            this.pendingBuffering = !0, _logger.logger.log("Demuxing " + sn + " of [" + details.startSN + " ," + details.endSN + "],track " + trackId);
                            //details.PTSKnown || !details.live;
                            this.demuxer.push(data.payload, initSegmentData, audioCodec, null, fragCurrent, duration, !1, initPTS);
                        } else _logger.logger.log("unknown video PTS for continuity counter " + cc + ", waiting for video PTS before demuxing audio frag " + sn + " of [" + details.startSN + " ," + details.endSN + "],track " + trackId), 
                        this.waitingFragment = data, this.state = State.WAITING_INIT_PTS;
                    }
                }
                this.fragLoadError = 0;
            }
        }, {
            key: "onFragParsingInitSegment",
            value: function(data) {
                var fragCurrent = this.fragCurrent, fragNew = data.frag;
                if (fragCurrent && "audio" === data.id && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === State.PARSING) {
                    var tracks = data.tracks, track = void 0;
                    if (// delete any video track found on audio demuxer
                    tracks.video && delete tracks.video, // include levelCodec in audio and video tracks
                    track = tracks.audio) {
                        track.levelCodec = track.codec, track.id = data.id, this.hls.trigger(_events2.default.BUFFER_CODECS, tracks), 
                        _logger.logger.log("audio track:audio,container:" + track.container + ",codecs[level/parsed]=[" + track.levelCodec + "/" + track.codec + "]");
                        var initSegment = track.initSegment;
                        if (initSegment) {
                            var appendObj = {
                                type: "audio",
                                data: initSegment,
                                parent: "audio",
                                content: "initSegment"
                            };
                            this.audioSwitch ? this.pendingData = [ appendObj ] : (this.appended = !0, // arm pending Buffering flag before appending a segment
                            this.pendingBuffering = !0, this.hls.trigger(_events2.default.BUFFER_APPENDING, appendObj));
                        }
                        //trigger handler right now
                        this.tick();
                    }
                }
            }
        }, {
            key: "onFragParsingData",
            value: function(data) {
                var _this2 = this, fragCurrent = this.fragCurrent, fragNew = data.frag;
                if (fragCurrent && "audio" === data.id && "audio" === data.type && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === State.PARSING) {
                    var trackId = this.trackId, track = this.tracks[trackId], hls = this.hls;
                    isNaN(data.endPTS) && (data.endPTS = data.startPTS + fragCurrent.duration, data.endDTS = data.startDTS + fragCurrent.duration), 
                    _logger.logger.log("parsed " + data.type + ",PTS:[" + data.startPTS.toFixed(3) + "," + data.endPTS.toFixed(3) + "],DTS:[" + data.startDTS.toFixed(3) + "/" + data.endDTS.toFixed(3) + "],nb:" + data.nb), 
                    _levelHelper2.default.updateFragPTSDTS(track.details, fragCurrent, data.startPTS, data.endPTS);
                    var audioSwitch = this.audioSwitch, media = this.media, appendOnBufferFlush = !1;
                    //Only flush audio from old audio tracks when PTS is known on new audio track
                    if (audioSwitch && media) if (media.readyState) {
                        var currentTime = media.currentTime;
                        _logger.logger.log("switching audio track : currentTime:" + currentTime), currentTime >= data.startPTS && (_logger.logger.log("switching audio track : flushing all audio"), 
                        this.state = State.BUFFER_FLUSHING, hls.trigger(_events2.default.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY,
                            type: "audio"
                        }), appendOnBufferFlush = !0, //Lets announce that the initial audio track switch flush occur
                        this.audioSwitch = !1, hls.trigger(_events2.default.AUDIO_TRACK_SWITCHED, {
                            id: trackId
                        }));
                    } else //Lets announce that the initial audio track switch flush occur
                    this.audioSwitch = !1, hls.trigger(_events2.default.AUDIO_TRACK_SWITCHED, {
                        id: trackId
                    });
                    var pendingData = this.pendingData;
                    this.audioSwitch || ([ data.data1, data.data2 ].forEach(function(buffer) {
                        buffer && buffer.length && pendingData.push({
                            type: data.type,
                            data: buffer,
                            parent: "audio",
                            content: "data"
                        });
                    }), !appendOnBufferFlush && pendingData.length && (pendingData.forEach(function(appendObj) {
                        // only append in PARSING state (rationale is that an appending error could happen synchronously on first segment appending)
                        // in that case it is useless to append following segments
                        _this2.state === State.PARSING && (// arm pending Buffering flag before appending a segment
                        _this2.pendingBuffering = !0, _this2.hls.trigger(_events2.default.BUFFER_APPENDING, appendObj));
                    }), this.pendingData = [], this.appended = !0)), //trigger handler right now
                    this.tick();
                }
            }
        }, {
            key: "onFragParsed",
            value: function(data) {
                var fragCurrent = this.fragCurrent, fragNew = data.frag;
                fragCurrent && "audio" === data.id && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === State.PARSING && (this.stats.tparsed = performance.now(), 
                this.state = State.PARSED, this._checkAppendedParsed());
            }
        }, {
            key: "onBufferCreated",
            value: function(data) {
                var audioTrack = data.tracks.audio;
                audioTrack && (this.mediaBuffer = audioTrack.buffer, this.loadedmetadata = !0);
            }
        }, {
            key: "onBufferAppended",
            value: function(data) {
                if ("audio" === data.parent) {
                    var state = this.state;
                    state !== State.PARSING && state !== State.PARSED || (// check if all buffers have been appended
                    this.pendingBuffering = data.pending > 0, this._checkAppendedParsed());
                }
            }
        }, {
            key: "_checkAppendedParsed",
            value: function() {
                //trigger handler right now
                if (!(this.state !== State.PARSED || this.appended && this.pendingBuffering)) {
                    var frag = this.fragCurrent, stats = this.stats, hls = this.hls;
                    if (frag) {
                        this.fragPrevious = frag, stats.tbuffered = performance.now(), hls.trigger(_events2.default.FRAG_BUFFERED, {
                            stats: stats,
                            frag: frag,
                            id: "audio"
                        });
                        var media = this.mediaBuffer ? this.mediaBuffer : this.media;
                        _logger.logger.log("audio buffered : " + _timeRanges2.default.toString(media.buffered)), 
                        this.audioSwitch && this.appended && (this.audioSwitch = !1, hls.trigger(_events2.default.AUDIO_TRACK_SWITCHED, {
                            id: this.trackId
                        })), this.state = State.IDLE;
                    }
                    this.tick();
                }
            }
        }, {
            key: "onError",
            value: function(data) {
                var frag = data.frag;
                // don't handle frag error not related to audio fragment
                if (!frag || "audio" === frag.type) switch (data.details) {
                  case _errors.ErrorDetails.FRAG_LOAD_ERROR:
                  case _errors.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    if (!data.fatal) {
                        var loadError = this.fragLoadError;
                        loadError ? loadError++ : loadError = 1;
                        var config = this.config;
                        if (loadError <= config.fragLoadingMaxRetry) {
                            this.fragLoadError = loadError, // reset load counter to avoid frag loop loading error
                            frag.loadCounter = 0;
                            // exponential backoff capped to config.fragLoadingMaxRetryTimeout
                            var delay = Math.min(Math.pow(2, loadError - 1) * config.fragLoadingRetryDelay, config.fragLoadingMaxRetryTimeout);
                            _logger.logger.warn("audioStreamController: frag loading failed, retry in " + delay + " ms"), 
                            this.retryDate = performance.now() + delay, // retry loading state
                            this.state = State.FRAG_LOADING_WAITING_RETRY;
                        } else _logger.logger.error("audioStreamController: " + data.details + " reaches max retry, redispatch as fatal ..."), 
                        // switch error to fatal
                        data.fatal = !0, this.state = State.ERROR;
                    }
                    break;

                  case _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                  case _errors.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                  case _errors.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                  case _errors.ErrorDetails.KEY_LOAD_ERROR:
                  case _errors.ErrorDetails.KEY_LOAD_TIMEOUT:
                    //  when in ERROR state, don't switch back to IDLE state in case a non-fatal error is received
                    this.state !== State.ERROR && (// if fatal error, stop processing, otherwise move to IDLE to retry loading
                    this.state = data.fatal ? State.ERROR : State.IDLE, _logger.logger.warn("audioStreamController: " + data.details + " while loading frag,switch to " + this.state + " state ..."));
                    break;

                  case _errors.ErrorDetails.BUFFER_FULL_ERROR:
                    // if in appending state
                    if ("audio" === data.parent && (this.state === State.PARSING || this.state === State.PARSED)) {
                        var media = this.mediaBuffer, currentTime = this.media.currentTime;
                        // reduce max buf len if current position is buffered
                        if (media && _bufferHelper2.default.isBuffered(media, currentTime) && _bufferHelper2.default.isBuffered(media, currentTime + .5)) {
                            var _config = this.config;
                            _config.maxMaxBufferLength >= _config.maxBufferLength && (// reduce max buffer length as it might be too high. we do this to avoid loop flushing ...
                            _config.maxMaxBufferLength /= 2, _logger.logger.warn("audio:reduce max buffer length to " + _config.maxMaxBufferLength + "s"), 
                            // increase fragment load Index to avoid frag loop loading error after buffer flush
                            this.fragLoadIdx += 2 * _config.fragLoadingLoopThreshold), this.state = State.IDLE;
                        } else // current position is not buffered, but browser is still complaining about buffer full error
                        // this happens on IE/Edge, refer to https://github.com/video-dev/hls.js/pull/708
                        // in that case flush the whole audio buffer to recover
                        _logger.logger.warn("buffer full error also media.currentTime is not buffered, flush audio buffer"), 
                        this.fragCurrent = null, // flush everything
                        this.state = State.BUFFER_FLUSHING, this.hls.trigger(_events2.default.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY,
                            type: "audio"
                        });
                    }
                }
            }
        }, {
            key: "onBufferFlushed",
            value: function() {
                var _this3 = this, pendingData = this.pendingData;
                pendingData && pendingData.length ? (_logger.logger.log("appending pending audio data on Buffer Flushed"), 
                pendingData.forEach(function(appendObj) {
                    _this3.hls.trigger(_events2.default.BUFFER_APPENDING, appendObj);
                }), this.appended = !0, this.pendingData = [], this.state = State.PARSED) : (// move to IDLE once flush complete. this should trigger new fragment loading
                this.state = State.IDLE, // reset reference to frag
                this.fragPrevious = null, this.tick());
            }
        }, {
            key: "state",
            set: function(nextState) {
                if (this.state !== nextState) {
                    var previousState = this.state;
                    this._state = nextState, _logger.logger.log("audio stream:" + previousState + "->" + nextState);
                }
            },
            get: function() {
                return this._state;
            }
        } ]), AudioStreamController;
    }(_eventHandler2.default);
    exports.default = AudioStreamController;
}, /* 21 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _logger = __webpack_require__(0), _errors = __webpack_require__(2), AudioTrackController = function(_EventHandler) {
        function AudioTrackController(hls) {
            _classCallCheck(this, AudioTrackController);
            var _this = _possibleConstructorReturn(this, (AudioTrackController.__proto__ || Object.getPrototypeOf(AudioTrackController)).call(this, hls, _events2.default.MANIFEST_LOADING, _events2.default.MANIFEST_LOADED, _events2.default.AUDIO_TRACK_LOADED, _events2.default.ERROR));
            return _this.ticks = 0, _this.ontick = _this.tick.bind(_this), _this;
        }
        return _inherits(AudioTrackController, _EventHandler), _createClass(AudioTrackController, [ {
            key: "destroy",
            value: function() {
                this.cleanTimer(), _eventHandler2.default.prototype.destroy.call(this);
            }
        }, {
            key: "cleanTimer",
            value: function() {
                this.timer && (clearTimeout(this.timer), this.timer = null);
            }
        }, {
            key: "tick",
            value: function() {
                1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), 
                this.ticks = 0);
            }
        }, {
            key: "doTick",
            value: function() {
                this.updateTrack(this.trackId);
            }
        }, {
            key: "onError",
            value: function(data) {
                data.fatal && data.type === _errors.ErrorTypes.NETWORK_ERROR && this.cleanTimer();
            }
        }, {
            key: "onManifestLoading",
            value: function() {
                // reset audio tracks on manifest loading
                this.tracks = [], this.trackId = -1;
            }
        }, {
            key: "onManifestLoaded",
            value: function(data) {
                var _this2 = this, tracks = data.audioTracks || [], defaultFound = !1;
                this.tracks = tracks, this.hls.trigger(_events2.default.AUDIO_TRACKS_UPDATED, {
                    audioTracks: tracks
                });
                // loop through available audio tracks and autoselect default if needed
                var id = 0;
                tracks.forEach(function(track) {
                    if (track.default && !defaultFound) return _this2.audioTrack = id, void (defaultFound = !0);
                    id++;
                }), !1 === defaultFound && tracks.length && (_logger.logger.log("no default audio track defined, use first audio track as default"), 
                this.audioTrack = 0);
            }
        }, {
            key: "onAudioTrackLoaded",
            value: function(data) {
                data.id < this.tracks.length && (_logger.logger.log("audioTrack " + data.id + " loaded"), 
                this.tracks[data.id].details = data.details, // check if current playlist is a live playlist
                data.details.live && !this.timer && (// if live playlist we will have to reload it periodically
                // set reload period to playlist target duration
                this.timer = setInterval(this.ontick, 1e3 * data.details.targetduration)), !data.details.live && this.timer && // playlist is not live and timer is armed : stopping it
                this.cleanTimer());
            }
        }, {
            key: "setAudioTrackInternal",
            value: function(newId) {
                // check if level idx is valid
                if (newId >= 0 && newId < this.tracks.length) {
                    // stopping live reloading timer if any
                    this.cleanTimer(), this.trackId = newId, _logger.logger.log("switching to audioTrack " + newId);
                    var audioTrack = this.tracks[newId], hls = this.hls, type = audioTrack.type, url = audioTrack.url, eventObj = {
                        id: newId,
                        type: type,
                        url: url
                    };
                    // keep AUDIO_TRACK_SWITCH for legacy reason
                    hls.trigger(_events2.default.AUDIO_TRACK_SWITCH, eventObj), hls.trigger(_events2.default.AUDIO_TRACK_SWITCHING, eventObj);
                    // check if we need to load playlist for this audio Track
                    var details = audioTrack.details;
                    !url || void 0 !== details && !0 !== details.live || (// track not retrieved yet, or live playlist we need to (re)load it
                    _logger.logger.log("(re)loading playlist for audioTrack " + newId), hls.trigger(_events2.default.AUDIO_TRACK_LOADING, {
                        url: url,
                        id: newId
                    }));
                }
            }
        }, {
            key: "updateTrack",
            value: function(newId) {
                // check if level idx is valid
                if (newId >= 0 && newId < this.tracks.length) {
                    // stopping live reloading timer if any
                    this.cleanTimer(), this.trackId = newId, _logger.logger.log("updating audioTrack " + newId);
                    var audioTrack = this.tracks[newId], url = audioTrack.url, details = audioTrack.details;
                    !url || void 0 !== details && !0 !== details.live || (// track not retrieved yet, or live playlist we need to (re)load it
                    _logger.logger.log("(re)loading playlist for audioTrack " + newId), this.hls.trigger(_events2.default.AUDIO_TRACK_LOADING, {
                        url: url,
                        id: newId
                    }));
                }
            }
        }, {
            key: "audioTracks",
            get: function() {
                return this.tracks;
            }
        }, {
            key: "audioTrack",
            get: function() {
                return this.trackId;
            },
            set: function(audioTrackId) {
                this.trackId === audioTrackId && void 0 !== this.tracks[audioTrackId].details || this.setAudioTrackInternal(audioTrackId);
            }
        } ]), AudioTrackController;
    }(_eventHandler2.default);
    exports.default = AudioTrackController;
}, /* 22 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _logger = __webpack_require__(0), _errors = __webpack_require__(2), BufferController = function(_EventHandler) {
        function BufferController(hls) {
            _classCallCheck(this, BufferController);
            // the value that we have set mediasource.duration to
            // (the actual duration may be tweaked slighly by the browser)
            var _this = _possibleConstructorReturn(this, (BufferController.__proto__ || Object.getPrototypeOf(BufferController)).call(this, hls, _events2.default.MEDIA_ATTACHING, _events2.default.MEDIA_DETACHING, _events2.default.MANIFEST_PARSED, _events2.default.BUFFER_RESET, _events2.default.BUFFER_APPENDING, _events2.default.BUFFER_CODECS, _events2.default.BUFFER_EOS, _events2.default.BUFFER_FLUSHING, _events2.default.LEVEL_PTS_UPDATED, _events2.default.LEVEL_UPDATED));
            // the value that we want to set mediaSource.duration to
            // Source Buffer listeners
            return _this._msDuration = null, _this._levelDuration = null, _this.onsbue = _this.onSBUpdateEnd.bind(_this), 
            _this.onsbe = _this.onSBUpdateError.bind(_this), _this.pendingTracks = {}, _this.tracks = {}, 
            _this;
        }
        return _inherits(BufferController, _EventHandler), _createClass(BufferController, [ {
            key: "destroy",
            value: function() {
                _eventHandler2.default.prototype.destroy.call(this);
            }
        }, {
            key: "onLevelPtsUpdated",
            value: function(data) {
                var type = data.type, audioTrack = this.tracks.audio;
                // Adjusting `SourceBuffer.timestampOffset` (desired point in the timeline where the next frames should be appended)
                // in Chrome browser when we detect MPEG audio container and time delta between level PTS and `SourceBuffer.timestampOffset`
                // is greater than 100ms (this is enough to handle seek for VOD or level change for LIVE videos). At the time of change we issue
                // `SourceBuffer.abort()` and adjusting `SourceBuffer.timestampOffset` if `SourceBuffer.updating` is false or awaiting `updateend`
                // event if SB is in updating state.
                // More info here: https://github.com/video-dev/hls.js/issues/332#issuecomment-257986486
                if ("audio" === type && audioTrack && "audio/mpeg" === audioTrack.container) {
                    // Chrome audio mp3 track
                    var audioBuffer = this.sourceBuffer.audio;
                    // adjust timestamp offset if time delta is greater than 100ms
                    if (Math.abs(audioBuffer.timestampOffset - data.start) > .1) {
                        var updating = audioBuffer.updating;
                        try {
                            audioBuffer.abort();
                        } catch (err) {
                            updating = !0, _logger.logger.warn("can not abort audio buffer: " + err);
                        }
                        updating ? this.audioTimestampOffset = data.start : (_logger.logger.warn("change mpeg audio timestamp offset from " + audioBuffer.timestampOffset + " to " + data.start), 
                        audioBuffer.timestampOffset = data.start);
                    }
                }
            }
        }, {
            key: "onManifestParsed",
            value: function(data) {
                var audioExpected = data.audio, videoExpected = data.video || data.levels.length && data.audio, sourceBufferNb = 0;
                // in case of alt audio 2 BUFFER_CODECS events will be triggered, one per stream controller
                // sourcebuffers will be created all at once when the expected nb of tracks will be reached
                // in case alt audio is not used, only one BUFFER_CODEC event will be fired from main stream controller
                // it will contain the expected nb of source buffers, no need to compute it
                data.altAudio && (audioExpected || videoExpected) && (sourceBufferNb = (audioExpected ? 1 : 0) + (videoExpected ? 1 : 0), 
                _logger.logger.log(sourceBufferNb + " sourceBuffer(s) expected")), this.sourceBufferNb = sourceBufferNb;
            }
        }, {
            key: "onMediaAttaching",
            value: function(data) {
                var media = this.media = data.media;
                if (media) {
                    // setup the media source
                    var ms = this.mediaSource = new MediaSource();
                    //Media Source listeners
                    this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), 
                    this.onmsc = this.onMediaSourceClose.bind(this), ms.addEventListener("sourceopen", this.onmso), 
                    ms.addEventListener("sourceended", this.onmse), ms.addEventListener("sourceclose", this.onmsc), 
                    // link video and media Source
                    media.src = URL.createObjectURL(ms);
                }
            }
        }, {
            key: "onMediaDetaching",
            value: function() {
                _logger.logger.log("media source detaching");
                var ms = this.mediaSource;
                if (ms) {
                    if ("open" === ms.readyState) try {
                        // endOfStream could trigger exception if any sourcebuffer is in updating state
                        // we don't really care about checking sourcebuffer state here,
                        // as we are anyway detaching the MediaSource
                        // let's just avoid this exception to propagate
                        ms.endOfStream();
                    } catch (err) {
                        _logger.logger.warn("onMediaDetaching:" + err.message + " while calling endOfStream");
                    }
                    ms.removeEventListener("sourceopen", this.onmso), ms.removeEventListener("sourceended", this.onmse), 
                    ms.removeEventListener("sourceclose", this.onmsc), // Detach properly the MediaSource from the HTMLMediaElement as
                    // suggested in https://github.com/w3c/media-source/issues/53.
                    this.media && (URL.revokeObjectURL(this.media.src), this.media.removeAttribute("src"), 
                    this.media.load()), this.mediaSource = null, this.media = null, this.pendingTracks = {}, 
                    this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], 
                    this.appended = 0;
                }
                this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(_events2.default.MEDIA_DETACHED);
            }
        }, {
            key: "onMediaSourceOpen",
            value: function() {
                _logger.logger.log("media source opened"), this.hls.trigger(_events2.default.MEDIA_ATTACHED, {
                    media: this.media
                });
                var mediaSource = this.mediaSource;
                mediaSource && // once received, don't listen anymore to sourceopen event
                mediaSource.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks();
            }
        }, {
            key: "checkPendingTracks",
            value: function() {
                // if any buffer codecs pending, check if we have enough to create sourceBuffers
                var pendingTracks = this.pendingTracks, pendingTracksNb = Object.keys(pendingTracks).length;
                // if any pending tracks and (if nb of pending tracks gt or equal than expected nb or if unknown expected nb)
                pendingTracksNb && (this.sourceBufferNb <= pendingTracksNb || 0 === this.sourceBufferNb) && (// ok, let's create them now !
                this.createSourceBuffers(pendingTracks), this.pendingTracks = {}, // append any pending segments now !
                this.doAppending());
            }
        }, {
            key: "onMediaSourceClose",
            value: function() {
                _logger.logger.log("media source closed");
            }
        }, {
            key: "onMediaSourceEnded",
            value: function() {
                _logger.logger.log("media source ended");
            }
        }, {
            key: "onSBUpdateEnd",
            value: function() {
                // update timestampOffset
                if (this.audioTimestampOffset) {
                    var audioBuffer = this.sourceBuffer.audio;
                    _logger.logger.warn("change mpeg audio timestamp offset from " + audioBuffer.timestampOffset + " to " + this.audioTimestampOffset), 
                    audioBuffer.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset;
                }
                this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1;
                var parent = this.parent, pending = this.segments.reduce(function(counter, segment) {
                    return segment.parent === parent ? counter + 1 : counter;
                }, 0);
                this.hls.trigger(_events2.default.BUFFER_APPENDED, {
                    parent: parent,
                    pending: pending
                }), // don't append in flushing mode
                this._needsFlush || this.doAppending(), this.updateMediaElementDuration();
            }
        }, {
            key: "onSBUpdateError",
            value: function(event) {
                _logger.logger.error("sourceBuffer error:", event), // according to http://www.w3.org/TR/media-source/#sourcebuffer-append-error
                // this error might not always be fatal (it is fatal if decode error is set, in that case
                // it will be followed by a mediaElement error ...)
                this.hls.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.MEDIA_ERROR,
                    details: _errors.ErrorDetails.BUFFER_APPENDING_ERROR,
                    fatal: !1
                });
            }
        }, {
            key: "onBufferReset",
            value: function() {
                var sourceBuffer = this.sourceBuffer;
                for (var type in sourceBuffer) {
                    var sb = sourceBuffer[type];
                    try {
                        this.mediaSource.removeSourceBuffer(sb), sb.removeEventListener("updateend", this.onsbue), 
                        sb.removeEventListener("error", this.onsbe);
                    } catch (err) {}
                }
                this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0;
            }
        }, {
            key: "onBufferCodecs",
            value: function(tracks) {
                // if source buffer(s) not created yet, appended buffer tracks in this.pendingTracks
                // if sourcebuffers already created, do nothing ...
                if (0 === Object.keys(this.sourceBuffer).length) {
                    for (var trackName in tracks) this.pendingTracks[trackName] = tracks[trackName];
                    var mediaSource = this.mediaSource;
                    mediaSource && "open" === mediaSource.readyState && // try to create sourcebuffers if mediasource opened
                    this.checkPendingTracks();
                }
            }
        }, {
            key: "createSourceBuffers",
            value: function(tracks) {
                var sourceBuffer = this.sourceBuffer, mediaSource = this.mediaSource;
                for (var trackName in tracks) if (!sourceBuffer[trackName]) {
                    var track = tracks[trackName], codec = track.levelCodec || track.codec, mimeType = track.container + ";codecs=" + codec;
                    _logger.logger.log("creating sourceBuffer(" + mimeType + ")");
                    try {
                        var sb = sourceBuffer[trackName] = mediaSource.addSourceBuffer(mimeType);
                        sb.addEventListener("updateend", this.onsbue), sb.addEventListener("error", this.onsbe), 
                        this.tracks[trackName] = {
                            codec: codec,
                            container: track.container
                        }, track.buffer = sb;
                    } catch (err) {
                        _logger.logger.error("error while trying to add sourceBuffer:" + err.message), this.hls.trigger(_events2.default.ERROR, {
                            type: _errors.ErrorTypes.MEDIA_ERROR,
                            details: _errors.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                            fatal: !1,
                            err: err,
                            mimeType: mimeType
                        });
                    }
                }
                this.hls.trigger(_events2.default.BUFFER_CREATED, {
                    tracks: tracks
                });
            }
        }, {
            key: "onBufferAppending",
            value: function(data) {
                this._needsFlush || (this.segments ? this.segments.push(data) : this.segments = [ data ], 
                this.doAppending());
            }
        }, {
            key: "onBufferAppendFail",
            value: function(data) {
                _logger.logger.error("sourceBuffer error:", data.event), // according to http://www.w3.org/TR/media-source/#sourcebuffer-append-error
                // this error might not always be fatal (it is fatal if decode error is set, in that case
                // it will be followed by a mediaElement error ...)
                this.hls.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.MEDIA_ERROR,
                    details: _errors.ErrorDetails.BUFFER_APPENDING_ERROR,
                    fatal: !1
                });
            }
        }, {
            key: "onBufferEos",
            value: function(data) {
                var sb = this.sourceBuffer, dataType = data.type;
                for (var type in sb) dataType && type !== dataType || sb[type].ended || (sb[type].ended = !0, 
                _logger.logger.log(type + " sourceBuffer now EOS"));
                this.checkEos();
            }
        }, {
            key: "checkEos",
            value: function() {
                var sb = this.sourceBuffer, mediaSource = this.mediaSource;
                if (!mediaSource || "open" !== mediaSource.readyState) return void (this._needsEos = !1);
                for (var type in sb) {
                    var sbobj = sb[type];
                    if (!sbobj.ended) return;
                    if (sbobj.updating) return void (this._needsEos = !0);
                }
                _logger.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");
                //Notify the media element that it now has all of the media data
                try {
                    mediaSource.endOfStream();
                } catch (e) {
                    _logger.logger.warn("exception while calling mediaSource.endOfStream()");
                }
                this._needsEos = !1;
            }
        }, {
            key: "onBufferFlushing",
            value: function(data) {
                this.flushRange.push({
                    start: data.startOffset,
                    end: data.endOffset,
                    type: data.type
                }), // attempt flush immediatly
                this.flushBufferCounter = 0, this.doFlush();
            }
        }, {
            key: "onLevelUpdated",
            value: function(event) {
                var details = event.details;
                0 !== details.fragments.length && (this._levelDuration = details.totalduration + details.fragments[0].start, 
                this.updateMediaElementDuration());
            }
        }, {
            key: "updateMediaElementDuration",
            value: function() {
                var media = this.media, mediaSource = this.mediaSource, sourceBuffer = this.sourceBuffer, levelDuration = this._levelDuration;
                if (null !== levelDuration && media && mediaSource && sourceBuffer && 0 !== media.readyState && "open" === mediaSource.readyState) {
                    for (var type in sourceBuffer) if (sourceBuffer[type].updating) // can't set duration whilst a buffer is updating
                    return;
                    null === this._msDuration && (// initialise to the value that the media source is reporting
                    this._msDuration = mediaSource.duration);
                    var duration = media.duration;
                    // levelDuration was the last value we set.
                    // not using mediaSource.duration as the browser may tweak this value
                    // only update mediasource duration if its value increase, this is to avoid
                    // flushing already buffered portion when switching between quality level
                    (levelDuration > this._msDuration && levelDuration > duration || duration === 1 / 0 || isNaN(duration)) && (_logger.logger.log("Updating mediasource duration to " + levelDuration.toFixed(3)), 
                    this._msDuration = mediaSource.duration = levelDuration);
                }
            }
        }, {
            key: "doFlush",
            value: function() {
                // loop through all buffer ranges to flush
                for (;this.flushRange.length; ) {
                    var range = this.flushRange[0];
                    // flushBuffer will abort any buffer append in progress and flush Audio/Video Buffer
                    if (!this.flushBuffer(range.start, range.end, range.type)) // avoid looping, wait for SB update end to retrigger a flush
                    return void (this._needsFlush = !0);
                    // range flushed, remove from flush array
                    this.flushRange.shift(), this.flushBufferCounter = 0;
                }
                if (0 === this.flushRange.length) {
                    // everything flushed
                    this._needsFlush = !1;
                    // let's recompute this.appended, which is used to avoid flush looping
                    var appended = 0, sourceBuffer = this.sourceBuffer;
                    try {
                        for (var type in sourceBuffer) appended += sourceBuffer[type].buffered.length;
                    } catch (error) {
                        // error could be thrown while accessing buffered, in case sourcebuffer has already been removed from MediaSource
                        // this is harmess at this stage, catch this to avoid reporting an internal exception
                        _logger.logger.error("error while accessing sourceBuffer.buffered");
                    }
                    this.appended = appended, this.hls.trigger(_events2.default.BUFFER_FLUSHED);
                }
            }
        }, {
            key: "doAppending",
            value: function() {
                var hls = this.hls, sourceBuffer = this.sourceBuffer, segments = this.segments;
                if (Object.keys(sourceBuffer).length) {
                    if (this.media.error) return this.segments = [], void _logger.logger.error("trying to append although a media error occured, flush segment and abort");
                    if (this.appending) //logger.log(`sb appending in progress`);
                    return;
                    if (segments && segments.length) {
                        var segment = segments.shift();
                        try {
                            var type = segment.type, sb = sourceBuffer[type];
                            sb ? sb.updating ? segments.unshift(segment) : (// reset sourceBuffer ended flag before appending segment
                            sb.ended = !1, //logger.log(`appending ${segment.content} ${type} SB, size:${segment.data.length}, ${segment.parent}`);
                            this.parent = segment.parent, sb.appendBuffer(segment.data), this.appendError = 0, 
                            this.appended++, this.appending = !0) : // in case we don't have any source buffer matching with this segment type,
                            // it means that Mediasource fails to create sourcebuffer
                            // discard this segment, and trigger update end
                            this.onSBUpdateEnd();
                        } catch (err) {
                            // in case any error occured while appending, put back segment in segments table
                            _logger.logger.error("error while trying to append buffer:" + err.message), segments.unshift(segment);
                            var event = {
                                type: _errors.ErrorTypes.MEDIA_ERROR,
                                parent: segment.parent
                            };
                            if (22 === err.code) // QuotaExceededError: http://www.w3.org/TR/html5/infrastructure.html#quotaexceedederror
                            // let's stop appending any segments, and report BUFFER_FULL_ERROR error
                            return this.segments = [], event.details = _errors.ErrorDetails.BUFFER_FULL_ERROR, 
                            event.fatal = !1, void hls.trigger(_events2.default.ERROR, event);
                            /* with UHD content, we could get loop of quota exceeded error until
                browser is able to evict some data from sourcebuffer. retrying help recovering this
              */
                            if (this.appendError ? this.appendError++ : this.appendError = 1, event.details = _errors.ErrorDetails.BUFFER_APPEND_ERROR, 
                            this.appendError > hls.config.appendErrorMaxRetry) return _logger.logger.log("fail " + hls.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), 
                            segments = [], event.fatal = !0, void hls.trigger(_events2.default.ERROR, event);
                            event.fatal = !1, hls.trigger(_events2.default.ERROR, event);
                        }
                    }
                }
            }
        }, {
            key: "flushBuffer",
            value: function(startOffset, endOffset, typeIn) {
                var sb, i, bufStart, bufEnd, flushStart, flushEnd, sourceBuffer = this.sourceBuffer;
                if (Object.keys(sourceBuffer).length) {
                    // safeguard to avoid infinite looping : don't try to flush more than the nb of appended segments
                    if (_logger.logger.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + startOffset + "/" + endOffset), 
                    this.flushBufferCounter < this.appended) {
                        for (var type in sourceBuffer) // check if sourcebuffer type is defined (typeIn): if yes, let's only flush this one
                        // if no, let's flush all sourcebuffers
                        if (!typeIn || type === typeIn) {
                            if (sb = sourceBuffer[type], // we are going to flush buffer, mark source buffer as 'not ended'
                            sb.ended = !1, sb.updating) //logger.log('abort ' + type + ' append in progress');
                            // this will abort any appending in progress
                            //sb.abort();
                            return _logger.logger.warn("cannot flush, sb updating in progress"), !1;
                            try {
                                for (i = 0; i < sb.buffered.length; i++) /* sometimes sourcebuffer.remove() does not flush
                     the exact expected time range.
                     to avoid rounding issues/infinite loop,
                     only flush buffer range of length greater than 500ms.
                  */
                                if (bufStart = sb.buffered.start(i), bufEnd = sb.buffered.end(i), // workaround firefox not able to properly flush multiple buffered range.
                                -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && endOffset === Number.POSITIVE_INFINITY ? (flushStart = startOffset, 
                                flushEnd = endOffset) : (flushStart = Math.max(bufStart, startOffset), flushEnd = Math.min(bufEnd, endOffset)), 
                                Math.min(flushEnd, bufEnd) - flushStart > .5) return this.flushBufferCounter++, 
                                _logger.logger.log("flush " + type + " [" + flushStart + "," + flushEnd + "], of [" + bufStart + "," + bufEnd + "], pos:" + this.media.currentTime), 
                                sb.remove(flushStart, flushEnd), !1;
                            } catch (e) {
                                _logger.logger.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource");
                            }
                        }
                    } else _logger.logger.warn("abort flushing too many retries");
                    _logger.logger.log("buffer flushed");
                }
                // everything flushed !
                return !0;
            }
        } ]), BufferController;
    }(_eventHandler2.default);
    exports.default = BufferController;
}, /* 23 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), CapLevelController = function(_EventHandler) {
        function CapLevelController(hls) {
            return _classCallCheck(this, CapLevelController), _possibleConstructorReturn(this, (CapLevelController.__proto__ || Object.getPrototypeOf(CapLevelController)).call(this, hls, _events2.default.FPS_DROP_LEVEL_CAPPING, _events2.default.MEDIA_ATTACHING, _events2.default.MANIFEST_PARSED));
        }
        return _inherits(CapLevelController, _EventHandler), _createClass(CapLevelController, [ {
            key: "destroy",
            value: function() {
                this.hls.config.capLevelToPlayerSize && (this.media = this.restrictedLevels = null, 
                this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer)));
            }
        }, {
            key: "onFpsDropLevelCapping",
            value: function(data) {
                // Don't add a restricted level more than once
                CapLevelController.isLevelAllowed(data.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(data.droppedLevel);
            }
        }, {
            key: "onMediaAttaching",
            value: function(data) {
                this.media = data.media instanceof HTMLVideoElement ? data.media : null;
            }
        }, {
            key: "onManifestParsed",
            value: function(data) {
                var hls = this.hls;
                this.restrictedLevels = [], hls.config.capLevelToPlayerSize && (this.autoLevelCapping = Number.POSITIVE_INFINITY, 
                this.levels = data.levels, hls.firstLevel = this.getMaxLevel(data.firstLevel), clearInterval(this.timer), 
                this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
            }
        }, {
            key: "detectPlayerSize",
            value: function() {
                if (this.media) {
                    var levelsLength = this.levels ? this.levels.length : 0;
                    if (levelsLength) {
                        var hls = this.hls;
                        hls.autoLevelCapping = this.getMaxLevel(levelsLength - 1), hls.autoLevelCapping > this.autoLevelCapping && // if auto level capping has a higher value for the previous one, flush the buffer using nextLevelSwitch
                        // usually happen when the user go to the fullscreen mode.
                        hls.streamController.nextLevelSwitch(), this.autoLevelCapping = hls.autoLevelCapping;
                    }
                }
            }
        }, {
            key: "getMaxLevel",
            value: function(capLevelIndex) {
                var _this2 = this;
                if (!this.levels) return -1;
                var validLevels = this.levels.filter(function(level, index) {
                    return CapLevelController.isLevelAllowed(index, _this2.restrictedLevels) && index <= capLevelIndex;
                });
                return CapLevelController.getMaxLevelByMediaSize(validLevels, this.mediaWidth, this.mediaHeight);
            }
        }, {
            key: "mediaWidth",
            get: function() {
                var width = void 0, media = this.media;
                return media && (width = media.width || media.clientWidth || media.offsetWidth, 
                width *= CapLevelController.contentScaleFactor), width;
            }
        }, {
            key: "mediaHeight",
            get: function() {
                var height = void 0, media = this.media;
                return media && (height = media.height || media.clientHeight || media.offsetHeight, 
                height *= CapLevelController.contentScaleFactor), height;
            }
        } ], [ {
            key: "isLevelAllowed",
            value: function(level) {
                return -1 === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).indexOf(level);
            }
        }, {
            key: "getMaxLevelByMediaSize",
            value: function(levels, width, height) {
                if (!levels || levels && !levels.length) return -1;
                for (var maxLevelIndex = levels.length - 1, i = 0; i < levels.length; i += 1) {
                    var level = levels[i];
                    if ((level.width >= width || level.height >= height) && function(curLevel, nextLevel) {
                        return !nextLevel || (curLevel.width !== nextLevel.width || curLevel.height !== nextLevel.height);
                    }(level, levels[i + 1])) {
                        maxLevelIndex = i;
                        break;
                    }
                }
                return maxLevelIndex;
            }
        }, {
            key: "contentScaleFactor",
            get: function() {
                var pixelRatio = 1;
                try {
                    pixelRatio = window.devicePixelRatio;
                } catch (e) {}
                return pixelRatio;
            }
        } ]), CapLevelController;
    }(_eventHandler2.default);
    exports.default = CapLevelController;
}, /* 24 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _logger = __webpack_require__(0), FPSController = function(_EventHandler) {
        function FPSController(hls) {
            return _classCallCheck(this, FPSController), _possibleConstructorReturn(this, (FPSController.__proto__ || Object.getPrototypeOf(FPSController)).call(this, hls, _events2.default.MEDIA_ATTACHING));
        }
        return _inherits(FPSController, _EventHandler), _createClass(FPSController, [ {
            key: "destroy",
            value: function() {
                this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1;
            }
        }, {
            key: "onMediaAttaching",
            value: function(data) {
                var config = this.hls.config;
                if (config.capLevelOnFPSDrop) {
                    "function" == typeof (this.video = data.media instanceof HTMLVideoElement ? data.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), 
                    clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), config.fpsDroppedMonitoringPeriod);
                }
            }
        }, {
            key: "checkFPS",
            value: function(video, decodedFrames, droppedFrames) {
                var currentTime = performance.now();
                if (decodedFrames) {
                    if (this.lastTime) {
                        var currentPeriod = currentTime - this.lastTime, currentDropped = droppedFrames - this.lastDroppedFrames, currentDecoded = decodedFrames - this.lastDecodedFrames, droppedFPS = 1e3 * currentDropped / currentPeriod, hls = this.hls;
                        if (hls.trigger(_events2.default.FPS_DROP, {
                            currentDropped: currentDropped,
                            currentDecoded: currentDecoded,
                            totalDroppedFrames: droppedFrames
                        }), droppedFPS > 0 && currentDropped > hls.config.fpsDroppedMonitoringThreshold * currentDecoded) {
                            var currentLevel = hls.currentLevel;
                            _logger.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + currentLevel), 
                            currentLevel > 0 && (-1 === hls.autoLevelCapping || hls.autoLevelCapping >= currentLevel) && (currentLevel -= 1, 
                            hls.trigger(_events2.default.FPS_DROP_LEVEL_CAPPING, {
                                level: currentLevel,
                                droppedLevel: hls.currentLevel
                            }), hls.autoLevelCapping = currentLevel, hls.streamController.nextLevelSwitch());
                        }
                    }
                    this.lastTime = currentTime, this.lastDroppedFrames = droppedFrames, this.lastDecodedFrames = decodedFrames;
                }
            }
        }, {
            key: "checkFPSInterval",
            value: function() {
                var video = this.video;
                if (video) if (this.isVideoPlaybackQualityAvailable) {
                    var videoPlaybackQuality = video.getVideoPlaybackQuality();
                    this.checkFPS(video, videoPlaybackQuality.totalVideoFrames, videoPlaybackQuality.droppedVideoFrames);
                } else this.checkFPS(video, video.webkitDecodedFrameCount, video.webkitDroppedFrameCount);
            }
        } ]), FPSController;
    }(_eventHandler2.default);
    exports.default = FPSController;
}, /* 25 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _id = __webpack_require__(6), _id2 = _interopRequireDefault(_id), ID3TrackController = function(_EventHandler) {
        function ID3TrackController(hls) {
            _classCallCheck(this, ID3TrackController);
            var _this = _possibleConstructorReturn(this, (ID3TrackController.__proto__ || Object.getPrototypeOf(ID3TrackController)).call(this, hls, _events2.default.MEDIA_ATTACHED, _events2.default.MEDIA_DETACHING, _events2.default.FRAG_PARSING_METADATA));
            return _this.id3Track = void 0, _this.media = void 0, _this;
        }
        return _inherits(ID3TrackController, _EventHandler), _createClass(ID3TrackController, [ {
            key: "destroy",
            value: function() {
                _eventHandler2.default.prototype.destroy.call(this);
            }
        }, {
            key: "onMediaAttached",
            value: function(data) {
                this.media = data.media, this.media && (this.id3Track = this.media.addTextTrack("metadata", "id3"), 
                this.id3Track.mode = "hidden");
            }
        }, {
            key: "onMediaDetaching",
            value: function() {
                this.media = void 0;
            }
        }, {
            key: "onFragParsingMetadata",
            value: function(data) {
                for (var fragment = data.frag, samples = data.samples, Cue = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, i = 0; i < samples.length; i++) {
                    var frames = _id2.default.getID3Frames(samples[i].data);
                    if (frames) {
                        var startTime = samples[i].pts, endTime = i < samples.length - 1 ? samples[i + 1].pts : fragment.endPTS;
                        // Give a slight bump to the endTime if it's equal to startTime to avoid a SyntaxError in IE
                        startTime === endTime && (endTime += 1e-4);
                        for (var j = 0; j < frames.length; j++) {
                            var frame = frames[j];
                            // Safari doesn't put the timestamp frame in the TextTrack
                            if (!_id2.default.isTimeStampFrame(frame)) {
                                var cue = new Cue(startTime, endTime, "");
                                cue.value = frame, this.id3Track.addCue(cue);
                            }
                        }
                    }
                }
            }
        } ]), ID3TrackController;
    }(_eventHandler2.default);
    exports.default = ID3TrackController;
}, /* 26 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _logger = __webpack_require__(0), _errors = __webpack_require__(2), _bufferHelper = __webpack_require__(4), _bufferHelper2 = _interopRequireDefault(_bufferHelper), LevelController = function(_EventHandler) {
        function LevelController(hls) {
            _classCallCheck(this, LevelController);
            var _this = _possibleConstructorReturn(this, (LevelController.__proto__ || Object.getPrototypeOf(LevelController)).call(this, hls, _events2.default.MANIFEST_LOADED, _events2.default.LEVEL_LOADED, _events2.default.FRAG_LOADED, _events2.default.ERROR));
            return _this.ontick = _this.tick.bind(_this), _this._manualLevel = -1, _this;
        }
        return _inherits(LevelController, _EventHandler), _createClass(LevelController, [ {
            key: "destroy",
            value: function() {
                this.cleanTimer(), this._manualLevel = -1;
            }
        }, {
            key: "cleanTimer",
            value: function() {
                this.timer && (clearTimeout(this.timer), this.timer = null);
            }
        }, {
            key: "startLoad",
            value: function() {
                this.canload = !0;
                var levels = this._levels;
                // clean up live level details to force reload them, and reset load errors
                levels && levels.forEach(function(level) {
                    level.loadError = 0;
                    var levelDetails = level.details;
                    levelDetails && levelDetails.live && (level.details = void 0);
                }), // speed up live playlist refresh if timer exists
                this.timer && this.tick();
            }
        }, {
            key: "stopLoad",
            value: function() {
                this.canload = !1;
            }
        }, {
            key: "onManifestLoaded",
            value: function(data) {
                var bitrateStart, levels0 = [], levels = [], bitrateSet = {}, videoCodecFound = !1, audioCodecFound = !1, hls = this.hls, brokenmp4inmp3 = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), checkSupported = function(type, codec) {
                    return MediaSource.isTypeSupported(type + "/mp4;codecs=" + codec);
                };
                if (// regroup redundant level together
                data.levels.forEach(function(level) {
                    level.videoCodec && (videoCodecFound = !0), // erase audio codec info if browser does not support mp4a.40.34. demuxer will autodetect codec and fallback to mpeg/audio
                    brokenmp4inmp3 && level.audioCodec && -1 !== level.audioCodec.indexOf("mp4a.40.34") && (level.audioCodec = void 0), 
                    (level.audioCodec || level.attrs && level.attrs.AUDIO) && (audioCodecFound = !0);
                    var redundantLevelId = bitrateSet[level.bitrate];
                    void 0 === redundantLevelId ? (bitrateSet[level.bitrate] = levels0.length, level.url = [ level.url ], 
                    level.urlId = 0, levels0.push(level)) : levels0[redundantLevelId].url.push(level.url);
                }), // remove audio-only level if we also have levels with audio+video codecs signalled
                videoCodecFound && audioCodecFound ? levels0.forEach(function(level) {
                    level.videoCodec && levels.push(level);
                }) : levels = levels0, // only keep level with supported audio/video codecs
                levels = levels.filter(function(level) {
                    var audioCodec = level.audioCodec, videoCodec = level.videoCodec;
                    return (!audioCodec || checkSupported("audio", audioCodec)) && (!videoCodec || checkSupported("video", videoCodec));
                }), levels.length) {
                    // start bitrate is the first bitrate of the manifest
                    bitrateStart = levels[0].bitrate, // sort level on bitrate
                    levels.sort(function(a, b) {
                        return a.bitrate - b.bitrate;
                    }), this._levels = levels;
                    // find index of first level in sorted levels
                    for (var i = 0; i < levels.length; i++) if (levels[i].bitrate === bitrateStart) {
                        this._firstLevel = i, _logger.logger.log("manifest loaded," + levels.length + " level(s) found, first bitrate:" + bitrateStart);
                        break;
                    }
                    hls.trigger(_events2.default.MANIFEST_PARSED, {
                        levels: levels,
                        firstLevel: this._firstLevel,
                        stats: data.stats,
                        audio: audioCodecFound,
                        video: videoCodecFound,
                        altAudio: data.audioTracks.length > 0
                    });
                } else hls.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.MEDIA_ERROR,
                    details: _errors.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                    fatal: !0,
                    url: hls.url,
                    reason: "no level with compatible codecs found in manifest"
                });
            }
        }, {
            key: "setLevelInternal",
            value: function(newLevel) {
                var levels = this._levels, hls = this.hls;
                // check if level idx is valid
                if (newLevel >= 0 && newLevel < levels.length) {
                    if (// stopping live reloading timer if any
                    this.cleanTimer(), this._level !== newLevel) {
                        _logger.logger.log("switching to level " + newLevel), this._level = newLevel;
                        var levelProperties = levels[newLevel];
                        levelProperties.level = newLevel, // LEVEL_SWITCH to be deprecated in next major release
                        hls.trigger(_events2.default.LEVEL_SWITCH, levelProperties), hls.trigger(_events2.default.LEVEL_SWITCHING, levelProperties);
                    }
                    var level = levels[newLevel], levelDetails = level.details;
                    // check if we need to load playlist for this level
                    if (!levelDetails || !0 === levelDetails.live) {
                        // level not retrieved yet, or live playlist we need to (re)load it
                        var urlId = level.urlId;
                        hls.trigger(_events2.default.LEVEL_LOADING, {
                            url: level.url[urlId],
                            level: newLevel,
                            id: urlId
                        });
                    }
                } else // invalid level id given, trigger error
                hls.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.OTHER_ERROR,
                    details: _errors.ErrorDetails.LEVEL_SWITCH_ERROR,
                    level: newLevel,
                    fatal: !1,
                    reason: "invalid level idx"
                });
            }
        }, {
            key: "onError",
            value: function(data) {
                if (data.fatal) return void (data.type === _errors.ErrorTypes.NETWORK_ERROR && this.cleanTimer());
                var details = data.details, hls = this.hls, levelId = void 0, level = void 0, levelError = !1;
                // try to recover not fatal errors
                switch (details) {
                  case _errors.ErrorDetails.FRAG_LOAD_ERROR:
                  case _errors.ErrorDetails.FRAG_LOAD_TIMEOUT:
                  case _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                  case _errors.ErrorDetails.KEY_LOAD_ERROR:
                  case _errors.ErrorDetails.KEY_LOAD_TIMEOUT:
                    levelId = data.frag.level;
                    break;

                  case _errors.ErrorDetails.LEVEL_LOAD_ERROR:
                  case _errors.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                    levelId = data.context.level, levelError = !0;
                    break;

                  case _errors.ErrorDetails.REMUX_ALLOC_ERROR:
                    levelId = data.level;
                }
                /* try to switch to a redundant stream if any available.
       * if no redundant stream available, emergency switch down (if in auto mode and current level not 0)
       * otherwise, we cannot recover this network error ...
       */
                if (void 0 !== levelId) {
                    level = this._levels[levelId], level.loadError ? level.loadError++ : level.loadError = 1;
                    // if any redundant streams available and if we haven't try them all (level.loadError is reseted on successful frag/level load.
                    // if level.loadError reaches nbRedundantLevel it means that we tried them all, no hope  => let's switch down
                    var nbRedundantLevel = level.url.length;
                    if (nbRedundantLevel > 1 && level.loadError < nbRedundantLevel) level.urlId = (level.urlId + 1) % nbRedundantLevel, 
                    level.details = void 0, _logger.logger.warn("level controller," + details + " for level " + levelId + ": switching to redundant stream id " + level.urlId); else {
                        if (-1 === this._manualLevel && levelId) _logger.logger.warn("level controller," + details + ": switch-down for next fragment"), 
                        hls.nextAutoLevel = Math.max(0, levelId - 1); else if (level && level.details && level.details.live) _logger.logger.warn("level controller," + details + " on live stream, discard"), 
                        levelError && (// reset this._level so that another call to set level() will retrigger a frag load
                        this._level = void 0); else if (details === _errors.ErrorDetails.LEVEL_LOAD_ERROR || details === _errors.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
                            var media = hls.media, // 0.5 : tolerance needed as some browsers stalls playback before reaching buffered end
                            mediaBuffered = media && _bufferHelper2.default.isBuffered(media, media.currentTime) && _bufferHelper2.default.isBuffered(media, media.currentTime + .5);
                            if (mediaBuffered) {
                                var retryDelay = hls.config.levelLoadingRetryDelay;
                                _logger.logger.warn("level controller," + details + ", but media buffered, retry in " + retryDelay + "ms"), 
                                this.timer = setTimeout(this.ontick, retryDelay), // boolean used to inform stream controller not to switch back to IDLE on non fatal error
                                data.levelRetry = !0;
                            } else _logger.logger.error("cannot recover " + details + " error"), this._level = void 0, 
                            // stopping live reloading timer if any
                            this.cleanTimer(), // switch error to fatal
                            data.fatal = !0;
                        }
                    }
                }
            }
        }, {
            key: "onFragLoaded",
            value: function(data) {
                var fragLoaded = data.frag;
                if (fragLoaded && "main" === fragLoaded.type) {
                    var level = this._levels[fragLoaded.level];
                    level && (level.loadError = 0);
                }
            }
        }, {
            key: "onLevelLoaded",
            value: function(data) {
                var levelId = data.level;
                // only process level loaded events matching with expected level
                if (levelId === this._level) {
                    var curLevel = this._levels[levelId];
                    // reset level load error counter on successful level loaded
                    curLevel.loadError = 0;
                    var newDetails = data.details;
                    // if current playlist is a live playlist, arm a timer to reload it
                    if (newDetails.live) {
                        var reloadInterval = 1e3 * (newDetails.averagetargetduration ? newDetails.averagetargetduration : newDetails.targetduration), curDetails = curLevel.details;
                        curDetails && newDetails.endSN === curDetails.endSN && (// follow HLS Spec, If the client reloads a Playlist file and finds that it has not
                        // changed then it MUST wait for a period of one-half the target
                        // duration before retrying.
                        reloadInterval /= 2, _logger.logger.log("same live playlist, reload twice faster")), 
                        // decrement reloadInterval with level loading delay
                        reloadInterval -= performance.now() - data.stats.trequest, // in any case, don't reload more than every second
                        reloadInterval = Math.max(1e3, Math.round(reloadInterval)), _logger.logger.log("live playlist, reload in " + reloadInterval + " ms"), 
                        this.timer = setTimeout(this.ontick, reloadInterval);
                    } else this.timer = null;
                }
            }
        }, {
            key: "tick",
            value: function() {
                var levelId = this._level;
                if (void 0 !== levelId && this.canload) {
                    var level = this._levels[levelId];
                    if (level && level.url) {
                        var urlId = level.urlId;
                        this.hls.trigger(_events2.default.LEVEL_LOADING, {
                            url: level.url[urlId],
                            level: levelId,
                            id: urlId
                        });
                    }
                }
            }
        }, {
            key: "levels",
            get: function() {
                return this._levels;
            }
        }, {
            key: "level",
            get: function() {
                return this._level;
            },
            set: function(newLevel) {
                var levels = this._levels;
                levels && levels.length > newLevel && (this._level === newLevel && void 0 !== levels[newLevel].details || this.setLevelInternal(newLevel));
            }
        }, {
            key: "manualLevel",
            get: function() {
                return this._manualLevel;
            },
            set: function(newLevel) {
                this._manualLevel = newLevel, void 0 === this._startLevel && (this._startLevel = newLevel), 
                -1 !== newLevel && (this.level = newLevel);
            }
        }, {
            key: "firstLevel",
            get: function() {
                return this._firstLevel;
            },
            set: function(newLevel) {
                this._firstLevel = newLevel;
            }
        }, {
            key: "startLevel",
            get: function() {
                // hls.startLevel takes precedence over config.startLevel
                // if none of these values are defined, fallback on this._firstLevel (first quality level appearing in variant manifest)
                if (void 0 === this._startLevel) {
                    var configStartLevel = this.hls.config.startLevel;
                    return void 0 !== configStartLevel ? configStartLevel : this._firstLevel;
                }
                return this._startLevel;
            },
            set: function(newLevel) {
                this._startLevel = newLevel;
            }
        }, {
            key: "nextLoadLevel",
            get: function() {
                return -1 !== this._manualLevel ? this._manualLevel : this.hls.nextAutoLevel;
            },
            set: function(nextLevel) {
                this.level = nextLevel, -1 === this._manualLevel && (this.hls.nextAutoLevel = nextLevel);
            }
        } ]), LevelController;
    }(_eventHandler2.default);
    exports.default = LevelController;
}, /* 27 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _binarySearch = __webpack_require__(7), _binarySearch2 = _interopRequireDefault(_binarySearch), _bufferHelper = __webpack_require__(4), _bufferHelper2 = _interopRequireDefault(_bufferHelper), _demuxer = __webpack_require__(11), _demuxer2 = _interopRequireDefault(_demuxer), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _levelHelper = __webpack_require__(13), _levelHelper2 = _interopRequireDefault(_levelHelper), _timeRanges = __webpack_require__(14), _timeRanges2 = _interopRequireDefault(_timeRanges), _errors = __webpack_require__(2), _logger = __webpack_require__(0), State = {
        STOPPED: "STOPPED",
        IDLE: "IDLE",
        KEY_LOADING: "KEY_LOADING",
        FRAG_LOADING: "FRAG_LOADING",
        FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
        WAITING_LEVEL: "WAITING_LEVEL",
        PARSING: "PARSING",
        PARSED: "PARSED",
        BUFFER_FLUSHING: "BUFFER_FLUSHING",
        ENDED: "ENDED",
        ERROR: "ERROR"
    }, StreamController = function(_EventHandler) {
        function StreamController(hls) {
            _classCallCheck(this, StreamController);
            var _this = _possibleConstructorReturn(this, (StreamController.__proto__ || Object.getPrototypeOf(StreamController)).call(this, hls, _events2.default.MEDIA_ATTACHED, _events2.default.MEDIA_DETACHING, _events2.default.MANIFEST_LOADING, _events2.default.MANIFEST_PARSED, _events2.default.LEVEL_LOADED, _events2.default.KEY_LOADED, _events2.default.FRAG_LOADED, _events2.default.FRAG_LOAD_EMERGENCY_ABORTED, _events2.default.FRAG_PARSING_INIT_SEGMENT, _events2.default.FRAG_PARSING_DATA, _events2.default.FRAG_PARSED, _events2.default.ERROR, _events2.default.AUDIO_TRACK_SWITCHING, _events2.default.AUDIO_TRACK_SWITCHED, _events2.default.BUFFER_CREATED, _events2.default.BUFFER_APPENDED, _events2.default.BUFFER_FLUSHED));
            return _this.config = hls.config, _this.audioCodecSwap = !1, _this.ticks = 0, _this._state = State.STOPPED, 
            _this.ontick = _this.tick.bind(_this), _this;
        }
        return _inherits(StreamController, _EventHandler), _createClass(StreamController, [ {
            key: "destroy",
            value: function() {
                this.stopLoad(), this.timer && (clearInterval(this.timer), this.timer = null), _eventHandler2.default.prototype.destroy.call(this), 
                this.state = State.STOPPED;
            }
        }, {
            key: "startLoad",
            value: function(startPosition) {
                if (this.levels) {
                    var lastCurrentTime = this.lastCurrentTime, hls = this.hls;
                    if (this.stopLoad(), this.timer || (this.timer = setInterval(this.ontick, 100)), 
                    this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                        // determine load level
                        var startLevel = hls.startLevel;
                        -1 === startLevel && (// -1 : guess start Level by doing a bitrate test by loading first fragment of lowest quality level
                        startLevel = 0, this.bitrateTest = !0), // set new level to playlist loader : this will trigger start level load
                        // hls.nextLoadLevel remains until it is set to a new value or until a new frag is successfully loaded
                        this.level = hls.nextLoadLevel = startLevel, this.loadedmetadata = !1;
                    }
                    // if startPosition undefined but lastCurrentTime set, set startPosition to last currentTime
                    lastCurrentTime > 0 && -1 === startPosition && (_logger.logger.log("override startPosition with lastCurrentTime @" + lastCurrentTime.toFixed(3)), 
                    startPosition = lastCurrentTime), this.state = State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = startPosition, 
                    this.tick();
                } else this.forceStartLoad = !0, this.state = State.STOPPED;
            }
        }, {
            key: "stopLoad",
            value: function() {
                var frag = this.fragCurrent;
                frag && (frag.loader && frag.loader.abort(), this.fragCurrent = null), this.fragPrevious = null, 
                this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = State.STOPPED, 
                this.forceStartLoad = !1;
            }
        }, {
            key: "tick",
            value: function() {
                1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), 
                this.ticks = 0);
            }
        }, {
            key: "doTick",
            value: function() {
                switch (this.state) {
                  case State.ERROR:
                    //don't do anything in error state to avoid breaking further ...
                    break;

                  case State.BUFFER_FLUSHING:
                    // in buffer flushing state, reset fragLoadError counter
                    this.fragLoadError = 0;
                    break;

                  case State.IDLE:
                    this._doTickIdle();
                    break;

                  case State.WAITING_LEVEL:
                    var level = this.levels[this.level];
                    // check if playlist is already loaded
                    level && level.details && (this.state = State.IDLE);
                    break;

                  case State.FRAG_LOADING_WAITING_RETRY:
                    var now = performance.now(), retryDate = this.retryDate;
                    // if current time is gt than retryDate, or if media seeking let's switch to IDLE state to retry loading
                    (!retryDate || now >= retryDate || this.media && this.media.seeking) && (_logger.logger.log("mediaController: retryDate reached, switch back to IDLE state"), 
                    this.state = State.IDLE);
                    break;

                  case State.ERROR:
                  case State.STOPPED:
                  case State.FRAG_LOADING:
                  case State.PARSING:
                  case State.PARSED:
                  case State.ENDED:
                }
                // check buffer
                this._checkBuffer(), // check/update current fragment
                this._checkFragmentChanged();
            }
        }, {
            key: "_doTickIdle",
            value: function() {
                var hls = this.hls, config = hls.config, media = this.media;
                // if video not attached AND
                // start fragment already requested OR start frag prefetch disable
                // exit loop
                // => if start level loaded and media not attached but start frag prefetch is enabled and start frag not requested yet, we will not exit loop
                if (void 0 === this.levelLastLoaded || media || !this.startFragRequested && config.startFragPrefetch) {
                    // if we have not yet loaded any fragment, start loading from start position
                    var pos = void 0;
                    pos = this.loadedmetadata ? media.currentTime : this.nextLoadPosition;
                    // determine next load level
                    var level = hls.nextLoadLevel, levelInfo = this.levels[level];
                    if (levelInfo) {
                        var levelBitrate = levelInfo.bitrate, maxBufLen = void 0;
                        // compute max Buffer Length that we could get from this load level, based on level bitrate. don't buffer more than 60 MB and more than 30s
                        maxBufLen = levelBitrate ? Math.max(8 * config.maxBufferSize / levelBitrate, config.maxBufferLength) : config.maxBufferLength, 
                        maxBufLen = Math.min(maxBufLen, config.maxMaxBufferLength);
                        // determine next candidate fragment to be loaded, based on current position and end of buffer position
                        // ensure up to `config.maxMaxBufferLength` of buffer upfront
                        var bufferInfo = _bufferHelper2.default.bufferInfo(this.mediaBuffer ? this.mediaBuffer : media, pos, config.maxBufferHole), bufferLen = bufferInfo.len;
                        // Stay idle if we are still with buffer margins
                        if (!(bufferLen >= maxBufLen)) {
                            // if buffer length is less than maxBufLen try to load a new fragment ...
                            _logger.logger.trace("buffer length of " + bufferLen.toFixed(3) + " is below max of " + maxBufLen.toFixed(3) + ". checking for more payload ..."), 
                            // set next load level : this will trigger a playlist load if needed
                            this.level = hls.nextLoadLevel = level;
                            var levelDetails = levelInfo.details;
                            // if level info not retrieved yet, switch state and wait for level retrieval
                            // if live playlist, ensure that new playlist has been refreshed to avoid loading/try to load
                            // a useless and outdated fragment (that might even introduce load error if it is already out of the live playlist)
                            if (void 0 === levelDetails || levelDetails.live && this.levelLastLoaded !== level) return void (this.state = State.WAITING_LEVEL);
                            // we just got done loading the final fragment, and currentPos is buffered, and there is no other buffered range after ...
                            // rationale is that in case there are any buffered rangesafter, it means that there are unbuffered portion in between
                            // so we should not switch to ENDED in that case, to be able to buffer themx
                            var fragPrevious = this.fragPrevious;
                            if (!levelDetails.live && fragPrevious && fragPrevious.sn === levelDetails.endSN && bufferLen && !bufferInfo.nextStart) {
                                // if everything (almost) til the end is buffered, let's signal eos
                                // we don't compare exactly media.duration === bufferInfo.end as there could be some subtle media duration difference (audio/video offsets...)
                                // tolerate up to one frag duration to cope with these cases.
                                // also cope with almost zero last frag duration (max last frag duration with 200ms) refer to https://github.com/video-dev/hls.js/pull/657
                                if (Math.min(media.duration, fragPrevious.start + fragPrevious.duration) - Math.max(bufferInfo.end, fragPrevious.start) <= Math.max(.2, fragPrevious.duration)) {
                                    // Finalize the media stream
                                    var data = {};
                                    return this.altAudio && (data.type = "video"), this.hls.trigger(_events2.default.BUFFER_EOS, data), 
                                    void (this.state = State.ENDED);
                                }
                            }
                            // if we have the levelDetails for the selected variant, lets continue enrichen our stream (load keys/fragments or trigger EOS, etc..)
                            this._fetchPayloadOrEos(pos, bufferInfo, levelDetails);
                        }
                    }
                }
            }
        }, {
            key: "_fetchPayloadOrEos",
            value: function(pos, bufferInfo, levelDetails) {
                var fragPrevious = this.fragPrevious, level = this.level, fragments = levelDetails.fragments, fragLen = fragments.length;
                // empty playlist
                if (0 !== fragLen) {
                    // find fragment index, contiguous with end of buffer position
                    var start = fragments[0].start, end = fragments[fragLen - 1].start + fragments[fragLen - 1].duration, bufferEnd = bufferInfo.end, frag = void 0;
                    if (levelDetails.initSegment && !levelDetails.initSegment.data) frag = levelDetails.initSegment; else // in case of live playlist we need to ensure that requested position is not located before playlist start
                    if (levelDetails.live) {
                        var initialLiveManifestSize = this.config.initialLiveManifestSize;
                        if (fragLen < initialLiveManifestSize) return void _logger.logger.warn("Can not start playback of a level, reason: not enough fragments " + fragLen + " < " + initialLiveManifestSize);
                        // if it explicitely returns null don't load any fragment and exit function now
                        if (null === (frag = this._ensureFragmentAtLivePoint(levelDetails, bufferEnd, start, end, fragPrevious, fragments, fragLen))) return;
                    } else // VoD playlist: if bufferEnd before start of playlist, load first fragment
                    bufferEnd < start && (frag = fragments[0]);
                    frag || (frag = this._findFragment(start, fragPrevious, fragLen, fragments, bufferEnd, end, levelDetails)), 
                    frag && this._loadFragmentOrKey(frag, level, levelDetails, pos, bufferEnd);
                }
            }
        }, {
            key: "_ensureFragmentAtLivePoint",
            value: function(levelDetails, bufferEnd, start, end, fragPrevious, fragments, fragLen) {
                var config = this.hls.config, media = this.media, frag = void 0, maxLatency = void 0 !== config.liveMaxLatencyDuration ? config.liveMaxLatencyDuration : config.liveMaxLatencyDurationCount * levelDetails.targetduration;
                if (bufferEnd < Math.max(start - config.maxFragLookUpTolerance, end - maxLatency)) {
                    var liveSyncPosition = this.liveSyncPosition = this.computeLivePosition(start, levelDetails);
                    _logger.logger.log("buffer end: " + bufferEnd.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + liveSyncPosition.toFixed(3)), 
                    bufferEnd = liveSyncPosition, media && media.readyState && media.duration > liveSyncPosition && (media.currentTime = liveSyncPosition), 
                    this.nextLoadPosition = liveSyncPosition;
                }
                // if end of buffer greater than live edge, don't load any fragment
                // this could happen if live playlist intermittently slides in the past.
                // level 1 loaded [182580161,182580167]
                // level 1 loaded [182580162,182580169]
                // Loading 182580168 of [182580162 ,182580169],level 1 ..
                // Loading 182580169 of [182580162 ,182580169],level 1 ..
                // level 1 loaded [182580162,182580168] <============= here we should have bufferEnd > end. in that case break to avoid reloading 182580168
                // level 1 loaded [182580164,182580171]
                //
                // don't return null in case media not loaded yet (readystate === 0)
                if (levelDetails.PTSKnown && bufferEnd > end && media && media.readyState) return null;
                if (this.startFragRequested && !levelDetails.PTSKnown) {
                    /* we are switching level on live playlist, but we don't have any PTS info for that quality level ...
           try to load frag matching with next SN.
           even if SN are not synchronized between playlists, loading this frag will help us
           compute playlist sliding and find the right one after in case it was not the right consecutive one */
                    if (fragPrevious) {
                        var targetSN = fragPrevious.sn + 1;
                        if (targetSN >= levelDetails.startSN && targetSN <= levelDetails.endSN) {
                            var fragNext = fragments[targetSN - levelDetails.startSN];
                            fragPrevious.cc === fragNext.cc && (frag = fragNext, _logger.logger.log("live playlist, switching playlist, load frag with next SN: " + frag.sn));
                        }
                        // next frag SN not available (or not with same continuity counter)
                        // look for a frag sharing the same CC
                        frag || (frag = _binarySearch2.default.search(fragments, function(frag) {
                            return fragPrevious.cc - frag.cc;
                        })) && _logger.logger.log("live playlist, switching playlist, load frag with same CC: " + frag.sn);
                    }
                    frag || (/* we have no idea about which fragment should be loaded.
             so let's load mid fragment. it will help computing playlist sliding and find the right one
          */
                    frag = fragments[Math.min(fragLen - 1, Math.round(fragLen / 2))], _logger.logger.log("live playlist, switching playlist, unknown, load middle frag : " + frag.sn));
                }
                return frag;
            }
        }, {
            key: "_findFragment",
            value: function(start, fragPrevious, fragLen, fragments, bufferEnd, end, levelDetails) {
                var config = this.hls.config, frag = void 0, foundFrag = void 0, maxFragLookUpTolerance = config.maxFragLookUpTolerance, fragNext = fragPrevious ? fragments[fragPrevious.sn - fragments[0].sn + 1] : void 0, fragmentWithinToleranceTest = function(candidate) {
                    // offset should be within fragment boundary - config.maxFragLookUpTolerance
                    // this is to cope with situations like
                    // bufferEnd = 9.991
                    // frag[Ø] : [0,10]
                    // frag[1] : [10,20]
                    // bufferEnd is within frag[0] range ... although what we are expecting is to return frag[1] here
                    //              frag start               frag start+duration
                    //                  |-----------------------------|
                    //              <--->                         <--->
                    //  ...--------><-----------------------------><---------....
                    // previous frag         matching fragment         next frag
                    //  return -1             return 0                 return 1
                    //logger.log(`level/sn/start/end/bufEnd:${level}/${candidate.sn}/${candidate.start}/${(candidate.start+candidate.duration)}/${bufferEnd}`);
                    // Set the lookup tolerance to be small enough to detect the current segment - ensures we don't skip over very small segments
                    var candidateLookupTolerance = Math.min(maxFragLookUpTolerance, candidate.duration);
                    return candidate.start + candidate.duration - candidateLookupTolerance <= bufferEnd ? 1 : candidate.start - candidateLookupTolerance > bufferEnd && candidate.start ? -1 : 0;
                };
                if (bufferEnd < end ? (bufferEnd > end - maxFragLookUpTolerance && (maxFragLookUpTolerance = 0), 
                // Prefer the next fragment if it's within tolerance
                foundFrag = fragNext && !fragmentWithinToleranceTest(fragNext) ? fragNext : _binarySearch2.default.search(fragments, fragmentWithinToleranceTest)) : // reach end of playlist
                foundFrag = fragments[fragLen - 1], foundFrag) {
                    frag = foundFrag;
                    var curSNIdx = frag.sn - levelDetails.startSN, sameLevel = fragPrevious && frag.level === fragPrevious.level, prevFrag = fragments[curSNIdx - 1], nextFrag = fragments[curSNIdx + 1];
                    //logger.log('find SN matching with pos:' +  bufferEnd + ':' + frag.sn);
                    if (fragPrevious && frag.sn === fragPrevious.sn) if (sameLevel && !frag.backtracked) if (frag.sn < levelDetails.endSN) {
                        var deltaPTS = fragPrevious.deltaPTS;
                        // if there is a significant delta between audio and video, larger than max allowed hole,
                        // and if previous remuxed fragment did not start with a keyframe. (fragPrevious.dropped)
                        // let's try to load previous fragment again to get last keyframe
                        // then we will reload again current fragment (that way we should be able to fill the buffer hole ...)
                        deltaPTS && deltaPTS > config.maxBufferHole && fragPrevious.dropped && curSNIdx ? (frag = prevFrag, 
                        _logger.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"), 
                        // decrement previous frag load counter to avoid frag loop loading error when next fragment will get reloaded
                        fragPrevious.loadCounter--) : (frag = nextFrag, _logger.logger.log("SN just loaded, load next one: " + frag.sn));
                    } else frag = null; else frag.backtracked && (// Only backtrack a max of 1 consecutive fragment to prevent sliding back too far when little or no frags start with keyframes
                    nextFrag && nextFrag.backtracked ? (_logger.logger.warn("Already backtracked from fragment " + nextFrag.sn + ", will not backtrack to fragment " + frag.sn + ". Loading fragment " + nextFrag.sn), 
                    frag = nextFrag) : (// If a fragment has dropped frames and it's in a same level/sequence, load the previous fragment to try and find the keyframe
                    // Reset the dropped count now since it won't be reset until we parse the fragment again, which prevents infinite backtracking on the same segment
                    _logger.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), 
                    frag.dropped = 0, prevFrag ? (prevFrag.loadCounter && prevFrag.loadCounter--, frag = prevFrag, 
                    frag.backtracked = !0) : curSNIdx && (// can't backtrack on very first fragment
                    frag = null)));
                }
                return frag;
            }
        }, {
            key: "_loadFragmentOrKey",
            value: function(frag, level, levelDetails, pos, bufferEnd) {
                var hls = this.hls, config = hls.config;
                //logger.log('loading frag ' + i +',pos/bufEnd:' + pos.toFixed(3) + '/' + bufferEnd.toFixed(3));
                if (!frag.decryptdata || null == frag.decryptdata.uri || null != frag.decryptdata.key) {
                    if (_logger.logger.log("Loading " + frag.sn + " of [" + levelDetails.startSN + " ," + levelDetails.endSN + "],level " + level + ", currentTime:" + pos.toFixed(3) + ",bufferEnd:" + bufferEnd.toFixed(3)), 
                    // ensure that we are not reloading the same fragments in loop ...
                    void 0 !== this.fragLoadIdx ? this.fragLoadIdx++ : this.fragLoadIdx = 0, frag.loadCounter) {
                        frag.loadCounter++;
                        var maxThreshold = config.fragLoadingLoopThreshold;
                        // if this frag has already been loaded 3 times, and if it has been reloaded recently
                        if (frag.loadCounter > maxThreshold && Math.abs(this.fragLoadIdx - frag.loadIdx) < maxThreshold) return void hls.trigger(_events2.default.ERROR, {
                            type: _errors.ErrorTypes.MEDIA_ERROR,
                            details: _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR,
                            fatal: !1,
                            frag: frag
                        });
                    } else frag.loadCounter = 1;
                    // lazy demuxer init, as this could take some time ... do it during frag loading
                    return frag.loadIdx = this.fragLoadIdx, this.fragCurrent = frag, this.startFragRequested = !0, 
                    isNaN(frag.sn) || (this.nextLoadPosition = frag.start + frag.duration), frag.autoLevel = hls.autoLevelEnabled, 
                    frag.bitrateTest = this.bitrateTest, hls.trigger(_events2.default.FRAG_LOADING, {
                        frag: frag
                    }), this.demuxer || (this.demuxer = new _demuxer2.default(hls, "main")), void (this.state = State.FRAG_LOADING);
                }
                _logger.logger.log("Loading key for " + frag.sn + " of [" + levelDetails.startSN + " ," + levelDetails.endSN + "],level " + level), 
                this.state = State.KEY_LOADING, hls.trigger(_events2.default.KEY_LOADING, {
                    frag: frag
                });
            }
        }, {
            key: "getBufferedFrag",
            value: function(position) {
                return _binarySearch2.default.search(this._bufferedFrags, function(frag) {
                    return position < frag.startPTS ? -1 : position > frag.endPTS ? 1 : 0;
                });
            }
        }, {
            key: "followingBufferedFrag",
            value: function(frag) {
                return frag ? this.getBufferedFrag(frag.endPTS + .5) : null;
            }
        }, {
            key: "_checkFragmentChanged",
            value: function() {
                var fragPlayingCurrent, currentTime, video = this.media;
                if (video && video.readyState && !1 === video.seeking && (currentTime = video.currentTime, 
                /* if video element is in seeked state, currentTime can only increase.
          (assuming that playback rate is positive ...)
          As sometimes currentTime jumps back to zero after a
          media decode error, check this, to avoid seeking back to
          wrong position after a media decode error
        */
                currentTime > video.playbackRate * this.lastCurrentTime && (this.lastCurrentTime = currentTime), 
                _bufferHelper2.default.isBuffered(video, currentTime) ? fragPlayingCurrent = this.getBufferedFrag(currentTime) : _bufferHelper2.default.isBuffered(video, currentTime + .1) && (/* ensure that FRAG_CHANGED event is triggered at startup,
            when first video frame is displayed and playback is paused.
            add a tolerance of 100ms, in case current position is not buffered,
            check if current pos+100ms is buffered and use that buffer range
            for FRAG_CHANGED event reporting */
                fragPlayingCurrent = this.getBufferedFrag(currentTime + .1)), fragPlayingCurrent)) {
                    var fragPlaying = fragPlayingCurrent;
                    if (fragPlaying !== this.fragPlaying) {
                        this.hls.trigger(_events2.default.FRAG_CHANGED, {
                            frag: fragPlaying
                        });
                        var fragPlayingLevel = fragPlaying.level;
                        this.fragPlaying && this.fragPlaying.level === fragPlayingLevel || this.hls.trigger(_events2.default.LEVEL_SWITCHED, {
                            level: fragPlayingLevel
                        }), this.fragPlaying = fragPlaying;
                    }
                }
            }
        }, {
            key: "immediateLevelSwitch",
            value: function() {
                if (_logger.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {
                    this.immediateSwitch = !0;
                    var media = this.media, previouslyPaused = void 0;
                    media ? (previouslyPaused = media.paused, media.pause()) : // don't restart playback after instant level switch in case media not attached
                    previouslyPaused = !0, this.previouslyPaused = previouslyPaused;
                }
                var fragCurrent = this.fragCurrent;
                fragCurrent && fragCurrent.loader && fragCurrent.loader.abort(), this.fragCurrent = null, 
                // increase fragment load Index to avoid frag loop loading error after buffer flush
                this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, // flush everything
                this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
            }
        }, {
            key: "immediateLevelSwitchEnd",
            value: function() {
                var media = this.media;
                media && media.buffered.length && (this.immediateSwitch = !1, _bufferHelper2.default.isBuffered(media, media.currentTime) && (// only nudge if currentTime is buffered
                media.currentTime -= 1e-4), this.previouslyPaused || media.play());
            }
        }, {
            key: "nextLevelSwitch",
            value: function() {
                /* try to switch ASAP without breaking video playback :
         in order to ensure smooth but quick level switching,
        we need to find the next flushable buffer range
        we should take into account new segment fetch time
      */
                var media = this.media;
                // ensure that media is defined and that metadata are available (to retrieve currentTime)
                if (media && media.readyState) {
                    var fetchdelay = void 0, fragPlayingCurrent = void 0, nextBufferedFrag = void 0;
                    if (// increase fragment load Index to avoid frag loop loading error after buffer flush
                    this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, fragPlayingCurrent = this.getBufferedFrag(media.currentTime), 
                    fragPlayingCurrent && fragPlayingCurrent.startPTS > 1 && // flush buffer preceding current fragment (flush until current fragment start offset)
                    // minus 1s to avoid video freezing, that could happen if we flush keyframe of current video ...
                    this.flushMainBuffer(0, fragPlayingCurrent.startPTS - 1), media.paused) fetchdelay = 0; else {
                        // add a safety delay of 1s
                        var nextLevelId = this.hls.nextLoadLevel, nextLevel = this.levels[nextLevelId], fragLastKbps = this.fragLastKbps;
                        fetchdelay = fragLastKbps && this.fragCurrent ? this.fragCurrent.duration * nextLevel.bitrate / (1e3 * fragLastKbps) + 1 : 0;
                    }
                    if ((//logger.log('fetchdelay:'+fetchdelay);
                    // find buffer range that will be reached once new fragment will be fetched
                    nextBufferedFrag = this.getBufferedFrag(media.currentTime + fetchdelay)) && (// we can flush buffer range following this one without stalling playback
                    nextBufferedFrag = this.followingBufferedFrag(nextBufferedFrag))) {
                        // if we are here, we can also cancel any loading/demuxing in progress, as they are useless
                        var fragCurrent = this.fragCurrent;
                        fragCurrent && fragCurrent.loader && fragCurrent.loader.abort(), this.fragCurrent = null, 
                        // start flush position is the start PTS of next buffered frag.
                        // we use frag.naxStartPTS which is max(audio startPTS, video startPTS).
                        // in case there is a small PTS Delta between audio and video, using maxStartPTS avoids flushing last samples from current fragment
                        this.flushMainBuffer(nextBufferedFrag.maxStartPTS, Number.POSITIVE_INFINITY);
                    }
                }
            }
        }, {
            key: "flushMainBuffer",
            value: function(startOffset, endOffset) {
                this.state = State.BUFFER_FLUSHING;
                var flushScope = {
                    startOffset: startOffset,
                    endOffset: endOffset
                };
                // if alternate audio tracks are used, only flush video, otherwise flush everything
                this.altAudio && (flushScope.type = "video"), this.hls.trigger(_events2.default.BUFFER_FLUSHING, flushScope);
            }
        }, {
            key: "onMediaAttached",
            value: function(data) {
                var media = this.media = this.mediaBuffer = data.media;
                this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), 
                this.onvended = this.onMediaEnded.bind(this), media.addEventListener("seeking", this.onvseeking), 
                media.addEventListener("seeked", this.onvseeked), media.addEventListener("ended", this.onvended);
                var config = this.config;
                this.levels && config.autoStartLoad && this.hls.startLoad(config.startPosition);
            }
        }, {
            key: "onMediaDetaching",
            value: function() {
                var media = this.media;
                media && media.ended && (_logger.logger.log("MSE detaching and video ended, reset startPosition"), 
                this.startPosition = this.lastCurrentTime = 0);
                // reset fragment loading counter on MSE detaching to avoid reporting FRAG_LOOP_LOADING_ERROR after error recovery
                var levels = this.levels;
                levels && // reset fragment load counter
                levels.forEach(function(level) {
                    level.details && level.details.fragments.forEach(function(fragment) {
                        fragment.loadCounter = void 0, fragment.backtracked = void 0;
                    });
                }), // remove video listeners
                media && (media.removeEventListener("seeking", this.onvseeking), media.removeEventListener("seeked", this.onvseeked), 
                media.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), 
                this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad();
            }
        }, {
            key: "onMediaSeeking",
            value: function() {
                var media = this.media, currentTime = media ? media.currentTime : void 0, config = this.config;
                isNaN(currentTime) || _logger.logger.log("media seeking to " + currentTime.toFixed(3));
                var mediaBuffer = this.mediaBuffer ? this.mediaBuffer : media, bufferInfo = _bufferHelper2.default.bufferInfo(mediaBuffer, currentTime, this.config.maxBufferHole);
                if (this.state === State.FRAG_LOADING) {
                    var fragCurrent = this.fragCurrent;
                    // check if we are seeking to a unbuffered area AND if frag loading is in progress
                    if (0 === bufferInfo.len && fragCurrent) {
                        var tolerance = config.maxFragLookUpTolerance, fragStartOffset = fragCurrent.start - tolerance, fragEndOffset = fragCurrent.start + fragCurrent.duration + tolerance;
                        // check if we seek position will be out of currently loaded frag range : if out cancel frag load, if in, don't do anything
                        currentTime < fragStartOffset || currentTime > fragEndOffset ? (fragCurrent.loader && (_logger.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), 
                        fragCurrent.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, 
                        // switch to IDLE state to load new fragment
                        this.state = State.IDLE) : _logger.logger.log("seeking outside of buffer but within currently loaded fragment range");
                    }
                } else this.state === State.ENDED && (// if seeking to unbuffered area, clean up fragPrevious
                0 === bufferInfo.len && (this.fragPrevious = 0), // switch to IDLE state to check for potential new fragment
                this.state = State.IDLE);
                media && (this.lastCurrentTime = currentTime), // avoid reporting fragment loop loading error in case user is seeking several times on same position
                this.state !== State.FRAG_LOADING && void 0 !== this.fragLoadIdx && (this.fragLoadIdx += 2 * config.fragLoadingLoopThreshold), 
                // in case seeking occurs although no media buffered, adjust startPosition and nextLoadPosition to seek target
                this.loadedmetadata || (this.nextLoadPosition = this.startPosition = currentTime), 
                // tick to speed up processing
                this.tick();
            }
        }, {
            key: "onMediaSeeked",
            value: function() {
                var media = this.media, currentTime = media ? media.currentTime : void 0;
                isNaN(currentTime) || _logger.logger.log("media seeked to " + currentTime.toFixed(3)), 
                // tick to speed up FRAGMENT_PLAYING triggering
                this.tick();
            }
        }, {
            key: "onMediaEnded",
            value: function() {
                _logger.logger.log("media ended"), // reset startPosition and lastCurrentTime to restart playback @ stream beginning
                this.startPosition = this.lastCurrentTime = 0;
            }
        }, {
            key: "onManifestLoading",
            value: function() {
                // reset buffer on manifest loading
                _logger.logger.log("trigger BUFFER_RESET"), this.hls.trigger(_events2.default.BUFFER_RESET), 
                this._bufferedFrags = [], this.stalled = !1, this.startPosition = this.lastCurrentTime = 0;
            }
        }, {
            key: "onManifestParsed",
            value: function(data) {
                var codec, aac = !1, heaac = !1;
                data.levels.forEach(function(level) {
                    // detect if we have different kind of audio codecs used amongst playlists
                    (codec = level.audioCodec) && (-1 !== codec.indexOf("mp4a.40.2") && (aac = !0), 
                    -1 !== codec.indexOf("mp4a.40.5") && (heaac = !0));
                }), this.audioCodecSwitch = aac && heaac, this.audioCodecSwitch && _logger.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), 
                this.levels = data.levels, this.startLevelLoaded = !1, this.startFragRequested = !1;
                var config = this.config;
                (config.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(config.startPosition);
            }
        }, {
            key: "onLevelLoaded",
            value: function(data) {
                var newDetails = data.details, newLevelId = data.level, curLevel = this.levels[newLevelId], duration = newDetails.totalduration, sliding = 0;
                if (_logger.logger.log("level " + newLevelId + " loaded [" + newDetails.startSN + "," + newDetails.endSN + "],duration:" + duration), 
                this.levelLastLoaded = newLevelId, newDetails.live) {
                    var curDetails = curLevel.details;
                    curDetails && newDetails.fragments.length > 0 ? (// we already have details for that level, merge them
                    _levelHelper2.default.mergeDetails(curDetails, newDetails), sliding = newDetails.fragments[0].start, 
                    this.liveSyncPosition = this.computeLivePosition(sliding, curDetails), newDetails.PTSKnown ? _logger.logger.log("live playlist sliding:" + sliding.toFixed(3)) : _logger.logger.log("live playlist - outdated PTS, unknown sliding")) : (newDetails.PTSKnown = !1, 
                    _logger.logger.log("live playlist - first load, unknown sliding"));
                } else newDetails.PTSKnown = !1;
                if (// override level info
                curLevel.details = newDetails, this.hls.trigger(_events2.default.LEVEL_UPDATED, {
                    details: newDetails,
                    level: newLevelId
                }), !1 === this.startFragRequested) {
                    // compute start position if set to -1. use it straight away if value is defined
                    if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                        // first, check if start time offset has been set in playlist, if yes, use this value
                        var startTimeOffset = newDetails.startTimeOffset;
                        isNaN(startTimeOffset) ? // if live playlist, set start position to be fragment N-this.config.liveSyncDurationCount (usually 3)
                        newDetails.live ? (this.startPosition = this.computeLivePosition(sliding, newDetails), 
                        _logger.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0 : (startTimeOffset < 0 && (_logger.logger.log("negative start time offset " + startTimeOffset + ", count from end of last fragment"), 
                        startTimeOffset = sliding + duration + startTimeOffset), _logger.logger.log("start time offset found in playlist, adjust startPosition to " + startTimeOffset), 
                        this.startPosition = startTimeOffset), this.lastCurrentTime = this.startPosition;
                    }
                    this.nextLoadPosition = this.startPosition;
                }
                // only switch batck to IDLE state if we were waiting for level to start downloading a new fragment
                this.state === State.WAITING_LEVEL && (this.state = State.IDLE), //trigger handler right now
                this.tick();
            }
        }, {
            key: "onKeyLoaded",
            value: function() {
                this.state === State.KEY_LOADING && (this.state = State.IDLE, this.tick());
            }
        }, {
            key: "onFragLoaded",
            value: function(data) {
                var fragCurrent = this.fragCurrent, fragLoaded = data.frag;
                if (this.state === State.FRAG_LOADING && fragCurrent && "main" === fragLoaded.type && fragLoaded.level === fragCurrent.level && fragLoaded.sn === fragCurrent.sn) {
                    var stats = data.stats, currentLevel = this.levels[fragCurrent.level], details = currentLevel.details;
                    // if this frag was loaded to perform a bitrate test AND if hls.nextLoadLevel is greater than 0
                    // then this means that we should be able to load a fragment at a higher quality level
                    if (_logger.logger.log("Loaded  " + fragCurrent.sn + " of [" + details.startSN + " ," + details.endSN + "],level " + fragCurrent.level), 
                    // reset frag bitrate test in any case after frag loaded event
                    this.bitrateTest = !1, this.stats = stats, !0 === fragLoaded.bitrateTest && this.hls.nextLoadLevel) // switch back to IDLE state ... we just loaded a fragment to determine adequate start bitrate and initialize autoswitch algo
                    this.state = State.IDLE, this.startFragRequested = !1, stats.tparsed = stats.tbuffered = performance.now(), 
                    this.hls.trigger(_events2.default.FRAG_BUFFERED, {
                        stats: stats,
                        frag: fragCurrent,
                        id: "main"
                    }), this.tick(); else if ("initSegment" === fragLoaded.sn) this.state = State.IDLE, 
                    stats.tparsed = stats.tbuffered = performance.now(), details.initSegment.data = data.payload, 
                    this.hls.trigger(_events2.default.FRAG_BUFFERED, {
                        stats: stats,
                        frag: fragCurrent,
                        id: "main"
                    }), this.tick(); else {
                        this.state = State.PARSING;
                        // transmux the MPEG-TS data to ISO-BMFF segments
                        var duration = details.totalduration, level = fragCurrent.level, sn = fragCurrent.sn, audioCodec = this.config.defaultAudioCodec || currentLevel.audioCodec;
                        this.audioCodecSwap && (_logger.logger.log("swapping playlist audio codec"), void 0 === audioCodec && (audioCodec = this.lastAudioCodec), 
                        audioCodec && (audioCodec = -1 !== audioCodec.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), 
                        this.pendingBuffering = !0, this.appended = !1, _logger.logger.log("Parsing " + sn + " of [" + details.startSN + " ," + details.endSN + "],level " + level + ", cc " + fragCurrent.cc);
                        var demuxer = this.demuxer;
                        demuxer || (demuxer = this.demuxer = new _demuxer2.default(this.hls, "main"));
                        // time Offset is accurate if level PTS is known, or if playlist is not sliding (not live) and if media is not seeking (this is to overcome potential timestamp drifts between playlists and fragments)
                        var media = this.media, mediaSeeking = media && media.seeking, accurateTimeOffset = !mediaSeeking && (details.PTSKnown || !details.live), initSegmentData = details.initSegment ? details.initSegment.data : [];
                        demuxer.push(data.payload, initSegmentData, audioCodec, currentLevel.videoCodec, fragCurrent, duration, accurateTimeOffset, void 0);
                    }
                }
                this.fragLoadError = 0;
            }
        }, {
            key: "onFragParsingInitSegment",
            value: function(data) {
                var fragCurrent = this.fragCurrent, fragNew = data.frag;
                if (fragCurrent && "main" === data.id && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === State.PARSING) {
                    var trackName, track, tracks = data.tracks;
                    if (// if audio track is expected to come from audio stream controller, discard any coming from main
                    tracks.audio && this.altAudio && delete tracks.audio, // include levelCodec in audio and video tracks
                    track = tracks.audio) {
                        var audioCodec = this.levels[this.level].audioCodec, ua = navigator.userAgent.toLowerCase();
                        audioCodec && this.audioCodecSwap && (_logger.logger.log("swapping playlist audio codec"), 
                        audioCodec = -1 !== audioCodec.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 
                        // in case AAC and HE-AAC audio codecs are signalled in manifest
                        // force HE-AAC , as it seems that most browsers prefers that way,
                        // except for mono streams OR on FF
                        // these conditions might need to be reviewed ...
                        this.audioCodecSwitch && 1 !== track.metadata.channelCount && // don't force HE-AAC if firefox
                        -1 === ua.indexOf("firefox") && (audioCodec = "mp4a.40.5"), // HE-AAC is broken on Android, always signal audio codec as AAC even if variant manifest states otherwise
                        -1 !== ua.indexOf("android") && "audio/mpeg" !== track.container && (// Exclude mpeg audio
                        audioCodec = "mp4a.40.2", _logger.logger.log("Android: force audio codec to " + audioCodec)), 
                        track.levelCodec = audioCodec, track.id = data.id;
                    }
                    track = tracks.video, track && (track.levelCodec = this.levels[this.level].videoCodec, 
                    track.id = data.id), this.hls.trigger(_events2.default.BUFFER_CODECS, tracks);
                    // loop through tracks that are going to be provided to bufferController
                    for (trackName in tracks) {
                        track = tracks[trackName], _logger.logger.log("main track:" + trackName + ",container:" + track.container + ",codecs[level/parsed]=[" + track.levelCodec + "/" + track.codec + "]");
                        var initSegment = track.initSegment;
                        initSegment && (this.appended = !0, // arm pending Buffering flag before appending a segment
                        this.pendingBuffering = !0, this.hls.trigger(_events2.default.BUFFER_APPENDING, {
                            type: trackName,
                            data: initSegment,
                            parent: "main",
                            content: "initSegment"
                        }));
                    }
                    //trigger handler right now
                    this.tick();
                }
            }
        }, {
            key: "onFragParsingData",
            value: function(data) {
                var _this2 = this, fragCurrent = this.fragCurrent, fragNew = data.frag;
                if (fragCurrent && "main" === data.id && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && ("audio" !== data.type || !this.altAudio) && // filter out main audio if audio track is loaded through audio stream controller
                this.state === State.PARSING) {
                    var level = this.levels[this.level], frag = fragCurrent;
                    // Detect gaps in a fragment  and try to fix it by finding a keyframe in the previous fragment (see _findFragments)
                    if (isNaN(data.endPTS) && (data.endPTS = data.startPTS + fragCurrent.duration, data.endDTS = data.startDTS + fragCurrent.duration), 
                    _logger.logger.log("Parsed " + data.type + ",PTS:[" + data.startPTS.toFixed(3) + "," + data.endPTS.toFixed(3) + "],DTS:[" + data.startDTS.toFixed(3) + "/" + data.endDTS.toFixed(3) + "],nb:" + data.nb + ",dropped:" + (data.dropped || 0)), 
                    "video" === data.type) if (frag.dropped = data.dropped, frag.dropped) {
                        if (!frag.backtracked) // Return back to the IDLE state without appending to buffer
                        // Causes findFragments to backtrack a segment and find the keyframe
                        // Audio fragments arriving before video sets the nextLoadPosition, causing _findFragments to skip the backtracked fragment
                        return _logger.logger.warn("missing video frame(s), backtracking fragment"), frag.backtracked = !0, 
                        this.nextLoadPosition = data.startPTS, this.state = State.IDLE, this.fragPrevious = frag, 
                        void this.tick();
                        _logger.logger.warn("Already backtracked on this fragment, appending with the gap");
                    } else // Only reset the backtracked flag if we've loaded the frag without any dropped frames
                    frag.backtracked = !1;
                    var drift = _levelHelper2.default.updateFragPTSDTS(level.details, frag, data.startPTS, data.endPTS, data.startDTS, data.endDTS), hls = this.hls;
                    hls.trigger(_events2.default.LEVEL_PTS_UPDATED, {
                        details: level.details,
                        level: this.level,
                        drift: drift,
                        type: data.type,
                        start: data.startPTS,
                        end: data.endPTS
                    }), // has remuxer dropped video frames located before first keyframe ?
                    [ data.data1, data.data2 ].forEach(function(buffer) {
                        // only append in PARSING state (rationale is that an appending error could happen synchronously on first segment appending)
                        // in that case it is useless to append following segments
                        buffer && buffer.length && _this2.state === State.PARSING && (_this2.appended = !0, 
                        // arm pending Buffering flag before appending a segment
                        _this2.pendingBuffering = !0, hls.trigger(_events2.default.BUFFER_APPENDING, {
                            type: data.type,
                            data: buffer,
                            parent: "main",
                            content: "data"
                        }));
                    }), //trigger handler right now
                    this.tick();
                }
            }
        }, {
            key: "onFragParsed",
            value: function(data) {
                var fragCurrent = this.fragCurrent, fragNew = data.frag;
                fragCurrent && "main" === data.id && fragNew.sn === fragCurrent.sn && fragNew.level === fragCurrent.level && this.state === State.PARSING && (this.stats.tparsed = performance.now(), 
                this.state = State.PARSED, this._checkAppendedParsed());
            }
        }, {
            key: "onAudioTrackSwitching",
            value: function(data) {
                // if any URL found on new audio track, it is an alternate audio track
                var altAudio = !!data.url, trackId = data.id;
                // if we switch on main audio, ensure that main fragment scheduling is synced with media.buffered
                // don't do anything if we switch to alt audio: audio stream controller is handling it.
                // we will just have to change buffer scheduling on audioTrackSwitched
                if (!altAudio) {
                    if (this.mediaBuffer !== this.media) {
                        _logger.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), 
                        this.mediaBuffer = this.media;
                        var fragCurrent = this.fragCurrent;
                        // we need to refill audio buffer from main: cancel any frag loading to speed up audio switch
                        fragCurrent.loader && (_logger.logger.log("switching to main audio track, cancel main fragment load"), 
                        fragCurrent.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, 
                        // destroy demuxer to force init segment generation (following audio switch)
                        this.demuxer && (this.demuxer.destroy(), this.demuxer = null), // switch to IDLE state to load new fragment
                        this.state = State.IDLE;
                    }
                    var hls = this.hls;
                    // switching to main audio, flush all audio and trigger track switched
                    hls.trigger(_events2.default.BUFFER_FLUSHING, {
                        startOffset: 0,
                        endOffset: Number.POSITIVE_INFINITY,
                        type: "audio"
                    }), hls.trigger(_events2.default.AUDIO_TRACK_SWITCHED, {
                        id: trackId
                    }), this.altAudio = !1;
                }
            }
        }, {
            key: "onAudioTrackSwitched",
            value: function(data) {
                var trackId = data.id, altAudio = !!this.hls.audioTracks[trackId].url;
                if (altAudio) {
                    var videoBuffer = this.videoBuffer;
                    // if we switched on alternate audio, ensure that main fragment scheduling is synced with video sourcebuffer buffered
                    videoBuffer && this.mediaBuffer !== videoBuffer && (_logger.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), 
                    this.mediaBuffer = videoBuffer);
                }
                this.altAudio = altAudio, this.tick();
            }
        }, {
            key: "onBufferCreated",
            value: function(data) {
                var tracks = data.tracks, mediaTrack = void 0, name = void 0, alternate = !1;
                for (var type in tracks) {
                    var track = tracks[type];
                    "main" === track.id ? (name = type, mediaTrack = track, // keep video source buffer reference
                    "video" === type && (this.videoBuffer = tracks[type].buffer)) : alternate = !0;
                }
                alternate && mediaTrack ? (_logger.logger.log("alternate track found, use " + name + ".buffered to schedule main fragment loading"), 
                this.mediaBuffer = mediaTrack.buffer) : this.mediaBuffer = this.media;
            }
        }, {
            key: "onBufferAppended",
            value: function(data) {
                if ("main" === data.parent) {
                    var state = this.state;
                    state !== State.PARSING && state !== State.PARSED || (// check if all buffers have been appended
                    this.pendingBuffering = data.pending > 0, this._checkAppendedParsed());
                }
            }
        }, {
            key: "_checkAppendedParsed",
            value: function() {
                //trigger handler right now
                if (!(this.state !== State.PARSED || this.appended && this.pendingBuffering)) {
                    var frag = this.fragCurrent;
                    if (frag) {
                        var media = this.mediaBuffer ? this.mediaBuffer : this.media;
                        _logger.logger.log("main buffered : " + _timeRanges2.default.toString(media.buffered));
                        // filter fragments potentially evicted from buffer. this is to avoid memleak on live streams
                        var bufferedFrags = this._bufferedFrags.filter(function(frag) {
                            return _bufferHelper2.default.isBuffered(media, (frag.startPTS + frag.endPTS) / 2);
                        });
                        // push new range
                        bufferedFrags.push(frag), // sort frags, as we use BinarySearch for lookup in getBufferedFrag ...
                        this._bufferedFrags = bufferedFrags.sort(function(a, b) {
                            return a.startPTS - b.startPTS;
                        }), this.fragPrevious = frag;
                        var stats = this.stats;
                        stats.tbuffered = performance.now(), // we should get rid of this.fragLastKbps
                        this.fragLastKbps = Math.round(8 * stats.total / (stats.tbuffered - stats.tfirst)), 
                        this.hls.trigger(_events2.default.FRAG_BUFFERED, {
                            stats: stats,
                            frag: frag,
                            id: "main"
                        }), this.state = State.IDLE;
                    }
                    this.tick();
                }
            }
        }, {
            key: "onError",
            value: function(data) {
                var frag = data.frag || this.fragCurrent;
                // don't handle frag error not related to main fragment
                if (!frag || "main" === frag.type) {
                    var media = this.media, // 0.5 : tolerance needed as some browsers stalls playback before reaching buffered end
                    mediaBuffered = media && _bufferHelper2.default.isBuffered(media, media.currentTime) && _bufferHelper2.default.isBuffered(media, media.currentTime + .5);
                    switch (data.details) {
                      case _errors.ErrorDetails.FRAG_LOAD_ERROR:
                      case _errors.ErrorDetails.FRAG_LOAD_TIMEOUT:
                      case _errors.ErrorDetails.KEY_LOAD_ERROR:
                      case _errors.ErrorDetails.KEY_LOAD_TIMEOUT:
                        if (!data.fatal) {
                            var loadError = this.fragLoadError;
                            loadError ? loadError++ : loadError = 1;
                            var config = this.config;
                            // keep retrying / don't raise fatal network error if current position is buffered or if in automode with current level not 0
                            if (loadError <= config.fragLoadingMaxRetry || mediaBuffered || frag.autoLevel && frag.level) {
                                this.fragLoadError = loadError, // reset load counter to avoid frag loop loading error
                                frag.loadCounter = 0;
                                // exponential backoff capped to config.fragLoadingMaxRetryTimeout
                                var delay = Math.min(Math.pow(2, loadError - 1) * config.fragLoadingRetryDelay, config.fragLoadingMaxRetryTimeout);
                                _logger.logger.warn("mediaController: frag loading failed, retry in " + delay + " ms"), 
                                this.retryDate = performance.now() + delay, // retry loading state
                                // if loadedmetadata is not set, it means that we are emergency switch down on first frag
                                // in that case, reset startFragRequested flag
                                this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), 
                                this.state = State.FRAG_LOADING_WAITING_RETRY;
                            } else _logger.logger.error("mediaController: " + data.details + " reaches max retry, redispatch as fatal ..."), 
                            // switch error to fatal
                            data.fatal = !0, this.state = State.ERROR;
                        }
                        break;

                      case _errors.ErrorDetails.FRAG_LOOP_LOADING_ERROR:
                        data.fatal || (// if buffer is not empty
                        mediaBuffered ? (// try to reduce max buffer length : rationale is that we could get
                        // frag loop loading error because of buffer eviction
                        this._reduceMaxBufferLength(frag.duration), this.state = State.IDLE) : // buffer empty. report as fatal if in manual mode or if lowest level.
                        // level controller takes care of emergency switch down logic
                        frag.autoLevel && 0 !== frag.level || (// switch error to fatal
                        data.fatal = !0, this.state = State.ERROR));
                        break;

                      case _errors.ErrorDetails.LEVEL_LOAD_ERROR:
                      case _errors.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                        this.state !== State.ERROR && (data.fatal ? (// if fatal error, stop processing
                        this.state = State.ERROR, _logger.logger.warn("streamController: " + data.details + ",switch to " + this.state + " state ...")) : // in case of non fatal error while loading level, if level controller is not retrying to load level , switch back to IDLE
                        data.levelRetry || this.state !== State.WAITING_LEVEL || (this.state = State.IDLE));
                        break;

                      case _errors.ErrorDetails.BUFFER_FULL_ERROR:
                        // if in appending state
                        "main" !== data.parent || this.state !== State.PARSING && this.state !== State.PARSED || (// reduce max buf len if current position is buffered
                        mediaBuffered ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = State.IDLE) : (// current position is not buffered, but browser is still complaining about buffer full error
                        // this happens on IE/Edge, refer to https://github.com/video-dev/hls.js/pull/708
                        // in that case flush the whole buffer to recover
                        _logger.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), 
                        this.fragCurrent = null, // flush everything
                        this.flushMainBuffer(0, Number.POSITIVE_INFINITY)));
                    }
                }
            }
        }, {
            key: "_reduceMaxBufferLength",
            value: function(minLength) {
                var config = this.config;
                config.maxMaxBufferLength >= minLength && (// reduce max buffer length as it might be too high. we do this to avoid loop flushing ...
                config.maxMaxBufferLength /= 2, _logger.logger.warn("main:reduce max buffer length to " + config.maxMaxBufferLength + "s"), 
                // increase fragment load Index to avoid frag loop loading error after buffer flush
                this.fragLoadIdx += 2 * config.fragLoadingLoopThreshold);
            }
        }, {
            key: "_checkBuffer",
            value: function() {
                var media = this.media, config = this.config;
                // if ready state different from HAVE_NOTHING (numeric value 0), we are allowed to seek
                if (media && media.readyState) {
                    var currentTime = media.currentTime, mediaBuffer = this.mediaBuffer ? this.mediaBuffer : media, buffered = mediaBuffer.buffered;
                    // adjust currentTime to start position on loaded metadata
                    if (!this.loadedmetadata && buffered.length) {
                        this.loadedmetadata = !0;
                        // only adjust currentTime if different from startPosition or if startPosition not buffered
                        // at that stage, there should be only one buffered range, as we reach that code after first fragment has been buffered
                        var startPosition = media.seeking ? currentTime : this.startPosition, startPositionBuffered = _bufferHelper2.default.isBuffered(mediaBuffer, startPosition), firstbufferedPosition = buffered.start(0);
                        // if currentTime not matching with expected startPosition or startPosition not buffered
                        (currentTime !== startPosition || !startPositionBuffered && Math.abs(startPosition - firstbufferedPosition) < config.maxSeekHole) && (_logger.logger.log("target start position:" + startPosition), 
                        // if startPosition not buffered, let's seek to buffered.start(0)
                        startPositionBuffered || (startPosition = firstbufferedPosition, _logger.logger.log("target start position not buffered, seek to buffered.start(0) " + startPosition)), 
                        _logger.logger.log("adjust currentTime from " + currentTime + " to " + startPosition), 
                        media.currentTime = startPosition);
                    } else if (this.immediateSwitch) this.immediateLevelSwitchEnd(); else {
                        var bufferInfo = _bufferHelper2.default.bufferInfo(media, currentTime, 0), expectedPlaying = !(media.paused || // not playing when media is paused
                        media.ended || // not playing when media is ended
                        0 === media.buffered.length), // tolerance needed as some browsers stalls playback before reaching buffered range end
                        playheadMoving = currentTime !== this.lastCurrentTime;
                        if (playheadMoving) // played moving, but was previously stalled => now not stuck anymore
                        this.stallReported && (_logger.logger.warn("playback not stuck anymore @" + currentTime + ", after " + Math.round(performance.now() - this.stalled) + "ms"), 
                        this.stallReported = !1), this.stalled = void 0, this.nudgeRetry = 0; else // playhead not moving
                        if (expectedPlaying) {
                            // playhead not moving BUT media expected to play
                            var tnow = performance.now(), hls = this.hls;
                            if (this.stalled) {
                                // playback already stalled, check stalling duration
                                // if stalling for more than a given threshold, let's try to recover
                                var stalledDuration = tnow - this.stalled, bufferLen = bufferInfo.len, nudgeRetry = this.nudgeRetry || 0;
                                // have we reached stall deadline ?
                                if (bufferLen <= .5 && stalledDuration > 1e3 * config.lowBufferWatchdogPeriod) {
                                    // report stalled error once
                                    this.stallReported || (this.stallReported = !0, _logger.logger.warn("playback stalling in low buffer @" + currentTime), 
                                    hls.trigger(_events2.default.ERROR, {
                                        type: _errors.ErrorTypes.MEDIA_ERROR,
                                        details: _errors.ErrorDetails.BUFFER_STALLED_ERROR,
                                        fatal: !1,
                                        buffer: bufferLen
                                    }));
                                    // if buffer len is below threshold, try to jump to start of next buffer range if close
                                    // no buffer available @ currentTime, check if next buffer is close (within a config.maxSeekHole second range)
                                    var nextBufferStart = bufferInfo.nextStart, delta = nextBufferStart - currentTime;
                                    if (nextBufferStart && delta < config.maxSeekHole && delta > 0) {
                                        this.nudgeRetry = ++nudgeRetry;
                                        var nudgeOffset = nudgeRetry * config.nudgeOffset;
                                        // next buffer is close ! adjust currentTime to nextBufferStart
                                        // this will ensure effective video decoding
                                        _logger.logger.log("adjust currentTime from " + media.currentTime + " to next buffered @ " + nextBufferStart + " + nudge " + nudgeOffset), 
                                        media.currentTime = nextBufferStart + nudgeOffset, // reset stalled so to rearm watchdog timer
                                        this.stalled = void 0, hls.trigger(_events2.default.ERROR, {
                                            type: _errors.ErrorTypes.MEDIA_ERROR,
                                            details: _errors.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                            fatal: !1,
                                            hole: nextBufferStart + nudgeOffset - currentTime
                                        });
                                    }
                                } else if (bufferLen > .5 && stalledDuration > 1e3 * config.highBufferWatchdogPeriod) if (// report stalled error once
                                this.stallReported || (this.stallReported = !0, _logger.logger.warn("playback stalling in high buffer @" + currentTime), 
                                hls.trigger(_events2.default.ERROR, {
                                    type: _errors.ErrorTypes.MEDIA_ERROR,
                                    details: _errors.ErrorDetails.BUFFER_STALLED_ERROR,
                                    fatal: !1,
                                    buffer: bufferLen
                                })), // reset stalled so to rearm watchdog timer
                                this.stalled = void 0, this.nudgeRetry = ++nudgeRetry, nudgeRetry < config.nudgeMaxRetry) {
                                    var _currentTime = media.currentTime, targetTime = _currentTime + nudgeRetry * config.nudgeOffset;
                                    _logger.logger.log("adjust currentTime from " + _currentTime + " to " + targetTime), 
                                    // playback stalled in buffered area ... let's nudge currentTime to try to overcome this
                                    media.currentTime = targetTime, hls.trigger(_events2.default.ERROR, {
                                        type: _errors.ErrorTypes.MEDIA_ERROR,
                                        details: _errors.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                                        fatal: !1
                                    });
                                } else _logger.logger.error("still stuck in high buffer @" + currentTime + " after " + config.nudgeMaxRetry + ", raise fatal error"), 
                                hls.trigger(_events2.default.ERROR, {
                                    type: _errors.ErrorTypes.MEDIA_ERROR,
                                    details: _errors.ErrorDetails.BUFFER_STALLED_ERROR,
                                    fatal: !0
                                });
                            } else // stall just detected, store current time
                            this.stalled = tnow, this.stallReported = !1;
                        }
                    }
                }
            }
        }, {
            key: "onFragLoadEmergencyAborted",
            value: function() {
                this.state = State.IDLE, // if loadedmetadata is not set, it means that we are emergency switch down on first frag
                // in that case, reset startFragRequested flag
                this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), 
                this.tick();
            }
        }, {
            key: "onBufferFlushed",
            value: function() {
                /* after successful buffer flushing, filter flushed fragments from bufferedFrags
        use mediaBuffered instead of media (so that we will check against video.buffered ranges in case of alt audio track)
      */
                var media = this.mediaBuffer ? this.mediaBuffer : this.media;
                this._bufferedFrags = this._bufferedFrags.filter(function(frag) {
                    return _bufferHelper2.default.isBuffered(media, (frag.startPTS + frag.endPTS) / 2);
                }), // increase fragment load Index to avoid frag loop loading error after buffer flush
                this.fragLoadIdx += 2 * this.config.fragLoadingLoopThreshold, // move to IDLE once flush complete. this should trigger new fragment loading
                this.state = State.IDLE, // reset reference to frag
                this.fragPrevious = null;
            }
        }, {
            key: "swapAudioCodec",
            value: function() {
                this.audioCodecSwap = !this.audioCodecSwap;
            }
        }, {
            key: "computeLivePosition",
            value: function(sliding, levelDetails) {
                var targetLatency = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * levelDetails.targetduration;
                return sliding + Math.max(0, levelDetails.totalduration - targetLatency);
            }
        }, {
            key: "state",
            set: function(nextState) {
                if (this.state !== nextState) {
                    var previousState = this.state;
                    this._state = nextState, _logger.logger.log("main stream:" + previousState + "->" + nextState), 
                    this.hls.trigger(_events2.default.STREAM_STATE_TRANSITION, {
                        previousState: previousState,
                        nextState: nextState
                    });
                }
            },
            get: function() {
                return this._state;
            }
        }, {
            key: "currentLevel",
            get: function() {
                var media = this.media;
                if (media) {
                    var frag = this.getBufferedFrag(media.currentTime);
                    if (frag) return frag.level;
                }
                return -1;
            }
        }, {
            key: "nextBufferedFrag",
            get: function() {
                var media = this.media;
                return media ? this.followingBufferedFrag(this.getBufferedFrag(media.currentTime)) : null;
            }
        }, {
            key: "nextLevel",
            get: function() {
                var frag = this.nextBufferedFrag;
                return frag ? frag.level : -1;
            }
        }, {
            key: "liveSyncPosition",
            get: function() {
                return this._liveSyncPosition;
            },
            set: function(value) {
                this._liveSyncPosition = value;
            }
        } ]), StreamController;
    }(_eventHandler2.default);
    exports.default = StreamController;
}, /* 28 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _logger = __webpack_require__(0), SubtitleStreamController = function(_EventHandler) {
        function SubtitleStreamController(hls) {
            _classCallCheck(this, SubtitleStreamController);
            var _this = _possibleConstructorReturn(this, (SubtitleStreamController.__proto__ || Object.getPrototypeOf(SubtitleStreamController)).call(this, hls, _events2.default.ERROR, _events2.default.SUBTITLE_TRACKS_UPDATED, _events2.default.SUBTITLE_TRACK_SWITCH, _events2.default.SUBTITLE_TRACK_LOADED, _events2.default.SUBTITLE_FRAG_PROCESSED));
            return _this.config = hls.config, _this.vttFragSNsProcessed = {}, _this.vttFragQueues = void 0, 
            _this.currentlyProcessing = null, _this.currentTrackId = -1, _this;
        }
        return _inherits(SubtitleStreamController, _EventHandler), _createClass(SubtitleStreamController, [ {
            key: "destroy",
            value: function() {
                _eventHandler2.default.prototype.destroy.call(this);
            }
        }, {
            key: "clearVttFragQueues",
            value: function() {
                var _this2 = this;
                this.vttFragQueues = {}, this.tracks.forEach(function(track) {
                    _this2.vttFragQueues[track.id] = [];
                });
            }
        }, {
            key: "nextFrag",
            value: function() {
                if (null === this.currentlyProcessing && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {
                    var frag = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
                    this.hls.trigger(_events2.default.FRAG_LOADING, {
                        frag: frag
                    });
                }
            }
        }, {
            key: "onSubtitleFragProcessed",
            value: function(data) {
                data.success && this.vttFragSNsProcessed[data.frag.trackId].push(data.frag.sn), 
                this.currentlyProcessing = null, this.nextFrag();
            }
        }, {
            key: "onError",
            value: function(data) {
                var frag = data.frag;
                // don't handle frag error not related to subtitle fragment
                frag && "subtitle" !== frag.type || this.currentlyProcessing && (this.currentlyProcessing = null, 
                this.nextFrag());
            }
        }, {
            key: "onSubtitleTracksUpdated",
            value: function(data) {
                var _this3 = this;
                _logger.logger.log("subtitle tracks updated"), this.tracks = data.subtitleTracks, 
                this.clearVttFragQueues(), this.vttFragSNsProcessed = {}, this.tracks.forEach(function(track) {
                    _this3.vttFragSNsProcessed[track.id] = [];
                });
            }
        }, {
            key: "onSubtitleTrackSwitch",
            value: function(data) {
                this.currentTrackId = data.id, this.clearVttFragQueues();
            }
        }, {
            key: "onSubtitleTrackLoaded",
            value: function(data) {
                var processedFragSNs = this.vttFragSNsProcessed[data.id], fragQueue = this.vttFragQueues[data.id], currentFragSN = this.currentlyProcessing ? this.currentlyProcessing.sn : -1, alreadyProcessed = function(frag) {
                    return processedFragSNs.indexOf(frag.sn) > -1;
                }, alreadyInQueue = function(frag) {
                    return fragQueue.some(function(fragInQueue) {
                        return fragInQueue.sn === frag.sn;
                    });
                };
                // Add all fragments that haven't been, aren't currently being and aren't waiting to be processed, to queue.
                data.details.fragments.forEach(function(frag) {
                    alreadyProcessed(frag) || frag.sn === currentFragSN || alreadyInQueue(frag) || (// Frags don't know their subtitle track ID, so let's just add that...
                    frag.trackId = data.id, fragQueue.push(frag));
                }), this.nextFrag();
            }
        } ]), SubtitleStreamController;
    }(_eventHandler2.default);
    exports.default = SubtitleStreamController;
}, /* 29 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    /*
   * audio track controller
  */
    function filterSubtitleTracks(textTrackList) {
        for (var tracks = [], i = 0; i < textTrackList.length; i++) "subtitles" === textTrackList[i].kind && tracks.push(textTrackList[i]);
        return tracks;
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _logger = __webpack_require__(0), SubtitleTrackController = function(_EventHandler) {
        function SubtitleTrackController(hls) {
            _classCallCheck(this, SubtitleTrackController);
            var _this = _possibleConstructorReturn(this, (SubtitleTrackController.__proto__ || Object.getPrototypeOf(SubtitleTrackController)).call(this, hls, _events2.default.MEDIA_ATTACHED, _events2.default.MEDIA_DETACHING, _events2.default.MANIFEST_LOADING, _events2.default.MANIFEST_LOADED, _events2.default.SUBTITLE_TRACK_LOADED));
            return _this.tracks = [], _this.trackId = -1, _this.media = void 0, _this;
        }
        return _inherits(SubtitleTrackController, _EventHandler), _createClass(SubtitleTrackController, [ {
            key: "_onTextTracksChanged",
            value: function() {
                // Media is undefined when switching streams via loadSource()
                if (this.media) {
                    for (var trackId = -1, tracks = filterSubtitleTracks(this.media.textTracks), id = 0; id < tracks.length; id++) "showing" === tracks[id].mode && (trackId = id);
                    // Setting current subtitleTrack will invoke code.
                    this.subtitleTrack = trackId;
                }
            }
        }, {
            key: "destroy",
            value: function() {
                _eventHandler2.default.prototype.destroy.call(this);
            }
        }, {
            key: "onMediaAttached",
            value: function(data) {
                this.media = data.media, this.media && (this.trackChangeListener = this._onTextTracksChanged.bind(this), 
                this.media.textTracks.addEventListener("change", this.trackChangeListener));
            }
        }, {
            key: "onMediaDetaching",
            value: function() {
                this.media && (this.media.textTracks.removeEventListener("change", this.trackChangeListener), 
                this.media = void 0);
            }
        }, {
            key: "onManifestLoading",
            value: function() {
                this.tracks = [], this.trackId = -1;
            }
        }, {
            key: "onManifestLoaded",
            value: function(data) {
                var _this2 = this, tracks = data.subtitles || [], defaultFound = !1;
                this.tracks = tracks, this.trackId = -1, this.hls.trigger(_events2.default.SUBTITLE_TRACKS_UPDATED, {
                    subtitleTracks: tracks
                }), // loop through available subtitle tracks and autoselect default if needed
                // TODO: improve selection logic to handle forced, etc
                tracks.forEach(function(track) {
                    track.default && (_this2.subtitleTrack = track.id, defaultFound = !0);
                });
            }
        }, {
            key: "onTick",
            value: function() {
                var trackId = this.trackId, subtitleTrack = this.tracks[trackId];
                if (subtitleTrack) {
                    var details = subtitleTrack.details;
                    // check if we need to load playlist for this subtitle Track
                    void 0 !== details && !0 !== details.live || (// track not retrieved yet, or live playlist we need to (re)load it
                    _logger.logger.log("(re)loading playlist for subtitle track " + trackId), this.hls.trigger(_events2.default.SUBTITLE_TRACK_LOADING, {
                        url: subtitleTrack.url,
                        id: trackId
                    }));
                }
            }
        }, {
            key: "onSubtitleTrackLoaded",
            value: function(data) {
                var _this3 = this;
                data.id < this.tracks.length && (_logger.logger.log("subtitle track " + data.id + " loaded"), 
                this.tracks[data.id].details = data.details, // check if current playlist is a live playlist
                data.details.live && !this.timer && (// if live playlist we will have to reload it periodically
                // set reload period to playlist target duration
                this.timer = setInterval(function() {
                    _this3.onTick();
                }, 1e3 * data.details.targetduration, this)), !data.details.live && this.timer && (// playlist is not live and timer is armed : stopping it
                clearInterval(this.timer), this.timer = null));
            }
        }, {
            key: "setSubtitleTrackInternal",
            value: function(newId) {
                // check if level idx is valid
                if (newId >= 0 && newId < this.tracks.length) {
                    // stopping live reloading timer if any
                    this.timer && (clearInterval(this.timer), this.timer = null), this.trackId = newId, 
                    _logger.logger.log("switching to subtitle track " + newId);
                    var subtitleTrack = this.tracks[newId];
                    this.hls.trigger(_events2.default.SUBTITLE_TRACK_SWITCH, {
                        id: newId
                    });
                    // check if we need to load playlist for this subtitle Track
                    var details = subtitleTrack.details;
                    void 0 !== details && !0 !== details.live || (// track not retrieved yet, or live playlist we need to (re)load it
                    _logger.logger.log("(re)loading playlist for subtitle track " + newId), this.hls.trigger(_events2.default.SUBTITLE_TRACK_LOADING, {
                        url: subtitleTrack.url,
                        id: newId
                    }));
                }
            }
        }, {
            key: "subtitleTracks",
            get: function() {
                return this.tracks;
            }
        }, {
            key: "subtitleTrack",
            get: function() {
                return this.trackId;
            },
            set: function(subtitleTrackId) {
                this.trackId !== subtitleTrackId && // || this.tracks[subtitleTrackId].details === undefined) {
                this.setSubtitleTrackInternal(subtitleTrackId);
            }
        } ]), SubtitleTrackController;
    }(_eventHandler2.default);
    exports.default = SubtitleTrackController;
}, /* 30 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    /*
   * Timeline Controller
  */
    function clearCurrentCues(track) {
        if (track && track.cues) for (;track.cues.length > 0; ) track.removeCue(track.cues[0]);
    }
    function reuseVttTextTrack(inUseTrack, manifestTrack) {
        return inUseTrack && inUseTrack.label === manifestTrack.name && !(inUseTrack.textTrack1 || inUseTrack.textTrack2);
    }
    function intersection(x1, x2, y1, y2) {
        return Math.min(x2, y2) - Math.max(x1, y1);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _cea608Parser = __webpack_require__(50), _cea608Parser2 = _interopRequireDefault(_cea608Parser), _webvttParser = __webpack_require__(56), _webvttParser2 = _interopRequireDefault(_webvttParser), _logger = __webpack_require__(0), TimelineController = function(_EventHandler) {
        function TimelineController(hls) {
            _classCallCheck(this, TimelineController);
            var _this = _possibleConstructorReturn(this, (TimelineController.__proto__ || Object.getPrototypeOf(TimelineController)).call(this, hls, _events2.default.MEDIA_ATTACHING, _events2.default.MEDIA_DETACHING, _events2.default.FRAG_PARSING_USERDATA, _events2.default.MANIFEST_LOADING, _events2.default.MANIFEST_LOADED, _events2.default.FRAG_LOADED, _events2.default.LEVEL_SWITCHING, _events2.default.INIT_PTS_FOUND));
            if (_this.hls = hls, _this.config = hls.config, _this.enabled = !0, _this.Cues = hls.config.cueHandler, 
            _this.textTracks = [], _this.tracks = [], _this.unparsedVttFrags = [], _this.initPTS = void 0, 
            _this.cueRanges = [], _this.config.enableCEA708Captions) {
                var self = _this, sendAddTrackEvent = function(track, media) {
                    var e = null;
                    try {
                        e = new window.Event("addtrack");
                    } catch (err) {
                        //for IE11
                        e = document.createEvent("Event"), e.initEvent("addtrack", !1, !1);
                    }
                    e.track = track, media.dispatchEvent(e);
                }, channel1 = {
                    newCue: function(startTime, endTime, screen) {
                        if (!self.textTrack1) {
                            //Enable reuse of existing text track.
                            var existingTrack1 = self.getExistingTrack("1");
                            if (existingTrack1) self.textTrack1 = existingTrack1, clearCurrentCues(self.textTrack1), 
                            sendAddTrackEvent(self.textTrack1, self.media); else {
                                var textTrack1 = self.createTextTrack("captions", self.config.captionsTextTrack1Label, self.config.captionsTextTrack1LanguageCode);
                                textTrack1 && (textTrack1.textTrack1 = !0, self.textTrack1 = textTrack1);
                            }
                        }
                        self.addCues("textTrack1", startTime, endTime, screen);
                    }
                }, channel2 = {
                    newCue: function(startTime, endTime, screen) {
                        if (!self.textTrack2) {
                            //Enable reuse of existing text track.
                            var existingTrack2 = self.getExistingTrack("2");
                            if (existingTrack2) self.textTrack2 = existingTrack2, clearCurrentCues(self.textTrack2), 
                            sendAddTrackEvent(self.textTrack2, self.media); else {
                                var textTrack2 = self.createTextTrack("captions", self.config.captionsTextTrack2Label, self.config.captionsTextTrack1LanguageCode);
                                textTrack2 && (textTrack2.textTrack2 = !0, self.textTrack2 = textTrack2);
                            }
                        }
                        self.addCues("textTrack2", startTime, endTime, screen);
                    }
                };
                _this.cea608Parser = new _cea608Parser2.default(0, channel1, channel2);
            }
            return _this;
        }
        return _inherits(TimelineController, _EventHandler), _createClass(TimelineController, [ {
            key: "addCues",
            value: function(channel, startTime, endTime, screen) {
                for (var ranges = this.cueRanges, merged = !1, i = ranges.length; i--; ) {
                    var cueRange = ranges[i], overlap = intersection(cueRange[0], cueRange[1], startTime, endTime);
                    if (overlap >= 0 && (cueRange[0] = Math.min(cueRange[0], startTime), cueRange[1] = Math.max(cueRange[1], endTime), 
                    merged = !0, overlap / (endTime - startTime) > .5)) return;
                }
                merged || ranges.push([ startTime, endTime ]), this.Cues.newCue(this[channel], startTime, endTime, screen);
            }
        }, {
            key: "onInitPtsFound",
            value: function(data) {
                var _this2 = this;
                void 0 === this.initPTS && (this.initPTS = data.initPTS), // Due to asynchrony, initial PTS may arrive later than the first VTT fragments are loaded.
                // Parse any unparsed fragments upon receiving the initial PTS.
                this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach(function(frag) {
                    _this2.onFragLoaded(frag);
                }), this.unparsedVttFrags = []);
            }
        }, {
            key: "getExistingTrack",
            value: function(channelNumber) {
                var media = this.media;
                if (media) for (var i = 0; i < media.textTracks.length; i++) {
                    var textTrack = media.textTracks[i], propName = "textTrack" + channelNumber;
                    if (!0 === textTrack[propName]) return textTrack;
                }
                return null;
            }
        }, {
            key: "createTextTrack",
            value: function(kind, label, lang) {
                var media = this.media;
                if (media) return media.addTextTrack(kind, label, lang);
            }
        }, {
            key: "destroy",
            value: function() {
                _eventHandler2.default.prototype.destroy.call(this);
            }
        }, {
            key: "onMediaAttaching",
            value: function(data) {
                this.media = data.media;
            }
        }, {
            key: "onMediaDetaching",
            value: function() {
                clearCurrentCues(this.textTrack1), clearCurrentCues(this.textTrack2);
            }
        }, {
            key: "onManifestLoading",
            value: function() {
                this.lastSn = -1, // Detect discontiguity in fragment parsing
                this.prevCC = -1, this.vttCCs = {
                    ccOffset: 0,
                    presentationOffset: 0
                };
                // Detect discontinuity in subtitle manifests
                // clear outdated subtitles
                var media = this.media;
                if (media) {
                    var textTracks = media.textTracks;
                    if (textTracks) for (var i = 0; i < textTracks.length; i++) clearCurrentCues(textTracks[i]);
                }
            }
        }, {
            key: "onManifestLoaded",
            value: function(data) {
                var _this3 = this;
                if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = void 0, 
                this.cueRanges = [], this.config.enableWebVTT) {
                    this.tracks = data.subtitles || [];
                    var inUseTracks = this.media ? this.media.textTracks : [];
                    this.tracks.forEach(function(track, index) {
                        var textTrack = void 0;
                        if (index < inUseTracks.length) {
                            var inUseTrack = inUseTracks[index];
                            // Reuse tracks with the same label, but do not reuse 608/708 tracks
                            reuseVttTextTrack(inUseTrack, track) && (textTrack = inUseTrack);
                        }
                        textTrack || (textTrack = _this3.createTextTrack("subtitles", track.name, track.lang)), 
                        textTrack.mode = track.default ? "showing" : "hidden", _this3.textTracks.push(textTrack);
                    });
                }
            }
        }, {
            key: "onLevelSwitching",
            value: function() {
                this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions;
            }
        }, {
            key: "onFragLoaded",
            value: function(data) {
                var frag = data.frag, payload = data.payload;
                if ("main" === frag.type) {
                    var sn = frag.sn;
                    // if this frag isn't contiguous, clear the parser so cues with bad start/end times aren't added to the textTrack
                    if (sn !== this.lastSn + 1) {
                        var cea608Parser = this.cea608Parser;
                        cea608Parser && cea608Parser.reset();
                    }
                    this.lastSn = sn;
                } else if ("subtitle" === frag.type) if (payload.byteLength) {
                    // We need an initial synchronisation PTS. Store fragments as long as none has arrived.
                    if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(data);
                    var vttCCs = this.vttCCs;
                    vttCCs[frag.cc] || (vttCCs[frag.cc] = {
                        start: frag.start,
                        prevCC: this.prevCC,
                        new: !0
                    }, this.prevCC = frag.cc);
                    var textTracks = this.textTracks, hls = this.hls;
                    // Parse the WebVTT file contents.
                    _webvttParser2.default.parse(payload, this.initPTS, vttCCs, frag.cc, function(cues) {
                        var currentTrack = textTracks[frag.trackId];
                        // Add cues and trigger event with success true.
                        cues.forEach(function(cue) {
                            // Sometimes there are cue overlaps on segmented vtts so the same
                            // cue can appear more than once in different vtt files.
                            // This avoid showing duplicated cues with same timecode and text.
                            if (!currentTrack.cues.getCueById(cue.id)) try {
                                currentTrack.addCue(cue);
                            } catch (err) {
                                var textTrackCue = new window.TextTrackCue(cue.startTime, cue.endTime, cue.text);
                                textTrackCue.id = cue.id, currentTrack.addCue(textTrackCue);
                            }
                        }), hls.trigger(_events2.default.SUBTITLE_FRAG_PROCESSED, {
                            success: !0,
                            frag: frag
                        });
                    }, function(e) {
                        // Something went wrong while parsing. Trigger event with success false.
                        _logger.logger.log("Failed to parse VTT cue: " + e), hls.trigger(_events2.default.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: frag
                        });
                    });
                } else // In case there is no payload, finish unsuccessfully.
                this.hls.trigger(_events2.default.SUBTITLE_FRAG_PROCESSED, {
                    success: !1,
                    frag: frag
                });
            }
        }, {
            key: "onFragParsingUserdata",
            value: function(data) {
                // push all of the CEA-708 messages into the interpreter
                // immediately. It will create the proper timestamps based on our PTS value
                if (this.enabled && this.config.enableCEA708Captions) for (var i = 0; i < data.samples.length; i++) {
                    var ccdatas = this.extractCea608Data(data.samples[i].bytes);
                    this.cea608Parser.addData(data.samples[i].pts, ccdatas);
                }
            }
        }, {
            key: "extractCea608Data",
            value: function(byteArray) {
                for (var tmpByte, ccbyte1, ccbyte2, ccValid, ccType, count = 31 & byteArray[0], position = 2, actualCCBytes = [], j = 0; j < count; j++) tmpByte = byteArray[position++], 
                ccbyte1 = 127 & byteArray[position++], ccbyte2 = 127 & byteArray[position++], ccValid = 0 != (4 & tmpByte), 
                ccType = 3 & tmpByte, 0 === ccbyte1 && 0 === ccbyte2 || ccValid && 0 === ccType && (actualCCBytes.push(ccbyte1), 
                actualCCBytes.push(ccbyte2));
                return actualCCBytes;
            }
        } ]), TimelineController;
    }(_eventHandler2.default);
    exports.default = TimelineController;
}, /* 31 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), AESCrypto = function() {
        function AESCrypto(subtle, iv) {
            _classCallCheck(this, AESCrypto), this.subtle = subtle, this.aesIV = iv;
        }
        return _createClass(AESCrypto, [ {
            key: "decrypt",
            value: function(data, key) {
                return this.subtle.decrypt({
                    name: "AES-CBC",
                    iv: this.aesIV
                }, key, data);
            }
        } ]), AESCrypto;
    }();
    exports.default = AESCrypto;
}, /* 32 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), AESDecryptor = function() {
        function AESDecryptor() {
            _classCallCheck(this, AESDecryptor), // Static after running initTable
            this.rcon = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], this.subMix = [ new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256) ], 
            this.invSubMix = [ new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256) ], 
            this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), // Changes during runtime
            this.key = new Uint32Array(0), this.initTable();
        }
        // Using view.getUint32() also swaps the byte order.
        return _createClass(AESDecryptor, [ {
            key: "uint8ArrayToUint32Array_",
            value: function(arrayBuffer) {
                for (var view = new DataView(arrayBuffer), newArray = new Uint32Array(4), i = 0; i < 4; i++) newArray[i] = view.getUint32(4 * i);
                return newArray;
            }
        }, {
            key: "initTable",
            value: function() {
                var sBox = this.sBox, invSBox = this.invSBox, subMix = this.subMix, subMix0 = subMix[0], subMix1 = subMix[1], subMix2 = subMix[2], subMix3 = subMix[3], invSubMix = this.invSubMix, invSubMix0 = invSubMix[0], invSubMix1 = invSubMix[1], invSubMix2 = invSubMix[2], invSubMix3 = invSubMix[3], d = new Uint32Array(256), x = 0, xi = 0, i = 0;
                for (i = 0; i < 256; i++) d[i] = i < 128 ? i << 1 : i << 1 ^ 283;
                for (i = 0; i < 256; i++) {
                    var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
                    sx = sx >>> 8 ^ 255 & sx ^ 99, sBox[x] = sx, invSBox[sx] = x;
                    // Compute multiplication
                    var x2 = d[x], x4 = d[x2], x8 = d[x4], t = 257 * d[sx] ^ 16843008 * sx;
                    subMix0[x] = t << 24 | t >>> 8, subMix1[x] = t << 16 | t >>> 16, subMix2[x] = t << 8 | t >>> 24, 
                    subMix3[x] = t, // Compute inv sub bytes, inv mix columns tables
                    t = 16843009 * x8 ^ 65537 * x4 ^ 257 * x2 ^ 16843008 * x, invSubMix0[sx] = t << 24 | t >>> 8, 
                    invSubMix1[sx] = t << 16 | t >>> 16, invSubMix2[sx] = t << 8 | t >>> 24, invSubMix3[sx] = t, 
                    // Compute next counter
                    x ? (x = x2 ^ d[d[d[x8 ^ x2]]], xi ^= d[d[xi]]) : x = xi = 1;
                }
            }
        }, {
            key: "expandKey",
            value: function(keyBuffer) {
                for (// convert keyBuffer to Uint32Array
                var key = this.uint8ArrayToUint32Array_(keyBuffer), sameKey = !0, offset = 0; offset < key.length && sameKey; ) sameKey = key[offset] === this.key[offset], 
                offset++;
                if (!sameKey) {
                    this.key = key;
                    var keySize = this.keySize = key.length;
                    if (4 !== keySize && 6 !== keySize && 8 !== keySize) throw new Error("Invalid aes key size=" + keySize);
                    var ksRows = this.ksRows = 4 * (keySize + 6 + 1), ksRow = void 0, invKsRow = void 0, keySchedule = this.keySchedule = new Uint32Array(ksRows), invKeySchedule = this.invKeySchedule = new Uint32Array(ksRows), sbox = this.sBox, rcon = this.rcon, invSubMix = this.invSubMix, invSubMix0 = invSubMix[0], invSubMix1 = invSubMix[1], invSubMix2 = invSubMix[2], invSubMix3 = invSubMix[3], prev = void 0, t = void 0;
                    for (ksRow = 0; ksRow < ksRows; ksRow++) ksRow < keySize ? prev = keySchedule[ksRow] = key[ksRow] : (t = prev, 
                    ksRow % keySize == 0 ? (// Rot word
                    t = t << 8 | t >>> 24, // Sub word
                    t = sbox[t >>> 24] << 24 | sbox[t >>> 16 & 255] << 16 | sbox[t >>> 8 & 255] << 8 | sbox[255 & t], 
                    // Mix Rcon
                    t ^= rcon[ksRow / keySize | 0] << 24) : keySize > 6 && ksRow % keySize == 4 && (// Sub word
                    t = sbox[t >>> 24] << 24 | sbox[t >>> 16 & 255] << 16 | sbox[t >>> 8 & 255] << 8 | sbox[255 & t]), 
                    keySchedule[ksRow] = prev = (keySchedule[ksRow - keySize] ^ t) >>> 0);
                    for (invKsRow = 0; invKsRow < ksRows; invKsRow++) ksRow = ksRows - invKsRow, t = 3 & invKsRow ? keySchedule[ksRow] : keySchedule[ksRow - 4], 
                    invKeySchedule[invKsRow] = invKsRow < 4 || ksRow <= 4 ? t : invSubMix0[sbox[t >>> 24]] ^ invSubMix1[sbox[t >>> 16 & 255]] ^ invSubMix2[sbox[t >>> 8 & 255]] ^ invSubMix3[sbox[255 & t]], 
                    invKeySchedule[invKsRow] = invKeySchedule[invKsRow] >>> 0;
                }
            }
        }, {
            key: "networkToHostOrderSwap",
            value: function(word) {
                return word << 24 | (65280 & word) << 8 | (16711680 & word) >> 8 | word >>> 24;
            }
        }, {
            key: "decrypt",
            value: function(inputArrayBuffer, offset, aesIV) {
                for (var ksRow, i, nRounds = this.keySize + 6, invKeySchedule = this.invKeySchedule, invSBOX = this.invSBox, invSubMix = this.invSubMix, invSubMix0 = invSubMix[0], invSubMix1 = invSubMix[1], invSubMix2 = invSubMix[2], invSubMix3 = invSubMix[3], initVector = this.uint8ArrayToUint32Array_(aesIV), initVector0 = initVector[0], initVector1 = initVector[1], initVector2 = initVector[2], initVector3 = initVector[3], inputInt32 = new Int32Array(inputArrayBuffer), outputInt32 = new Int32Array(inputInt32.length), t0 = void 0, t1 = void 0, t2 = void 0, t3 = void 0, s0 = void 0, s1 = void 0, s2 = void 0, s3 = void 0, inputWords0 = void 0, inputWords1 = void 0, inputWords2 = void 0, inputWords3 = void 0, swapWord = this.networkToHostOrderSwap; offset < inputInt32.length; ) {
                    // Iterate through the rounds of decryption
                    for (inputWords0 = swapWord(inputInt32[offset]), inputWords1 = swapWord(inputInt32[offset + 1]), 
                    inputWords2 = swapWord(inputInt32[offset + 2]), inputWords3 = swapWord(inputInt32[offset + 3]), 
                    s0 = inputWords0 ^ invKeySchedule[0], s1 = inputWords3 ^ invKeySchedule[1], s2 = inputWords2 ^ invKeySchedule[2], 
                    s3 = inputWords1 ^ invKeySchedule[3], ksRow = 4, i = 1; i < nRounds; i++) t0 = invSubMix0[s0 >>> 24] ^ invSubMix1[s1 >> 16 & 255] ^ invSubMix2[s2 >> 8 & 255] ^ invSubMix3[255 & s3] ^ invKeySchedule[ksRow], 
                    t1 = invSubMix0[s1 >>> 24] ^ invSubMix1[s2 >> 16 & 255] ^ invSubMix2[s3 >> 8 & 255] ^ invSubMix3[255 & s0] ^ invKeySchedule[ksRow + 1], 
                    t2 = invSubMix0[s2 >>> 24] ^ invSubMix1[s3 >> 16 & 255] ^ invSubMix2[s0 >> 8 & 255] ^ invSubMix3[255 & s1] ^ invKeySchedule[ksRow + 2], 
                    t3 = invSubMix0[s3 >>> 24] ^ invSubMix1[s0 >> 16 & 255] ^ invSubMix2[s1 >> 8 & 255] ^ invSubMix3[255 & s2] ^ invKeySchedule[ksRow + 3], 
                    // Update state
                    s0 = t0, s1 = t1, s2 = t2, s3 = t3, ksRow += 4;
                    // Shift rows, sub bytes, add round key
                    t0 = invSBOX[s0 >>> 24] << 24 ^ invSBOX[s1 >> 16 & 255] << 16 ^ invSBOX[s2 >> 8 & 255] << 8 ^ invSBOX[255 & s3] ^ invKeySchedule[ksRow], 
                    t1 = invSBOX[s1 >>> 24] << 24 ^ invSBOX[s2 >> 16 & 255] << 16 ^ invSBOX[s3 >> 8 & 255] << 8 ^ invSBOX[255 & s0] ^ invKeySchedule[ksRow + 1], 
                    t2 = invSBOX[s2 >>> 24] << 24 ^ invSBOX[s3 >> 16 & 255] << 16 ^ invSBOX[s0 >> 8 & 255] << 8 ^ invSBOX[255 & s1] ^ invKeySchedule[ksRow + 2], 
                    t3 = invSBOX[s3 >>> 24] << 24 ^ invSBOX[s0 >> 16 & 255] << 16 ^ invSBOX[s1 >> 8 & 255] << 8 ^ invSBOX[255 & s2] ^ invKeySchedule[ksRow + 3], 
                    ksRow += 3, // Write
                    outputInt32[offset] = swapWord(t0 ^ initVector0), outputInt32[offset + 1] = swapWord(t3 ^ initVector1), 
                    outputInt32[offset + 2] = swapWord(t2 ^ initVector2), outputInt32[offset + 3] = swapWord(t1 ^ initVector3), 
                    // reset initVector to last 4 unsigned int
                    initVector0 = inputWords0, initVector1 = inputWords1, initVector2 = inputWords2, 
                    initVector3 = inputWords3, offset += 4;
                }
                return outputInt32.buffer;
            }
        }, {
            key: "destroy",
            value: function() {
                this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, 
                this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, 
                this.invKeySchedule = void 0, this.rcon = void 0;
            }
        } ]), AESDecryptor;
    }();
    exports.default = AESDecryptor;
}, /* 33 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), FastAESKey = function() {
        function FastAESKey(subtle, key) {
            _classCallCheck(this, FastAESKey), this.subtle = subtle, this.key = key;
        }
        return _createClass(FastAESKey, [ {
            key: "expandKey",
            value: function() {
                return this.subtle.importKey("raw", this.key, {
                    name: "AES-CBC"
                }, !1, [ "encrypt", "decrypt" ]);
            }
        } ]), FastAESKey;
    }();
    exports.default = FastAESKey;
}, /* 34 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _adts = __webpack_require__(9), _adts2 = _interopRequireDefault(_adts), _logger = __webpack_require__(0), _id = __webpack_require__(6), _id2 = _interopRequireDefault(_id), AACDemuxer = function() {
        function AACDemuxer(observer, remuxer, config) {
            _classCallCheck(this, AACDemuxer), this.observer = observer, this.config = config, 
            this.remuxer = remuxer;
        }
        return _createClass(AACDemuxer, [ {
            key: "resetInitSegment",
            value: function(initSegment, audioCodec, videoCodec, duration) {
                this._audioTrack = {
                    container: "audio/adts",
                    type: "audio",
                    id: -1,
                    sequenceNumber: 0,
                    isAAC: !0,
                    samples: [],
                    len: 0,
                    manifestCodec: audioCodec,
                    duration: duration,
                    inputTimeScale: 9e4
                };
            }
        }, {
            key: "resetTimeStamp",
            value: function() {}
        }, {
            key: "append",
            // feed incoming data to the front of the parsing pipeline
            value: function(data, timeOffset, contiguous, accurateTimeOffset) {
                for (var track = this._audioTrack, id3Data = _id2.default.getID3Data(data, 0), pts = 90 * _id2.default.getTimeStamp(id3Data), frameIndex = 0, stamp = pts, length = data.length, offset = id3Data.length, id3Samples = [ {
                    pts: stamp,
                    dts: stamp,
                    data: id3Data
                } ]; offset < length - 1; ) if (_adts2.default.isHeader(data, offset) && offset + 5 < length) {
                    _adts2.default.initTrackConfig(track, this.observer, data, offset, track.manifestCodec);
                    var frame = _adts2.default.appendFrame(track, data, offset, pts, frameIndex);
                    if (!frame) {
                        _logger.logger.log("Unable to parse AAC frame");
                        break;
                    }
                    offset += frame.length, stamp = frame.sample.pts, frameIndex++;
                } else _id2.default.isHeader(data, offset) ? (id3Data = _id2.default.getID3Data(data, offset), 
                id3Samples.push({
                    pts: stamp,
                    dts: stamp,
                    data: id3Data
                }), offset += id3Data.length) : //nothing found, keep looking
                offset++;
                this.remuxer.remux(track, {
                    samples: []
                }, {
                    samples: id3Samples,
                    inputTimeScale: 9e4
                }, {
                    samples: []
                }, timeOffset, contiguous, accurateTimeOffset);
            }
        }, {
            key: "destroy",
            value: function() {}
        } ], [ {
            key: "probe",
            value: function(data) {
                // check if data contains ID3 timestamp and ADTS sync word
                var offset, length, id3Data = _id2.default.getID3Data(data, 0);
                if (id3Data && void 0 !== _id2.default.getTimeStamp(id3Data)) // Look for ADTS header | 1111 1111 | 1111 X00X | where X can be either 0 or 1
                // Layer bits (position 14 and 15) in header should be always 0 for ADTS
                // More info https://wiki.multimedia.cx/index.php?title=ADTS
                for (offset = id3Data.length, length = Math.min(data.length - 1, offset + 100); offset < length; offset++) if (_adts2.default.probe(data, offset)) return _logger.logger.log("ADTS sync word found !"), 
                !0;
                return !1;
            }
        } ]), AACDemuxer;
    }();
    exports.default = AACDemuxer;
}, /* 35 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _demuxerInline = __webpack_require__(10), _demuxerInline2 = _interopRequireDefault(_demuxerInline), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _logger = __webpack_require__(0), _events3 = __webpack_require__(5), _events4 = _interopRequireDefault(_events3), DemuxerWorker = function(self) {
        // observer setup
        var observer = new _events4.default();
        observer.trigger = function(event) {
            for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) data[_key - 1] = arguments[_key];
            observer.emit.apply(observer, [ event, event ].concat(data));
        }, observer.off = function(event) {
            for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) data[_key2 - 1] = arguments[_key2];
            observer.removeListener.apply(observer, [ event ].concat(data));
        };
        var forwardMessage = function(ev, data) {
            self.postMessage({
                event: ev,
                data: data
            });
        };
        self.addEventListener("message", function(ev) {
            var data = ev.data;
            //console.log('demuxer cmd:' + data.cmd);
            switch (data.cmd) {
              case "init":
                var config = JSON.parse(data.config);
                self.demuxer = new _demuxerInline2.default(observer, data.typeSupported, config, data.vendor);
                try {
                    (0, _logger.enableLogs)(!0 === config.debug);
                } catch (err) {
                    console.warn("demuxerWorker: unable to enable logs");
                }
                // signal end of worker init
                forwardMessage("init", null);
                break;

              case "demux":
                self.demuxer.push(data.data, data.decryptdata, data.initSegment, data.audioCodec, data.videoCodec, data.timeOffset, data.discontinuity, data.trackSwitch, data.contiguous, data.duration, data.accurateTimeOffset, data.defaultInitPTS);
            }
        }), // forward events to main thread
        observer.on(_events2.default.FRAG_DECRYPTED, forwardMessage), observer.on(_events2.default.FRAG_PARSING_INIT_SEGMENT, forwardMessage), 
        observer.on(_events2.default.FRAG_PARSED, forwardMessage), observer.on(_events2.default.ERROR, forwardMessage), 
        observer.on(_events2.default.FRAG_PARSING_METADATA, forwardMessage), observer.on(_events2.default.FRAG_PARSING_USERDATA, forwardMessage), 
        observer.on(_events2.default.INIT_PTS_FOUND, forwardMessage), // special case for FRAG_PARSING_DATA: pass data1/data2 as transferable object (no copy)
        observer.on(_events2.default.FRAG_PARSING_DATA, function(ev, data) {
            var transferable = [], message = {
                event: ev,
                data: data
            };
            data.data1 && (message.data1 = data.data1.buffer, transferable.push(data.data1.buffer), 
            delete data.data1), data.data2 && (message.data2 = data.data2.buffer, transferable.push(data.data2.buffer), 
            delete data.data2), self.postMessage(message, transferable);
        });
    };
    exports.default = DemuxerWorker;
}, /* 36 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _logger = __webpack_require__(0), ExpGolomb = function() {
        function ExpGolomb(data) {
            _classCallCheck(this, ExpGolomb), this.data = data, // the number of bytes left to examine in this.data
            this.bytesAvailable = data.byteLength, // the current word being examined
            this.word = 0, // :uint
            // the number of bits left to examine in the current word
            this.bitsAvailable = 0;
        }
        // ():void
        return _createClass(ExpGolomb, [ {
            key: "loadWord",
            value: function() {
                var data = this.data, bytesAvailable = this.bytesAvailable, position = data.byteLength - bytesAvailable, workingBytes = new Uint8Array(4), availableBytes = Math.min(4, bytesAvailable);
                if (0 === availableBytes) throw new Error("no bytes available");
                workingBytes.set(data.subarray(position, position + availableBytes)), this.word = new DataView(workingBytes.buffer).getUint32(0), 
                // track the amount of this.data that has been processed
                this.bitsAvailable = 8 * availableBytes, this.bytesAvailable -= availableBytes;
            }
        }, {
            key: "skipBits",
            value: function(count) {
                var skipBytes;
                // :int
                this.bitsAvailable > count ? (this.word <<= count, this.bitsAvailable -= count) : (count -= this.bitsAvailable, 
                skipBytes = count >> 3, count -= skipBytes >> 3, this.bytesAvailable -= skipBytes, 
                this.loadWord(), this.word <<= count, this.bitsAvailable -= count);
            }
        }, {
            key: "readBits",
            value: function(size) {
                var bits = Math.min(this.bitsAvailable, size), // :uint
                valu = this.word >>> 32 - bits;
                // :uint
                return size > 32 && _logger.logger.error("Cannot read more than 32 bits at a time"), 
                this.bitsAvailable -= bits, this.bitsAvailable > 0 ? this.word <<= bits : this.bytesAvailable > 0 && this.loadWord(), 
                bits = size - bits, bits > 0 && this.bitsAvailable ? valu << bits | this.readBits(bits) : valu;
            }
        }, {
            key: "skipLZ",
            value: function() {
                var leadingZeroCount;
                // :uint
                for (leadingZeroCount = 0; leadingZeroCount < this.bitsAvailable; ++leadingZeroCount) if (0 != (this.word & 2147483648 >>> leadingZeroCount)) // the first bit of working word is 1
                return this.word <<= leadingZeroCount, this.bitsAvailable -= leadingZeroCount, leadingZeroCount;
                // we exhausted word and still have not found a 1
                return this.loadWord(), leadingZeroCount + this.skipLZ();
            }
        }, {
            key: "skipUEG",
            value: function() {
                this.skipBits(1 + this.skipLZ());
            }
        }, {
            key: "skipEG",
            value: function() {
                this.skipBits(1 + this.skipLZ());
            }
        }, {
            key: "readUEG",
            value: function() {
                var clz = this.skipLZ();
                // :uint
                return this.readBits(clz + 1) - 1;
            }
        }, {
            key: "readEG",
            value: function() {
                var valu = this.readUEG();
                // :int
                // :int
                return 1 & valu ? 1 + valu >>> 1 : -1 * (valu >>> 1);
            }
        }, {
            key: "readBoolean",
            value: function() {
                return 1 === this.readBits(1);
            }
        }, {
            key: "readUByte",
            value: function() {
                return this.readBits(8);
            }
        }, {
            key: "readUShort",
            value: function() {
                return this.readBits(16);
            }
        }, {
            key: "readUInt",
            value: function() {
                return this.readBits(32);
            }
        }, {
            key: "skipScalingList",
            value: function(count) {
                var j, deltaScale, lastScale = 8, nextScale = 8;
                for (j = 0; j < count; j++) 0 !== nextScale && (deltaScale = this.readEG(), nextScale = (lastScale + deltaScale + 256) % 256), 
                lastScale = 0 === nextScale ? lastScale : nextScale;
            }
        }, {
            key: "readSPS",
            value: function() {
                var profileIdc, numRefFramesInPicOrderCntCycle, picWidthInMbsMinus1, picHeightInMapUnitsMinus1, frameMbsOnlyFlag, scalingListCount, i, frameCropLeftOffset = 0, frameCropRightOffset = 0, frameCropTopOffset = 0, frameCropBottomOffset = 0, readUByte = this.readUByte.bind(this), readBits = this.readBits.bind(this), readUEG = this.readUEG.bind(this), readBoolean = this.readBoolean.bind(this), skipBits = this.skipBits.bind(this), skipEG = this.skipEG.bind(this), skipUEG = this.skipUEG.bind(this), skipScalingList = this.skipScalingList.bind(this);
                // seq_parameter_set_id
                // some profiles have more optional data we don't need
                if (readUByte(), profileIdc = readUByte(), // profile_idc
                readBits(5), // constraint_set[0-4]_flag, u(5)
                skipBits(3), // reserved_zero_3bits u(3),
                readUByte(), //level_idc u(8)
                skipUEG(), 100 === profileIdc || 110 === profileIdc || 122 === profileIdc || 244 === profileIdc || 44 === profileIdc || 83 === profileIdc || 86 === profileIdc || 118 === profileIdc || 128 === profileIdc) {
                    var chromaFormatIdc = readUEG();
                    // qpprime_y_zero_transform_bypass_flag
                    if (3 === chromaFormatIdc && skipBits(1), skipUEG(), // bit_depth_luma_minus8
                    skipUEG(), // bit_depth_chroma_minus8
                    skipBits(1), readBoolean()) for (// seq_scaling_matrix_present_flag
                    scalingListCount = 3 !== chromaFormatIdc ? 8 : 12, i = 0; i < scalingListCount; i++) readBoolean() && skipScalingList(// seq_scaling_list_present_flag[ i ]
                    i < 6 ? 16 : 64);
                }
                skipUEG();
                // log2_max_frame_num_minus4
                var picOrderCntType = readUEG();
                if (0 === picOrderCntType) readUEG(); else if (1 === picOrderCntType) for (skipBits(1), 
                // delta_pic_order_always_zero_flag
                skipEG(), // offset_for_non_ref_pic
                skipEG(), // offset_for_top_to_bottom_field
                numRefFramesInPicOrderCntCycle = readUEG(), i = 0; i < numRefFramesInPicOrderCntCycle; i++) skipEG();
                skipUEG(), // max_num_ref_frames
                skipBits(1), // gaps_in_frame_num_value_allowed_flag
                picWidthInMbsMinus1 = readUEG(), picHeightInMapUnitsMinus1 = readUEG(), frameMbsOnlyFlag = readBits(1), 
                0 === frameMbsOnlyFlag && skipBits(1), skipBits(1), // direct_8x8_inference_flag
                readBoolean() && (// frame_cropping_flag
                frameCropLeftOffset = readUEG(), frameCropRightOffset = readUEG(), frameCropTopOffset = readUEG(), 
                frameCropBottomOffset = readUEG());
                var pixelRatio = [ 1, 1 ];
                if (readBoolean() && readBoolean()) {
                    switch (readUByte()) {
                      case 1:
                        pixelRatio = [ 1, 1 ];
                        break;

                      case 2:
                        pixelRatio = [ 12, 11 ];
                        break;

                      case 3:
                        pixelRatio = [ 10, 11 ];
                        break;

                      case 4:
                        pixelRatio = [ 16, 11 ];
                        break;

                      case 5:
                        pixelRatio = [ 40, 33 ];
                        break;

                      case 6:
                        pixelRatio = [ 24, 11 ];
                        break;

                      case 7:
                        pixelRatio = [ 20, 11 ];
                        break;

                      case 8:
                        pixelRatio = [ 32, 11 ];
                        break;

                      case 9:
                        pixelRatio = [ 80, 33 ];
                        break;

                      case 10:
                        pixelRatio = [ 18, 11 ];
                        break;

                      case 11:
                        pixelRatio = [ 15, 11 ];
                        break;

                      case 12:
                        pixelRatio = [ 64, 33 ];
                        break;

                      case 13:
                        pixelRatio = [ 160, 99 ];
                        break;

                      case 14:
                        pixelRatio = [ 4, 3 ];
                        break;

                      case 15:
                        pixelRatio = [ 3, 2 ];
                        break;

                      case 16:
                        pixelRatio = [ 2, 1 ];
                        break;

                      case 255:
                        pixelRatio = [ readUByte() << 8 | readUByte(), readUByte() << 8 | readUByte() ];
                    }
                }
                return {
                    width: Math.ceil(16 * (picWidthInMbsMinus1 + 1) - 2 * frameCropLeftOffset - 2 * frameCropRightOffset),
                    height: (2 - frameMbsOnlyFlag) * (picHeightInMapUnitsMinus1 + 1) * 16 - (frameMbsOnlyFlag ? 2 : 4) * (frameCropTopOffset + frameCropBottomOffset),
                    pixelRatio: pixelRatio
                };
            }
        }, {
            key: "readSliceType",
            value: function() {
                // return slice_type
                // skip NALu type
                // discard first_mb_in_slice
                return this.readUByte(), this.readUEG(), this.readUEG();
            }
        } ]), ExpGolomb;
    }();
    exports.default = ExpGolomb;
}, /* 37 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _id = __webpack_require__(6), _id2 = _interopRequireDefault(_id), _logger = __webpack_require__(0), _mpegaudio = __webpack_require__(12), _mpegaudio2 = _interopRequireDefault(_mpegaudio), MP3Demuxer = function() {
        function MP3Demuxer(observer, remuxer, config) {
            _classCallCheck(this, MP3Demuxer), this.observer = observer, this.config = config, 
            this.remuxer = remuxer;
        }
        return _createClass(MP3Demuxer, [ {
            key: "resetInitSegment",
            value: function(initSegment, audioCodec, videoCodec, duration) {
                this._audioTrack = {
                    container: "audio/mpeg",
                    type: "audio",
                    id: -1,
                    sequenceNumber: 0,
                    isAAC: !1,
                    samples: [],
                    len: 0,
                    manifestCodec: audioCodec,
                    duration: duration,
                    inputTimeScale: 9e4
                };
            }
        }, {
            key: "resetTimeStamp",
            value: function() {}
        }, {
            key: "append",
            // feed incoming data to the front of the parsing pipeline
            value: function(data, timeOffset, contiguous, accurateTimeOffset) {
                for (var id3Data = _id2.default.getID3Data(data, 0), pts = 90 * _id2.default.getTimeStamp(id3Data), offset = id3Data.length, length = data.length, frameIndex = 0, stamp = 0, track = this._audioTrack, id3Samples = [ {
                    pts: pts,
                    dts: pts,
                    data: id3Data
                } ]; offset < length; ) if (_mpegaudio2.default.isHeader(data, offset)) {
                    var frame = _mpegaudio2.default.appendFrame(track, data, offset, pts, frameIndex);
                    if (!frame) //logger.log('Unable to parse Mpeg audio frame');
                    break;
                    offset += frame.length, stamp = frame.sample.pts, frameIndex++;
                } else _id2.default.isHeader(data, offset) ? (id3Data = _id2.default.getID3Data(data, offset), 
                id3Samples.push({
                    pts: stamp,
                    dts: stamp,
                    data: id3Data
                }), offset += id3Data.length) : //nothing found, keep looking
                offset++;
                this.remuxer.remux(track, {
                    samples: []
                }, {
                    samples: id3Samples,
                    inputTimeScale: 9e4
                }, {
                    samples: []
                }, timeOffset, contiguous, accurateTimeOffset);
            }
        }, {
            key: "destroy",
            value: function() {}
        } ], [ {
            key: "probe",
            value: function(data) {
                // check if data contains ID3 timestamp and MPEG sync word
                var offset, length, id3Data = _id2.default.getID3Data(data, 0);
                if (id3Data && void 0 !== _id2.default.getTimeStamp(id3Data)) // Look for MPEG header | 1111 1111 | 111X XYZX | where X can be either 0 or 1 and Y or Z should be 1
                // Layer bits (position 14 and 15) in header should be always different from 0 (Layer I or Layer II or Layer III)
                // More info http://www.mp3-tech.org/programmer/frame_header.html
                for (offset = id3Data.length, length = Math.min(data.length - 1, offset + 100); offset < length; offset++) if (_mpegaudio2.default.probe(data, offset)) return _logger.logger.log("MPEG Audio sync word found !"), 
                !0;
                return !1;
            }
        } ]), MP3Demuxer;
    }();
    exports.default = MP3Demuxer;
}, /* 38 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }(_events), UINT32_MAX = Math.pow(2, 32) - 1, MP4Demuxer = function() {
        function MP4Demuxer(observer, remuxer) {
            _classCallCheck(this, MP4Demuxer), this.observer = observer, this.remuxer = remuxer;
        }
        return _createClass(MP4Demuxer, [ {
            key: "resetTimeStamp",
            value: function(initPTS) {
                this.initPTS = initPTS;
            }
        }, {
            key: "resetInitSegment",
            value: function(initSegment, audioCodec, videoCodec, duration) {
                //jshint unused:false
                if (initSegment && initSegment.byteLength) {
                    var initData = this.initData = MP4Demuxer.parseInitSegment(initSegment), tracks = {};
                    initData.audio && (tracks.audio = {
                        container: "audio/mp4",
                        codec: audioCodec,
                        initSegment: duration ? initSegment : null
                    }), initData.video && (tracks.video = {
                        container: "video/mp4",
                        codec: videoCodec,
                        initSegment: duration ? initSegment : null
                    }), this.observer.trigger(_events2.default.FRAG_PARSING_INIT_SEGMENT, {
                        tracks: tracks
                    });
                } else audioCodec && (this.audioCodec = audioCodec), videoCodec && (this.videoCodec = videoCodec);
            }
        }, {
            key: "append",
            // feed incoming data to the front of the parsing pipeline
            value: function(data, timeOffset, contiguous, accurateTimeOffset) {
                var initData = this.initData;
                initData || (this.resetInitSegment(data, this.audioCodec, this.videoCodec), initData = this.initData);
                var startDTS = void 0, initPTS = this.initPTS;
                if (void 0 === initPTS) {
                    var _startDTS = MP4Demuxer.getStartDTS(initData, data);
                    this.initPTS = initPTS = _startDTS - timeOffset, this.observer.trigger(_events2.default.INIT_PTS_FOUND, {
                        initPTS: initPTS
                    });
                }
                MP4Demuxer.offsetStartDTS(initData, data, initPTS), startDTS = MP4Demuxer.getStartDTS(initData, data), 
                this.remuxer.remux(initData.audio, initData.video, null, null, startDTS, contiguous, accurateTimeOffset, data);
            }
        }, {
            key: "destroy",
            value: function() {}
        } ], [ {
            key: "probe",
            value: function(data) {
                if (data.length >= 8) {
                    return [ "moof", "ftyp", "styp" ].indexOf(MP4Demuxer.bin2str(data.subarray(4, 8))) >= 0;
                }
                return !1;
            }
        }, {
            key: "bin2str",
            value: function(buffer) {
                return String.fromCharCode.apply(null, buffer);
            }
        }, {
            key: "readUint32",
            value: function(buffer, offset) {
                buffer.data && (offset += buffer.start, buffer = buffer.data);
                var val = buffer[offset] << 24 | buffer[offset + 1] << 16 | buffer[offset + 2] << 8 | buffer[offset + 3];
                return val < 0 ? 4294967296 + val : val;
            }
        }, {
            key: "writeUint32",
            value: function(buffer, offset, value) {
                buffer.data && (offset += buffer.start, buffer = buffer.data), buffer[offset] = value >> 24, 
                buffer[offset + 1] = value >> 16 & 255, buffer[offset + 2] = value >> 8 & 255, buffer[offset + 3] = 255 & value;
            }
        }, {
            key: "findBox",
            value: function(data, path) {
                var i, size, type, end, subresults, start, endbox, results = [];
                if (data.data ? (start = data.start, end = data.end, data = data.data) : (start = 0, 
                end = data.byteLength), !path.length) // short-circuit the search for empty paths
                return null;
                for (i = start; i < end; ) size = MP4Demuxer.readUint32(data, i), type = MP4Demuxer.bin2str(data.subarray(i + 4, i + 8)), 
                endbox = size > 1 ? i + size : end, type === path[0] && (1 === path.length ? // this is the end of the path and we've found the box we were
                // looking for
                results.push({
                    data: data,
                    start: i + 8,
                    end: endbox
                }) : (// recursively search for the next box along the path
                subresults = MP4Demuxer.findBox({
                    data: data,
                    start: i + 8,
                    end: endbox
                }, path.slice(1)), subresults.length && (results = results.concat(subresults)))), 
                i = endbox;
                // we've finished searching all of data
                return results;
            }
        }, {
            key: "parseInitSegment",
            value: function(initSegment) {
                var result = [];
                return MP4Demuxer.findBox(initSegment, [ "moov", "trak" ]).forEach(function(trak) {
                    var tkhd = MP4Demuxer.findBox(trak, [ "tkhd" ])[0];
                    if (tkhd) {
                        var version = tkhd.data[tkhd.start], index = 0 === version ? 12 : 20, trackId = MP4Demuxer.readUint32(tkhd, index), mdhd = MP4Demuxer.findBox(trak, [ "mdia", "mdhd" ])[0];
                        if (mdhd) {
                            version = mdhd.data[mdhd.start], index = 0 === version ? 12 : 20;
                            var timescale = MP4Demuxer.readUint32(mdhd, index), hdlr = MP4Demuxer.findBox(trak, [ "mdia", "hdlr" ])[0];
                            if (hdlr) {
                                var hdlrType = MP4Demuxer.bin2str(hdlr.data.subarray(hdlr.start + 8, hdlr.start + 12)), type = {
                                    soun: "audio",
                                    vide: "video"
                                }[hdlrType];
                                type && (result[trackId] = {
                                    timescale: timescale,
                                    type: type
                                }, result[type] = {
                                    timescale: timescale,
                                    id: trackId
                                });
                            }
                        }
                    }
                }), result;
            }
        }, {
            key: "getStartDTS",
            value: function(initData, fragment) {
                var trafs, baseTimes, result;
                // we need info from two childrend of each track fragment box
                // determine the start times for each track
                // return the minimum
                return trafs = MP4Demuxer.findBox(fragment, [ "moof", "traf" ]), baseTimes = [].concat.apply([], trafs.map(function(traf) {
                    return MP4Demuxer.findBox(traf, [ "tfhd" ]).map(function(tfhd) {
                        var id, scale, baseTime;
                        // convert base time to seconds
                        // get the track id from the tfhd
                        // assume a 90kHz clock if no timescale was specified
                        // get the base media decode time from the tfdt
                        return id = MP4Demuxer.readUint32(tfhd, 4), scale = initData[id].timescale || 9e4, 
                        baseTime = MP4Demuxer.findBox(traf, [ "tfdt" ]).map(function(tfdt) {
                            var version, result;
                            return version = tfdt.data[tfdt.start], result = MP4Demuxer.readUint32(tfdt, 4), 
                            1 === version && (result *= Math.pow(2, 32), result += MP4Demuxer.readUint32(tfdt, 8)), 
                            result;
                        })[0], (baseTime = baseTime || 1 / 0) / scale;
                    });
                })), result = Math.min.apply(null, baseTimes), isFinite(result) ? result : 0;
            }
        }, {
            key: "offsetStartDTS",
            value: function(initData, fragment, timeOffset) {
                MP4Demuxer.findBox(fragment, [ "moof", "traf" ]).map(function(traf) {
                    return MP4Demuxer.findBox(traf, [ "tfhd" ]).map(function(tfhd) {
                        // get the track id from the tfhd
                        var id = MP4Demuxer.readUint32(tfhd, 4), timescale = initData[id].timescale || 9e4;
                        // get the base media decode time from the tfdt
                        MP4Demuxer.findBox(traf, [ "tfdt" ]).map(function(tfdt) {
                            var version = tfdt.data[tfdt.start], baseMediaDecodeTime = MP4Demuxer.readUint32(tfdt, 4);
                            if (0 === version) MP4Demuxer.writeUint32(tfdt, 4, baseMediaDecodeTime - timeOffset * timescale); else {
                                baseMediaDecodeTime *= Math.pow(2, 32), baseMediaDecodeTime += MP4Demuxer.readUint32(tfdt, 8), 
                                baseMediaDecodeTime -= timeOffset * timescale;
                                var upper = Math.floor(baseMediaDecodeTime / (UINT32_MAX + 1)), lower = Math.floor(baseMediaDecodeTime % (UINT32_MAX + 1));
                                MP4Demuxer.writeUint32(tfdt, 4, upper), MP4Demuxer.writeUint32(tfdt, 8, lower);
                            }
                        });
                    });
                });
            }
        } ]), MP4Demuxer;
    }();
    exports.default = MP4Demuxer;
}, /* 39 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _decrypter = __webpack_require__(8), _decrypter2 = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }(_decrypter), SampleAesDecrypter = function() {
        function SampleAesDecrypter(observer, config, decryptdata, discardEPB) {
            _classCallCheck(this, SampleAesDecrypter), this.decryptdata = decryptdata, this.discardEPB = discardEPB, 
            this.decrypter = new _decrypter2.default(observer, config);
        }
        return _createClass(SampleAesDecrypter, [ {
            key: "decryptBuffer",
            value: function(encryptedData, callback) {
                this.decrypter.decrypt(encryptedData, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, callback);
            }
        }, {
            key: "decryptAacSample",
            value: function(samples, sampleIndex, callback, sync) {
                var curUnit = samples[sampleIndex].unit, encryptedData = curUnit.subarray(16, curUnit.length - curUnit.length % 16), encryptedBuffer = encryptedData.buffer.slice(encryptedData.byteOffset, encryptedData.byteOffset + encryptedData.length), localthis = this;
                this.decryptBuffer(encryptedBuffer, function(decryptedData) {
                    decryptedData = new Uint8Array(decryptedData), curUnit.set(decryptedData, 16), sync || localthis.decryptAacSamples(samples, sampleIndex + 1, callback);
                });
            }
        }, {
            key: "decryptAacSamples",
            value: function(samples, sampleIndex, callback) {
                for (;;sampleIndex++) {
                    if (sampleIndex >= samples.length) return void callback();
                    if (!(samples[sampleIndex].unit.length < 32)) {
                        var sync = this.decrypter.isSync();
                        if (this.decryptAacSample(samples, sampleIndex, callback, sync), !sync) return;
                    }
                }
            }
        }, {
            key: "getAvcEncryptedData",
            value: function(decodedData) {
                for (var encryptedDataLen = 16 * Math.floor((decodedData.length - 48) / 160) + 16, encryptedData = new Int8Array(encryptedDataLen), outputPos = 0, inputPos = 32; inputPos <= decodedData.length - 16; inputPos += 160, 
                outputPos += 16) encryptedData.set(decodedData.subarray(inputPos, inputPos + 16), outputPos);
                return encryptedData;
            }
        }, {
            key: "getAvcDecryptedUnit",
            value: function(decodedData, decryptedData) {
                decryptedData = new Uint8Array(decryptedData);
                for (var inputPos = 0, outputPos = 32; outputPos <= decodedData.length - 16; outputPos += 160, 
                inputPos += 16) decodedData.set(decryptedData.subarray(inputPos, inputPos + 16), outputPos);
                return decodedData;
            }
        }, {
            key: "decryptAvcSample",
            value: function(samples, sampleIndex, unitIndex, callback, curUnit, sync) {
                var decodedData = this.discardEPB(curUnit.data), encryptedData = this.getAvcEncryptedData(decodedData), localthis = this;
                this.decryptBuffer(encryptedData.buffer, function(decryptedData) {
                    curUnit.data = localthis.getAvcDecryptedUnit(decodedData, decryptedData), sync || localthis.decryptAvcSamples(samples, sampleIndex, unitIndex + 1, callback);
                });
            }
        }, {
            key: "decryptAvcSamples",
            value: function(samples, sampleIndex, unitIndex, callback) {
                for (;;sampleIndex++, unitIndex = 0) {
                    if (sampleIndex >= samples.length) return void callback();
                    for (var curUnits = samples[sampleIndex].units; !(unitIndex >= curUnits.length); unitIndex++) {
                        var curUnit = curUnits[unitIndex];
                        if (!(curUnit.length <= 48 || 1 !== curUnit.type && 5 !== curUnit.type)) {
                            var sync = this.decrypter.isSync();
                            if (this.decryptAvcSample(samples, sampleIndex, unitIndex, callback, curUnit, sync), 
                            !sync) return;
                        }
                    }
                }
            }
        } ]), SampleAesDecrypter;
    }();
    exports.default = SampleAesDecrypter;
}, /* 40 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _adts = __webpack_require__(9), _adts2 = _interopRequireDefault(_adts), _mpegaudio = __webpack_require__(12), _mpegaudio2 = _interopRequireDefault(_mpegaudio), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _expGolomb = __webpack_require__(36), _expGolomb2 = _interopRequireDefault(_expGolomb), _sampleAes = __webpack_require__(39), _sampleAes2 = _interopRequireDefault(_sampleAes), _logger = __webpack_require__(0), _errors = __webpack_require__(2), TSDemuxer = function() {
        function TSDemuxer(observer, remuxer, config, typeSupported) {
            _classCallCheck(this, TSDemuxer), this.observer = observer, this.config = config, 
            this.typeSupported = typeSupported, this.remuxer = remuxer, this.sampleAes = null;
        }
        return _createClass(TSDemuxer, [ {
            key: "setDecryptData",
            value: function(decryptdata) {
                null != decryptdata && null != decryptdata.key && "SAMPLE-AES" === decryptdata.method ? this.sampleAes = new _sampleAes2.default(this.observer, this.config, decryptdata, this.discardEPB) : this.sampleAes = null;
            }
        }, {
            key: "resetInitSegment",
            value: function(initSegment, audioCodec, videoCodec, duration) {
                this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = {
                    container: "video/mp2t",
                    type: "video",
                    id: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    len: 0,
                    dropped: 0
                }, this._audioTrack = {
                    container: "video/mp2t",
                    type: "audio",
                    id: -1,
                    inputTimeScale: 9e4,
                    duration: duration,
                    sequenceNumber: 0,
                    samples: [],
                    len: 0,
                    isAAC: !0
                }, this._id3Track = {
                    type: "id3",
                    id: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    len: 0
                }, this._txtTrack = {
                    type: "text",
                    id: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    len: 0
                }, // flush any partial content
                this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = audioCodec, 
                this.videoCodec = videoCodec, this._duration = duration;
            }
        }, {
            key: "resetTimeStamp",
            value: function() {}
        }, {
            key: "append",
            value: function(data, timeOffset, contiguous, accurateTimeOffset) {
                var start, stt, pid, offset, pes, len = data.length, unknownPIDs = !1;
                this.contiguous = contiguous;
                var pmtParsed = this.pmtParsed, avcTrack = this._avcTrack, audioTrack = this._audioTrack, id3Track = this._id3Track, avcId = avcTrack.id, audioId = audioTrack.id, id3Id = id3Track.id, pmtId = this._pmtId, avcData = avcTrack.pesData, audioData = audioTrack.pesData, id3Data = id3Track.pesData, parsePAT = this._parsePAT, parsePMT = this._parsePMT, parsePES = this._parsePES, parseAVCPES = this._parseAVCPES.bind(this), parseAACPES = this._parseAACPES.bind(this), parseMPEGPES = this._parseMPEGPES.bind(this), parseID3PES = this._parseID3PES.bind(this);
                // loop through TS packets
                for (// don't parse last TS packet if incomplete
                len -= len % 188, start = 0; start < len; start += 188) if (71 === data[start]) {
                    // if an adaption field is present, its length is specified by the fifth byte of the TS packet header.
                    if (stt = !!(64 & data[start + 1]), // pid is a 13-bit field starting at the last bit of TS[1]
                    pid = ((31 & data[start + 1]) << 8) + data[start + 2], (48 & data[start + 3]) >> 4 > 1) {
                        // continue if there is only adaptation field
                        if ((offset = start + 5 + data[start + 4]) === start + 188) continue;
                    } else offset = start + 4;
                    switch (pid) {
                      case avcId:
                        stt && (avcData && (pes = parsePES(avcData)) && parseAVCPES(pes, !1), avcData = {
                            data: [],
                            size: 0
                        }), avcData && (avcData.data.push(data.subarray(offset, start + 188)), avcData.size += start + 188 - offset);
                        break;

                      case audioId:
                        stt && (audioData && (pes = parsePES(audioData)) && (audioTrack.isAAC ? parseAACPES(pes) : parseMPEGPES(pes)), 
                        audioData = {
                            data: [],
                            size: 0
                        }), audioData && (audioData.data.push(data.subarray(offset, start + 188)), audioData.size += start + 188 - offset);
                        break;

                      case id3Id:
                        stt && (id3Data && (pes = parsePES(id3Data)) && parseID3PES(pes), id3Data = {
                            data: [],
                            size: 0
                        }), id3Data && (id3Data.data.push(data.subarray(offset, start + 188)), id3Data.size += start + 188 - offset);
                        break;

                      case 0:
                        stt && (offset += data[offset] + 1), pmtId = this._pmtId = parsePAT(data, offset);
                        break;

                      case pmtId:
                        stt && (offset += data[offset] + 1);
                        var parsedPIDs = parsePMT(data, offset, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                        // only update track id if track PID found while parsing PMT
                        // this is to avoid resetting the PID to -1 in case
                        // track PID transiently disappears from the stream
                        // this could happen in case of transient missing audio samples for example
                        avcId = parsedPIDs.avc, avcId > 0 && (avcTrack.id = avcId), audioId = parsedPIDs.audio, 
                        audioId > 0 && (audioTrack.id = audioId, audioTrack.isAAC = parsedPIDs.isAAC), id3Id = parsedPIDs.id3, 
                        id3Id > 0 && (id3Track.id = id3Id), unknownPIDs && !pmtParsed && (_logger.logger.log("reparse from beginning"), 
                        unknownPIDs = !1, // we set it to -188, the += 188 in the for loop will reset start to 0
                        start = -188), pmtParsed = this.pmtParsed = !0;
                        break;

                      case 17:
                      case 8191:
                        break;

                      default:
                        unknownPIDs = !0;
                    }
                } else this.observer.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.MEDIA_ERROR,
                    details: _errors.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: !1,
                    reason: "TS packet did not start with 0x47"
                });
                // try to parse last PES packets
                avcData && (pes = parsePES(avcData)) ? (parseAVCPES(pes, !0), avcTrack.pesData = null) : // either avcData null or PES truncated, keep it for next frag parsing
                avcTrack.pesData = avcData, audioData && (pes = parsePES(audioData)) ? (audioTrack.isAAC ? parseAACPES(pes) : parseMPEGPES(pes), 
                audioTrack.pesData = null) : (audioData && audioData.size && _logger.logger.log("last AAC PES packet truncated,might overlap between fragments"), 
                // either audioData null or PES truncated, keep it for next frag parsing
                audioTrack.pesData = audioData), id3Data && (pes = parsePES(id3Data)) ? (parseID3PES(pes), 
                id3Track.pesData = null) : // either id3Data null or PES truncated, keep it for next frag parsing
                id3Track.pesData = id3Data, null == this.sampleAes ? this.remuxer.remux(audioTrack, avcTrack, id3Track, this._txtTrack, timeOffset, contiguous, accurateTimeOffset) : this.decryptAndRemux(audioTrack, avcTrack, id3Track, this._txtTrack, timeOffset, contiguous, accurateTimeOffset);
            }
        }, {
            key: "decryptAndRemux",
            value: function(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset) {
                if (audioTrack.samples && audioTrack.isAAC) {
                    var localthis = this;
                    this.sampleAes.decryptAacSamples(audioTrack.samples, 0, function() {
                        localthis.decryptAndRemuxAvc(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset);
                    });
                } else this.decryptAndRemuxAvc(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset);
            }
        }, {
            key: "decryptAndRemuxAvc",
            value: function(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset) {
                if (videoTrack.samples) {
                    var localthis = this;
                    this.sampleAes.decryptAvcSamples(videoTrack.samples, 0, 0, function() {
                        localthis.remuxer.remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset);
                    });
                } else this.remuxer.remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset);
            }
        }, {
            key: "destroy",
            value: function() {
                this._initPTS = this._initDTS = void 0, this._duration = 0;
            }
        }, {
            key: "_parsePAT",
            value: function(data, offset) {
                // skip the PSI header and parse the first PMT entry
                return (31 & data[offset + 10]) << 8 | data[offset + 11];
            }
        }, {
            key: "_parsePMT",
            value: function(data, offset, mpegSupported, isSampleAes) {
                var sectionLength, tableEnd, programInfoLength, pid, result = {
                    audio: -1,
                    avc: -1,
                    id3: -1,
                    isAAC: !0
                };
                for (sectionLength = (15 & data[offset + 1]) << 8 | data[offset + 2], tableEnd = offset + 3 + sectionLength - 4, 
                // to determine where the table is, we have to figure out how
                // long the program info descriptors are
                programInfoLength = (15 & data[offset + 10]) << 8 | data[offset + 11], // advance the offset to the first entry in the mapping table
                offset += 12 + programInfoLength; offset < tableEnd; ) {
                    switch (pid = (31 & data[offset + 1]) << 8 | data[offset + 2], data[offset]) {
                      case 207:
                        // SAMPLE-AES AAC
                        if (!isSampleAes) {
                            _logger.logger.log("unkown stream type:" + data[offset]);
                            break;
                        }

                      /* falls through */
                        // ISO/IEC 13818-7 ADTS AAC (MPEG-2 lower bit-rate audio)
                        case 15:
                        //logger.log('AAC PID:'  + pid);
                        -1 === result.audio && (result.audio = pid);
                        break;

                      // Packetized metadata (ID3)
                        case 21:
                        //logger.log('ID3 PID:'  + pid);
                        -1 === result.id3 && (result.id3 = pid);
                        break;

                      case 219:
                        // SAMPLE-AES AVC
                        if (!isSampleAes) {
                            _logger.logger.log("unkown stream type:" + data[offset]);
                            break;
                        }

                      /* falls through */
                        // ITU-T Rec. H.264 and ISO/IEC 14496-10 (lower bit-rate video)
                        case 27:
                        //logger.log('AVC PID:'  + pid);
                        -1 === result.avc && (result.avc = pid);
                        break;

                      // ISO/IEC 11172-3 (MPEG-1 audio)
                        // or ISO/IEC 13818-3 (MPEG-2 halved sample rate audio)
                        case 3:
                      case 4:
                        //logger.log('MPEG PID:'  + pid);
                        mpegSupported ? -1 === result.audio && (result.audio = pid, result.isAAC = !1) : _logger.logger.log("MPEG audio found, not supported in this browser for now");
                        break;

                      case 36:
                        _logger.logger.warn("HEVC stream type found, not supported for now");
                        break;

                      default:
                        _logger.logger.log("unkown stream type:" + data[offset]);
                    }
                    // move to the next table entry
                    // skip past the elementary stream descriptors, if present
                    offset += 5 + ((15 & data[offset + 3]) << 8 | data[offset + 4]);
                }
                return result;
            }
        }, {
            key: "_parsePES",
            value: function(stream) {
                var frag, pesFlags, pesLen, pesHdrLen, pesData, pesPts, pesDts, payloadStartOffset, i = 0, data = stream.data;
                // safety check
                if (!stream || 0 === stream.size) return null;
                // we might need up to 19 bytes to read PES header
                // if first chunk of data is less than 19 bytes, let's merge it with following ones until we get 19 bytes
                // usually only one merge is needed (and this is rare ...)
                for (;data[0].length < 19 && data.length > 1; ) {
                    var newData = new Uint8Array(data[0].length + data[1].length);
                    newData.set(data[0]), newData.set(data[1], data[0].length), data[0] = newData, data.splice(1, 1);
                }
                if (//retrieve PTS/DTS from first fragment
                frag = data[0], 1 === (frag[0] << 16) + (frag[1] << 8) + frag[2]) {
                    // if PES parsed length is not zero and greater than total received length, stop parsing. PES might be truncated
                    // minus 6 : PES header size
                    if ((pesLen = (frag[4] << 8) + frag[5]) && pesLen > stream.size - 6) return null;
                    pesFlags = frag[7], 192 & pesFlags && (/* PES header described here : http://dvd.sourceforge.net/dvdinfo/pes-hdr.html
              as PTS / DTS is 33 bit we cannot use bitwise operator in JS,
              as Bitwise operators treat their operands as a sequence of 32 bits */
                    pesPts = 536870912 * (14 & frag[9]) + // 1 << 29
                    4194304 * (255 & frag[10]) + // 1 << 22
                    16384 * (254 & frag[11]) + // 1 << 14
                    128 * (255 & frag[12]) + // 1 << 7
                    (254 & frag[13]) / 2, // check if greater than 2^32 -1
                    pesPts > 4294967295 && (// decrement 2^33
                    pesPts -= 8589934592), 64 & pesFlags ? (pesDts = 536870912 * (14 & frag[14]) + // 1 << 29
                    4194304 * (255 & frag[15]) + // 1 << 22
                    16384 * (254 & frag[16]) + // 1 << 14
                    128 * (255 & frag[17]) + // 1 << 7
                    (254 & frag[18]) / 2, // check if greater than 2^32 -1
                    pesDts > 4294967295 && (// decrement 2^33
                    pesDts -= 8589934592), pesPts - pesDts > 54e5 && (_logger.logger.warn(Math.round((pesPts - pesDts) / 9e4) + "s delta between PTS and DTS, align them"), 
                    pesPts = pesDts)) : pesDts = pesPts), pesHdrLen = frag[8], // 9 bytes : 6 bytes for PES header + 3 bytes for PES extension
                    payloadStartOffset = pesHdrLen + 9, stream.size -= payloadStartOffset, //reassemble PES packet
                    pesData = new Uint8Array(stream.size);
                    for (var j = 0, dataLen = data.length; j < dataLen; j++) {
                        frag = data[j];
                        var len = frag.byteLength;
                        if (payloadStartOffset) {
                            if (payloadStartOffset > len) {
                                // trim full frag if PES header bigger than frag
                                payloadStartOffset -= len;
                                continue;
                            }
                            // trim partial frag if PES header smaller than frag
                            frag = frag.subarray(payloadStartOffset), len -= payloadStartOffset, payloadStartOffset = 0;
                        }
                        pesData.set(frag, i), i += len;
                    }
                    // payload size : remove PES header + PES extension
                    return pesLen && (pesLen -= pesHdrLen + 3), {
                        data: pesData,
                        pts: pesPts,
                        dts: pesDts,
                        len: pesLen
                    };
                }
                return null;
            }
        }, {
            key: "pushAccesUnit",
            value: function(avcSample, avcTrack) {
                if (avcSample.units.length && avcSample.frame) {
                    var samples = avcTrack.samples, nbSamples = samples.length;
                    // only push AVC sample if starting with a keyframe is not mandatory OR
                    //    if keyframe already found in this fragment OR
                    //       keyframe found in last fragment (track.sps) AND
                    //          samples already appended (we already found a keyframe in this fragment) OR fragment is contiguous
                    !this.config.forceKeyFrameOnDiscontinuity || !0 === avcSample.key || avcTrack.sps && (nbSamples || this.contiguous) ? (avcSample.id = nbSamples, 
                    samples.push(avcSample)) : // dropped samples, track it
                    avcTrack.dropped++;
                }
                avcSample.debug.length && _logger.logger.log(avcSample.pts + "/" + avcSample.dts + ":" + avcSample.debug);
            }
        }, {
            key: "_parseAVCPES",
            value: function(pes, last) {
                var expGolombDecoder, push, i, _this = this, track = this._avcTrack, units = this._parseAVCNALu(pes.data), avcSample = this.avcSample, spsfound = !1, pushAccesUnit = this.pushAccesUnit.bind(this), createAVCSample = function(key, pts, dts, debug) {
                    return {
                        key: key,
                        pts: pts,
                        dts: dts,
                        units: [],
                        debug: debug
                    };
                };
                //free pes.data to save up some memory
                pes.data = null, // if new NAL units found and last sample still there, let's push ...
                // this helps parsing streams with missing AUD
                avcSample && units.length && (pushAccesUnit(avcSample, track), avcSample = this.avcSample = createAVCSample(!1, pes.pts, pes.dts, "")), 
                units.forEach(function(unit) {
                    switch (unit.type) {
                      //NDR
                        case 1:
                        push = !0, avcSample.frame = !0;
                        var data = unit.data;
                        // only check slice type to detect KF in case SPS found in same packet (any keyframe is preceded by SPS ...)
                        if (spsfound && data.length > 4) {
                            // retrieve slice type by parsing beginning of NAL unit (follow H264 spec, slice_header definition) to detect keyframe embedded in NDR
                            var sliceType = new _expGolomb2.default(data).readSliceType();
                            // 2 : I slice, 4 : SI slice, 7 : I slice, 9: SI slice
                            // SI slice : A slice that is coded using intra prediction only and using quantisation of the prediction samples.
                            // An SI slice can be coded such that its decoded samples can be constructed identically to an SP slice.
                            // I slice: A slice that is not an SI slice that is decoded using intra prediction only.
                            //if (sliceType === 2 || sliceType === 7) {
                            2 !== sliceType && 4 !== sliceType && 7 !== sliceType && 9 !== sliceType || (avcSample.key = !0);
                        }
                        break;

                      //IDR
                        case 5:
                        push = !0, // handle PES not starting with AUD
                        avcSample || (avcSample = _this.avcSample = createAVCSample(!0, pes.pts, pes.dts, "")), 
                        avcSample.key = !0, avcSample.frame = !0;
                        break;

                      //SEI
                        case 6:
                        push = !0, expGolombDecoder = new _expGolomb2.default(_this.discardEPB(unit.data)), 
                        // skip frameType
                        expGolombDecoder.readUByte();
                        for (var payloadType = 0, payloadSize = 0, endOfCaptions = !1, b = 0; !endOfCaptions && expGolombDecoder.bytesAvailable > 1; ) {
                            payloadType = 0;
                            do {
                                b = expGolombDecoder.readUByte(), payloadType += b;
                            } while (255 === b);
                            // Parse payload size.
                            payloadSize = 0;
                            do {
                                b = expGolombDecoder.readUByte(), payloadSize += b;
                            } while (255 === b);
                            // TODO: there can be more than one payload in an SEI packet...
                            // TODO: need to read type and size in a while loop to get them all
                            if (4 === payloadType && 0 !== expGolombDecoder.bytesAvailable) {
                                endOfCaptions = !0;
                                if (181 === expGolombDecoder.readUByte()) {
                                    if (49 === expGolombDecoder.readUShort()) {
                                        if (1195456820 === expGolombDecoder.readUInt()) {
                                            // Raw CEA-608 bytes wrapped in CEA-708 packet
                                            if (3 === expGolombDecoder.readUByte()) {
                                                var firstByte = expGolombDecoder.readUByte(), secondByte = expGolombDecoder.readUByte(), totalCCs = 31 & firstByte, byteArray = [ firstByte, secondByte ];
                                                for (i = 0; i < totalCCs; i++) // 3 bytes per CC
                                                byteArray.push(expGolombDecoder.readUByte()), byteArray.push(expGolombDecoder.readUByte()), 
                                                byteArray.push(expGolombDecoder.readUByte());
                                                _this._insertSampleInOrder(_this._txtTrack.samples, {
                                                    type: 3,
                                                    pts: pes.pts,
                                                    bytes: byteArray
                                                });
                                            }
                                        }
                                    }
                                }
                            } else if (payloadSize < expGolombDecoder.bytesAvailable) for (i = 0; i < payloadSize; i++) expGolombDecoder.readUByte();
                        }
                        break;

                      //SPS
                        case 7:
                        if (push = !0, spsfound = !0, !track.sps) {
                            expGolombDecoder = new _expGolomb2.default(unit.data);
                            var config = expGolombDecoder.readSPS();
                            track.width = config.width, track.height = config.height, track.pixelRatio = config.pixelRatio, 
                            track.sps = [ unit.data ], track.duration = _this._duration;
                            var codecarray = unit.data.subarray(1, 4), codecstring = "avc1.";
                            for (i = 0; i < 3; i++) {
                                var h = codecarray[i].toString(16);
                                h.length < 2 && (h = "0" + h), codecstring += h;
                            }
                            track.codec = codecstring;
                        }
                        break;

                      //PPS
                        case 8:
                        push = !0, track.pps || (track.pps = [ unit.data ]);
                        break;

                      // AUD
                        case 9:
                        push = !1, avcSample && pushAccesUnit(avcSample, track), avcSample = _this.avcSample = createAVCSample(!1, pes.pts, pes.dts, "");
                        break;

                      // Filler Data
                        case 12:
                        push = !1;
                        break;

                      default:
                        push = !1, avcSample && (avcSample.debug += "unknown NAL " + unit.type + " ");
                    }
                    if (avcSample && push) {
                        avcSample.units.push(unit);
                    }
                }), // if last PES packet, push samples
                last && avcSample && (pushAccesUnit(avcSample, track), this.avcSample = null);
            }
        }, {
            key: "_insertSampleInOrder",
            value: function(arr, data) {
                var len = arr.length;
                if (len > 0) {
                    if (data.pts >= arr[len - 1].pts) arr.push(data); else for (var pos = len - 1; pos >= 0; pos--) if (data.pts < arr[pos].pts) {
                        arr.splice(pos, 0, data);
                        break;
                    }
                } else arr.push(data);
            }
        }, {
            key: "_getLastNalUnit",
            value: function() {
                var avcSample = this.avcSample, lastUnit = void 0;
                // try to fallback to previous sample if current one is empty
                if (!avcSample || 0 === avcSample.units.length) {
                    var track = this._avcTrack, samples = track.samples;
                    avcSample = samples[samples.length - 1];
                }
                if (avcSample) {
                    var units = avcSample.units;
                    lastUnit = units[units.length - 1];
                }
                return lastUnit;
            }
        }, {
            key: "_parseAVCNALu",
            value: function(array) {
                var value, overflow, unit, unitType, lastUnitType, i = 0, len = array.byteLength, track = this._avcTrack, state = track.naluState || 0, lastState = state, units = [], lastUnitStart = -1;
                for (//logger.log('PES:' + Hex.hexDump(array));
                -1 === state && (// special use case where we found 3 or 4-byte start codes exactly at the end of previous PES packet
                lastUnitStart = 0, // NALu type is value read from offset 0
                lastUnitType = 31 & array[0], state = 0, i = 1); i < len; ) // optimization. state 0 and 1 are the predominant case. let's handle them outside of the switch/case
                if (value = array[i++], state) if (1 !== state) // here we have state either equal to 2 or 3
                if (value) if (1 === value) {
                    if (lastUnitStart >= 0) unit = {
                        data: array.subarray(lastUnitStart, i - state - 1),
                        type: lastUnitType
                    }, //logger.log('pushing NALU, type/size:' + unit.type + '/' + unit.data.byteLength);
                    units.push(unit); else {
                        // lastUnitStart is undefined => this is the first start code found in this PES packet
                        // first check if start code delimiter is overlapping between 2 PES packets,
                        // ie it started in last packet (lastState not zero)
                        // and ended at the beginning of this PES packet (i <= 4 - lastState)
                        var lastUnit = this._getLastNalUnit();
                        if (lastUnit && (lastState && i <= 4 - lastState && lastUnit.state && (// strip last bytes
                        lastUnit.data = lastUnit.data.subarray(0, lastUnit.data.byteLength - lastState)), 
                        (// If NAL units are not starting right at the beginning of the PES packet, push preceding data into previous NAL unit.
                        overflow = i - state - 1) > 0)) {
                            //logger.log('first NALU found with overflow:' + overflow);
                            var tmp = new Uint8Array(lastUnit.data.byteLength + overflow);
                            tmp.set(lastUnit.data, 0), tmp.set(array.subarray(0, overflow), lastUnit.data.byteLength), 
                            lastUnit.data = tmp;
                        }
                    }
                    // check if we can read unit type
                    i < len ? (unitType = 31 & array[i], //logger.log('find NALU @ offset:' + i + ',type:' + unitType);
                    lastUnitStart = i, lastUnitType = unitType, state = 0) : // not enough byte to read unit type. let's read it on next PES parsing
                    state = -1;
                } else state = 0; else state = 3; else state = value ? 0 : 2; else state = value ? 0 : 1;
                // no NALu found
                if (lastUnitStart >= 0 && state >= 0 && (unit = {
                    data: array.subarray(lastUnitStart, len),
                    type: lastUnitType,
                    state: state
                }, units.push(unit)), 0 === units.length) {
                    // append pes.data to previous NAL unit
                    var _lastUnit = this._getLastNalUnit();
                    if (_lastUnit) {
                        var _tmp = new Uint8Array(_lastUnit.data.byteLength + array.byteLength);
                        _tmp.set(_lastUnit.data, 0), _tmp.set(array, _lastUnit.data.byteLength), _lastUnit.data = _tmp;
                    }
                }
                return track.naluState = state, units;
            }
        }, {
            key: "discardEPB",
            value: function(data) {
                // Find all `Emulation Prevention Bytes`
                for (var newLength, newData, length = data.byteLength, EPBPositions = [], i = 1; i < length - 2; ) 0 === data[i] && 0 === data[i + 1] && 3 === data[i + 2] ? (EPBPositions.push(i + 2), 
                i += 2) : i++;
                // If no Emulation Prevention Bytes were found just return the original
                // array
                if (0 === EPBPositions.length) return data;
                // Create a new array to hold the NAL unit data
                newLength = length - EPBPositions.length, newData = new Uint8Array(newLength);
                var sourceIndex = 0;
                for (i = 0; i < newLength; sourceIndex++, i++) sourceIndex === EPBPositions[0] && (// Skip this byte
                sourceIndex++, // Remove this position index
                EPBPositions.shift()), newData[i] = data[sourceIndex];
                return newData;
            }
        }, {
            key: "_parseAACPES",
            value: function(pes) {
                var frameDuration, frameIndex, offset, stamp, len, track = this._audioTrack, data = pes.data, pts = pes.pts, aacOverFlow = this.aacOverFlow, aacLastPTS = this.aacLastPTS;
                if (aacOverFlow) {
                    var tmp = new Uint8Array(aacOverFlow.byteLength + data.byteLength);
                    tmp.set(aacOverFlow, 0), tmp.set(data, aacOverFlow.byteLength), //logger.log(`AAC: append overflowing ${aacOverFlow.byteLength} bytes to beginning of new PES`);
                    data = tmp;
                }
                // look for ADTS header (0xFFFx)
                for (offset = 0, len = data.length; offset < len - 1 && !_adts2.default.isHeader(data, offset); offset++) ;
                // if ADTS header does not start straight from the beginning of the PES payload, raise an error
                if (offset) {
                    var reason, fatal;
                    if (offset < len - 1 ? (reason = "AAC PES did not start with ADTS header,offset:" + offset, 
                    fatal = !1) : (reason = "no ADTS header found in AAC PES", fatal = !0), _logger.logger.warn("parsing error:" + reason), 
                    this.observer.trigger(_events2.default.ERROR, {
                        type: _errors.ErrorTypes.MEDIA_ERROR,
                        details: _errors.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: fatal,
                        reason: reason
                    }), fatal) return;
                }
                // if last AAC frame is overflowing, we should ensure timestamps are contiguous:
                // first sample PTS should be equal to last sample PTS + frameDuration
                if (_adts2.default.initTrackConfig(track, this.observer, data, offset, this.audioCodec), 
                frameIndex = 0, frameDuration = _adts2.default.getFrameDuration(track.samplerate), 
                aacOverFlow && aacLastPTS) {
                    var newPTS = aacLastPTS + frameDuration;
                    Math.abs(newPTS - pts) > 1 && (_logger.logger.log("AAC: align PTS for overlapping frames by " + Math.round((newPTS - pts) / 90)), 
                    pts = newPTS);
                }
                //scan for aac samples
                for (;offset < len; ) if (_adts2.default.isHeader(data, offset) && offset + 5 < len) {
                    var frame = _adts2.default.appendFrame(track, data, offset, pts, frameIndex);
                    if (!frame) //logger.log('Unable to parse AAC frame');
                    break;
                    //logger.log(`${Math.round(frame.sample.pts)} : AAC`);
                    offset += frame.length, stamp = frame.sample.pts, frameIndex++;
                } else //nothing found, keep looking
                offset++;
                aacOverFlow = offset < len ? data.subarray(offset, len) : null, this.aacOverFlow = aacOverFlow, 
                this.aacLastPTS = stamp;
            }
        }, {
            key: "_parseMPEGPES",
            value: function(pes) {
                for (var data = pes.data, length = data.length, frameIndex = 0, offset = 0, pts = pes.pts; offset < length; ) if (_mpegaudio2.default.isHeader(data, offset)) {
                    var frame = _mpegaudio2.default.appendFrame(this._audioTrack, data, offset, pts, frameIndex);
                    if (!frame) //logger.log('Unable to parse Mpeg audio frame');
                    break;
                    offset += frame.length, frameIndex++;
                } else //nothing found, keep looking
                offset++;
            }
        }, {
            key: "_parseID3PES",
            value: function(pes) {
                this._id3Track.samples.push(pes);
            }
        } ], [ {
            key: "probe",
            value: function(data) {
                // a TS fragment should contain at least 3 TS packets, a PAT, a PMT, and one PID, each starting with 0x47
                return data.length >= 564 && 71 === data[0] && 71 === data[188] && 71 === data[376];
            }
        } ]), TSDemuxer;
    }();
    exports.default = TSDemuxer;
}, /* 41 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), AAC = function() {
        function AAC() {
            _classCallCheck(this, AAC);
        }
        return _createClass(AAC, null, [ {
            key: "getSilentFrame",
            value: function(codec, channelCount) {
                switch (codec) {
                  case "mp4a.40.2":
                    if (1 === channelCount) return new Uint8Array([ 0, 200, 0, 128, 35, 128 ]);
                    if (2 === channelCount) return new Uint8Array([ 33, 0, 73, 144, 2, 25, 0, 35, 128 ]);
                    if (3 === channelCount) return new Uint8Array([ 0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142 ]);
                    if (4 === channelCount) return new Uint8Array([ 0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56 ]);
                    if (5 === channelCount) return new Uint8Array([ 0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56 ]);
                    if (6 === channelCount) return new Uint8Array([ 0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224 ]);
                    break;

                  // handle HE-AAC below (mp4a.40.5 / mp4a.40.29)
                    default:
                    if (1 === channelCount) // ffmpeg -y -f lavfi -i "aevalsrc=0:d=0.05" -c:a libfdk_aac -profile:a aac_he -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
                    return new Uint8Array([ 1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94 ]);
                    if (2 === channelCount) // ffmpeg -y -f lavfi -i "aevalsrc=0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
                    return new Uint8Array([ 1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94 ]);
                    if (3 === channelCount) // ffmpeg -y -f lavfi -i "aevalsrc=0|0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
                    return new Uint8Array([ 1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94 ]);
                }
                return null;
            }
        } ]), AAC;
    }();
    exports.default = AAC;
}, /* 42 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _urlToolkit = __webpack_require__(16), _urlToolkit2 = _interopRequireDefault(_urlToolkit), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _errors = __webpack_require__(2), _playlistLoader = __webpack_require__(45), _playlistLoader2 = _interopRequireDefault(_playlistLoader), _fragmentLoader = __webpack_require__(43), _fragmentLoader2 = _interopRequireDefault(_fragmentLoader), _keyLoader = __webpack_require__(44), _keyLoader2 = _interopRequireDefault(_keyLoader), _streamController = __webpack_require__(27), _streamController2 = _interopRequireDefault(_streamController), _levelController = __webpack_require__(26), _levelController2 = _interopRequireDefault(_levelController), _id3TrackController = __webpack_require__(25), _id3TrackController2 = _interopRequireDefault(_id3TrackController), _logger = __webpack_require__(0), _events3 = __webpack_require__(5), _events4 = _interopRequireDefault(_events3), _config = __webpack_require__(18), Hls = function() {
        function Hls() {
            var _this = this, config = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            _classCallCheck(this, Hls);
            var defaultConfig = Hls.DefaultConfig;
            if ((config.liveSyncDurationCount || config.liveMaxLatencyDurationCount) && (config.liveSyncDuration || config.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
            for (var prop in defaultConfig) prop in config || (config[prop] = defaultConfig[prop]);
            if (void 0 !== config.liveMaxLatencyDurationCount && config.liveMaxLatencyDurationCount <= config.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
            if (void 0 !== config.liveMaxLatencyDuration && (config.liveMaxLatencyDuration <= config.liveSyncDuration || void 0 === config.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
            (0, _logger.enableLogs)(config.debug), this.config = config, this._autoLevelCapping = -1;
            // observer setup
            var observer = this.observer = new _events4.default();
            observer.trigger = function(event) {
                for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) data[_key - 1] = arguments[_key];
                observer.emit.apply(observer, [ event, event ].concat(data));
            }, observer.off = function(event) {
                for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) data[_key2 - 1] = arguments[_key2];
                observer.removeListener.apply(observer, [ event ].concat(data));
            }, this.on = observer.on.bind(observer), this.off = observer.off.bind(observer), 
            this.trigger = observer.trigger.bind(observer);
            // core controllers and network loaders
            var abrController = this.abrController = new config.abrController(this), bufferController = new config.bufferController(this), capLevelController = new config.capLevelController(this), fpsController = new config.fpsController(this), playListLoader = new _playlistLoader2.default(this), fragmentLoader = new _fragmentLoader2.default(this), keyLoader = new _keyLoader2.default(this), id3TrackController = new _id3TrackController2.default(this), levelController = this.levelController = new _levelController2.default(this), streamController = this.streamController = new _streamController2.default(this), networkControllers = [ levelController, streamController ], Controller = config.audioStreamController;
            Controller && networkControllers.push(new Controller(this)), this.networkControllers = networkControllers;
            var coreComponents = [ playListLoader, fragmentLoader, keyLoader, abrController, bufferController, capLevelController, fpsController, id3TrackController ];
            if (// optional audio track and subtitle controller
            Controller = config.audioTrackController) {
                var audioTrackController = new Controller(this);
                this.audioTrackController = audioTrackController, coreComponents.push(audioTrackController);
            }
            if (Controller = config.subtitleTrackController) {
                var subtitleTrackController = new Controller(this);
                this.subtitleTrackController = subtitleTrackController, coreComponents.push(subtitleTrackController);
            }
            // optional subtitle controller
            [ config.subtitleStreamController, config.timelineController ].forEach(function(Controller) {
                Controller && coreComponents.push(new Controller(_this));
            }), this.coreComponents = coreComponents;
        }
        return _createClass(Hls, null, [ {
            key: "isSupported",
            value: function() {
                var mediaSource = window.MediaSource = window.MediaSource || window.WebKitMediaSource, sourceBuffer = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer, isTypeSupported = mediaSource && "function" == typeof mediaSource.isTypeSupported && mediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && "function" == typeof sourceBuffer.prototype.appendBuffer && "function" == typeof sourceBuffer.prototype.remove;
                return isTypeSupported && sourceBufferValidAPI;
            }
        }, {
            key: "version",
            get: function() {
                // replaced with browserify-versionify transform
                return "__VERSION__";
            }
        }, {
            key: "Events",
            get: function() {
                return _events2.default;
            }
        }, {
            key: "ErrorTypes",
            get: function() {
                return _errors.ErrorTypes;
            }
        }, {
            key: "ErrorDetails",
            get: function() {
                return _errors.ErrorDetails;
            }
        }, {
            key: "DefaultConfig",
            get: function() {
                return Hls.defaultConfig ? Hls.defaultConfig : _config.hlsDefaultConfig;
            },
            set: function(defaultConfig) {
                Hls.defaultConfig = defaultConfig;
            }
        } ]), _createClass(Hls, [ {
            key: "destroy",
            value: function() {
                _logger.logger.log("destroy"), this.trigger(_events2.default.DESTROYING), this.detachMedia(), 
                this.coreComponents.concat(this.networkControllers).forEach(function(component) {
                    component.destroy();
                }), this.url = null, this.observer.removeAllListeners(), this._autoLevelCapping = -1;
            }
        }, {
            key: "attachMedia",
            value: function(media) {
                _logger.logger.log("attachMedia"), this.media = media, this.trigger(_events2.default.MEDIA_ATTACHING, {
                    media: media
                });
            }
        }, {
            key: "detachMedia",
            value: function() {
                _logger.logger.log("detachMedia"), this.trigger(_events2.default.MEDIA_DETACHING), 
                this.media = null;
            }
        }, {
            key: "loadSource",
            value: function(url) {
                url = _urlToolkit2.default.buildAbsoluteURL(window.location.href, url, {
                    alwaysNormalize: !0
                }), _logger.logger.log("loadSource:" + url), this.url = url, // when attaching to a source URL, trigger a playlist load
                this.trigger(_events2.default.MANIFEST_LOADING, {
                    url: url
                });
            }
        }, {
            key: "startLoad",
            value: function() {
                var startPosition = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                _logger.logger.log("startLoad(" + startPosition + ")"), this.networkControllers.forEach(function(controller) {
                    controller.startLoad(startPosition);
                });
            }
        }, {
            key: "stopLoad",
            value: function() {
                _logger.logger.log("stopLoad"), this.networkControllers.forEach(function(controller) {
                    controller.stopLoad();
                });
            }
        }, {
            key: "swapAudioCodec",
            value: function() {
                _logger.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
            }
        }, {
            key: "recoverMediaError",
            value: function() {
                _logger.logger.log("recoverMediaError");
                var media = this.media;
                this.detachMedia(), this.attachMedia(media);
            }
        }, {
            key: "levels",
            get: function() {
                return this.levelController.levels;
            }
        }, {
            key: "currentLevel",
            get: function() {
                return this.streamController.currentLevel;
            },
            set: function(newLevel) {
                _logger.logger.log("set currentLevel:" + newLevel), this.loadLevel = newLevel, this.streamController.immediateLevelSwitch();
            }
        }, {
            key: "nextLevel",
            get: function() {
                return this.streamController.nextLevel;
            },
            set: function(newLevel) {
                _logger.logger.log("set nextLevel:" + newLevel), this.levelController.manualLevel = newLevel, 
                this.streamController.nextLevelSwitch();
            }
        }, {
            key: "loadLevel",
            get: function() {
                return this.levelController.level;
            },
            set: function(newLevel) {
                _logger.logger.log("set loadLevel:" + newLevel), this.levelController.manualLevel = newLevel;
            }
        }, {
            key: "nextLoadLevel",
            get: function() {
                return this.levelController.nextLoadLevel;
            },
            set: function(level) {
                this.levelController.nextLoadLevel = level;
            }
        }, {
            key: "firstLevel",
            get: function() {
                return Math.max(this.levelController.firstLevel, this.minAutoLevel);
            },
            set: function(newLevel) {
                _logger.logger.log("set firstLevel:" + newLevel), this.levelController.firstLevel = newLevel;
            }
        }, {
            key: "startLevel",
            get: function() {
                return this.levelController.startLevel;
            },
            set: function(newLevel) {
                _logger.logger.log("set startLevel:" + newLevel);
                var hls = this;
                // if not in automatic start level detection, ensure startLevel is greater than minAutoLevel
                -1 !== newLevel && (newLevel = Math.max(newLevel, hls.minAutoLevel)), hls.levelController.startLevel = newLevel;
            }
        }, {
            key: "autoLevelCapping",
            get: function() {
                return this._autoLevelCapping;
            },
            set: function(newLevel) {
                _logger.logger.log("set autoLevelCapping:" + newLevel), this._autoLevelCapping = newLevel;
            }
        }, {
            key: "autoLevelEnabled",
            get: function() {
                return -1 === this.levelController.manualLevel;
            }
        }, {
            key: "manualLevel",
            get: function() {
                return this.levelController.manualLevel;
            }
        }, {
            key: "minAutoLevel",
            get: function() {
                for (var hls = this, levels = hls.levels, minAutoBitrate = hls.config.minAutoBitrate, len = levels ? levels.length : 0, i = 0; i < len; i++) {
                    if ((levels[i].realBitrate ? Math.max(levels[i].realBitrate, levels[i].bitrate) : levels[i].bitrate) > minAutoBitrate) return i;
                }
                return 0;
            }
        }, {
            key: "maxAutoLevel",
            get: function() {
                var hls = this, levels = hls.levels, autoLevelCapping = hls.autoLevelCapping;
                return -1 === autoLevelCapping && levels && levels.length ? levels.length - 1 : autoLevelCapping;
            }
        }, {
            key: "nextAutoLevel",
            get: function() {
                var hls = this;
                // ensure next auto level is between  min and max auto level
                return Math.min(Math.max(hls.abrController.nextAutoLevel, hls.minAutoLevel), hls.maxAutoLevel);
            },
            set: function(nextLevel) {
                var hls = this;
                hls.abrController.nextAutoLevel = Math.max(hls.minAutoLevel, nextLevel);
            }
        }, {
            key: "audioTracks",
            get: function() {
                var audioTrackController = this.audioTrackController;
                return audioTrackController ? audioTrackController.audioTracks : [];
            }
        }, {
            key: "audioTrack",
            get: function() {
                var audioTrackController = this.audioTrackController;
                return audioTrackController ? audioTrackController.audioTrack : -1;
            },
            set: function(audioTrackId) {
                var audioTrackController = this.audioTrackController;
                audioTrackController && (audioTrackController.audioTrack = audioTrackId);
            }
        }, {
            key: "liveSyncPosition",
            get: function() {
                return this.streamController.liveSyncPosition;
            }
        }, {
            key: "subtitleTracks",
            get: function() {
                var subtitleTrackController = this.subtitleTrackController;
                return subtitleTrackController ? subtitleTrackController.subtitleTracks : [];
            }
        }, {
            key: "subtitleTrack",
            get: function() {
                var subtitleTrackController = this.subtitleTrackController;
                return subtitleTrackController ? subtitleTrackController.subtitleTrack : -1;
            },
            set: function(subtitleTrackId) {
                var subtitleTrackController = this.subtitleTrackController;
                subtitleTrackController && (subtitleTrackController.subtitleTrack = subtitleTrackId);
            }
        } ]), Hls;
    }();
    exports.default = Hls;
}, /* 43 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _errors = __webpack_require__(2), _logger = __webpack_require__(0), FragmentLoader = function(_EventHandler) {
        function FragmentLoader(hls) {
            _classCallCheck(this, FragmentLoader);
            var _this = _possibleConstructorReturn(this, (FragmentLoader.__proto__ || Object.getPrototypeOf(FragmentLoader)).call(this, hls, _events2.default.FRAG_LOADING));
            return _this.loaders = {}, _this;
        }
        return _inherits(FragmentLoader, _EventHandler), _createClass(FragmentLoader, [ {
            key: "destroy",
            value: function() {
                var loaders = this.loaders;
                for (var loaderName in loaders) {
                    var loader = loaders[loaderName];
                    loader && loader.destroy();
                }
                this.loaders = {}, _eventHandler2.default.prototype.destroy.call(this);
            }
        }, {
            key: "onFragLoading",
            value: function(data) {
                var frag = data.frag, type = frag.type, loader = this.loaders[type], config = this.hls.config;
                frag.loaded = 0, loader && (_logger.logger.warn("abort previous fragment loader for type:" + type), 
                loader.abort()), loader = this.loaders[type] = frag.loader = void 0 !== config.fLoader ? new config.fLoader(config) : new config.loader(config);
                var loaderContext = void 0, loaderConfig = void 0, loaderCallbacks = void 0;
                loaderContext = {
                    url: frag.url,
                    frag: frag,
                    responseType: "arraybuffer",
                    progressData: !1
                };
                var start = frag.byteRangeStartOffset, end = frag.byteRangeEndOffset;
                isNaN(start) || isNaN(end) || (loaderContext.rangeStart = start, loaderContext.rangeEnd = end), 
                loaderConfig = {
                    timeout: config.fragLoadingTimeOut,
                    maxRetry: 0,
                    retryDelay: 0,
                    maxRetryDelay: config.fragLoadingMaxRetryTimeout
                }, loaderCallbacks = {
                    onSuccess: this.loadsuccess.bind(this),
                    onError: this.loaderror.bind(this),
                    onTimeout: this.loadtimeout.bind(this),
                    onProgress: this.loadprogress.bind(this)
                }, loader.load(loaderContext, loaderConfig, loaderCallbacks);
            }
        }, {
            key: "loadsuccess",
            value: function(response, stats, context) {
                var networkDetails = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, payload = response.data, frag = context.frag;
                // detach fragment loader on load success
                frag.loader = void 0, this.loaders[frag.type] = void 0, this.hls.trigger(_events2.default.FRAG_LOADED, {
                    payload: payload,
                    frag: frag,
                    stats: stats,
                    networkDetails: networkDetails
                });
            }
        }, {
            key: "loaderror",
            value: function(response, context) {
                var networkDetails = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, loader = context.loader;
                loader && loader.abort(), this.loaders[context.type] = void 0, this.hls.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.NETWORK_ERROR,
                    details: _errors.ErrorDetails.FRAG_LOAD_ERROR,
                    fatal: !1,
                    frag: context.frag,
                    response: response,
                    networkDetails: networkDetails
                });
            }
        }, {
            key: "loadtimeout",
            value: function(stats, context) {
                var networkDetails = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, loader = context.loader;
                loader && loader.abort(), this.loaders[context.type] = void 0, this.hls.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.NETWORK_ERROR,
                    details: _errors.ErrorDetails.FRAG_LOAD_TIMEOUT,
                    fatal: !1,
                    frag: context.frag,
                    networkDetails: networkDetails
                });
            }
        }, {
            key: "loadprogress",
            value: function(stats, context, data) {
                var networkDetails = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, frag = context.frag;
                frag.loaded = stats.loaded, this.hls.trigger(_events2.default.FRAG_LOAD_PROGRESS, {
                    frag: frag,
                    stats: stats,
                    networkDetails: networkDetails
                });
            }
        } ]), FragmentLoader;
    }(_eventHandler2.default);
    exports.default = FragmentLoader;
}, /* 44 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _errors = __webpack_require__(2), _logger = __webpack_require__(0), KeyLoader = function(_EventHandler) {
        function KeyLoader(hls) {
            _classCallCheck(this, KeyLoader);
            var _this = _possibleConstructorReturn(this, (KeyLoader.__proto__ || Object.getPrototypeOf(KeyLoader)).call(this, hls, _events2.default.KEY_LOADING));
            return _this.loaders = {}, _this.decryptkey = null, _this.decrypturl = null, _this;
        }
        return _inherits(KeyLoader, _EventHandler), _createClass(KeyLoader, [ {
            key: "destroy",
            value: function() {
                for (var loaderName in this.loaders) {
                    var loader = this.loaders[loaderName];
                    loader && loader.destroy();
                }
                this.loaders = {}, _eventHandler2.default.prototype.destroy.call(this);
            }
        }, {
            key: "onKeyLoading",
            value: function(data) {
                var frag = data.frag, type = frag.type, loader = this.loaders[type], decryptdata = frag.decryptdata, uri = decryptdata.uri;
                // if uri is different from previous one or if decrypt key not retrieved yet
                if (uri !== this.decrypturl || null === this.decryptkey) {
                    var config = this.hls.config;
                    loader && (_logger.logger.warn("abort previous key loader for type:" + type), loader.abort()), 
                    frag.loader = this.loaders[type] = new config.loader(config), this.decrypturl = uri, 
                    this.decryptkey = null;
                    var loaderContext = void 0, loaderConfig = void 0, loaderCallbacks = void 0;
                    loaderContext = {
                        url: uri,
                        frag: frag,
                        responseType: "arraybuffer"
                    }, loaderConfig = {
                        timeout: config.fragLoadingTimeOut,
                        maxRetry: config.fragLoadingMaxRetry,
                        retryDelay: config.fragLoadingRetryDelay,
                        maxRetryDelay: config.fragLoadingMaxRetryTimeout
                    }, loaderCallbacks = {
                        onSuccess: this.loadsuccess.bind(this),
                        onError: this.loaderror.bind(this),
                        onTimeout: this.loadtimeout.bind(this)
                    }, frag.loader.load(loaderContext, loaderConfig, loaderCallbacks);
                } else this.decryptkey && (// we already loaded this key, return it
                decryptdata.key = this.decryptkey, this.hls.trigger(_events2.default.KEY_LOADED, {
                    frag: frag
                }));
            }
        }, {
            key: "loadsuccess",
            value: function(response, stats, context) {
                var frag = context.frag;
                this.decryptkey = frag.decryptdata.key = new Uint8Array(response.data), // detach fragment loader on load success
                frag.loader = void 0, this.loaders[frag.type] = void 0, this.hls.trigger(_events2.default.KEY_LOADED, {
                    frag: frag
                });
            }
        }, {
            key: "loaderror",
            value: function(response, context) {
                var frag = context.frag, loader = frag.loader;
                loader && loader.abort(), this.loaders[context.type] = void 0, this.hls.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.NETWORK_ERROR,
                    details: _errors.ErrorDetails.KEY_LOAD_ERROR,
                    fatal: !1,
                    frag: frag,
                    response: response
                });
            }
        }, {
            key: "loadtimeout",
            value: function(stats, context) {
                var frag = context.frag, loader = frag.loader;
                loader && loader.abort(), this.loaders[context.type] = void 0, this.hls.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.NETWORK_ERROR,
                    details: _errors.ErrorDetails.KEY_LOAD_TIMEOUT,
                    fatal: !1,
                    frag: frag
                });
            }
        } ]), KeyLoader;
    }(_eventHandler2.default);
    exports.default = KeyLoader;
}, /* 45 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" !== (void 0 === call ? "undefined" : _typeof(call)) && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === superClass ? "undefined" : _typeof(superClass)));
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _urlToolkit = __webpack_require__(16), _urlToolkit2 = _interopRequireDefault(_urlToolkit), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _eventHandler = __webpack_require__(3), _eventHandler2 = _interopRequireDefault(_eventHandler), _errors = __webpack_require__(2), _attrList = __webpack_require__(49), _attrList2 = _interopRequireDefault(_attrList), _logger = __webpack_require__(0), MASTER_PLAYLIST_REGEX = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g, MASTER_PLAYLIST_MEDIA_REGEX = /#EXT-X-MEDIA:(.*)/g, LEVEL_PLAYLIST_REGEX_FAST = new RegExp([ /#EXTINF:(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
    /|(?!#)(\S+)/.source, // segment URI, group 3 => the URI (note newline is not eaten)
    /|#EXT-X-BYTERANGE:*(.+)/.source, // next segment's byterange, group 4 => range spec (x@y)
    /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, // next segment's program date/time group 5 => the datetime spec
    /|#.*/.source ].join(""), "g"), LEVEL_PLAYLIST_REGEX_SLOW = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/, LevelKey = function() {
        function LevelKey() {
            _classCallCheck(this, LevelKey), this.method = null, this.key = null, this.iv = null, 
            this._uri = null;
        }
        return _createClass(LevelKey, [ {
            key: "uri",
            get: function() {
                return !this._uri && this.reluri && (this._uri = _urlToolkit2.default.buildAbsoluteURL(this.baseuri, this.reluri, {
                    alwaysNormalize: !0
                })), this._uri;
            }
        } ]), LevelKey;
    }(), Fragment = function() {
        function Fragment() {
            _classCallCheck(this, Fragment), this._url = null, this._byteRange = null, this._decryptdata = null, 
            this.tagList = [];
        }
        return _createClass(Fragment, [ {
            key: "createInitializationVector",
            /**
     * Utility method for parseLevelPlaylist to create an initialization vector for a given segment
     * @returns {Uint8Array}
     */
            value: function(segmentNumber) {
                for (var uint8View = new Uint8Array(16), i = 12; i < 16; i++) uint8View[i] = segmentNumber >> 8 * (15 - i) & 255;
                return uint8View;
            }
        }, {
            key: "fragmentDecryptdataFromLevelkey",
            value: function(levelkey, segmentNumber) {
                var decryptdata = levelkey;
                return levelkey && levelkey.method && levelkey.uri && !levelkey.iv && (decryptdata = new LevelKey(), 
                decryptdata.method = levelkey.method, decryptdata.baseuri = levelkey.baseuri, decryptdata.reluri = levelkey.reluri, 
                decryptdata.iv = this.createInitializationVector(segmentNumber)), decryptdata;
            }
        }, {
            key: "cloneObj",
            value: function(obj) {
                return JSON.parse(JSON.stringify(obj));
            }
        }, {
            key: "url",
            get: function() {
                return !this._url && this.relurl && (this._url = _urlToolkit2.default.buildAbsoluteURL(this.baseurl, this.relurl, {
                    alwaysNormalize: !0
                })), this._url;
            },
            set: function(value) {
                this._url = value;
            }
        }, {
            key: "programDateTime",
            get: function() {
                return !this._programDateTime && this.rawProgramDateTime && (this._programDateTime = new Date(Date.parse(this.rawProgramDateTime))), 
                this._programDateTime;
            }
        }, {
            key: "byteRange",
            get: function() {
                if (!this._byteRange) {
                    var byteRange = this._byteRange = [];
                    if (this.rawByteRange) {
                        var params = this.rawByteRange.split("@", 2);
                        if (1 === params.length) {
                            var lastByteRangeEndOffset = this.lastByteRangeEndOffset;
                            byteRange[0] = lastByteRangeEndOffset || 0;
                        } else byteRange[0] = parseInt(params[1]);
                        byteRange[1] = parseInt(params[0]) + byteRange[0];
                    }
                }
                return this._byteRange;
            }
        }, {
            key: "byteRangeStartOffset",
            get: function() {
                return this.byteRange[0];
            }
        }, {
            key: "byteRangeEndOffset",
            get: function() {
                return this.byteRange[1];
            }
        }, {
            key: "decryptdata",
            get: function() {
                return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), 
                this._decryptdata;
            }
        } ]), Fragment;
    }(), PlaylistLoader = function(_EventHandler) {
        function PlaylistLoader(hls) {
            _classCallCheck(this, PlaylistLoader);
            var _this = _possibleConstructorReturn(this, (PlaylistLoader.__proto__ || Object.getPrototypeOf(PlaylistLoader)).call(this, hls, _events2.default.MANIFEST_LOADING, _events2.default.LEVEL_LOADING, _events2.default.AUDIO_TRACK_LOADING, _events2.default.SUBTITLE_TRACK_LOADING));
            return _this.loaders = {}, _this;
        }
        return _inherits(PlaylistLoader, _EventHandler), _createClass(PlaylistLoader, [ {
            key: "destroy",
            value: function() {
                for (var loaderName in this.loaders) {
                    var loader = this.loaders[loaderName];
                    loader && loader.destroy();
                }
                this.loaders = {}, _eventHandler2.default.prototype.destroy.call(this);
            }
        }, {
            key: "onManifestLoading",
            value: function(data) {
                this.load(data.url, {
                    type: "manifest"
                });
            }
        }, {
            key: "onLevelLoading",
            value: function(data) {
                this.load(data.url, {
                    type: "level",
                    level: data.level,
                    id: data.id
                });
            }
        }, {
            key: "onAudioTrackLoading",
            value: function(data) {
                this.load(data.url, {
                    type: "audioTrack",
                    id: data.id
                });
            }
        }, {
            key: "onSubtitleTrackLoading",
            value: function(data) {
                this.load(data.url, {
                    type: "subtitleTrack",
                    id: data.id
                });
            }
        }, {
            key: "load",
            value: function(url, context) {
                var loader = this.loaders[context.type];
                if (loader) {
                    var loaderContext = loader.context;
                    if (loaderContext && loaderContext.url === url) return void _logger.logger.trace("playlist request ongoing");
                    _logger.logger.warn("abort previous loader for type:" + context.type), loader.abort();
                }
                var config = this.hls.config, retry = void 0, timeout = void 0, retryDelay = void 0, maxRetryDelay = void 0;
                "manifest" === context.type ? (retry = config.manifestLoadingMaxRetry, timeout = config.manifestLoadingTimeOut, 
                retryDelay = config.manifestLoadingRetryDelay, maxRetryDelay = config.manifestLoadingMaxRetryTimeout) : (retry = config.levelLoadingMaxRetry, 
                timeout = config.levelLoadingTimeOut, retryDelay = config.levelLoadingRetryDelay, 
                maxRetryDelay = config.levelLoadingMaxRetryTimeout, _logger.logger.log("loading playlist for " + context.type + " " + (context.level || context.id))), 
                loader = this.loaders[context.type] = context.loader = void 0 !== config.pLoader ? new config.pLoader(config) : new config.loader(config), 
                context.url = url, context.responseType = "";
                var loaderConfig = void 0, loaderCallbacks = void 0;
                loaderConfig = {
                    timeout: timeout,
                    maxRetry: retry,
                    retryDelay: retryDelay,
                    maxRetryDelay: maxRetryDelay
                }, loaderCallbacks = {
                    onSuccess: this.loadsuccess.bind(this),
                    onError: this.loaderror.bind(this),
                    onTimeout: this.loadtimeout.bind(this)
                }, loader.load(context, loaderConfig, loaderCallbacks);
            }
        }, {
            key: "resolve",
            value: function(url, baseUrl) {
                return _urlToolkit2.default.buildAbsoluteURL(baseUrl, url, {
                    alwaysNormalize: !0
                });
            }
        }, {
            key: "parseMasterPlaylist",
            value: function(string, baseurl) {
                var levels = [], result = void 0;
                for (MASTER_PLAYLIST_REGEX.lastIndex = 0; null != (result = MASTER_PLAYLIST_REGEX.exec(string)); ) {
                    var level = {}, attrs = level.attrs = new _attrList2.default(result[1]);
                    level.url = this.resolve(result[2], baseurl);
                    var resolution = attrs.decimalResolution("RESOLUTION");
                    resolution && (level.width = resolution.width, level.height = resolution.height), 
                    level.bitrate = attrs.decimalInteger("AVERAGE-BANDWIDTH") || attrs.decimalInteger("BANDWIDTH"), 
                    level.name = attrs.NAME;
                    var codecs = attrs.CODECS;
                    if (codecs) {
                        codecs = codecs.split(/[ ,]+/);
                        for (var i = 0; i < codecs.length; i++) {
                            var codec = codecs[i];
                            -1 !== codec.indexOf("avc1") ? level.videoCodec = this.avc1toavcoti(codec) : -1 !== codec.indexOf("hvc1") ? level.videoCodec = codec : level.audioCodec = codec;
                        }
                    }
                    levels.push(level);
                }
                return levels;
            }
        }, {
            key: "parseMasterPlaylistMedia",
            value: function(string, baseurl, type) {
                var audioCodec = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, result = void 0, medias = [], id = 0;
                for (MASTER_PLAYLIST_MEDIA_REGEX.lastIndex = 0; null != (result = MASTER_PLAYLIST_MEDIA_REGEX.exec(string)); ) {
                    var media = {}, attrs = new _attrList2.default(result[1]);
                    attrs.TYPE === type && (media.groupId = attrs["GROUP-ID"], media.name = attrs.NAME, 
                    media.type = type, media.default = "YES" === attrs.DEFAULT, media.autoselect = "YES" === attrs.AUTOSELECT, 
                    media.forced = "YES" === attrs.FORCED, attrs.URI && (media.url = this.resolve(attrs.URI, baseurl)), 
                    media.lang = attrs.LANGUAGE, media.name || (media.name = media.lang), audioCodec && (media.audioCodec = audioCodec), 
                    media.id = id++, medias.push(media));
                }
                return medias;
            }
        }, {
            key: "avc1toavcoti",
            value: function(codec) {
                var result, avcdata = codec.split(".");
                return avcdata.length > 2 ? (result = avcdata.shift() + ".", result += parseInt(avcdata.shift()).toString(16), 
                result += ("000" + parseInt(avcdata.shift()).toString(16)).substr(-4)) : result = codec, 
                result;
            }
        }, {
            key: "parseLevelPlaylist",
            value: function(string, baseurl, id, type) {
                var result, i, currentSN = 0, totalduration = 0, level = {
                    type: null,
                    version: null,
                    url: baseurl,
                    fragments: [],
                    live: !0,
                    startSN: 0
                }, levelkey = new LevelKey(), cc = 0, prevFrag = null, frag = new Fragment();
                for (LEVEL_PLAYLIST_REGEX_FAST.lastIndex = 0; null !== (result = LEVEL_PLAYLIST_REGEX_FAST.exec(string)); ) {
                    var duration = result[1];
                    if (duration) {
                        // INF
                        frag.duration = parseFloat(duration);
                        // avoid sliced strings    https://github.com/video-dev/hls.js/issues/939
                        var title = (" " + result[2]).slice(1);
                        frag.title = title || null, frag.tagList.push(title ? [ "INF", duration, title ] : [ "INF", duration ]);
                    } else if (result[3]) {
                        // url
                        if (!isNaN(frag.duration)) {
                            var sn = currentSN++;
                            frag.type = type, frag.start = totalduration, frag.levelkey = levelkey, frag.sn = sn, 
                            frag.level = id, frag.cc = cc, frag.baseurl = baseurl, // avoid sliced strings    https://github.com/video-dev/hls.js/issues/939
                            frag.relurl = (" " + result[3]).slice(1), level.fragments.push(frag), prevFrag = frag, 
                            totalduration += frag.duration, frag = new Fragment();
                        }
                    } else if (result[4]) {
                        if (// X-BYTERANGE
                        frag.rawByteRange = (" " + result[4]).slice(1), prevFrag) {
                            var lastByteRangeEndOffset = prevFrag.byteRangeEndOffset;
                            lastByteRangeEndOffset && (frag.lastByteRangeEndOffset = lastByteRangeEndOffset);
                        }
                    } else if (result[5]) // PROGRAM-DATE-TIME
                    // avoid sliced strings    https://github.com/video-dev/hls.js/issues/939
                    frag.rawProgramDateTime = (" " + result[5]).slice(1), frag.tagList.push([ "PROGRAM-DATE-TIME", frag.rawProgramDateTime ]); else {
                        for (result = result[0].match(LEVEL_PLAYLIST_REGEX_SLOW), i = 1; i < result.length && void 0 === result[i]; i++) ;
                        // avoid sliced strings    https://github.com/video-dev/hls.js/issues/939
                        var value1 = (" " + result[i + 1]).slice(1), value2 = (" " + result[i + 2]).slice(1);
                        switch (result[i]) {
                          case "#":
                            frag.tagList.push(value2 ? [ value1, value2 ] : [ value1 ]);
                            break;

                          case "PLAYLIST-TYPE":
                            level.type = value1.toUpperCase();
                            break;

                          case "MEDIA-SEQUENCE":
                            currentSN = level.startSN = parseInt(value1);
                            break;

                          case "TARGETDURATION":
                            level.targetduration = parseFloat(value1);
                            break;

                          case "VERSION":
                            level.version = parseInt(value1);
                            break;

                          case "EXTM3U":
                            break;

                          case "ENDLIST":
                            level.live = !1;
                            break;

                          case "DIS":
                            cc++, frag.tagList.push([ "DIS" ]);
                            break;

                          case "DISCONTINUITY-SEQ":
                            cc = parseInt(value1);
                            break;

                          case "KEY":
                            // https://tools.ietf.org/html/draft-pantos-http-live-streaming-08#section-3.4.4
                            var decryptparams = value1, keyAttrs = new _attrList2.default(decryptparams), decryptmethod = keyAttrs.enumeratedString("METHOD"), decrypturi = keyAttrs.URI, decryptiv = keyAttrs.hexadecimalInteger("IV");
                            decryptmethod && (levelkey = new LevelKey(), decrypturi && [ "AES-128", "SAMPLE-AES" ].indexOf(decryptmethod) >= 0 && (levelkey.method = decryptmethod, 
                            // URI to get the key
                            levelkey.baseuri = baseurl, levelkey.reluri = decrypturi, levelkey.key = null, // Initialization Vector (IV)
                            levelkey.iv = decryptiv));
                            break;

                          case "START":
                            var startParams = value1, startAttrs = new _attrList2.default(startParams), startTimeOffset = startAttrs.decimalFloatingPoint("TIME-OFFSET");
                            //TIME-OFFSET can be 0
                            isNaN(startTimeOffset) || (level.startTimeOffset = startTimeOffset);
                            break;

                          case "MAP":
                            var mapAttrs = new _attrList2.default(value1);
                            frag.relurl = mapAttrs.URI, frag.rawByteRange = mapAttrs.BYTERANGE, frag.baseurl = baseurl, 
                            frag.level = id, frag.type = type, frag.sn = "initSegment", level.initSegment = frag, 
                            frag = new Fragment();
                            break;

                          default:
                            _logger.logger.warn("line parsed but not handled: " + result);
                        }
                    }
                }
                //logger.log('found ' + level.fragments.length + ' fragments');
                return frag = prevFrag, frag && !frag.relurl && (level.fragments.pop(), totalduration -= frag.duration), 
                level.totalduration = totalduration, level.averagetargetduration = totalduration / level.fragments.length, 
                level.endSN = currentSN - 1, level;
            }
        }, {
            key: "loadsuccess",
            value: function(response, stats, context) {
                var networkDetails = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, string = response.data, url = response.url, type = context.type, id = context.id, level = context.level, hls = this.hls;
                //stats.mtime = new Date(target.getResponseHeader('Last-Modified'));
                if (this.loaders[type] = void 0, // responseURL not supported on some browsers (it is used to detect URL redirection)
                // data-uri mode also not supported (but no need to detect redirection)
                void 0 !== url && 0 !== url.indexOf("data:") || (// fallback to initial URL
                url = context.url), stats.tload = performance.now(), 0 === string.indexOf("#EXTM3U")) if (string.indexOf("#EXTINF:") > 0) {
                    var isLevel = "audioTrack" !== type && "subtitleTrack" !== type, levelId = isNaN(level) ? isNaN(id) ? 0 : id : level, levelDetails = this.parseLevelPlaylist(string, url, levelId, "audioTrack" === type ? "audio" : "subtitleTrack" === type ? "subtitle" : "main");
                    levelDetails.tload = stats.tload, "manifest" === type && // first request, stream manifest (no master playlist), fire manifest loaded event with level details
                    hls.trigger(_events2.default.MANIFEST_LOADED, {
                        levels: [ {
                            url: url,
                            details: levelDetails
                        } ],
                        audioTracks: [],
                        url: url,
                        stats: stats,
                        networkDetails: networkDetails
                    }), stats.tparsed = performance.now(), levelDetails.targetduration ? isLevel ? hls.trigger(_events2.default.LEVEL_LOADED, {
                        details: levelDetails,
                        level: level || 0,
                        id: id || 0,
                        stats: stats,
                        networkDetails: networkDetails
                    }) : "audioTrack" === type ? hls.trigger(_events2.default.AUDIO_TRACK_LOADED, {
                        details: levelDetails,
                        id: id,
                        stats: stats,
                        networkDetails: networkDetails
                    }) : "subtitleTrack" === type && hls.trigger(_events2.default.SUBTITLE_TRACK_LOADED, {
                        details: levelDetails,
                        id: id,
                        stats: stats,
                        networkDetails: networkDetails
                    }) : hls.trigger(_events2.default.ERROR, {
                        type: _errors.ErrorTypes.NETWORK_ERROR,
                        details: _errors.ErrorDetails.MANIFEST_PARSING_ERROR,
                        fatal: !0,
                        url: url,
                        reason: "invalid targetduration",
                        networkDetails: networkDetails
                    });
                } else {
                    var levels = this.parseMasterPlaylist(string, url);
                    // multi level playlist, parse level info
                    if (levels.length) {
                        var audioTracks = this.parseMasterPlaylistMedia(string, url, "AUDIO", levels[0].audioCodec), subtitles = this.parseMasterPlaylistMedia(string, url, "SUBTITLES");
                        if (audioTracks.length) {
                            // check if we have found an audio track embedded in main playlist (audio track without URI attribute)
                            var embeddedAudioFound = !1;
                            audioTracks.forEach(function(audioTrack) {
                                audioTrack.url || (embeddedAudioFound = !0);
                            }), // if no embedded audio track defined, but audio codec signaled in quality level, we need to signal this main audio track
                            // this could happen with playlists with alt audio rendition in which quality levels (main) contains both audio+video. but with mixed audio track not signaled
                            !1 === embeddedAudioFound && levels[0].audioCodec && !levels[0].attrs.AUDIO && (_logger.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), 
                            audioTracks.unshift({
                                type: "main",
                                name: "main"
                            }));
                        }
                        hls.trigger(_events2.default.MANIFEST_LOADED, {
                            levels: levels,
                            audioTracks: audioTracks,
                            subtitles: subtitles,
                            url: url,
                            stats: stats,
                            networkDetails: networkDetails
                        });
                    } else hls.trigger(_events2.default.ERROR, {
                        type: _errors.ErrorTypes.NETWORK_ERROR,
                        details: _errors.ErrorDetails.MANIFEST_PARSING_ERROR,
                        fatal: !0,
                        url: url,
                        reason: "no level found in manifest",
                        networkDetails: networkDetails
                    });
                } else hls.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.NETWORK_ERROR,
                    details: _errors.ErrorDetails.MANIFEST_PARSING_ERROR,
                    fatal: !0,
                    url: url,
                    reason: "no EXTM3U delimiter",
                    networkDetails: networkDetails
                });
            }
        }, {
            key: "loaderror",
            value: function(response, context) {
                var details, fatal, networkDetails = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, loader = context.loader;
                switch (context.type) {
                  case "manifest":
                    details = _errors.ErrorDetails.MANIFEST_LOAD_ERROR, fatal = !0;
                    break;

                  case "level":
                    details = _errors.ErrorDetails.LEVEL_LOAD_ERROR, fatal = !1;
                    break;

                  case "audioTrack":
                    details = _errors.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, fatal = !1;
                }
                loader && (loader.abort(), this.loaders[context.type] = void 0), this.hls.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.NETWORK_ERROR,
                    details: details,
                    fatal: fatal,
                    url: loader.url,
                    loader: loader,
                    response: response,
                    context: context,
                    networkDetails: networkDetails
                });
            }
        }, {
            key: "loadtimeout",
            value: function(stats, context) {
                var details, fatal, networkDetails = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, loader = context.loader;
                switch (context.type) {
                  case "manifest":
                    details = _errors.ErrorDetails.MANIFEST_LOAD_TIMEOUT, fatal = !0;
                    break;

                  case "level":
                    details = _errors.ErrorDetails.LEVEL_LOAD_TIMEOUT, fatal = !1;
                    break;

                  case "audioTrack":
                    details = _errors.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT, fatal = !1;
                }
                loader && (loader.abort(), this.loaders[context.type] = void 0), this.hls.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.NETWORK_ERROR,
                    details: details,
                    fatal: fatal,
                    url: loader.url,
                    loader: loader,
                    context: context,
                    networkDetails: networkDetails
                });
            }
        } ]), PlaylistLoader;
    }(_eventHandler2.default);
    exports.default = PlaylistLoader;
}, /* 46 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), UINT32_MAX = Math.pow(2, 32) - 1, MP4 = function() {
        function MP4() {
            _classCallCheck(this, MP4);
        }
        return _createClass(MP4, null, [ {
            key: "init",
            value: function() {
                MP4.types = {
                    avc1: [],
                    // codingname
                    avcC: [],
                    btrt: [],
                    dinf: [],
                    dref: [],
                    esds: [],
                    ftyp: [],
                    hdlr: [],
                    mdat: [],
                    mdhd: [],
                    mdia: [],
                    mfhd: [],
                    minf: [],
                    moof: [],
                    moov: [],
                    mp4a: [],
                    ".mp3": [],
                    mvex: [],
                    mvhd: [],
                    pasp: [],
                    sdtp: [],
                    stbl: [],
                    stco: [],
                    stsc: [],
                    stsd: [],
                    stsz: [],
                    stts: [],
                    tfdt: [],
                    tfhd: [],
                    traf: [],
                    trak: [],
                    trun: [],
                    trex: [],
                    tkhd: [],
                    vmhd: [],
                    smhd: []
                };
                var i;
                for (i in MP4.types) MP4.types.hasOwnProperty(i) && (MP4.types[i] = [ i.charCodeAt(0), i.charCodeAt(1), i.charCodeAt(2), i.charCodeAt(3) ]);
                var videoHdlr = new Uint8Array([ 0, // version 0
                0, 0, 0, // flags
                0, 0, 0, 0, // pre_defined
                118, 105, 100, 101, // handler_type: 'vide'
                0, 0, 0, 0, // reserved
                0, 0, 0, 0, // reserved
                0, 0, 0, 0, // reserved
                86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0 ]), audioHdlr = new Uint8Array([ 0, // version 0
                0, 0, 0, // flags
                0, 0, 0, 0, // pre_defined
                115, 111, 117, 110, // handler_type: 'soun'
                0, 0, 0, 0, // reserved
                0, 0, 0, 0, // reserved
                0, 0, 0, 0, // reserved
                83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0 ]);
                MP4.HDLR_TYPES = {
                    video: videoHdlr,
                    audio: audioHdlr
                };
                var dref = new Uint8Array([ 0, // version 0
                0, 0, 0, // flags
                0, 0, 0, 1, // entry_count
                0, 0, 0, 12, // entry_size
                117, 114, 108, 32, // 'url' type
                0, // version 0
                0, 0, 1 ]), stco = new Uint8Array([ 0, // version
                0, 0, 0, // flags
                0, 0, 0, 0 ]);
                MP4.STTS = MP4.STSC = MP4.STCO = stco, MP4.STSZ = new Uint8Array([ 0, // version
                0, 0, 0, // flags
                0, 0, 0, 0, // sample_size
                0, 0, 0, 0 ]), MP4.VMHD = new Uint8Array([ 0, // version
                0, 0, 1, // flags
                0, 0, // graphicsmode
                0, 0, 0, 0, 0, 0 ]), MP4.SMHD = new Uint8Array([ 0, // version
                0, 0, 0, // flags
                0, 0, // balance
                0, 0 ]), MP4.STSD = new Uint8Array([ 0, // version 0
                0, 0, 0, // flags
                0, 0, 0, 1 ]);
                // entry_count
                var majorBrand = new Uint8Array([ 105, 115, 111, 109 ]), avc1Brand = new Uint8Array([ 97, 118, 99, 49 ]), minorVersion = new Uint8Array([ 0, 0, 0, 1 ]);
                MP4.FTYP = MP4.box(MP4.types.ftyp, majorBrand, minorVersion, majorBrand, avc1Brand), 
                MP4.DINF = MP4.box(MP4.types.dinf, MP4.box(MP4.types.dref, dref));
            }
        }, {
            key: "box",
            value: function(type) {
                // calculate the total size we need to allocate
                for (var result, payload = Array.prototype.slice.call(arguments, 1), size = 8, i = payload.length, len = i; i--; ) size += payload[i].byteLength;
                // copy the payload into the result
                for (result = new Uint8Array(size), result[0] = size >> 24 & 255, result[1] = size >> 16 & 255, 
                result[2] = size >> 8 & 255, result[3] = 255 & size, result.set(type, 4), i = 0, 
                size = 8; i < len; i++) // copy payload[i] array @ offset size
                result.set(payload[i], size), size += payload[i].byteLength;
                return result;
            }
        }, {
            key: "hdlr",
            value: function(type) {
                return MP4.box(MP4.types.hdlr, MP4.HDLR_TYPES[type]);
            }
        }, {
            key: "mdat",
            value: function(data) {
                return MP4.box(MP4.types.mdat, data);
            }
        }, {
            key: "mdhd",
            value: function(timescale, duration) {
                duration *= timescale;
                var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1)), lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
                return MP4.box(MP4.types.mdhd, new Uint8Array([ 1, // version 1
                0, 0, 0, // flags
                0, 0, 0, 0, 0, 0, 0, 2, // creation_time
                0, 0, 0, 0, 0, 0, 0, 3, // modification_time
                timescale >> 24 & 255, timescale >> 16 & 255, timescale >> 8 & 255, 255 & timescale, // timescale
                upperWordDuration >> 24, upperWordDuration >> 16 & 255, upperWordDuration >> 8 & 255, 255 & upperWordDuration, lowerWordDuration >> 24, lowerWordDuration >> 16 & 255, lowerWordDuration >> 8 & 255, 255 & lowerWordDuration, 85, 196, // 'und' language (undetermined)
                0, 0 ]));
            }
        }, {
            key: "mdia",
            value: function(track) {
                return MP4.box(MP4.types.mdia, MP4.mdhd(track.timescale, track.duration), MP4.hdlr(track.type), MP4.minf(track));
            }
        }, {
            key: "mfhd",
            value: function(sequenceNumber) {
                return MP4.box(MP4.types.mfhd, new Uint8Array([ 0, 0, 0, 0, // flags
                sequenceNumber >> 24, sequenceNumber >> 16 & 255, sequenceNumber >> 8 & 255, 255 & sequenceNumber ]));
            }
        }, {
            key: "minf",
            value: function(track) {
                return "audio" === track.type ? MP4.box(MP4.types.minf, MP4.box(MP4.types.smhd, MP4.SMHD), MP4.DINF, MP4.stbl(track)) : MP4.box(MP4.types.minf, MP4.box(MP4.types.vmhd, MP4.VMHD), MP4.DINF, MP4.stbl(track));
            }
        }, {
            key: "moof",
            value: function(sn, baseMediaDecodeTime, track) {
                return MP4.box(MP4.types.moof, MP4.mfhd(sn), MP4.traf(track, baseMediaDecodeTime));
            }
        }, {
            key: "moov",
            value: function(tracks) {
                for (var i = tracks.length, boxes = []; i--; ) boxes[i] = MP4.trak(tracks[i]);
                return MP4.box.apply(null, [ MP4.types.moov, MP4.mvhd(tracks[0].timescale, tracks[0].duration) ].concat(boxes).concat(MP4.mvex(tracks)));
            }
        }, {
            key: "mvex",
            value: function(tracks) {
                for (var i = tracks.length, boxes = []; i--; ) boxes[i] = MP4.trex(tracks[i]);
                return MP4.box.apply(null, [ MP4.types.mvex ].concat(boxes));
            }
        }, {
            key: "mvhd",
            value: function(timescale, duration) {
                duration *= timescale;
                var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1)), lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1)), bytes = new Uint8Array([ 1, // version 1
                0, 0, 0, // flags
                0, 0, 0, 0, 0, 0, 0, 2, // creation_time
                0, 0, 0, 0, 0, 0, 0, 3, // modification_time
                timescale >> 24 & 255, timescale >> 16 & 255, timescale >> 8 & 255, 255 & timescale, // timescale
                upperWordDuration >> 24, upperWordDuration >> 16 & 255, upperWordDuration >> 8 & 255, 255 & upperWordDuration, lowerWordDuration >> 24, lowerWordDuration >> 16 & 255, lowerWordDuration >> 8 & 255, 255 & lowerWordDuration, 0, 1, 0, 0, // 1.0 rate
                1, 0, // 1.0 volume
                0, 0, // reserved
                0, 0, 0, 0, // reserved
                0, 0, 0, 0, // reserved
                0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, // transformation: unity matrix
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // pre_defined
                255, 255, 255, 255 ]);
                return MP4.box(MP4.types.mvhd, bytes);
            }
        }, {
            key: "sdtp",
            value: function(track) {
                var flags, i, samples = track.samples || [], bytes = new Uint8Array(4 + samples.length);
                // leave the full box header (4 bytes) all zero
                // write the sample table
                for (i = 0; i < samples.length; i++) flags = samples[i].flags, bytes[i + 4] = flags.dependsOn << 4 | flags.isDependedOn << 2 | flags.hasRedundancy;
                return MP4.box(MP4.types.sdtp, bytes);
            }
        }, {
            key: "stbl",
            value: function(track) {
                return MP4.box(MP4.types.stbl, MP4.stsd(track), MP4.box(MP4.types.stts, MP4.STTS), MP4.box(MP4.types.stsc, MP4.STSC), MP4.box(MP4.types.stsz, MP4.STSZ), MP4.box(MP4.types.stco, MP4.STCO));
            }
        }, {
            key: "avc1",
            value: function(track) {
                var i, data, len, sps = [], pps = [];
                // assemble the SPSs
                for (i = 0; i < track.sps.length; i++) data = track.sps[i], len = data.byteLength, 
                sps.push(len >>> 8 & 255), sps.push(255 & len), sps = sps.concat(Array.prototype.slice.call(data));
                // assemble the PPSs
                for (i = 0; i < track.pps.length; i++) data = track.pps[i], len = data.byteLength, 
                pps.push(len >>> 8 & 255), pps.push(255 & len), pps = pps.concat(Array.prototype.slice.call(data));
                var avcc = MP4.box(MP4.types.avcC, new Uint8Array([ 1, // version
                sps[3], // profile
                sps[4], // profile compat
                sps[5], // level
                255, // lengthSizeMinusOne, hard-coded to 4 bytes
                224 | track.sps.length ].concat(sps).concat([ track.pps.length ]).concat(pps))), // "PPS"
                width = track.width, height = track.height, hSpacing = track.pixelRatio[0], vSpacing = track.pixelRatio[1];
                //console.log('avcc:' + Hex.hexDump(avcc));
                // pre_defined = -1
                // avgBitrate
                return MP4.box(MP4.types.avc1, new Uint8Array([ 0, 0, 0, // reserved
                0, 0, 0, // reserved
                0, 1, // data_reference_index
                0, 0, // pre_defined
                0, 0, // reserved
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // pre_defined
                width >> 8 & 255, 255 & width, // width
                height >> 8 & 255, 255 & height, // height
                0, 72, 0, 0, // horizresolution
                0, 72, 0, 0, // vertresolution
                0, 0, 0, 0, // reserved
                0, 1, // frame_count
                18, 100, 97, 105, 108, //dailymotion/hls.js
                121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // compressorname
                0, 24, // depth = 24
                17, 17 ]), avcc, MP4.box(MP4.types.btrt, new Uint8Array([ 0, 28, 156, 128, // bufferSizeDB
                0, 45, 198, 192, // maxBitrate
                0, 45, 198, 192 ])), MP4.box(MP4.types.pasp, new Uint8Array([ hSpacing >> 24, // hSpacing
                hSpacing >> 16 & 255, hSpacing >> 8 & 255, 255 & hSpacing, vSpacing >> 24, // vSpacing
                vSpacing >> 16 & 255, vSpacing >> 8 & 255, 255 & vSpacing ])));
            }
        }, {
            key: "esds",
            value: function(track) {
                var configlen = track.config.length;
                return new Uint8Array([ 0, // version 0
                0, 0, 0, // flags
                3, // descriptor_type
                23 + configlen, // length
                0, 1, //es_id
                0, // stream_priority
                4, // descriptor_type
                15 + configlen, // length
                64, //codec : mpeg4_audio
                21, // stream_type
                0, 0, 0, // buffer_size
                0, 0, 0, 0, // maxBitrate
                0, 0, 0, 0, // avgBitrate
                5 ].concat([ configlen ]).concat(track.config).concat([ 6, 1, 2 ]));
            }
        }, {
            key: "mp4a",
            value: function(track) {
                var samplerate = track.samplerate;
                return MP4.box(MP4.types.mp4a, new Uint8Array([ 0, 0, 0, // reserved
                0, 0, 0, // reserved
                0, 1, // data_reference_index
                0, 0, 0, 0, 0, 0, 0, 0, // reserved
                0, track.channelCount, // channelcount
                0, 16, // sampleSize:16bits
                0, 0, 0, 0, // reserved2
                samplerate >> 8 & 255, 255 & samplerate, //
                0, 0 ]), MP4.box(MP4.types.esds, MP4.esds(track)));
            }
        }, {
            key: "mp3",
            value: function(track) {
                var samplerate = track.samplerate;
                return MP4.box(MP4.types[".mp3"], new Uint8Array([ 0, 0, 0, // reserved
                0, 0, 0, // reserved
                0, 1, // data_reference_index
                0, 0, 0, 0, 0, 0, 0, 0, // reserved
                0, track.channelCount, // channelcount
                0, 16, // sampleSize:16bits
                0, 0, 0, 0, // reserved2
                samplerate >> 8 & 255, 255 & samplerate, //
                0, 0 ]));
            }
        }, {
            key: "stsd",
            value: function(track) {
                return "audio" === track.type ? track.isAAC || "mp3" !== track.codec ? MP4.box(MP4.types.stsd, MP4.STSD, MP4.mp4a(track)) : MP4.box(MP4.types.stsd, MP4.STSD, MP4.mp3(track)) : MP4.box(MP4.types.stsd, MP4.STSD, MP4.avc1(track));
            }
        }, {
            key: "tkhd",
            value: function(track) {
                var id = track.id, duration = track.duration * track.timescale, width = track.width, height = track.height, upperWordDuration = Math.floor(duration / (UINT32_MAX + 1)), lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
                return MP4.box(MP4.types.tkhd, new Uint8Array([ 1, // version 1
                0, 0, 7, // flags
                0, 0, 0, 0, 0, 0, 0, 2, // creation_time
                0, 0, 0, 0, 0, 0, 0, 3, // modification_time
                id >> 24 & 255, id >> 16 & 255, id >> 8 & 255, 255 & id, // track_ID
                0, 0, 0, 0, // reserved
                upperWordDuration >> 24, upperWordDuration >> 16 & 255, upperWordDuration >> 8 & 255, 255 & upperWordDuration, lowerWordDuration >> 24, lowerWordDuration >> 16 & 255, lowerWordDuration >> 8 & 255, 255 & lowerWordDuration, 0, 0, 0, 0, 0, 0, 0, 0, // reserved
                0, 0, // layer
                0, 0, // alternate_group
                0, 0, // non-audio track volume
                0, 0, // reserved
                0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, // transformation: unity matrix
                width >> 8 & 255, 255 & width, 0, 0, // width
                height >> 8 & 255, 255 & height, 0, 0 ]));
            }
        }, {
            key: "traf",
            value: function(track, baseMediaDecodeTime) {
                var sampleDependencyTable = MP4.sdtp(track), id = track.id, upperWordBaseMediaDecodeTime = Math.floor(baseMediaDecodeTime / (UINT32_MAX + 1)), lowerWordBaseMediaDecodeTime = Math.floor(baseMediaDecodeTime % (UINT32_MAX + 1));
                // tfhd
                // tfdt
                // traf header
                // mfhd
                // moof header
                // mdat header
                return MP4.box(MP4.types.traf, MP4.box(MP4.types.tfhd, new Uint8Array([ 0, // version 0
                0, 0, 0, // flags
                id >> 24, id >> 16 & 255, id >> 8 & 255, 255 & id ])), MP4.box(MP4.types.tfdt, new Uint8Array([ 1, // version 1
                0, 0, 0, // flags
                upperWordBaseMediaDecodeTime >> 24, upperWordBaseMediaDecodeTime >> 16 & 255, upperWordBaseMediaDecodeTime >> 8 & 255, 255 & upperWordBaseMediaDecodeTime, lowerWordBaseMediaDecodeTime >> 24, lowerWordBaseMediaDecodeTime >> 16 & 255, lowerWordBaseMediaDecodeTime >> 8 & 255, 255 & lowerWordBaseMediaDecodeTime ])), MP4.trun(track, sampleDependencyTable.length + 16 + 20 + 8 + 16 + 8 + 8), sampleDependencyTable);
            }
        }, {
            key: "trak",
            value: function(track) {
                return track.duration = track.duration || 4294967295, MP4.box(MP4.types.trak, MP4.tkhd(track), MP4.mdia(track));
            }
        }, {
            key: "trex",
            value: function(track) {
                var id = track.id;
                return MP4.box(MP4.types.trex, new Uint8Array([ 0, // version 0
                0, 0, 0, // flags
                id >> 24, id >> 16 & 255, id >> 8 & 255, 255 & id, // track_ID
                0, 0, 0, 1, // default_sample_description_index
                0, 0, 0, 0, // default_sample_duration
                0, 0, 0, 0, // default_sample_size
                0, 1, 0, 1 ]));
            }
        }, {
            key: "trun",
            value: function(track, offset) {
                var i, sample, duration, size, flags, cts, samples = track.samples || [], len = samples.length, arraylen = 12 + 16 * len, array = new Uint8Array(arraylen);
                for (offset += 8 + arraylen, array.set([ 0, // version 0
                0, 15, 1, // flags
                len >>> 24 & 255, len >>> 16 & 255, len >>> 8 & 255, 255 & len, // sample_count
                offset >>> 24 & 255, offset >>> 16 & 255, offset >>> 8 & 255, 255 & offset ], 0), 
                i = 0; i < len; i++) sample = samples[i], duration = sample.duration, size = sample.size, 
                flags = sample.flags, cts = sample.cts, array.set([ duration >>> 24 & 255, duration >>> 16 & 255, duration >>> 8 & 255, 255 & duration, // sample_duration
                size >>> 24 & 255, size >>> 16 & 255, size >>> 8 & 255, 255 & size, // sample_size
                flags.isLeading << 2 | flags.dependsOn, flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.paddingValue << 1 | flags.isNonSync, 61440 & flags.degradPrio, 15 & flags.degradPrio, // sample_flags
                cts >>> 24 & 255, cts >>> 16 & 255, cts >>> 8 & 255, 255 & cts ], 12 + 16 * i);
                return MP4.box(MP4.types.trun, array);
            }
        }, {
            key: "initSegment",
            value: function(tracks) {
                MP4.types || MP4.init();
                var result, movie = MP4.moov(tracks);
                return result = new Uint8Array(MP4.FTYP.byteLength + movie.byteLength), result.set(MP4.FTYP), 
                result.set(movie, MP4.FTYP.byteLength), result;
            }
        } ]), MP4;
    }();
    exports.default = MP4;
}, /* 47 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _aac = __webpack_require__(41), _aac2 = _interopRequireDefault(_aac), _events = __webpack_require__(1), _events2 = _interopRequireDefault(_events), _logger = __webpack_require__(0), _mp4Generator = __webpack_require__(46), _mp4Generator2 = _interopRequireDefault(_mp4Generator), _errors = __webpack_require__(2), MP4Remuxer = function() {
        function MP4Remuxer(observer, config, typeSupported, vendor) {
            _classCallCheck(this, MP4Remuxer), this.observer = observer, this.config = config, 
            this.typeSupported = typeSupported;
            var userAgent = navigator.userAgent;
            this.isSafari = vendor && vendor.indexOf("Apple") > -1 && userAgent && !userAgent.match("CriOS"), 
            this.ISGenerated = !1;
        }
        return _createClass(MP4Remuxer, [ {
            key: "destroy",
            value: function() {}
        }, {
            key: "resetTimeStamp",
            value: function(defaultTimeStamp) {
                this._initPTS = this._initDTS = defaultTimeStamp;
            }
        }, {
            key: "resetInitSegment",
            value: function() {
                this.ISGenerated = !1;
            }
        }, {
            key: "remux",
            value: function(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset) {
                // generate Init Segment if needed
                if (this.ISGenerated) {
                    if (accurateTimeOffset) {
                        // check timestamp consistency. it there is more than 10s gap between expected PTS/DTS, recompute initPTS/DTS
                        var refPTS = this._initPTS, ptsNormalize = this._PTSNormalize, timeScale = audioTrack.inputTimeScale || videoTrack.inputTimeScale, initPTS = 1 / 0, initDTS = 1 / 0, samples = audioTrack.samples;
                        if (samples.length && (initPTS = initDTS = ptsNormalize(samples[0].pts - timeScale * timeOffset, refPTS)), 
                        samples = videoTrack.samples, samples.length) {
                            var sample = samples[0];
                            initPTS = Math.min(initPTS, ptsNormalize(sample.pts - timeScale * timeOffset, refPTS)), 
                            initDTS = Math.min(initDTS, ptsNormalize(sample.dts - timeScale * timeOffset, refPTS));
                        }
                        if (initPTS !== 1 / 0) {
                            var initPTSDelta = refPTS - initPTS;
                            Math.abs(initPTSDelta) > 10 * timeScale && (_logger.logger.warn("timestamp inconsistency, " + (initPTSDelta / timeScale).toFixed(3) + "s delta against expected value: missing discontinuity ? reset initPTS/initDTS"), 
                            this._initPTS = initPTS, this._initDTS = initDTS, this.observer.trigger(_events2.default.INIT_PTS_FOUND, {
                                initPTS: initPTS
                            }));
                        }
                    }
                } else this.generateIS(audioTrack, videoTrack, timeOffset);
                if (this.ISGenerated) // Purposefully remuxing audio before video, so that remuxVideo can use nextAudioPts, which is
                // calculated in remuxAudio.
                //logger.log('nb AAC samples:' + audioTrack.samples.length);
                if (audioTrack.samples.length) {
                    // if initSegment was generated without video samples, regenerate it again
                    audioTrack.timescale || (_logger.logger.warn("regenerate InitSegment as audio detected"), 
                    this.generateIS(audioTrack, videoTrack, timeOffset));
                    var audioData = this.remuxAudio(audioTrack, timeOffset, contiguous, accurateTimeOffset);
                    //logger.log('nb AVC samples:' + videoTrack.samples.length);
                    if (videoTrack.samples.length) {
                        var audioTrackLength = void 0;
                        audioData && (audioTrackLength = audioData.endPTS - audioData.startPTS), // if initSegment was generated without video samples, regenerate it again
                        videoTrack.timescale || (_logger.logger.warn("regenerate InitSegment as video detected"), 
                        this.generateIS(audioTrack, videoTrack, timeOffset)), this.remuxVideo(videoTrack, timeOffset, contiguous, audioTrackLength, accurateTimeOffset);
                    }
                } else {
                    var videoData = void 0;
                    //logger.log('nb AVC samples:' + videoTrack.samples.length);
                    videoTrack.samples.length && (videoData = this.remuxVideo(videoTrack, timeOffset, contiguous, accurateTimeOffset)), 
                    videoData && audioTrack.codec && this.remuxEmptyAudio(audioTrack, timeOffset, contiguous, videoData);
                }
                //logger.log('nb ID3 samples:' + audioTrack.samples.length);
                id3Track.samples.length && this.remuxID3(id3Track, timeOffset), //logger.log('nb ID3 samples:' + audioTrack.samples.length);
                textTrack.samples.length && this.remuxText(textTrack, timeOffset), //notify end of parsing
                this.observer.trigger(_events2.default.FRAG_PARSED);
            }
        }, {
            key: "generateIS",
            value: function(audioTrack, videoTrack, timeOffset) {
                var initPTS, initDTS, observer = this.observer, audioSamples = audioTrack.samples, videoSamples = videoTrack.samples, typeSupported = this.typeSupported, container = "audio/mp4", tracks = {}, data = {
                    tracks: tracks
                }, computePTSDTS = void 0 === this._initPTS;
                if (computePTSDTS && (initPTS = initDTS = 1 / 0), audioTrack.config && audioSamples.length && (// let's use audio sampling rate as MP4 time scale.
                // rationale is that there is a integer nb of audio frames per audio sample (1024 for AAC)
                // using audio sampling rate here helps having an integer MP4 frame duration
                // this avoids potential rounding issue and AV sync issue
                audioTrack.timescale = audioTrack.samplerate, _logger.logger.log("audio sampling rate : " + audioTrack.samplerate), 
                audioTrack.isAAC || (typeSupported.mpeg ? (// Chrome and Safari
                container = "audio/mpeg", audioTrack.codec = "") : typeSupported.mp3 && (// Firefox
                audioTrack.codec = "mp3")), tracks.audio = {
                    container: container,
                    codec: audioTrack.codec,
                    initSegment: !audioTrack.isAAC && typeSupported.mpeg ? new Uint8Array() : _mp4Generator2.default.initSegment([ audioTrack ]),
                    metadata: {
                        channelCount: audioTrack.channelCount
                    }
                }, computePTSDTS && (// remember first PTS of this demuxing context. for audio, PTS = DTS
                initPTS = initDTS = audioSamples[0].pts - audioTrack.inputTimeScale * timeOffset)), 
                videoTrack.sps && videoTrack.pps && videoSamples.length) {
                    // let's use input time scale as MP4 video timescale
                    // we use input time scale straight away to avoid rounding issues on frame duration / cts computation
                    var inputTimeScale = videoTrack.inputTimeScale;
                    videoTrack.timescale = inputTimeScale, tracks.video = {
                        container: "video/mp4",
                        codec: videoTrack.codec,
                        initSegment: _mp4Generator2.default.initSegment([ videoTrack ]),
                        metadata: {
                            width: videoTrack.width,
                            height: videoTrack.height
                        }
                    }, computePTSDTS && (initPTS = Math.min(initPTS, videoSamples[0].pts - inputTimeScale * timeOffset), 
                    initDTS = Math.min(initDTS, videoSamples[0].dts - inputTimeScale * timeOffset), 
                    this.observer.trigger(_events2.default.INIT_PTS_FOUND, {
                        initPTS: initPTS
                    }));
                }
                Object.keys(tracks).length ? (observer.trigger(_events2.default.FRAG_PARSING_INIT_SEGMENT, data), 
                this.ISGenerated = !0, computePTSDTS && (this._initPTS = initPTS, this._initDTS = initDTS)) : observer.trigger(_events2.default.ERROR, {
                    type: _errors.ErrorTypes.MEDIA_ERROR,
                    details: _errors.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: !1,
                    reason: "no audio/video samples found"
                });
            }
        }, {
            key: "remuxVideo",
            value: function(track, timeOffset, contiguous, audioTrackLength, accurateTimeOffset) {
                var mp4SampleDuration, mdat, moof, firstPTS, firstDTS, lastPTS, lastDTS, offset = 8, timeScale = track.timescale, inputSamples = track.samples, outputSamples = [], nbSamples = inputSamples.length, ptsNormalize = this._PTSNormalize, initDTS = this._initDTS, nextAvcDts = this.nextAvcDts, isSafari = this.isSafari;
                // Safari does not like overlapping DTS on consecutive fragments. let's use nextAvcDts to overcome this if fragments are consecutive
                isSafari && (// also consider consecutive fragments as being contiguous (even if a level switch occurs),
                // for sake of clarity:
                // consecutive fragments are frags with
                //  - less than 100ms gaps between new time offset (if accurate) and next expected PTS OR
                //  - less than 200 ms PTS gaps (timeScale/5)
                contiguous |= inputSamples.length && nextAvcDts && (accurateTimeOffset && Math.abs(timeOffset - nextAvcDts / timeScale) < .1 || Math.abs(inputSamples[0].pts - nextAvcDts - initDTS) < timeScale / 5)), 
                contiguous || (// if not contiguous, let's use target timeOffset
                nextAvcDts = timeOffset * timeScale), // PTS is coded on 33bits, and can loop from -2^32 to 2^32
                // ptsNormalize will make PTS/DTS value monotonic, we use last known DTS value as reference value
                inputSamples.forEach(function(sample) {
                    sample.pts = ptsNormalize(sample.pts - initDTS, nextAvcDts), sample.dts = ptsNormalize(sample.dts - initDTS, nextAvcDts);
                }), // sort video samples by DTS then PTS then demux id order
                inputSamples.sort(function(a, b) {
                    var deltadts = a.dts - b.dts, deltapts = a.pts - b.pts;
                    return deltadts || (deltapts || a.id - b.id);
                });
                // handle broken streams with PTS < DTS, tolerance up 200ms (18000 in 90kHz timescale)
                var PTSDTSshift = inputSamples.reduce(function(prev, curr) {
                    return Math.max(Math.min(prev, curr.pts - curr.dts), -18e3);
                }, 0);
                if (PTSDTSshift < 0) {
                    _logger.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(PTSDTSshift / 90) + " ms to overcome this issue");
                    for (var i = 0; i < inputSamples.length; i++) inputSamples[i].dts += PTSDTSshift;
                }
                // compute first DTS and last DTS, normalize them against reference value
                var sample = inputSamples[0];
                firstDTS = Math.max(sample.dts, 0), firstPTS = Math.max(sample.pts, 0);
                // check timestamp continuity accross consecutive fragments (this is to remove inter-fragment gap/hole)
                var delta = Math.round((firstDTS - nextAvcDts) / 90);
                // if fragment are contiguous, detect hole/overlapping between fragments
                contiguous && delta && (delta > 1 ? _logger.logger.log("AVC:" + delta + " ms hole between fragments detected,filling it") : delta < -1 && _logger.logger.log("AVC:" + -delta + " ms overlapping between fragments detected"), 
                // remove hole/gap : set DTS to next expected DTS
                firstDTS = nextAvcDts, inputSamples[0].dts = firstDTS, // offset PTS as well, ensure that PTS is smaller or equal than new DTS
                firstPTS = Math.max(firstPTS - delta, nextAvcDts), inputSamples[0].pts = firstPTS, 
                _logger.logger.log("Video/PTS/DTS adjusted: " + Math.round(firstPTS / 90) + "/" + Math.round(firstDTS / 90) + ",delta:" + delta + " ms")), 
                // compute lastPTS/lastDTS
                sample = inputSamples[inputSamples.length - 1], lastDTS = Math.max(sample.dts, 0), 
                lastPTS = Math.max(sample.pts, 0, lastDTS), // on Safari let's signal the same sample duration for all samples
                // sample duration (as expected by trun MP4 boxes), should be the delta between sample DTS
                // set this constant duration as being the avg delta between consecutive DTS.
                isSafari && (mp4SampleDuration = Math.round((lastDTS - firstDTS) / (inputSamples.length - 1)));
                for (var nbNalu = 0, naluLen = 0, _i = 0; _i < nbSamples; _i++) {
                    for (var _sample = inputSamples[_i], units = _sample.units, nbUnits = units.length, sampleLen = 0, j = 0; j < nbUnits; j++) sampleLen += units[j].data.length;
                    naluLen += sampleLen, nbNalu += nbUnits, _sample.length = sampleLen, // normalize PTS/DTS
                    // sample DTS is computed using a constant decoding offset (mp4SampleDuration) between samples
                    _sample.dts = isSafari ? firstDTS + _i * mp4SampleDuration : Math.max(_sample.dts, firstDTS), 
                    // ensure that computed value is greater or equal than sample DTS
                    _sample.pts = Math.max(_sample.pts, _sample.dts);
                }
                /* concatenate the video data and construct the mdat in place
        (need 8 more bytes to fill length and mpdat type) */
                var mdatSize = naluLen + 4 * nbNalu + 8;
                try {
                    mdat = new Uint8Array(mdatSize);
                } catch (err) {
                    return void this.observer.trigger(_events2.default.ERROR, {
                        type: _errors.ErrorTypes.MUX_ERROR,
                        details: _errors.ErrorDetails.REMUX_ALLOC_ERROR,
                        fatal: !1,
                        bytes: mdatSize,
                        reason: "fail allocating video mdat " + mdatSize
                    });
                }
                var view = new DataView(mdat.buffer);
                view.setUint32(0, mdatSize), mdat.set(_mp4Generator2.default.types.mdat, 4);
                for (var _i2 = 0; _i2 < nbSamples; _i2++) {
                    // convert NALU bitstream to MP4 format (prepend NALU with size field)
                    for (var avcSample = inputSamples[_i2], avcSampleUnits = avcSample.units, mp4SampleLength = 0, compositionTimeOffset = void 0, _j = 0, _nbUnits = avcSampleUnits.length; _j < _nbUnits; _j++) {
                        var unit = avcSampleUnits[_j], unitData = unit.data, unitDataLen = unit.data.byteLength;
                        view.setUint32(offset, unitDataLen), offset += 4, mdat.set(unitData, offset), offset += unitDataLen, 
                        mp4SampleLength += 4 + unitDataLen;
                    }
                    if (isSafari) compositionTimeOffset = Math.max(0, mp4SampleDuration * Math.round((avcSample.pts - avcSample.dts) / mp4SampleDuration)); else {
                        // expected sample duration is the Decoding Timestamp diff of consecutive samples
                        if (_i2 < nbSamples - 1) mp4SampleDuration = inputSamples[_i2 + 1].dts - avcSample.dts; else {
                            var config = this.config, lastFrameDuration = avcSample.dts - inputSamples[_i2 > 0 ? _i2 - 1 : _i2].dts;
                            if (config.stretchShortVideoTrack) {
                                // In some cases, a segment's audio track duration may exceed the video track duration.
                                // Since we've already remuxed audio, and we know how long the audio track is, we look to
                                // see if the delta to the next segment is longer than the minimum of maxBufferHole and
                                // maxSeekHole. If so, playback would potentially get stuck, so we artificially inflate
                                // the duration of the last frame to minimize any potential gap between segments.
                                var maxBufferHole = config.maxBufferHole, maxSeekHole = config.maxSeekHole, gapTolerance = Math.floor(Math.min(maxBufferHole, maxSeekHole) * timeScale), deltaToFrameEnd = (audioTrackLength ? firstPTS + audioTrackLength * timeScale : this.nextAudioPts) - avcSample.pts;
                                deltaToFrameEnd > gapTolerance ? (// We subtract lastFrameDuration from deltaToFrameEnd to try to prevent any video
                                // frame overlap. maxBufferHole/maxSeekHole should be >> lastFrameDuration anyway.
                                mp4SampleDuration = deltaToFrameEnd - lastFrameDuration, mp4SampleDuration < 0 && (mp4SampleDuration = lastFrameDuration), 
                                _logger.logger.log("It is approximately " + deltaToFrameEnd / 90 + " ms to the next segment; using duration " + mp4SampleDuration / 90 + " ms for the last video frame.")) : mp4SampleDuration = lastFrameDuration;
                            } else mp4SampleDuration = lastFrameDuration;
                        }
                        compositionTimeOffset = Math.round(avcSample.pts - avcSample.dts);
                    }
                    //console.log('PTS/DTS/initDTS/normPTS/normDTS/relative PTS : ${avcSample.pts}/${avcSample.dts}/${initDTS}/${ptsnorm}/${dtsnorm}/${(avcSample.pts/4294967296).toFixed(3)}');
                    outputSamples.push({
                        size: mp4SampleLength,
                        // constant duration
                        duration: mp4SampleDuration,
                        cts: compositionTimeOffset,
                        flags: {
                            isLeading: 0,
                            isDependedOn: 0,
                            hasRedundancy: 0,
                            degradPrio: 0,
                            dependsOn: avcSample.key ? 2 : 1,
                            isNonSync: avcSample.key ? 0 : 1
                        }
                    });
                }
                // next AVC sample DTS should be equal to last sample DTS + last sample duration (in PES timescale)
                this.nextAvcDts = lastDTS + mp4SampleDuration;
                var dropped = track.dropped;
                if (track.len = 0, track.nbNalu = 0, track.dropped = 0, outputSamples.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                    var flags = outputSamples[0].flags;
                    // chrome workaround, mark first sample as being a Random Access Point to avoid sourcebuffer append issue
                    // https://code.google.com/p/chromium/issues/detail?id=229412
                    flags.dependsOn = 2, flags.isNonSync = 0;
                }
                track.samples = outputSamples, moof = _mp4Generator2.default.moof(track.sequenceNumber++, firstDTS, track), 
                track.samples = [];
                var data = {
                    data1: moof,
                    data2: mdat,
                    startPTS: firstPTS / timeScale,
                    endPTS: (lastPTS + mp4SampleDuration) / timeScale,
                    startDTS: firstDTS / timeScale,
                    endDTS: this.nextAvcDts / timeScale,
                    type: "video",
                    nb: outputSamples.length,
                    dropped: dropped
                };
                return this.observer.trigger(_events2.default.FRAG_PARSING_DATA, data), data;
            }
        }, {
            key: "remuxAudio",
            value: function(track, timeOffset, contiguous, accurateTimeOffset) {
                var offset, mp4Sample, fillFrame, mdat, moof, firstPTS, lastPTS, inputTimeScale = track.inputTimeScale, mp4timeScale = track.timescale, scaleFactor = inputTimeScale / mp4timeScale, mp4SampleDuration = track.isAAC ? 1024 : 1152, inputSampleDuration = mp4SampleDuration * scaleFactor, ptsNormalize = this._PTSNormalize, initDTS = this._initDTS, rawMPEG = !track.isAAC && this.typeSupported.mpeg, inputSamples = track.samples, outputSamples = [], nextAudioPts = this.nextAudioPts;
                // If the audio track is missing samples, the frames seem to get "left-shifted" within the
                // resulting mp4 segment, causing sync issues and leaving gaps at the end of the audio segment.
                // In an effort to prevent this from happening, we inject frames here where there are gaps.
                // When possible, we inject a silent frame; when that's not possible, we duplicate the last
                // frame.
                // only inject/drop audio frames in case time offset is accurate
                if (// for audio samples, also consider consecutive fragments as being contiguous (even if a level switch occurs),
                // for sake of clarity:
                // consecutive fragments are frags with
                //  - less than 100ms gaps between new time offset (if accurate) and next expected PTS OR
                //  - less than 20 audio frames distance
                // contiguous fragments are consecutive fragments from same quality level (same level, new SN = old SN + 1)
                // this helps ensuring audio continuity
                // and this also avoids audio glitches/cut when switching quality, or reporting wrong duration on first audio frame
                contiguous |= inputSamples.length && nextAudioPts && (accurateTimeOffset && Math.abs(timeOffset - nextAudioPts / inputTimeScale) < .1 || Math.abs(inputSamples[0].pts - nextAudioPts - initDTS) < 20 * inputSampleDuration), 
                contiguous || (// if fragments are not contiguous, let's use timeOffset to compute next Audio PTS
                nextAudioPts = timeOffset * inputTimeScale), // compute normalized PTS
                inputSamples.forEach(function(sample) {
                    sample.pts = sample.dts = ptsNormalize(sample.pts - initDTS, nextAudioPts);
                }), // sort based on normalized PTS (this is to avoid sorting issues in case timestamp
                // reloop in the middle of our samples array)
                inputSamples.sort(function(a, b) {
                    return a.pts - b.pts;
                }), accurateTimeOffset && track.isAAC) for (var i = 0, nextPts = nextAudioPts; i < inputSamples.length; ) {
                    // First, let's see how far off this frame is from where we expect it to be
                    var delta, sample = inputSamples[i], pts = sample.pts;
                    delta = pts - nextPts;
                    var duration = Math.abs(1e3 * delta / inputTimeScale);
                    // If we're overlapping by more than a duration, drop this sample
                    if (delta <= -inputSampleDuration) _logger.logger.warn("Dropping 1 audio frame @ " + (nextPts / inputTimeScale).toFixed(3) + "s due to " + duration + " ms overlap."), 
                    inputSamples.splice(i, 1), track.len -= sample.unit.length; else if (delta >= inputSampleDuration && duration < 1e4 && nextPts) {
                        var missing = Math.round(delta / inputSampleDuration);
                        _logger.logger.warn("Injecting " + missing + " audio frame @ " + (nextPts / inputTimeScale).toFixed(3) + "s due to " + Math.round(1e3 * delta / inputTimeScale) + " ms gap.");
                        for (var j = 0; j < missing; j++) {
                            var newStamp = Math.max(nextPts, 0);
                            fillFrame = _aac2.default.getSilentFrame(track.manifestCodec || track.codec, track.channelCount), 
                            fillFrame || (_logger.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), 
                            fillFrame = sample.unit.subarray()), inputSamples.splice(i, 0, {
                                unit: fillFrame,
                                pts: newStamp,
                                dts: newStamp
                            }), track.len += fillFrame.length, nextPts += inputSampleDuration, i++;
                        }
                        // Adjust sample to next expected pts
                        sample.pts = sample.dts = nextPts, nextPts += inputSampleDuration, i++;
                    } else Math.abs(delta), sample.pts = sample.dts = nextPts, nextPts += inputSampleDuration, 
                    i++;
                }
                for (var _j2 = 0, _nbSamples = inputSamples.length; _j2 < _nbSamples; _j2++) {
                    var audioSample = inputSamples[_j2], unit = audioSample.unit, _pts = audioSample.pts;
                    //logger.log(`Audio/PTS:${Math.round(pts/90)}`);
                    // if not first sample
                    if (void 0 !== lastPTS) mp4Sample.duration = Math.round((_pts - lastPTS) / scaleFactor); else {
                        var _delta = Math.round(1e3 * (_pts - nextAudioPts) / inputTimeScale), numMissingFrames = 0;
                        // if fragment are contiguous, detect hole/overlapping between fragments
                        // contiguous fragments are consecutive fragments from same quality level (same level, new SN = old SN + 1)
                        if (contiguous && track.isAAC && _delta) {
                            if (_delta > 0 && _delta < 1e4) numMissingFrames = Math.round((_pts - nextAudioPts) / inputSampleDuration), 
                            _logger.logger.log(_delta + " ms hole between AAC samples detected,filling it"), 
                            numMissingFrames > 0 && (fillFrame = _aac2.default.getSilentFrame(track.manifestCodec || track.codec, track.channelCount), 
                            fillFrame || (fillFrame = unit.subarray()), track.len += numMissingFrames * fillFrame.length); else if (_delta < -12) {
                                // drop overlapping audio frames... browser will deal with it
                                _logger.logger.log("drop overlapping AAC sample, expected/parsed/delta:" + (nextAudioPts / inputTimeScale).toFixed(3) + "s/" + (_pts / inputTimeScale).toFixed(3) + "s/" + -_delta + "ms"), 
                                track.len -= unit.byteLength;
                                continue;
                            }
                            // set PTS/DTS to expected PTS/DTS
                            _pts = nextAudioPts;
                        }
                        if (// remember first PTS of our audioSamples, ensure value is positive
                        firstPTS = Math.max(0, _pts), !(track.len > 0)) // no audio samples
                        return;
                        /* concatenate the audio data and construct the mdat in place
              (need 8 more bytes to fill length and mdat type) */
                        var mdatSize = rawMPEG ? track.len : track.len + 8;
                        offset = rawMPEG ? 0 : 8;
                        try {
                            mdat = new Uint8Array(mdatSize);
                        } catch (err) {
                            return void this.observer.trigger(_events2.default.ERROR, {
                                type: _errors.ErrorTypes.MUX_ERROR,
                                details: _errors.ErrorDetails.REMUX_ALLOC_ERROR,
                                fatal: !1,
                                bytes: mdatSize,
                                reason: "fail allocating audio mdat " + mdatSize
                            });
                        }
                        if (!rawMPEG) {
                            new DataView(mdat.buffer).setUint32(0, mdatSize), mdat.set(_mp4Generator2.default.types.mdat, 4);
                        }
                        for (var _i3 = 0; _i3 < numMissingFrames; _i3++) fillFrame = _aac2.default.getSilentFrame(track.manifestCodec || track.codec, track.channelCount), 
                        fillFrame || (_logger.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), 
                        fillFrame = unit.subarray()), mdat.set(fillFrame, offset), offset += fillFrame.byteLength, 
                        mp4Sample = {
                            size: fillFrame.byteLength,
                            cts: 0,
                            duration: 1024,
                            flags: {
                                isLeading: 0,
                                isDependedOn: 0,
                                hasRedundancy: 0,
                                degradPrio: 0,
                                dependsOn: 1
                            }
                        }, outputSamples.push(mp4Sample);
                    }
                    mdat.set(unit, offset);
                    var unitLen = unit.byteLength;
                    offset += unitLen, //console.log('PTS/DTS/initDTS/normPTS/normDTS/relative PTS : ${audioSample.pts}/${audioSample.dts}/${initDTS}/${ptsnorm}/${dtsnorm}/${(audioSample.pts/4294967296).toFixed(3)}');
                    mp4Sample = {
                        size: unitLen,
                        cts: 0,
                        duration: 0,
                        flags: {
                            isLeading: 0,
                            isDependedOn: 0,
                            hasRedundancy: 0,
                            degradPrio: 0,
                            dependsOn: 1
                        }
                    }, outputSamples.push(mp4Sample), lastPTS = _pts;
                }
                var lastSampleDuration = 0, nbSamples = outputSamples.length;
                if (//set last sample duration as being identical to previous sample
                nbSamples >= 2 && (lastSampleDuration = outputSamples[nbSamples - 2].duration, mp4Sample.duration = lastSampleDuration), 
                nbSamples) {
                    // next audio sample PTS should be equal to last sample PTS + duration
                    this.nextAudioPts = nextAudioPts = lastPTS + scaleFactor * lastSampleDuration, //logger.log('Audio/PTS/PTSend:' + audioSample.pts.toFixed(0) + '/' + this.nextAacDts.toFixed(0));
                    track.len = 0, track.samples = outputSamples, moof = rawMPEG ? new Uint8Array() : _mp4Generator2.default.moof(track.sequenceNumber++, firstPTS / scaleFactor, track), 
                    track.samples = [];
                    var start = firstPTS / inputTimeScale, end = nextAudioPts / inputTimeScale, audioData = {
                        data1: moof,
                        data2: mdat,
                        startPTS: start,
                        endPTS: end,
                        startDTS: start,
                        endDTS: end,
                        type: "audio",
                        nb: nbSamples
                    };
                    return this.observer.trigger(_events2.default.FRAG_PARSING_DATA, audioData), audioData;
                }
                return null;
            }
        }, {
            key: "remuxEmptyAudio",
            value: function(track, timeOffset, contiguous, videoData) {
                var inputTimeScale = track.inputTimeScale, mp4timeScale = track.samplerate ? track.samplerate : inputTimeScale, scaleFactor = inputTimeScale / mp4timeScale, nextAudioPts = this.nextAudioPts, // sync with video's timestamp
                startDTS = (void 0 !== nextAudioPts ? nextAudioPts : videoData.startDTS * inputTimeScale) + this._initDTS, endDTS = videoData.endDTS * inputTimeScale + this._initDTS, frameDuration = 1024 * scaleFactor, // samples count of this segment's duration
                nbSamples = Math.ceil((endDTS - startDTS) / frameDuration), // silent frame
                silentFrame = _aac2.default.getSilentFrame(track.manifestCodec || track.codec, track.channelCount);
                // Can't remux if we can't generate a silent frame...
                if (_logger.logger.warn("remux empty Audio"), !silentFrame) return void _logger.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
                for (var samples = [], i = 0; i < nbSamples; i++) {
                    var stamp = startDTS + i * frameDuration;
                    samples.push({
                        unit: silentFrame,
                        pts: stamp,
                        dts: stamp
                    }), track.len += silentFrame.length;
                }
                track.samples = samples, this.remuxAudio(track, timeOffset, contiguous);
            }
        }, {
            key: "remuxID3",
            value: function(track, timeOffset) {
                var sample, length = track.samples.length, inputTimeScale = track.inputTimeScale, initPTS = this._initPTS, initDTS = this._initDTS;
                // consume samples
                if (length) {
                    for (var index = 0; index < length; index++) sample = track.samples[index], // setting id3 pts, dts to relative time
                    // using this._initPTS and this._initDTS to calculate relative time
                    sample.pts = (sample.pts - initPTS) / inputTimeScale, sample.dts = (sample.dts - initDTS) / inputTimeScale;
                    this.observer.trigger(_events2.default.FRAG_PARSING_METADATA, {
                        samples: track.samples
                    });
                }
                track.samples = [], timeOffset = timeOffset;
            }
        }, {
            key: "remuxText",
            value: function(track, timeOffset) {
                track.samples.sort(function(a, b) {
                    return a.pts - b.pts;
                });
                var sample, length = track.samples.length, inputTimeScale = track.inputTimeScale, initPTS = this._initPTS;
                // consume samples
                if (length) {
                    for (var index = 0; index < length; index++) sample = track.samples[index], // setting text pts, dts to relative time
                    // using this._initPTS and this._initDTS to calculate relative time
                    sample.pts = (sample.pts - initPTS) / inputTimeScale;
                    this.observer.trigger(_events2.default.FRAG_PARSING_USERDATA, {
                        samples: track.samples
                    });
                }
                track.samples = [], timeOffset = timeOffset;
            }
        }, {
            key: "_PTSNormalize",
            value: function(value, reference) {
                var offset;
                if (void 0 === reference) return value;
                /* PTS is 33bit (from 0 to 2^33 -1)
        if diff between value and reference is bigger than half of the amplitude (2^32) then it means that
        PTS looping occured. fill the gap */
                for (// - 2^33
                offset = reference < value ? -8589934592 : 8589934592; Math.abs(value - reference) > 4294967296; ) value += offset;
                return value;
            }
        } ]), MP4Remuxer;
    }();
    exports.default = MP4Remuxer;
}, /* 48 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _events = __webpack_require__(1), _events2 = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }(_events), PassThroughRemuxer = function() {
        function PassThroughRemuxer(observer) {
            _classCallCheck(this, PassThroughRemuxer), this.observer = observer;
        }
        return _createClass(PassThroughRemuxer, [ {
            key: "destroy",
            value: function() {}
        }, {
            key: "resetTimeStamp",
            value: function() {}
        }, {
            key: "resetInitSegment",
            value: function() {}
        }, {
            key: "remux",
            value: function(audioTrack, videoTrack, id3Track, textTrack, timeOffset, contiguous, accurateTimeOffset, rawData) {
                var observer = this.observer, streamType = "";
                audioTrack && (streamType += "audio"), videoTrack && (streamType += "video"), observer.trigger(_events2.default.FRAG_PARSING_DATA, {
                    data1: rawData,
                    startPTS: timeOffset,
                    startDTS: timeOffset,
                    type: streamType,
                    nb: 1,
                    dropped: 0
                }), //notify end of parsing
                observer.trigger(_events2.default.FRAG_PARSED);
            }
        } ]), PassThroughRemuxer;
    }();
    exports.default = PassThroughRemuxer;
}, /* 49 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), DECIMAL_RESOLUTION_REGEX = /^(\d+)x(\d+)$/, ATTR_LIST_REGEX = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g, AttrList = function() {
        function AttrList(attrs) {
            _classCallCheck(this, AttrList), "string" == typeof attrs && (attrs = AttrList.parseAttrList(attrs));
            for (var attr in attrs) attrs.hasOwnProperty(attr) && (this[attr] = attrs[attr]);
        }
        return _createClass(AttrList, [ {
            key: "decimalInteger",
            value: function(attrName) {
                var intValue = parseInt(this[attrName], 10);
                return intValue > Number.MAX_SAFE_INTEGER ? 1 / 0 : intValue;
            }
        }, {
            key: "hexadecimalInteger",
            value: function(attrName) {
                if (this[attrName]) {
                    var stringValue = (this[attrName] || "0x").slice(2);
                    stringValue = (1 & stringValue.length ? "0" : "") + stringValue;
                    for (var value = new Uint8Array(stringValue.length / 2), i = 0; i < stringValue.length / 2; i++) value[i] = parseInt(stringValue.slice(2 * i, 2 * i + 2), 16);
                    return value;
                }
                return null;
            }
        }, {
            key: "hexadecimalIntegerAsNumber",
            value: function(attrName) {
                var intValue = parseInt(this[attrName], 16);
                return intValue > Number.MAX_SAFE_INTEGER ? 1 / 0 : intValue;
            }
        }, {
            key: "decimalFloatingPoint",
            value: function(attrName) {
                return parseFloat(this[attrName]);
            }
        }, {
            key: "enumeratedString",
            value: function(attrName) {
                return this[attrName];
            }
        }, {
            key: "decimalResolution",
            value: function(attrName) {
                var res = DECIMAL_RESOLUTION_REGEX.exec(this[attrName]);
                if (null !== res) return {
                    width: parseInt(res[1], 10),
                    height: parseInt(res[2], 10)
                };
            }
        } ], [ {
            key: "parseAttrList",
            value: function(input) {
                var match, attrs = {};
                for (ATTR_LIST_REGEX.lastIndex = 0; null !== (match = ATTR_LIST_REGEX.exec(input)); ) {
                    var value = match[2];
                    0 === value.indexOf('"') && value.lastIndexOf('"') === value.length - 1 && (value = value.slice(1, -1)), 
                    attrs[match[1]] = value;
                }
                return attrs;
            }
        } ]), AttrList;
    }();
    exports.default = AttrList;
}, /* 50 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), specialCea608CharsCodes = {
        42: 225,
        // lowercase a, acute accent
        92: 233,
        // lowercase e, acute accent
        94: 237,
        // lowercase i, acute accent
        95: 243,
        // lowercase o, acute accent
        96: 250,
        // lowercase u, acute accent
        123: 231,
        // lowercase c with cedilla
        124: 247,
        // division symbol
        125: 209,
        // uppercase N tilde
        126: 241,
        // lowercase n tilde
        127: 9608,
        // Full block
        // THIS BLOCK INCLUDES THE 16 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
        // THAT COME FROM HI BYTE=0x11 AND LOW BETWEEN 0x30 AND 0x3F
        // THIS MEANS THAT \x50 MUST BE ADDED TO THE VALUES
        128: 174,
        // Registered symbol (R)
        129: 176,
        // degree sign
        130: 189,
        // 1/2 symbol
        131: 191,
        // Inverted (open) question mark
        132: 8482,
        // Trademark symbol (TM)
        133: 162,
        // Cents symbol
        134: 163,
        // Pounds sterling
        135: 9834,
        // Music 8'th note
        136: 224,
        // lowercase a, grave accent
        137: 32,
        // transparent space (regular)
        138: 232,
        // lowercase e, grave accent
        139: 226,
        // lowercase a, circumflex accent
        140: 234,
        // lowercase e, circumflex accent
        141: 238,
        // lowercase i, circumflex accent
        142: 244,
        // lowercase o, circumflex accent
        143: 251,
        // lowercase u, circumflex accent
        // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
        // THAT COME FROM HI BYTE=0x12 AND LOW BETWEEN 0x20 AND 0x3F
        144: 193,
        // capital letter A with acute
        145: 201,
        // capital letter E with acute
        146: 211,
        // capital letter O with acute
        147: 218,
        // capital letter U with acute
        148: 220,
        // capital letter U with diaresis
        149: 252,
        // lowercase letter U with diaeresis
        150: 8216,
        // opening single quote
        151: 161,
        // inverted exclamation mark
        152: 42,
        // asterisk
        153: 8217,
        // closing single quote
        154: 9473,
        // box drawings heavy horizontal
        155: 169,
        // copyright sign
        156: 8480,
        // Service mark
        157: 8226,
        // (round) bullet
        158: 8220,
        // Left double quotation mark
        159: 8221,
        // Right double quotation mark
        160: 192,
        // uppercase A, grave accent
        161: 194,
        // uppercase A, circumflex
        162: 199,
        // uppercase C with cedilla
        163: 200,
        // uppercase E, grave accent
        164: 202,
        // uppercase E, circumflex
        165: 203,
        // capital letter E with diaresis
        166: 235,
        // lowercase letter e with diaresis
        167: 206,
        // uppercase I, circumflex
        168: 207,
        // uppercase I, with diaresis
        169: 239,
        // lowercase i, with diaresis
        170: 212,
        // uppercase O, circumflex
        171: 217,
        // uppercase U, grave accent
        172: 249,
        // lowercase u, grave accent
        173: 219,
        // uppercase U, circumflex
        174: 171,
        // left-pointing double angle quotation mark
        175: 187,
        // right-pointing double angle quotation mark
        // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
        // THAT COME FROM HI BYTE=0x13 AND LOW BETWEEN 0x20 AND 0x3F
        176: 195,
        // Uppercase A, tilde
        177: 227,
        // Lowercase a, tilde
        178: 205,
        // Uppercase I, acute accent
        179: 204,
        // Uppercase I, grave accent
        180: 236,
        // Lowercase i, grave accent
        181: 210,
        // Uppercase O, grave accent
        182: 242,
        // Lowercase o, grave accent
        183: 213,
        // Uppercase O, tilde
        184: 245,
        // Lowercase o, tilde
        185: 123,
        // Open curly brace
        186: 125,
        // Closing curly brace
        187: 92,
        // Backslash
        188: 94,
        // Caret
        189: 95,
        // Underscore
        190: 124,
        // Pipe (vertical line)
        191: 8764,
        // Tilde operator
        192: 196,
        // Uppercase A, umlaut
        193: 228,
        // Lowercase A, umlaut
        194: 214,
        // Uppercase O, umlaut
        195: 246,
        // Lowercase o, umlaut
        196: 223,
        // Esszett (sharp S)
        197: 165,
        // Yen symbol
        198: 164,
        // Generic currency sign
        199: 9475,
        // Box drawings heavy vertical
        200: 197,
        // Uppercase A, ring
        201: 229,
        // Lowercase A, ring
        202: 216,
        // Uppercase O, stroke
        203: 248,
        // Lowercase o, strok
        204: 9487,
        // Box drawings heavy down and right
        205: 9491,
        // Box drawings heavy down and left
        206: 9495,
        // Box drawings heavy up and right
        207: 9499
    }, getCharForByte = function(byte) {
        var charCode = byte;
        return specialCea608CharsCodes.hasOwnProperty(byte) && (charCode = specialCea608CharsCodes[byte]), 
        String.fromCharCode(charCode);
    }, NR_ROWS = 15, NR_COLS = 100, rowsLowCh1 = {
        17: 1,
        18: 3,
        21: 5,
        22: 7,
        23: 9,
        16: 11,
        19: 12,
        20: 14
    }, rowsHighCh1 = {
        17: 2,
        18: 4,
        21: 6,
        22: 8,
        23: 10,
        19: 13,
        20: 15
    }, rowsLowCh2 = {
        25: 1,
        26: 3,
        29: 5,
        30: 7,
        31: 9,
        24: 11,
        27: 12,
        28: 14
    }, rowsHighCh2 = {
        25: 2,
        26: 4,
        29: 6,
        30: 8,
        31: 10,
        27: 13,
        28: 15
    }, backgroundColors = [ "white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent" ], logger = {
        verboseFilter: {
            DATA: 3,
            DEBUG: 3,
            INFO: 2,
            WARNING: 2,
            TEXT: 1,
            ERROR: 0
        },
        time: null,
        verboseLevel: 0,
        // Only write errors
        setTime: function(newTime) {
            this.time = newTime;
        },
        log: function(severity, msg) {
            var minLevel = this.verboseFilter[severity];
            this.verboseLevel >= minLevel && console.log(this.time + " [" + severity + "] " + msg);
        }
    }, numArrayToHexArray = function(numArray) {
        for (var hexArray = [], j = 0; j < numArray.length; j++) hexArray.push(numArray[j].toString(16));
        return hexArray;
    }, PenState = function() {
        function PenState(foreground, underline, italics, background, flash) {
            _classCallCheck(this, PenState), this.foreground = foreground || "white", this.underline = underline || !1, 
            this.italics = italics || !1, this.background = background || "black", this.flash = flash || !1;
        }
        return _createClass(PenState, [ {
            key: "reset",
            value: function() {
                this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", 
                this.flash = !1;
            }
        }, {
            key: "setStyles",
            value: function(styles) {
                for (var attribs = [ "foreground", "underline", "italics", "background", "flash" ], i = 0; i < attribs.length; i++) {
                    var style = attribs[i];
                    styles.hasOwnProperty(style) && (this[style] = styles[style]);
                }
            }
        }, {
            key: "isDefault",
            value: function() {
                return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash;
            }
        }, {
            key: "equals",
            value: function(other) {
                return this.foreground === other.foreground && this.underline === other.underline && this.italics === other.italics && this.background === other.background && this.flash === other.flash;
            }
        }, {
            key: "copy",
            value: function(newPenState) {
                this.foreground = newPenState.foreground, this.underline = newPenState.underline, 
                this.italics = newPenState.italics, this.background = newPenState.background, this.flash = newPenState.flash;
            }
        }, {
            key: "toString",
            value: function() {
                return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
            }
        } ]), PenState;
    }(), StyledUnicodeChar = function() {
        function StyledUnicodeChar(uchar, foreground, underline, italics, background, flash) {
            _classCallCheck(this, StyledUnicodeChar), this.uchar = uchar || " ", // unicode character
            this.penState = new PenState(foreground, underline, italics, background, flash);
        }
        return _createClass(StyledUnicodeChar, [ {
            key: "reset",
            value: function() {
                this.uchar = " ", this.penState.reset();
            }
        }, {
            key: "setChar",
            value: function(uchar, newPenState) {
                this.uchar = uchar, this.penState.copy(newPenState);
            }
        }, {
            key: "setPenState",
            value: function(newPenState) {
                this.penState.copy(newPenState);
            }
        }, {
            key: "equals",
            value: function(other) {
                return this.uchar === other.uchar && this.penState.equals(other.penState);
            }
        }, {
            key: "copy",
            value: function(newChar) {
                this.uchar = newChar.uchar, this.penState.copy(newChar.penState);
            }
        }, {
            key: "isEmpty",
            value: function() {
                return " " === this.uchar && this.penState.isDefault();
            }
        } ]), StyledUnicodeChar;
    }(), Row = function() {
        function Row() {
            _classCallCheck(this, Row), this.chars = [];
            for (var i = 0; i < NR_COLS; i++) this.chars.push(new StyledUnicodeChar());
            this.pos = 0, this.currPenState = new PenState();
        }
        return _createClass(Row, [ {
            key: "equals",
            value: function(other) {
                for (var equal = !0, i = 0; i < NR_COLS; i++) if (!this.chars[i].equals(other.chars[i])) {
                    equal = !1;
                    break;
                }
                return equal;
            }
        }, {
            key: "copy",
            value: function(other) {
                for (var i = 0; i < NR_COLS; i++) this.chars[i].copy(other.chars[i]);
            }
        }, {
            key: "isEmpty",
            value: function() {
                for (var empty = !0, i = 0; i < NR_COLS; i++) if (!this.chars[i].isEmpty()) {
                    empty = !1;
                    break;
                }
                return empty;
            }
        }, {
            key: "setCursor",
            value: function(absPos) {
                this.pos !== absPos && (this.pos = absPos), this.pos < 0 ? (logger.log("ERROR", "Negative cursor position " + this.pos), 
                this.pos = 0) : this.pos > NR_COLS && (logger.log("ERROR", "Too large cursor position " + this.pos), 
                this.pos = NR_COLS);
            }
        }, {
            key: "moveCursor",
            value: function(relPos) {
                var newPos = this.pos + relPos;
                if (relPos > 1) for (var i = this.pos + 1; i < newPos + 1; i++) this.chars[i].setPenState(this.currPenState);
                this.setCursor(newPos);
            }
        }, {
            key: "backSpace",
            value: function() {
                this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
            }
        }, {
            key: "insertChar",
            value: function(byte) {
                byte >= 144 && //Extended char
                this.backSpace();
                var char = getCharForByte(byte);
                if (this.pos >= NR_COLS) return void logger.log("ERROR", "Cannot insert " + byte.toString(16) + " (" + char + ") at position " + this.pos + ". Skipping it!");
                this.chars[this.pos].setChar(char, this.currPenState), this.moveCursor(1);
            }
        }, {
            key: "clearFromPos",
            value: function(startPos) {
                var i;
                for (i = startPos; i < NR_COLS; i++) this.chars[i].reset();
            }
        }, {
            key: "clear",
            value: function() {
                this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
            }
        }, {
            key: "clearToEndOfRow",
            value: function() {
                this.clearFromPos(this.pos);
            }
        }, {
            key: "getTextString",
            value: function() {
                for (var chars = [], empty = !0, i = 0; i < NR_COLS; i++) {
                    var char = this.chars[i].uchar;
                    " " !== char && (empty = !1), chars.push(char);
                }
                return empty ? "" : chars.join("");
            }
        }, {
            key: "setPenStyles",
            value: function(styles) {
                this.currPenState.setStyles(styles), this.chars[this.pos].setPenState(this.currPenState);
            }
        } ]), Row;
    }(), CaptionScreen = function() {
        function CaptionScreen() {
            _classCallCheck(this, CaptionScreen), this.rows = [];
            for (var i = 0; i < NR_ROWS; i++) this.rows.push(new Row());
            this.currRow = NR_ROWS - 1, this.nrRollUpRows = null, this.reset();
        }
        return _createClass(CaptionScreen, [ {
            key: "reset",
            value: function() {
                for (var i = 0; i < NR_ROWS; i++) this.rows[i].clear();
                this.currRow = NR_ROWS - 1;
            }
        }, {
            key: "equals",
            value: function(other) {
                for (var equal = !0, i = 0; i < NR_ROWS; i++) if (!this.rows[i].equals(other.rows[i])) {
                    equal = !1;
                    break;
                }
                return equal;
            }
        }, {
            key: "copy",
            value: function(other) {
                for (var i = 0; i < NR_ROWS; i++) this.rows[i].copy(other.rows[i]);
            }
        }, {
            key: "isEmpty",
            value: function() {
                for (var empty = !0, i = 0; i < NR_ROWS; i++) if (!this.rows[i].isEmpty()) {
                    empty = !1;
                    break;
                }
                return empty;
            }
        }, {
            key: "backSpace",
            value: function() {
                this.rows[this.currRow].backSpace();
            }
        }, {
            key: "clearToEndOfRow",
            value: function() {
                this.rows[this.currRow].clearToEndOfRow();
            }
        }, {
            key: "insertChar",
            value: function(char) {
                this.rows[this.currRow].insertChar(char);
            }
        }, {
            key: "setPen",
            value: function(styles) {
                this.rows[this.currRow].setPenStyles(styles);
            }
        }, {
            key: "moveCursor",
            value: function(relPos) {
                this.rows[this.currRow].moveCursor(relPos);
            }
        }, {
            key: "setCursor",
            value: function(absPos) {
                logger.log("INFO", "setCursor: " + absPos), this.rows[this.currRow].setCursor(absPos);
            }
        }, {
            key: "setPAC",
            value: function(pacData) {
                logger.log("INFO", "pacData = " + JSON.stringify(pacData));
                var newRow = pacData.row - 1;
                //Make sure this only affects Roll-up Captions by checking this.nrRollUpRows
                if (this.nrRollUpRows && newRow < this.nrRollUpRows - 1 && (newRow = this.nrRollUpRows - 1), 
                this.nrRollUpRows && this.currRow !== newRow) {
                    //clear all rows first
                    for (var i = 0; i < NR_ROWS; i++) this.rows[i].clear();
                    //Copy this.nrRollUpRows rows from lastOutputScreen and place it in the newRow location
                    //topRowIndex - the start of rows to copy (inclusive index)
                    var topRowIndex = this.currRow + 1 - this.nrRollUpRows, lastOutputScreen = this.lastOutputScreen;
                    if (lastOutputScreen) {
                        var prevLineTime = lastOutputScreen.rows[topRowIndex].cueStartTime;
                        if (prevLineTime && prevLineTime < logger.time) for (var _i = 0; _i < this.nrRollUpRows; _i++) this.rows[newRow - this.nrRollUpRows + _i + 1].copy(lastOutputScreen.rows[topRowIndex + _i]);
                    }
                }
                this.currRow = newRow;
                var row = this.rows[this.currRow];
                if (null !== pacData.indent) {
                    var indent = pacData.indent, prevPos = Math.max(indent - 1, 0);
                    row.setCursor(pacData.indent), pacData.color = row.chars[prevPos].penState.foreground;
                }
                var styles = {
                    foreground: pacData.color,
                    underline: pacData.underline,
                    italics: pacData.italics,
                    background: "black",
                    flash: !1
                };
                this.setPen(styles);
            }
        }, {
            key: "setBkgData",
            value: function(bkgData) {
                logger.log("INFO", "bkgData = " + JSON.stringify(bkgData)), this.backSpace(), this.setPen(bkgData), 
                this.insertChar(32);
            }
        }, {
            key: "setRollUpRows",
            value: function(nrRows) {
                this.nrRollUpRows = nrRows;
            }
        }, {
            key: "rollUp",
            value: function() {
                if (null === this.nrRollUpRows) return void logger.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                logger.log("TEXT", this.getDisplayText());
                var topRowIndex = this.currRow + 1 - this.nrRollUpRows, topRow = this.rows.splice(topRowIndex, 1)[0];
                topRow.clear(), this.rows.splice(this.currRow, 0, topRow), logger.log("INFO", "Rolling up");
            }
        }, {
            key: "getDisplayText",
            value: function(asOneRow) {
                asOneRow = asOneRow || !1;
                for (var displayText = [], text = "", rowNr = -1, i = 0; i < NR_ROWS; i++) {
                    var rowText = this.rows[i].getTextString();
                    rowText && (rowNr = i + 1, asOneRow ? displayText.push("Row " + rowNr + ": '" + rowText + "'") : displayText.push(rowText.trim()));
                }
                return displayText.length > 0 && (text = asOneRow ? "[" + displayText.join(" | ") + "]" : displayText.join("\n")), 
                text;
            }
        }, {
            key: "getTextAndFormat",
            value: function() {
                return this.rows;
            }
        } ]), CaptionScreen;
    }(), Cea608Channel = function() {
        function Cea608Channel(channelNumber, outputFilter) {
            _classCallCheck(this, Cea608Channel), this.chNr = channelNumber, this.outputFilter = outputFilter, 
            this.mode = null, this.verbose = 0, this.displayedMemory = new CaptionScreen(), 
            this.nonDisplayedMemory = new CaptionScreen(), this.lastOutputScreen = new CaptionScreen(), 
            this.currRollUpRow = this.displayedMemory.rows[NR_ROWS - 1], this.writeScreen = this.displayedMemory, 
            this.mode = null, this.cueStartTime = null;
        }
        return _createClass(Cea608Channel, [ {
            key: "reset",
            value: function() {
                this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), 
                this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[NR_ROWS - 1], 
                this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, 
                this.lastCueEndTime = null;
            }
        }, {
            key: "getHandler",
            value: function() {
                return this.outputFilter;
            }
        }, {
            key: "setHandler",
            value: function(newHandler) {
                this.outputFilter = newHandler;
            }
        }, {
            key: "setPAC",
            value: function(pacData) {
                this.writeScreen.setPAC(pacData);
            }
        }, {
            key: "setBkgData",
            value: function(bkgData) {
                this.writeScreen.setBkgData(bkgData);
            }
        }, {
            key: "setMode",
            value: function(newMode) {
                newMode !== this.mode && (this.mode = newMode, logger.log("INFO", "MODE=" + newMode), 
                "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, 
                this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, 
                this.nonDisplayedMemory.nrRollUpRows = null), this.mode = newMode);
            }
        }, {
            key: "insertChars",
            value: function(chars) {
                for (var i = 0; i < chars.length; i++) this.writeScreen.insertChar(chars[i]);
                var screen = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                logger.log("INFO", screen + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (logger.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), 
                this.outputDataUpdate());
            }
        }, {
            key: "ccRCL",
            value: function() {
                // Resume Caption Loading (switch mode to Pop On)
                logger.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
            }
        }, {
            key: "ccBS",
            value: function() {
                // BackSpace
                logger.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), 
                this.writeScreen === this.displayedMemory && this.outputDataUpdate());
            }
        }, {
            key: "ccAOF",
            value: function() {}
        }, {
            key: "ccAON",
            value: function() {}
        }, {
            key: "ccDER",
            value: function() {
                // Delete to End of Row
                logger.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), 
                this.outputDataUpdate();
            }
        }, {
            key: "ccRU",
            value: function(nrRows) {
                //Roll-Up Captions-2,3,or 4 Rows
                logger.log("INFO", "RU(" + nrRows + ") - Roll Up"), this.writeScreen = this.displayedMemory, 
                this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(nrRows);
            }
        }, {
            key: "ccFON",
            value: function() {
                //Flash On
                logger.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
                    flash: !0
                });
            }
        }, {
            key: "ccRDC",
            value: function() {
                // Resume Direct Captioning (switch mode to PaintOn)
                logger.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
            }
        }, {
            key: "ccTR",
            value: function() {
                // Text Restart in text mode (not supported, however)
                logger.log("INFO", "TR"), this.setMode("MODE_TEXT");
            }
        }, {
            key: "ccRTD",
            value: function() {
                // Resume Text Display in Text mode (not supported, however)
                logger.log("INFO", "RTD"), this.setMode("MODE_TEXT");
            }
        }, {
            key: "ccEDM",
            value: function() {
                // Erase Displayed Memory
                logger.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), 
                this.outputDataUpdate();
            }
        }, {
            key: "ccCR",
            value: function() {
                // Carriage Return
                logger.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate();
            }
        }, {
            key: "ccENM",
            value: function() {
                //Erase Non-Displayed Memory
                logger.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
            }
        }, {
            key: "ccEOC",
            value: function() {
                if (//End of Caption (Flip Memories)
                logger.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                    var tmp = this.displayedMemory;
                    this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = tmp, this.writeScreen = this.nonDisplayedMemory, 
                    logger.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText());
                }
                this.outputDataUpdate();
            }
        }, {
            key: "ccTO",
            value: function(nrCols) {
                // Tab Offset 1,2, or 3 columns
                logger.log("INFO", "TO(" + nrCols + ") - Tab Offset"), this.writeScreen.moveCursor(nrCols);
            }
        }, {
            key: "ccMIDROW",
            value: function(secondByte) {
                // Parse MIDROW command
                var styles = {
                    flash: !1
                };
                if (styles.underline = secondByte % 2 == 1, styles.italics = secondByte >= 46, styles.italics) styles.foreground = "white"; else {
                    var colorIndex = Math.floor(secondByte / 2) - 16, colors = [ "white", "green", "blue", "cyan", "red", "yellow", "magenta" ];
                    styles.foreground = colors[colorIndex];
                }
                logger.log("INFO", "MIDROW: " + JSON.stringify(styles)), this.writeScreen.setPen(styles);
            }
        }, {
            key: "outputDataUpdate",
            value: function() {
                var t = logger.time;
                null !== t && this.outputFilter && (this.outputFilter.updateData && this.outputFilter.updateData(t, this.displayedMemory), 
                null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), 
                this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : // Start of a new cue
                this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory));
            }
        }, {
            key: "cueSplitAtTime",
            value: function(t) {
                this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), 
                this.cueStartTime = t));
            }
        } ]), Cea608Channel;
    }(), Cea608Parser = function() {
        function Cea608Parser(field, out1, out2) {
            _classCallCheck(this, Cea608Parser), this.field = field || 1, this.outputs = [ out1, out2 ], 
            this.channels = [ new Cea608Channel(1, out1), new Cea608Channel(2, out2) ], this.currChNr = -1, 
            // Will be 1 or 2
            this.lastCmdA = null, // First byte of last command
            this.lastCmdB = null, // Second byte of last command
            this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
                padding: 0,
                char: 0,
                cmd: 0,
                other: 0
            };
        }
        return _createClass(Cea608Parser, [ {
            key: "getHandler",
            value: function(index) {
                return this.channels[index].getHandler();
            }
        }, {
            key: "setHandler",
            value: function(index, newHandler) {
                this.channels[index].setHandler(newHandler);
            }
        }, {
            key: "addData",
            value: function(t, byteList) {
                var cmdFound, a, b, charsFound = !1;
                this.lastTime = t, logger.setTime(t);
                for (var i = 0; i < byteList.length; i += 2) if (a = 127 & byteList[i], b = 127 & byteList[i + 1], 
                0 !== a || 0 !== b) {
                    if (logger.log("DATA", "[" + numArrayToHexArray([ byteList[i], byteList[i + 1] ]) + "] -> (" + numArrayToHexArray([ a, b ]) + ")"), 
                    cmdFound = this.parseCmd(a, b), cmdFound || (cmdFound = this.parseMidrow(a, b)), 
                    cmdFound || (cmdFound = this.parsePAC(a, b)), cmdFound || (cmdFound = this.parseBackgroundAttributes(a, b)), 
                    !cmdFound && (charsFound = this.parseChars(a, b))) if (this.currChNr && this.currChNr >= 0) {
                        var channel = this.channels[this.currChNr - 1];
                        channel.insertChars(charsFound);
                    } else logger.log("WARNING", "No channel found yet. TEXT-MODE?");
                    cmdFound ? this.dataCounters.cmd += 2 : charsFound ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, 
                    logger.log("WARNING", "Couldn't parse cleaned data " + numArrayToHexArray([ a, b ]) + " orig: " + numArrayToHexArray([ byteList[i], byteList[i + 1] ])));
                } else this.dataCounters.padding += 2;
            }
        }, {
            key: "parseCmd",
            value: function(a, b) {
                var chNr = null, cond1 = (20 === a || 28 === a) && 32 <= b && b <= 47, cond2 = (23 === a || 31 === a) && 33 <= b && b <= 35;
                if (!cond1 && !cond2) return !1;
                if (a === this.lastCmdA && b === this.lastCmdB) // Repeated commands are dropped (once)
                return this.lastCmdA = null, this.lastCmdB = null, logger.log("DEBUG", "Repeated command (" + numArrayToHexArray([ a, b ]) + ") is dropped"), 
                !0;
                chNr = 20 === a || 23 === a ? 1 : 2;
                var channel = this.channels[chNr - 1];
                //a == 0x17 || a == 0x1F
                return 20 === a || 28 === a ? 32 === b ? channel.ccRCL() : 33 === b ? channel.ccBS() : 34 === b ? channel.ccAOF() : 35 === b ? channel.ccAON() : 36 === b ? channel.ccDER() : 37 === b ? channel.ccRU(2) : 38 === b ? channel.ccRU(3) : 39 === b ? channel.ccRU(4) : 40 === b ? channel.ccFON() : 41 === b ? channel.ccRDC() : 42 === b ? channel.ccTR() : 43 === b ? channel.ccRTD() : 44 === b ? channel.ccEDM() : 45 === b ? channel.ccCR() : 46 === b ? channel.ccENM() : 47 === b && channel.ccEOC() : channel.ccTO(b - 32), 
                this.lastCmdA = a, this.lastCmdB = b, this.currChNr = chNr, !0;
            }
        }, {
            key: "parseMidrow",
            value: function(a, b) {
                var chNr = null;
                if ((17 === a || 25 === a) && 32 <= b && b <= 47) {
                    if ((chNr = 17 === a ? 1 : 2) !== this.currChNr) return logger.log("ERROR", "Mismatch channel in midrow parsing"), 
                    !1;
                    return this.channels[chNr - 1].ccMIDROW(b), logger.log("DEBUG", "MIDROW (" + numArrayToHexArray([ a, b ]) + ")"), 
                    !0;
                }
                return !1;
            }
        }, {
            key: "parsePAC",
            value: function(a, b) {
                var chNr = null, row = null, case1 = (17 <= a && a <= 23 || 25 <= a && a <= 31) && 64 <= b && b <= 127, case2 = (16 === a || 24 === a) && 64 <= b && b <= 95;
                if (!case1 && !case2) return !1;
                if (a === this.lastCmdA && b === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, 
                !0;
                chNr = a <= 23 ? 1 : 2, row = 64 <= b && b <= 95 ? 1 === chNr ? rowsLowCh1[a] : rowsLowCh2[a] : 1 === chNr ? rowsHighCh1[a] : rowsHighCh2[a];
                var pacData = this.interpretPAC(row, b);
                return this.channels[chNr - 1].setPAC(pacData), this.lastCmdA = a, this.lastCmdB = b, 
                this.currChNr = chNr, !0;
            }
        }, {
            key: "interpretPAC",
            value: function(row, byte) {
                var pacIndex = byte, pacData = {
                    color: null,
                    italics: !1,
                    indent: null,
                    underline: !1,
                    row: row
                };
                return pacIndex = byte > 95 ? byte - 96 : byte - 64, pacData.underline = 1 == (1 & pacIndex), 
                pacIndex <= 13 ? pacData.color = [ "white", "green", "blue", "cyan", "red", "yellow", "magenta", "white" ][Math.floor(pacIndex / 2)] : pacIndex <= 15 ? (pacData.italics = !0, 
                pacData.color = "white") : pacData.indent = 4 * Math.floor((pacIndex - 16) / 2), 
                pacData;
            }
        }, {
            key: "parseChars",
            value: function(a, b) {
                var channelNr = null, charCodes = null, charCode1 = null;
                if (a >= 25 ? (channelNr = 2, charCode1 = a - 8) : (channelNr = 1, charCode1 = a), 
                17 <= charCode1 && charCode1 <= 19) {
                    // Special character
                    var oneCode = b;
                    oneCode = 17 === charCode1 ? b + 80 : 18 === charCode1 ? b + 112 : b + 144, logger.log("INFO", "Special char '" + getCharForByte(oneCode) + "' in channel " + channelNr), 
                    charCodes = [ oneCode ];
                } else 32 <= a && a <= 127 && (charCodes = 0 === b ? [ a ] : [ a, b ]);
                if (charCodes) {
                    var hexCodes = numArrayToHexArray(charCodes);
                    logger.log("DEBUG", "Char codes =  " + hexCodes.join(",")), this.lastCmdA = null, 
                    this.lastCmdB = null;
                }
                return charCodes;
            }
        }, {
            key: "parseBackgroundAttributes",
            value: function(a, b) {
                var bkgData, index, chNr, channel, case1 = (16 === a || 24 === a) && 32 <= b && b <= 47, case2 = (23 === a || 31 === a) && 45 <= b && b <= 47;
                return !(!case1 && !case2) && (bkgData = {}, 16 === a || 24 === a ? (index = Math.floor((b - 32) / 2), 
                bkgData.background = backgroundColors[index], b % 2 == 1 && (bkgData.background = bkgData.background + "_semi")) : 45 === b ? bkgData.background = "transparent" : (bkgData.foreground = "black", 
                47 === b && (bkgData.underline = !0)), chNr = a < 24 ? 1 : 2, channel = this.channels[chNr - 1], 
                channel.setBkgData(bkgData), this.lastCmdA = null, this.lastCmdB = null, !0);
            }
        }, {
            key: "reset",
            value: function() {
                for (var i = 0; i < this.channels.length; i++) this.channels[i] && this.channels[i].reset();
                this.lastCmdA = null, this.lastCmdB = null;
            }
        }, {
            key: "cueSplitAtTime",
            value: function(t) {
                for (var i = 0; i < this.channels.length; i++) this.channels[i] && this.channels[i].cueSplitAtTime(t);
            }
        } ]), Cea608Parser;
    }();
    exports.default = Cea608Parser;
}, /* 51 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    var _vttparser = __webpack_require__(15), Cues = {
        newCue: function(track, startTime, endTime, captionScreen) {
            for (var row, cue, indenting, indent, text, VTTCue = window.VTTCue || window.TextTrackCue, r = 0; r < captionScreen.rows.length; r++) if (row = captionScreen.rows[r], 
            indenting = !0, indent = 0, text = "", !row.isEmpty()) {
                for (var c = 0; c < row.chars.length; c++) row.chars[c].uchar.match(/\s/) && indenting ? indent++ : (text += row.chars[c].uchar, 
                indenting = !1);
                //To be used for cleaning-up orphaned roll-up captions
                row.cueStartTime = startTime, // Give a slight bump to the endTime if it's equal to startTime to avoid a SyntaxError in IE
                startTime === endTime && (endTime += 1e-4), cue = new VTTCue(startTime, endTime, (0, 
                _vttparser.fixLineBreaks)(text.trim())), indent >= 16 ? indent-- : indent++, // VTTCue.line get's flakey when using controls, so let's now include line 13&14
                // also, drop line 1 since it's to close to the top
                navigator.userAgent.match(/Firefox\//) ? cue.line = r + 1 : cue.line = r > 7 ? r - 2 : r + 1, 
                cue.align = "left", // Clamp the position between 0 and 100 - if out of these bounds, Firefox throws an exception and captions break
                cue.position = Math.max(0, Math.min(100, indent / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), 
                track.addCue(cue);
            }
        }
    };
    module.exports = Cues;
}, /* 52 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function findFragWithCC(fragments, CC) {
        return _binarySearch2.default.search(fragments, function(candidate) {
            return candidate.cc < CC ? 1 : candidate.cc > CC ? -1 : 0;
        });
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.findFragWithCC = findFragWithCC;
    var _binarySearch = __webpack_require__(7), _binarySearch2 = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }(_binarySearch);
}, /* 53 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _ewma = __webpack_require__(54), _ewma2 = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }(_ewma), EwmaBandWidthEstimator = function() {
        function EwmaBandWidthEstimator(hls, slow, fast, defaultEstimate) {
            _classCallCheck(this, EwmaBandWidthEstimator), this.hls = hls, this.defaultEstimate_ = defaultEstimate, 
            this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new _ewma2.default(slow), 
            this.fast_ = new _ewma2.default(fast);
        }
        return _createClass(EwmaBandWidthEstimator, [ {
            key: "sample",
            value: function(durationMs, numBytes) {
                durationMs = Math.max(durationMs, this.minDelayMs_);
                var bandwidth = 8e3 * numBytes / durationMs, //console.log('instant bw:'+ Math.round(bandwidth));
                // we weight sample using loading duration....
                weight = durationMs / 1e3;
                this.fast_.sample(weight, bandwidth), this.slow_.sample(weight, bandwidth);
            }
        }, {
            key: "canEstimate",
            value: function() {
                var fast = this.fast_;
                return fast && fast.getTotalWeight() >= this.minWeight_;
            }
        }, {
            key: "getEstimate",
            value: function() {
                return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
            }
        }, {
            key: "destroy",
            value: function() {}
        } ]), EwmaBandWidthEstimator;
    }();
    exports.default = EwmaBandWidthEstimator;
}, /* 54 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), EWMA = function() {
        //  About half of the estimated value will be from the last |halfLife| samples by weight.
        function EWMA(halfLife) {
            _classCallCheck(this, EWMA), // Larger values of alpha expire historical data more slowly.
            this.alpha_ = halfLife ? Math.exp(Math.log(.5) / halfLife) : 0, this.estimate_ = 0, 
            this.totalWeight_ = 0;
        }
        return _createClass(EWMA, [ {
            key: "sample",
            value: function(weight, value) {
                var adjAlpha = Math.pow(this.alpha_, weight);
                this.estimate_ = value * (1 - adjAlpha) + adjAlpha * this.estimate_, this.totalWeight_ += weight;
            }
        }, {
            key: "getTotalWeight",
            value: function() {
                return this.totalWeight_;
            }
        }, {
            key: "getEstimate",
            value: function() {
                if (this.alpha_) {
                    var zeroFactor = 1 - Math.pow(this.alpha_, this.totalWeight_);
                    return this.estimate_ / zeroFactor;
                }
                return this.estimate_;
            }
        } ]), EWMA;
    }();
    exports.default = EWMA;
}, /* 55 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), /**
 * Copyright 2013 vtt.js Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    exports.default = function() {
        function findDirectionSetting(value) {
            return "string" == typeof value && (!!directionSetting[value.toLowerCase()] && value.toLowerCase());
        }
        function findAlignSetting(value) {
            return "string" == typeof value && (!!alignSetting[value.toLowerCase()] && value.toLowerCase());
        }
        function extend(obj) {
            for (var i = 1; i < arguments.length; i++) {
                var cobj = arguments[i];
                for (var p in cobj) obj[p] = cobj[p];
            }
            return obj;
        }
        function VTTCue(startTime, endTime, text) {
            var cue = this, isIE8 = function() {
                if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent);
            }(), baseObj = {};
            isIE8 ? cue = document.createElement("custom") : baseObj.enumerable = !0, /**
     * Shim implementation specific properties. These properties are not in
     * the spec.
     */
            // Lets us know when the VTTCue's data has changed in such a way that we need
            // to recompute its display state. This lets us compute its display state
            // lazily.
            cue.hasBeenReset = !1;
            /**
     * VTTCue and TextTrackCue properties
     * http://dev.w3.org/html5/webvtt/#vttcue-interface
     */
            var _id = "", _pauseOnExit = !1, _startTime = startTime, _endTime = endTime, _text = text, _region = null, _vertical = "", _snapToLines = !0, _line = "auto", _lineAlign = "start", _position = 50, _positionAlign = "middle", _size = 50, _align = "middle";
            if (Object.defineProperty(cue, "id", extend({}, baseObj, {
                get: function() {
                    return _id;
                },
                set: function(value) {
                    _id = "" + value;
                }
            })), Object.defineProperty(cue, "pauseOnExit", extend({}, baseObj, {
                get: function() {
                    return _pauseOnExit;
                },
                set: function(value) {
                    _pauseOnExit = !!value;
                }
            })), Object.defineProperty(cue, "startTime", extend({}, baseObj, {
                get: function() {
                    return _startTime;
                },
                set: function(value) {
                    if ("number" != typeof value) throw new TypeError("Start time must be set to a number.");
                    _startTime = value, this.hasBeenReset = !0;
                }
            })), Object.defineProperty(cue, "endTime", extend({}, baseObj, {
                get: function() {
                    return _endTime;
                },
                set: function(value) {
                    if ("number" != typeof value) throw new TypeError("End time must be set to a number.");
                    _endTime = value, this.hasBeenReset = !0;
                }
            })), Object.defineProperty(cue, "text", extend({}, baseObj, {
                get: function() {
                    return _text;
                },
                set: function(value) {
                    _text = "" + value, this.hasBeenReset = !0;
                }
            })), Object.defineProperty(cue, "region", extend({}, baseObj, {
                get: function() {
                    return _region;
                },
                set: function(value) {
                    _region = value, this.hasBeenReset = !0;
                }
            })), Object.defineProperty(cue, "vertical", extend({}, baseObj, {
                get: function() {
                    return _vertical;
                },
                set: function(value) {
                    var setting = findDirectionSetting(value);
                    // Have to check for false because the setting an be an empty string.
                    if (!1 === setting) throw new SyntaxError("An invalid or illegal string was specified.");
                    _vertical = setting, this.hasBeenReset = !0;
                }
            })), Object.defineProperty(cue, "snapToLines", extend({}, baseObj, {
                get: function() {
                    return _snapToLines;
                },
                set: function(value) {
                    _snapToLines = !!value, this.hasBeenReset = !0;
                }
            })), Object.defineProperty(cue, "line", extend({}, baseObj, {
                get: function() {
                    return _line;
                },
                set: function(value) {
                    if ("number" != typeof value && value !== autoKeyword) throw new SyntaxError("An invalid number or illegal string was specified.");
                    _line = value, this.hasBeenReset = !0;
                }
            })), Object.defineProperty(cue, "lineAlign", extend({}, baseObj, {
                get: function() {
                    return _lineAlign;
                },
                set: function(value) {
                    var setting = findAlignSetting(value);
                    if (!setting) throw new SyntaxError("An invalid or illegal string was specified.");
                    _lineAlign = setting, this.hasBeenReset = !0;
                }
            })), Object.defineProperty(cue, "position", extend({}, baseObj, {
                get: function() {
                    return _position;
                },
                set: function(value) {
                    if (value < 0 || value > 100) throw new Error("Position must be between 0 and 100.");
                    _position = value, this.hasBeenReset = !0;
                }
            })), Object.defineProperty(cue, "positionAlign", extend({}, baseObj, {
                get: function() {
                    return _positionAlign;
                },
                set: function(value) {
                    var setting = findAlignSetting(value);
                    if (!setting) throw new SyntaxError("An invalid or illegal string was specified.");
                    _positionAlign = setting, this.hasBeenReset = !0;
                }
            })), Object.defineProperty(cue, "size", extend({}, baseObj, {
                get: function() {
                    return _size;
                },
                set: function(value) {
                    if (value < 0 || value > 100) throw new Error("Size must be between 0 and 100.");
                    _size = value, this.hasBeenReset = !0;
                }
            })), Object.defineProperty(cue, "align", extend({}, baseObj, {
                get: function() {
                    return _align;
                },
                set: function(value) {
                    var setting = findAlignSetting(value);
                    if (!setting) throw new SyntaxError("An invalid or illegal string was specified.");
                    _align = setting, this.hasBeenReset = !0;
                }
            })), /**
     * Other <track> spec defined properties
     */
            // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#text-track-cue-display-state
            cue.displayState = void 0, isIE8) return cue;
        }
        if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
        var autoKeyword = "auto", directionSetting = {
            "": !0,
            lr: !0,
            rl: !0
        }, alignSetting = {
            start: !0,
            middle: !0,
            end: !0,
            left: !0,
            right: !0
        };
        /**
   * VTTCue methods
   */
        return VTTCue.prototype.getCueAsHTML = function() {
            return window.WebVTT.convertCueToDOMTree(window, this.text);
        }, VTTCue;
    }();
}, /* 56 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    var _vttparser = __webpack_require__(15), _vttparser2 = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }(_vttparser), startsWith = function(inputString, searchString, position) {
        return inputString.substr(position || 0, searchString.length) === searchString;
    }, cueString2millis = function(timeString) {
        var ts = parseInt(timeString.substr(-3)), secs = parseInt(timeString.substr(-6, 2)), mins = parseInt(timeString.substr(-9, 2)), hours = timeString.length > 9 ? parseInt(timeString.substr(0, timeString.indexOf(":"))) : 0;
        return isNaN(ts) || isNaN(secs) || isNaN(mins) || isNaN(hours) ? -1 : (ts += 1e3 * secs, 
        ts += 6e4 * mins, ts += 36e5 * hours);
    }, hash = function(text) {
        for (var hash = 5381, i = text.length; i; ) hash = 33 * hash ^ text.charCodeAt(--i);
        return (hash >>> 0).toString();
    }, calculateOffset = function(vttCCs, cc, presentationTime) {
        var currCC = vttCCs[cc], prevCC = vttCCs[currCC.prevCC];
        // This is the first discontinuity or cues have been processed since the last discontinuity
        // Offset = current discontinuity time
        if (!prevCC || !prevCC.new && currCC.new) return vttCCs.ccOffset = vttCCs.presentationOffset = currCC.start, 
        void (currCC.new = !1);
        // There have been discontinuities since cues were last parsed.
        // Offset = time elapsed
        for (;prevCC && prevCC.new; ) vttCCs.ccOffset += currCC.start - prevCC.start, currCC.new = !1, 
        currCC = prevCC, prevCC = vttCCs[currCC.prevCC];
        vttCCs.presentationOffset = presentationTime;
    }, WebVTTParser = {
        parse: function(vttByteArray, syncPTS, vttCCs, cc, callBack, errorCallBack) {
            // Convert byteArray into string, replacing any somewhat exotic linefeeds with "\n", then split on that character.
            var re = /\r\n|\n\r|\n|\r/g, vttLines = String.fromCharCode.apply(null, new Uint8Array(vttByteArray)).trim().replace(re, "\n").split("\n"), cueTime = "00:00.000", mpegTs = 0, localTime = 0, presentationTime = 0, cues = [], parsingError = void 0, inHeader = !0, parser = new _vttparser2.default();
            parser.oncue = function(cue) {
                // Adjust cue timing; clamp cues to start no earlier than - and drop cues that don't end after - 0 on timeline.
                var currCC = vttCCs[cc], cueOffset = vttCCs.ccOffset;
                // Update offsets for new discontinuities
                currCC && currCC.new && (void 0 !== localTime ? // When local time is provided, offset = discontinuity start time - local time
                cueOffset = vttCCs.ccOffset = currCC.start : calculateOffset(vttCCs, cc, presentationTime)), 
                presentationTime && (// If we have MPEGTS, offset = presentation time + discontinuity offset
                cueOffset = presentationTime + vttCCs.ccOffset - vttCCs.presentationOffset), cue.startTime += cueOffset - localTime, 
                cue.endTime += cueOffset - localTime, // Create a unique hash id for a cue based on start/end times and text.
                // This helps timeline-controller to avoid showing repeated captions.
                cue.id = hash(cue.startTime) + hash(cue.endTime) + hash(cue.text), // Fix encoding of special characters. TODO: Test with all sorts of weird characters.
                cue.text = decodeURIComponent(escape(cue.text)), cue.endTime > 0 && cues.push(cue);
            }, parser.onparsingerror = function(e) {
                parsingError = e;
            }, parser.onflush = function() {
                if (parsingError && errorCallBack) return void errorCallBack(parsingError);
                callBack(cues);
            }, // Go through contents line by line.
            vttLines.forEach(function(line) {
                if (inHeader) {
                    // Look for X-TIMESTAMP-MAP in header.
                    if (startsWith(line, "X-TIMESTAMP-MAP=")) {
                        // Once found, no more are allowed anyway, so stop searching.
                        inHeader = !1, // Extract LOCAL and MPEGTS.
                        line.substr(16).split(",").forEach(function(timestamp) {
                            startsWith(timestamp, "LOCAL:") ? cueTime = timestamp.substr(6) : startsWith(timestamp, "MPEGTS:") && (mpegTs = parseInt(timestamp.substr(7)));
                        });
                        try {
                            // Calculate subtitle offset in milliseconds.
                            // If sync PTS is less than zero, we have a 33-bit wraparound, which is fixed by adding 2^33 = 8589934592.
                            syncPTS = syncPTS < 0 ? syncPTS + 8589934592 : syncPTS, // Adjust MPEGTS by sync PTS.
                            mpegTs -= syncPTS, // Convert cue time to seconds
                            localTime = cueString2millis(cueTime) / 1e3, // Convert MPEGTS to seconds from 90kHz.
                            presentationTime = mpegTs / 9e4, -1 === localTime && (parsingError = new Error("Malformed X-TIMESTAMP-MAP: " + line));
                        } catch (e) {
                            parsingError = new Error("Malformed X-TIMESTAMP-MAP: " + line);
                        }
                        // Return without parsing X-TIMESTAMP-MAP line.
                        return;
                    }
                    "" === line && (inHeader = !1);
                }
                // Parse line by default.
                parser.parse(line + "\n");
            }), parser.flush();
        }
    };
    module.exports = WebVTTParser;
}, /* 57 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _logger = __webpack_require__(0), XhrLoader = function() {
        function XhrLoader(config) {
            _classCallCheck(this, XhrLoader), config && config.xhrSetup && (this.xhrSetup = config.xhrSetup);
        }
        return _createClass(XhrLoader, [ {
            key: "destroy",
            value: function() {
                this.abort(), this.loader = null;
            }
        }, {
            key: "abort",
            value: function() {
                var loader = this.loader;
                loader && 4 !== loader.readyState && (this.stats.aborted = !0, loader.abort()), 
                window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), 
                this.retryTimeout = null;
            }
        }, {
            key: "load",
            value: function(context, config, callbacks) {
                this.context = context, this.config = config, this.callbacks = callbacks, this.stats = {
                    trequest: performance.now(),
                    retry: 0
                }, this.retryDelay = config.retryDelay, this.loadInternal();
            }
        }, {
            key: "loadInternal",
            value: function() {
                var xhr, context = this.context;
                xhr = "undefined" != typeof XDomainRequest ? this.loader = new XDomainRequest() : this.loader = new XMLHttpRequest();
                var stats = this.stats;
                stats.tfirst = 0, stats.loaded = 0;
                var xhrSetup = this.xhrSetup;
                try {
                    if (xhrSetup) try {
                        xhrSetup(xhr, context.url);
                    } catch (e) {
                        // fix xhrSetup: (xhr, url) => {xhr.setRequestHeader("Content-Language", "test");}
                        // not working, as xhr.setRequestHeader expects xhr.readyState === OPEN
                        xhr.open("GET", context.url, !0), xhrSetup(xhr, context.url);
                    }
                    xhr.readyState || xhr.open("GET", context.url, !0);
                } catch (e) {
                    // IE11 throws an exception on xhr.open if attempting to access an HTTP resource over HTTPS
                    return void this.callbacks.onError({
                        code: xhr.status,
                        text: e.message
                    }, context, xhr);
                }
                context.rangeEnd && xhr.setRequestHeader("Range", "bytes=" + context.rangeStart + "-" + (context.rangeEnd - 1)), 
                xhr.onreadystatechange = this.readystatechange.bind(this), xhr.onprogress = this.loadprogress.bind(this), 
                xhr.responseType = context.responseType, // setup timeout before we perform request
                this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), 
                xhr.send();
            }
        }, {
            key: "readystatechange",
            value: function(event) {
                var xhr = event.currentTarget, readyState = xhr.readyState, stats = this.stats, context = this.context, config = this.config;
                // don't proceed if xhr has been aborted
                if (!stats.aborted && readyState >= 2) if (// clear xhr timeout and rearm it if readyState less than 4
                window.clearTimeout(this.requestTimeout), 0 === stats.tfirst && (stats.tfirst = Math.max(performance.now(), stats.trequest)), 
                4 === readyState) {
                    var status = xhr.status;
                    // http status between 200 to 299 are all successful
                    if (status >= 200 && status < 300) {
                        stats.tload = Math.max(stats.tfirst, performance.now());
                        var data = void 0, len = void 0;
                        "arraybuffer" === context.responseType ? (data = xhr.response, len = data.byteLength) : (data = xhr.responseText, 
                        len = data.length), stats.loaded = stats.total = len;
                        var response = {
                            url: xhr.responseURL,
                            data: data
                        };
                        this.callbacks.onSuccess(response, stats, context, xhr);
                    } else // if max nb of retries reached or if http status between 400 and 499 (such error cannot be recovered, retrying is useless), return error
                    stats.retry >= config.maxRetry || status >= 400 && status < 499 ? (_logger.logger.error(status + " while loading " + context.url), 
                    this.callbacks.onError({
                        code: status,
                        text: xhr.statusText
                    }, context, xhr)) : (// retry
                    _logger.logger.warn(status + " while loading " + context.url + ", retrying in " + this.retryDelay + "..."), 
                    // aborts and resets internal state
                    this.destroy(), // schedule retry
                    this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), 
                    // set exponential backoff
                    this.retryDelay = Math.min(2 * this.retryDelay, config.maxRetryDelay), stats.retry++);
                } else // readyState >= 2 AND readyState !==4 (readyState = HEADERS_RECEIVED || LOADING) rearm timeout as xhr not finished yet
                this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), config.timeout);
            }
        }, {
            key: "loadtimeout",
            value: function() {
                _logger.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null);
            }
        }, {
            key: "loadprogress",
            value: function(event) {
                var xhr = event.currentTarget, stats = this.stats;
                stats.loaded = event.loaded, event.lengthComputable && (stats.total = event.total);
                var onProgress = this.callbacks.onProgress;
                onProgress && // third arg is to provide on progress data
                onProgress(stats, this.context, null, xhr);
            }
        } ]), XhrLoader;
    }();
    exports.default = XhrLoader;
}, /* 58 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function(module) {
        // module.parent = undefined by default
        return module.webpackPolyfill || (module.deprecate = function() {}, module.paths = [], 
        module.children || (module.children = []), Object.defineProperty(module, "loaded", {
            enumerable: !0,
            get: function() {
                return module.l;
            }
        }), Object.defineProperty(module, "id", {
            enumerable: !0,
            get: function() {
                return module.i;
            }
        }), module.webpackPolyfill = 1), module;
    };
}, /* 59 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    var bundleFn = arguments[3], sources = arguments[4], cache = arguments[5], stringify = JSON.stringify;
    module.exports = function(fn, options) {
        function resolveSources(key) {
            workerSources[key] = !0;
            for (var depPath in sources[key][1]) {
                var depKey = sources[key][1][depPath];
                workerSources[depKey] || resolveSources(depKey);
            }
        }
        for (var wkey, cacheKeys = Object.keys(cache), i = 0, l = cacheKeys.length; i < l; i++) {
            var key = cacheKeys[i], exp = cache[key].exports;
            // Using babel as a transpiler to use esmodule, the export will always
            // be an object with the default export as a property of it. To ensure
            // the existing api and babel esmodule exports are both supported we
            // check for both
            if (exp === fn || exp && exp.default === fn) {
                wkey = key;
                break;
            }
        }
        if (!wkey) {
            wkey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
            for (var wcache = {}, i = 0, l = cacheKeys.length; i < l; i++) {
                var key = cacheKeys[i];
                wcache[key] = key;
            }
            sources[wkey] = [ "function(require,module,exports){" + fn + "(self); }", wcache ];
        }
        var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16), scache = {};
        scache[wkey] = wkey, sources[skey] = [ "function(require,module,exports){var f = require(" + stringify(wkey) + ");(f.default ? f.default : f)(self);}", scache ];
        var workerSources = {};
        resolveSources(skey);
        var src = "(" + bundleFn + ")({" + Object.keys(workerSources).map(function(key) {
            return stringify(key) + ":[" + sources[key][0] + "," + stringify(sources[key][1]) + "]";
        }).join(",") + "},{},[" + stringify(skey) + "])", URL = window.URL || window.webkitURL || window.mozURL || window.msURL, blob = new Blob([ src ], {
            type: "text/javascript"
        });
        if (options && options.bare) return blob;
        var workerUrl = URL.createObjectURL(blob), worker = new Worker(workerUrl);
        return worker.objectURL = workerUrl, worker;
    };
}, /* 60 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
        if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !call || "object" != typeof call && "function" != typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _get = function get(object, property, receiver) {
        null === object && (object = Function.prototype);
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (void 0 === desc) {
            var parent = Object.getPrototypeOf(object);
            return null === parent ? void 0 : get(parent, property, receiver);
        }
        if ("value" in desc) return desc.value;
        var getter = desc.get;
        if (void 0 !== getter) return getter.call(receiver);
    }, _hls = __webpack_require__(42), _hls2 = _interopRequireDefault(_hls), _Metadata = __webpack_require__(61), _Metadata2 = _interopRequireDefault(_Metadata), _package = __webpack_require__(67), _package2 = _interopRequireDefault(_package), _parserId3Tag = __webpack_require__(66), _parserId3Tag2 = _interopRequireDefault(_parserId3Tag), _isAdItem = __webpack_require__(65), _isAdItem2 = _interopRequireDefault(_isAdItem), Hls = function(_Meister$MediaPlugin) {
        function Hls(config, meister, next) {
            _classCallCheck(this, Hls);
            var _this = _possibleConstructorReturn(this, (Hls.__proto__ || Object.getPrototypeOf(Hls)).call(this, config, meister));
            // Middleware promise chain.
            // -1 for automatic quality selection
            // Auto recover properties
            return _this.maxErrors = _this.config.maxErrors || 5, _this.dvrThreshold = _this.config.dvrThreshold || 300, 
            _this.hls = null, _this.hlsVersion = _hls2.default.version, _this.manifestParsed = !1, 
            _this.audioMode = !1, _this.metadata = [], _this.previousMetadata = null, _this.next = next, 
            _this.previousLevel = -1, _this.lowestLevel = 0, _this.amountOfErrors = 0, _this.recoverDecodingErrorDate = null, 
            _this.recoverSwapAudioCodecDate = null, _this;
        }
        return _inherits(Hls, _Meister$MediaPlugin), _createClass(Hls, [ {
            key: "isItemSupported",
            value: function(item) {
                var _this2 = this;
                return new Promise(function(resolve) {
                    return resolve("m3u8" !== item.type && "m3u" !== item.type ? {
                        supported: !1,
                        errorCode: Meister.ErrorCodes.WRONG_TYPE
                    } : _this2.config.disabled || !_hls2.default.isSupported() || _this2.meister.browser.isSamsung && !window.MediaSource || _this2.meister.browser.isiOS && _this2.config.iosMobileDisabled ? {
                        supported: !1,
                        errorCode: Meister.ErrorCodes.NOT_SUPPORTED
                    } : item.drm || item.drmConfig ? {
                        supported: !1,
                        errorCode: Meister.ErrorCodes.NO_DRM
                    } : {
                        supported: !0
                    });
                });
            }
        }, {
            key: "resetPrivates",
            value: function() {
                this.metadata = [], this.previousMetadata = null, this.manifestParsed = !1, this.previousLevel = -1, 
                this.lowestLevel = 0, this.mediaDuration = 0, this.item = null;
            }
        }, {
            key: "process",
            value: function(item) {
                var _this3 = this;
                return this.next(item).then(function(newItem) {
                    return _this3.player = _this3.meister.getPlayerByType("html5", newItem), _this3.meister.config.audioOnly || "audio" === newItem.mediaType ? _this3.audioMode = !0 : _this3.audioMode = !1, 
                    newItem;
                }).catch(function(err) {
                    console.error("Something went wrong while processing middlewares. " + err);
                });
            }
        }, {
            key: "load",
            value: function(item) {
                var _this4 = this;
                _get(Hls.prototype.__proto__ || Object.getPrototypeOf(Hls.prototype), "load", this).call(this, item), 
                this.item = item;
                var startPosition = Number.isFinite(item.startPosition) && item.startPosition > 0 ? item.startPosition : -1;
                return new Promise(function(resolve) {
                    // TODO: Handle not being able to initiate a player.
                    var mediaElement = _this4.player.mediaElement, config = {
                        autoStartLoad: !1,
                        debug: !1
                    };
                    item.Hls && item.Hls.fineTuning && (config = Object.assign(config, item.Hls.fineTuning)), 
                    _this4.hls = new _hls2.default(config), // Listen to control events.
                    _this4.on("playerError", _this4.onPlayerError.bind(_this4)), _this4.on("requestBitrate", _this4.onRequestBitrate.bind(_this4)), 
                    _this4.on("requestGoLive", function() {
                        return _this4.onRequestGoLive();
                    }), // Trigger this to make it look pretty.
                    _this4.hls.on(_hls2.default.Events.MANIFEST_LOADED, function(event, data) {
                        // data.levels contains audio stream here
                        if (_this4.audioMode) {
                            for (var onlyAudio = !0, i = 0; i < data.levels.length; i++) {
                                if (data.levels[i].videoCodec) {
                                    onlyAudio = !1;
                                    break;
                                }
                            }
                            if (onlyAudio) _this4.meister.config.autoplay ? _this4.hls.startLoad(startPosition) : _this4.one("requestPlay", function() {
                                if (_this4.manifestParsed) _this4.hls.startLoad(startPosition); else {
                                    var startPlayback = function startPlayback() {
                                        _this4.hls.startLoad(startPosition), _this4.hls.off(_hls2.default.Events.MANIFEST_PARSED, startPlayback);
                                    };
                                    _this4.hls.on(_hls2.default.Events.MANIFEST_PARSED, startPlayback);
                                }
                            }), resolve(); else for (var _i = 0; _i < data.levels.length; _i++) {
                                var _subLevel = data.levels[_i];
                                if (!_subLevel.videoCodec) return void _this4.hls.loadSource(_subLevel.url[0]);
                            }
                        }
                        !_this4.audioMode && _this4.meister.config.autoplay && _this4.hls.startLoad(startPosition), 
                        _this4.config.splashTitle && _this4.meister.trigger("uiEvent", {
                            type: "splash",
                            info: {
                                title: _this4.config.splashTitle,
                                description: _this4.config.splashDescription,
                                thumbnailURL: _this4.config.splashThumbnail
                            }
                        });
                    }), // Find the lowest level when the levels have been parsed, and notify UI of bitrates.
                    _this4.hls.on(_hls2.default.Events.MANIFEST_PARSED, function(event, data) {
                        _this4.onManifestParsed(data.levels, data.firstLevel);
                    }), // Announce whether the level is live or not.
                    _this4.hls.on(_hls2.default.Events.LEVEL_LOADED, function(event, data) {
                        var live = data.details.live, hasDVR = !1;
                        _this4.mediaDuration = data.details.totalduration, live && _this4.mediaDuration > _this4.dvrThreshold && (hasDVR = !0), 
                        _this4.config.dvrEnabled || (hasDVR = !1), _this4.meister.trigger("itemTimeInfo", {
                            hasDVR: hasDVR,
                            isLive: live,
                            duration: _this4.mediaDuration
                        });
                    }), // Parse the metadata and store it.
                    _this4.hls.on(_hls2.default.Events.FRAG_PARSING_METADATA, function(event, data) {
                        _this4.processMetadata(data);
                    }), // Monitor automatic quality switching.
                    _this4.hls.on(_hls2.default.Events.LEVEL_SWITCH, _this4.onQualityChanged.bind(_this4)), 
                    // Prepare for playback.
                    _this4.hls.attachMedia(mediaElement);
                    // The current playlist item
                    var currentPlaylistItem = _this4.meister.playlist.list[_this4.meister.playlist.index];
                    // This fixes an issue where GoogleIMA was calling mediaElement.load() on a Hls.js item
                    // to preserve user interactions.
                    // This waits first for the initialUserAction to be completed. so it can then load it all in.
                    // Also this fix only applies to non autoplay devices. (See GoogleIMA trigger)
                    (0, _isAdItem2.default)(currentPlaylistItem) && (_this4.meister.browser.isMobile || _this4.meister.browser.isNonAutoPlay) ? _this4.one("GoogleIma:initialUserActionCompleted", function() {
                        _this4.hls.loadSource(item.src);
                    }) : _this4.hls.loadSource(item.src), // Error handling.
                    _this4.hls.on(_hls2.default.Events.ERROR, function(e, data) {
                        return _this4.onError(e, data);
                    }), // Only start loading the stream when playback is requested.
                    _this4.meister.config.autoplay ? (_this4.config.disableVisibilitySwitch || _this4.on("windowVisibilityChange", _this4.visibilityChange.bind(_this4)), 
                    resolve()) : _this4.audioMode || (_this4.one("requestPlay", function() {
                        if (_this4.manifestParsed) _this4.hls.startLoad(startPosition); else {
                            var startPlayback = function startPlayback() {
                                _this4.hls.startLoad(startPosition), _this4.hls.off(_hls2.default.Events.MANIFEST_PARSED, startPlayback);
                            };
                            _this4.hls.on(_hls2.default.Events.MANIFEST_PARSED, startPlayback);
                        }
                        _this4.config.disableVisibilitySwitch || _this4.on("windowVisibilityChange", function(e) {
                            return _this4.visibilityChange(e);
                        });
                    }), resolve());
                });
            }
        }, {
            key: "playerLoadedMetadata",
            value: function() {}
        }, {
            key: "onQualityChanged",
            value: function(event, data) {
                // Manual triggers are handled when setting the quality.
                if (this.hls.autoLevelEnabled) {
                    var newBitrate = this.hls.levels[data.level].bitrate;
                    this.meister.trigger("playerAutoSwitchBitrate", {
                        newBitrate: newBitrate,
                        newBitrateIndex: data.level
                    });
                }
            }
        }, {
            key: "_onPlayerTimeUpdate",
            value: function() {
                var playOffset = this.player.duration - this.mediaDuration;
                this.meister.trigger("playerTimeUpdate", {
                    currentTime: this.player.currentTime - playOffset,
                    duration: this.mediaDuration
                }), // Player update times are rewarded with minus 1 error.
                // This is because the player is playing again. And the error was not fatal.
                0 !== this.amountOfErrors && (this.amountOfErrors -= 1), this.broadcastTitle();
            }
        }, {
            key: "_onPlayerSeek",
            value: function() {
                var playOffset = this.player.duration - this.mediaDuration, currentTime = this.player.currentTime - playOffset, duration = this.mediaDuration, relativePosition = currentTime / duration;
                this.meister.trigger("playerSeek", {
                    relativePosition: relativePosition,
                    currentTime: currentTime,
                    duration: duration
                });
            }
        }, {
            key: "onRequestSeek",
            value: function(e) {
                var targetTime = void 0;
                if (Number.isFinite(e.relativePosition)) {
                    var playOffset = this.player.duration - this.mediaDuration;
                    targetTime = this.mediaDuration * e.relativePosition + playOffset;
                } else if (Number.isFinite(e.timeOffset)) targetTime = this.player.currentTime + e.timeOffset; else if (Number.isFinite(e.targetTime)) {
                    var _playOffset = this.player.duration - this.mediaDuration;
                    targetTime = e.targetTime + _playOffset;
                }
                !e.forcedStart && this.blockSeekForward && targetTime > this.player.currentTime || Number.isFinite(targetTime) && (this.player.currentTime = targetTime);
            }
        }, {
            key: "onRequestGoLive",
            value: function() {
                var duration = this.player.duration, targetDuration = this.hls.levels[this.hls.currentLevel].details.targetduration, liveSync = this.hls.config.liveSyncDurationCount, liveOffset = targetDuration * liveSync, liveTime = duration - liveOffset;
                this.player.currentTime = liveTime;
            }
        }, {
            key: "processMetadata",
            value: function(data) {
                try {
                    var id3Tags = (0, _parserId3Tag2.default)(data.samples[0].data);
                    this.meister.trigger("id3Tags", id3Tags);
                } catch (error) {
                    console.error(error);
                }
                var newMetadata = _Metadata2.default.parse(data);
                if (newMetadata) {
                    for (var i = this.metadata.length - 1; i >= 0; i--) {
                        var loopData = this.metadata[i];
                        if (newMetadata.title === loopData.title) // Update the end time should it have changed.
                        return void (loopData.end = newMetadata.end);
                    }
                    // No early return, metadata must be new.
                    this.metadata.push(newMetadata);
                }
            }
        }, {
            key: "broadcastTitle",
            value: function() {
                var time = this.player.currentTime;
                // No need to spam events.
                if (!(this.previousMetadata && this.previousMetadata.start < time && time < this.previousMetadata.end)) {
                    // Still playing the same item.
                    var currentMetadata = this.currentlyPlaying;
                    this.previousMetadata && currentMetadata.title === this.previousMetadata.title || (// Remember the current metadata for the next call.
                    this.previousMetadata = currentMetadata, // Broadcast event for the ui.
                    this.meister.trigger("itemMetadata", {
                        title: currentMetadata.title
                    }));
                }
            }
        }, {
            key: "onManifestParsed",
            value: function(levels) {
                // Should there be no levels do nothing.
                if (this.manifestParsed = !0, 0 !== levels.length && !this.audioMode) {
                    for (var lowestBitrate = levels[0].bitrate, i = 0; i < levels.length; i++) {
                        var level = levels[i];
                        level.bitrate < lowestBitrate && (lowestBitrate = level.bitrate, this.lowestLevel = i);
                    }
                    // Format bitrates and notify UI.
                    var bitrates = [];
                    // Use bitrate 0 for automatic switching.
                    bitrates.push({
                        bitrate: 0,
                        index: -1
                    });
                    for (var _i2 = 0; _i2 < levels.length; _i2++) {
                        var _level = levels[_i2];
                        bitrates.push({
                            bitrate: _level.bitrate,
                            index: _i2
                        });
                    }
                    this.meister.trigger("itemBitrates", {
                        bitrates: bitrates,
                        currentIndex: -1
                    });
                }
            }
        }, {
            key: "onRequestBitrate",
            value: function(e) {
                // No need to broadcast auto selection
                if (this.hls.nextLevel = e.bitrateIndex, -1 !== e.bitrateIndex) {
                    var newBitrate = this.hls.levels[e.bitrateIndex].bitrate;
                    this.meister.trigger("playerSwitchBitrate", {
                        newBitrate: newBitrate,
                        newBitrateIndex: e.bitrateIndex
                    });
                }
            }
        }, {
            key: "visibilityChange",
            value: function(e) {
                "visible" === e.visibility ? // Restore quality to previous level.
                this.hls.nextLevel = this.previousLevel : "hidden" === e.visibility && (// Check whether the quality was automatic and save it as previous state.
                this.hls.autoLevelEnabled ? this.previousLevel = -1 : this.previousLevel = this.hls.currentLevel, 
                this.hls.nextLevel = this.lowestLevel);
            }
        }, {
            key: "recoverFromMediaError",
            value: function() {
                var now = performance.now();
                // First try a normal recover. The server may have returned faulty data or
                // the decoder could have crashed.
                // 3000 gives HLS the chance to recover instead of imidiatly trying to recover again.
                !this.recoverDecodingErrorDate || now - this.recoverDecodingErrorDate > 3e3 ? (this.recoverDecodingErrorDate = performance.now(), 
                console.warn("Fatal error in Hls. Will attempt to recover."), // Try to recover from our media error.
                this.hls.recoverMediaError(), // Since autoStartLoad is false we need to resume the load manually.
                this.hls.startLoad(), this.meister.trigger("requestPlay")) : (!this.recoverSwapAudioCodecDate || now - this.recoverSwapAudioCodecDate > 3e3) && (// We still could not recover from our fatal error. We shall try swapping the audio codec.
                this.recoverSwapAudioCodecDate = performance.now(), console.warn("Fatal error in Hls. Will attempt to swap audio codecs."), 
                // Swap audio codecs and try recovering again.
                this.hls.swapAudioCodec(), this.hls.recoverMediaError(), // Since autoStartLoad is false we need to resume the load manually.
                this.hls.startLoad(), this.meister.trigger("requestPlay"));
            }
        }, {
            key: "onError",
            value: function(e, data) {
                this.amountOfErrors += 1, console.warn("Error in " + this.name + ", type: " + data.details + ", will attempt to recover. Errors thrown: " + this.amountOfErrors), 
                data.fatal && (console.error("Can not recover from " + data.type + ": " + data.details + "."), 
                data.type === _hls2.default.ErrorTypes.NETWORK_ERROR && this.meister.error("Network error", "HLS-0001", data.details), 
                // We can recover from a media error.
                // This is slower but can result in a playing video. (As seen in Firefox)
                data.type === _hls2.default.ErrorTypes.MEDIA_ERROR && this.config.autoRecoverMode && this.recoverFromMediaError()), 
                this.amountOfErrors === this.maxErrors && (// Make sure we are stopping.
                this.meister.pause(), this.meister.error("Too many errors, exceeded maximum", "HLS-0002", data.details));
            }
        }, {
            key: "onPlayerError",
            value: function(error) {
                // We can recover from decode errors. This will swap codecs and try again..
                error.code === error.MEDIA_ERR_DECODE && this.config.autoRecoverMode && this.recoverFromMediaError();
            }
        }, {
            key: "unload",
            value: function() {
                _get(Hls.prototype.__proto__ || Object.getPrototypeOf(Hls.prototype), "unload", this).call(this), 
                this.resetPrivates(), this.hls && this.hls.media && this.hls.detachMedia(), this.hls && this.hls.destroy();
            }
        }, {
            key: "destroy",
            value: function() {
                _get(Hls.prototype.__proto__ || Object.getPrototypeOf(Hls.prototype), "destroy", this).call(this), 
                this.hls && this.hls.destroy();
            }
        }, {
            key: "duration",
            get: function() {
                return this.hls ? this.mediaDuration : NaN;
            }
        }, {
            key: "currentTime",
            get: function() {
                if (!this.hls || !this.player) return NaN;
                var playOffset = this.player.duration - this.mediaDuration;
                return this.player.currentTime - playOffset;
            },
            set: function(time) {
                if (this.hls && this.player) {
                    var playOffset = this.player.duration - this.mediaDuration;
                    this.player.currentTime = time + playOffset;
                }
            }
        }, {
            key: "currentItem",
            get: function() {
                var metadata = this.currentlyPlaying;
                return {
                    src: this.item.src,
                    type: this.item.type,
                    title: metadata.title,
                    bitrate: metadata.bitrate
                };
            }
        }, {
            key: "currentlyPlaying",
            get: function() {
                // Nothing has been loaded yet.
                if (!this.hls || !this.hls.levels) return {
                    bitrate: 0,
                    title: ""
                };
                for (var currentLevel = this.hls.currentLevel, metadata = {
                    bitrate: this.hls.levels[currentLevel] ? this.hls.levels[currentLevel].bitrate : 0,
                    title: ""
                }, data = null, time = this.player.currentTime, i = this.metadata.length - 1; i >= 0; i--) if (this.metadata[i].start < time && time < this.metadata[i].end) {
                    data = this.metadata[i];
                    break;
                }
                return data && (metadata.title = data.title, metadata.start = data.start, metadata.end = data.end, 
                metadata.duration = data.end - data.start), metadata;
            }
        } ], [ {
            key: "pluginName",
            get: function() {
                return "Hls";
            }
        }, {
            key: "pluginVersion",
            get: function() {
                return _package2.default.version;
            }
        } ]), Hls;
    }(Meister.MediaPlugin);
    Meister.registerPlugin("hls", Hls), Meister.registerPlugin(Hls.pluginName, Hls), 
    exports.default = Hls;
}, /* 61 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _Plist = __webpack_require__(62), _Plist2 = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }(_Plist), Metadata = function() {
        function Metadata() {
            _classCallCheck(this, Metadata);
        }
        return _createClass(Metadata, null, [ {
            key: "parse",
            value: function(datas) {
                for (var allInfo = [], i = 0; i < datas.samples.length; i++) {
                    var data = datas.samples[i];
                    allInfo.push({
                        data: Metadata.toChar(data.data),
                        pts: datas.samples[i].pts
                    });
                }
                if (allInfo.length) {
                    if (-1 === allInfo[0].data.indexOf("<?xml")) return null;
                    allInfo[0].data = allInfo[0].data.substring(allInfo[0].data.indexOf("<?xml")), allInfo[0].data = allInfo[0].data.replace(" & ", " &amp; ");
                    var _data = {};
                    _data.data = _Plist2.default.parse(allInfo[0].data), _data.title = _data.data.artistName + " - " + _data.data.titleName, 
                    _data.start = allInfo[0].pts;
                    var duration = parseInt(_data.data.duration) / 1e3;
                    return _data.end = _data.start + duration, _data;
                }
                return allInfo;
            }
        }, {
            key: "toChar",
            value: function(arr) {
                for (var string = "", i = 0; i < arr.length; i++) {
                    var charNum = arr[i];
                    string += String.fromCharCode(charNum);
                }
                return string;
            }
        } ]), Metadata;
    }();
    exports.default = Metadata;
}, /* 62 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), _Xml = __webpack_require__(63), _Xml2 = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }(_Xml), Plist = function() {
        function Plist() {
            _classCallCheck(this, Plist);
        }
        return _createClass(Plist, null, [ {
            key: "parse",
            value: function(data) {
                for (var parsedData = _Xml2.default.parse(data), dict = parsedData.getElementsByTagName("dict")[0], children = _Xml2.default.getChildren(dict), prevKey = "", result = {}, i = 0; i < children.length; i++) {
                    var tag = children[i];
                    "key" === tag.tagName ? prevKey = tag.textContent : result[prevKey] = tag.textContent;
                }
                return result;
            }
        } ]), Plist;
    }();
    exports.default = Plist;
}, /* 63 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
            Constructor;
        };
    }(), Xml = function() {
        function Xml() {
            _classCallCheck(this, Xml);
        }
        return _createClass(Xml, null, [ {
            key: "parse",
            value: function(content) {
                var parseXml = function() {};
                if (void 0 !== window.DOMParser) parseXml = function(xmlStr) {
                    return new window.DOMParser().parseFromString(xmlStr, "text/xml");
                }; else {
                    if (void 0 === window.ActiveXObject || !new window.ActiveXObject("Microsoft.XMLDOM")) throw new Error("No XML parser found");
                    parseXml = function(xmlStr) {
                        var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                        return xmlDoc.async = "false", xmlDoc.loadXML(xmlStr), xmlDoc;
                    };
                }
                return parseXml(content);
            }
        }, {
            key: "getChildren",
            value: function(element) {
                if (void 0 === element.children) {
                    for (var childNodes = element.childNodes, children = [], i = 1; i < childNodes.length; i += 2) // take every second element
                    children.push(childNodes[i]);
                    return children;
                }
                return element.children;
            }
        } ]), Xml;
    }();
    exports.default = Xml;
}, /* 64 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Id3Tag = /**
 * Creates an instance of Id3Tag.
 *
 * @param {string} key
 * @param {ArrayBuffer} data
 * @param {number} [startTime=0]
 * @param {number} [endTime=0]
 * @memberof Id3Tag
 */
    function Id3Tag(key, data) {
        var startTime = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, endTime = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        _classCallCheck(this, Id3Tag), this.data = data, this.key = key, this.type = "org.id3", 
        this.startTime = startTime, this.endTime = endTime;
    };
    exports.default = Id3Tag;
}, /* 65 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    /**
 * Checks whether the item is an ad item or not.
 *
 * @export
 * @param {Object} item
 * @returns {boolean}
 */
    function isAdItem(item) {
        // Non media items are certenly not ad items.
        // Non media items are certenly not ad items.
        return !("media" !== item.type || !item.parallel) && !!item.parallel.find(function(parallelItem) {
            return "vmap" === parallelItem.type;
        });
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = isAdItem;
}, /* 66 */
/***/
function(module, exports, __webpack_require__) {
    "use strict";
    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
            return arr2;
        }
        return Array.from(arr);
    }
    /**
 * Validates if this is a real ID3 tag.
 *
 * @param {Uint8Array} magicNumber
 * @returns {boolean} isValid
 */
    function validateId3(magicNumber) {
        var isValid = !0;
        return MAGIC_NUMBER.forEach(function(byte, i) {
            byte !== magicNumber[i] && (isValid = !1);
        }), isValid;
    }
    /**
 * Checks if an frameId is empty.
 *
 * @param {Array} frameId
 * @returns {boolean} empty
 */
    function isEmpty(frameId) {
        // The frameId cannot contain a single empty byte
        // So we can be sure it's empty.
        return !!frameId.find(function(byte) {
            return byte === EMPTY_BYTE;
        });
    }
    /**
 * Parses Id3 tags.
 *
 * @export
 * @param {Uint8Array} data
 * @throws {Error}
 * @returns {Array<Id3Tag>}
 */
    function parseId3Tag(data) {
        if (!validateId3(data.slice(0, 3))) throw new Error("Invalid ID3 tag");
        var buffer = Array.from(data), frames = (buffer.splice(0, HEADER_BYTE_SIZE), []);
        do {
            var frameId = buffer.splice(0, FRAME_ID_SIZE), frameSize = buffer.splice(0, FRAME_SIZE_BYTES).reduce(function(sum, value) {
                return sum + value;
            }), frameFlags = buffer.splice(0, FRAME_FLAG_SIZE), frameBody = buffer.splice(0, frameSize);
            isEmpty(frameId) || frames.push({
                key: String.fromCharCode.apply(String, _toConsumableArray(frameId)),
                value: new Uint8Array(frameBody).buffer,
                flags: frameFlags
            });
        } while (buffer.length > 0);
        return frames.map(function(frame) {
            return new _Id3Tag2.default(frame.key, frame.value);
        });
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = parseId3Tag;
    var _Id3Tag = __webpack_require__(64), _Id3Tag2 = function(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }(_Id3Tag), MAGIC_NUMBER = new Uint8Array([ 73, 68, 51 ]), HEADER_BYTE_SIZE = 10, FRAME_ID_SIZE = 4, FRAME_SIZE_BYTES = 4, FRAME_FLAG_SIZE = 2, EMPTY_BYTE = 255;
}, /* 67 */
/***/
function(module, exports) {
    module.exports = {
        name: "@meisterplayer/plugin-hls",
        version: "5.4.1",
        description: "Meister plugin wrapping the hls.js player.",
        main: "dist/Hls.js",
        keywords: [ "meister", "video", "plugin" ],
        repository: {
            type: "git",
            url: "https://github.com/meisterplayer/media-hls.git"
        },
        scripts: {
            lint: "eslint ./src/js",
            test: "jest",
            "test:coverage": "jest --coverage",
            build: "gulp build",
            dist: "gulp build:min && gulp build:dist"
        },
        author: "Triple",
        license: "Apache-2.0",
        dependencies: {
            "hls.js": "0.7.11",
            "url-toolkit": "^2.0.1",
            webworkify: "^1.4.0"
        },
        devDependencies: {
            "@meisterplayer/meister-mock": "^1.0.0",
            "babel-preset-es2015": "^6.24.0",
            "babel-preset-es2017": "^6.22.0",
            gulp: "^3.9.1",
            jest: "^20.0.4",
            "meister-gulp-webpack-tasks": "^1.0.6",
            "meister-js-dev": "^3.1.0"
        },
        peerDependencies: {
            "@meisterplayer/meisterplayer": ">= 5.1.0"
        }
    };
}, /* 68 */
/***/
function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(17);
} ]);
//# sourceMappingURL=Hls.js.map