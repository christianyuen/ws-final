const video = document.getElementById('my-video');
const muteBtn = document.getElementById('mute-btn');

// Mute functionality
muteBtn.addEventListener('click', () => {
  if (video.muted === true) {
    // Unmute
    video.muted = false;
    muteBtn.innerHTML = "<img class='mute' src='./assets/muted.png' alt=''/>"
    // muteBtn.innerHTML = "<button><p>MUTE</p></button"
  } else {
    // Mute
    video.muted = true;
    muteBtn.innerHTML = "<img class='unmute' src='./assets/un-mute.png' alt=''/>"
    // muteBtn.innerHTML = "<button><p>UNMUTE</p></button>"
  } 
});