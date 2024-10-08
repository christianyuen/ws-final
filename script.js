const video = document.getElementById('my-video');
const muteBtn = document.getElementById('mute-btn');

// Mute functionality
muteBtn.addEventListener('click', () => {
  if (video.muted === true) {
    // Unmute
    video.muted = false;
    muteBtn.innerHTML = "<img class='mute' src='./assets/muted.png' alt='yourimgtext'/>"
  } else {
    // Mute
    video.muted = true;
    muteBtn.innerHTML = "<img class='unmute' src='./assets/sound.png' alt='yourimgtext'/>"
  } 
});