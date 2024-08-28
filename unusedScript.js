const mobileVideo = document.getElementById('my-mobile-video');
const muteBtn = document.getElementById('mute-btn');

// Mobile mute functionality
muteBtn.addEventListener('click', () => {
    if (mobileVideo.muted === true) {
      // Unmute
        mobileVideo.muted = false;
        muteBtn.innerHTML = "<img class='mute' src='./assets/muted.png' alt='yourimgtext'/>"
    } else {
      // Mute
        mobileVideo.muted = true;
        muteBtn.innerHTML = "<img class='unmute' src='./assets/sound.png' alt='yourimgtext'/>"
    } 
});

// play/pause functionality
muteBtn.addEventListener('click', () => {
    if (video.paused) {
    // play
        video.play();
        muteBtn.innerHTML = "<img class='mute' src='./assets/pause.png' alt='yourimgtext'/>"
    } else {
        // pause
        video.pause();
        muteBtn.innerHTML = "<img class='unmute' src='./assets/play.png' alt='yourimgtext'/>"
    } 
});