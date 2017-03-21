HLS.js plugin for Meister
=======

This plugin allows HLS playback in browsers that do not natively support it. But do support the MediaSource API (Most modern browsers).

Options
-------

#### autoRecoverMode (default: false) ####

By setting the autoRecoverMode you can let the HLS plugin try to automatically recover from Media errors. For example if the player cannot decode the video that is currently playing.

Example:

``` JavaScript
var meisterPlayer = new Meister('#player' ,{
    Hls: {
        autoRecoverMode: true
    }
});
```
