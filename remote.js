// Main js file for controlling the player.

(function () {
    var playPauseCode = 179;
    
    var playButton = document.getElementById('bottom-control-play');
    
    document.onkeydown = onKey;
    
    function onKey(evt) {
        if (evt.repeat) { return; }
        
        if (evt.keyCode === playPauseCode) {
            onPlayPause();
        }
    }
    
    function onPlayPause() {
        playButton.click();
    }
})();
