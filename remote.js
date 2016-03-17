// Main js file for controlling the player.

(function () {
    var playPauseCode = 179;
    var fullscreenKey = '#';    // Spare key that doesn't already do something.
    
    // Play and Fullscreen buttons and implemented slightly differently
    // for whatever reason.
    var playButton = document.getElementById('bottom-control-play');
    var fullscreenButton = document.querySelector('#bottom-control-fullscreen .live-bottom-control');
    
    document.onkeydown = onKeyDown;
    document.onkeypress = onKeyPress;
    
    // keydown handler -- needed for non-standard keys like play/pause.
    function onKeyDown(evt) {
        if (evt.repeat) { return; }
        
        if (evt.keyCode === playPauseCode) {
            onPlayPause();
        }
    }
    
    // keypress handler -- needed for # as my funny remote sends 3
    // keydown events with weird codes for that, but a sensible keypress.
    function onKeyPress(evt) {
        if (evt.repeat) { return; }

        if (event.keyCode === fullscreenKey.charCodeAt(0)) {
            toggleFullscreen();
        }        
    }
    
    function onPlayPause() {
        playButton.click();
    }
    
    function toggleFullscreen() {
        fullscreenButton.click();
    }
})();
