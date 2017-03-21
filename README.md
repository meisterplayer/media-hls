HLS.js plugin for Meister
=======

This plugin allows HLS playback in browsers that do not natively support it. But do support the MediaSource API (Most modern browsers).

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

#### disableVisibilitySwitch *[Boolean]* (default: false) ####

Disables the quality switching when the player is not in an active tab or is minimized. (Default behavior is when the user either selects a different tab or minimizes the tab the player will select the lowest video quality to save bandwidth)

Example:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Hls: {
        disableVisibilitySwitch: true,
    }
});
```
