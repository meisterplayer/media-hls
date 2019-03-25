HLS.js plugin for Meister
=======

This plugin allows HLS playback in browsers that do not natively support it. This plugin uses [hls.js](https://github.com/video-dev/hls.js) internally for playback of the streams.  
*NOTE* The browser needs to implement the MediaSource API for this to work (which most modern browsers do).

Config options
-------

#### autoRecoverMode *[Boolean]* (default: false) ####

By setting the autoRecoverMode you can let the HLS plugin try to automatically recover from Media errors. For example if the player cannot decode the video that is currently playing.

Example:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Hls: {
        autoRecoverMode: true,
    }
});

meisterPlayer.setItem({
    src: 'INSERT_HLS_M3U8_URL_HERE'
    type: 'm3u8',
});
```

#### disabled *[Boolean]* (default: false) ####

This disables the HLS.js plugin for the meister instance. This can be used if you use this in combination with a other plugin that can also play HLS (such as Safari or Edge natively).

Example:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Hls: {
        disabled: true,
    }
});
```

#### fineTuning *[Object]*

Here you can set all the finetuning options that can be found here: [https://github.com/video-dev/hls.js/blob/master/doc/API.md#fine-tuning](). Options set here will be used as the default for all items. These can be overridden for specific items by passing updated configuration with the item.

Example:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Hls: {
        fineTuning: {
            debug: true,
            nudgeMaxRetry: 5,
        },
    }
});
```

#### dvrEnabled *[Boolean]* (default: true) ####

This enables/disables DVR capabilities in HLS if it is supported by the stream.

Example:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Hls: {
        dvrEnabled: false,
    }
});
```

#### dvrThreshold *[Number]* (default: 300) ####

This value determines if a live stream is a DVR stream yes or no. If the live stream has added up more seconds then the dvrThreshold it is considered a DVR stream else not.

Example:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Hls: {
        dvrThreshold: 50,
    }
});
```

#### visibilitySwitch *[Boolean]* (default: false) ####

Enables quality switching when the player is not in an active tab or is minimized. When the user either selects a different tab or minimizes the tab the player will select the lowest video quality to save bandwidth.

Example:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Hls: {
        disableVisibilitySwitch: true,
    }
});
```

#### maxErrors *[Boolean]* (default: 5) ####

Defines the maximum amount of errors that are allowed to be thrown.
When the errors exceed this amount we throw a meister error.

Example:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Hls: {
        maxErrors: 6,
    }
});
```

### Item config

These settings can be set per item. These will be available using the ```Hls: {}``` namespace.

#### fineTuning *[Object]*

By providing fineTuning paramaters with the item they will only be applied for that specific item. A list of all the finetuning options can be found here: [https://github.com/video-dev/hls.js/blob/master/doc/API.md#fine-tuning](). Options set here will override any options given when intialising the plugin.

Example:

```JavaScript
meister.setItem({
    src: 'M3U8_URL_HERE',
    type: 'm3u8',
    Hls: {
        fineTuning: {
            debug: true,
            nudgeMaxRetry: 5,
        }
    }
});
```

### Akamai Media Acceleration

This plugin also supports use of the Akamai Media Acceleration SDK.

#### akamai *[Boolen]* (default: false)

This flag toggles the use of the SDK.

Example:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Hls: {
        akamai: true,
    }
});
```

#### akamaiScriptUrl *[String]* (default: 'https://media-acceleration-host.akamaized.net/sdk/js/stable/hlsjs.min.js')

The location from which to fetch the SDK script. Defaults to Akamai's own CDN.

Example:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Hls: {
        akamaiScriptUrl: 'https://my-own.location.net/ama_sdk.js',
    }
});
```

#### akamaiConfig *[Object]* (default: None)

An object containing configuration for the AMA SDK.

Example:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Hls: {
        akamaiConfig: {
            log_level: 'DEBUG',
        },
    }
});
```
