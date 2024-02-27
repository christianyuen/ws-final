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

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = document.querySelector(".select");
  const menu = document.querySelector(".menu");
  select.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
  });
});

// DATE AND TIME
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;

function appendZero(value) {
    return "0" + value;
}

function theTime() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString("en-US");
}

if (day < 10) {
    day = appendZero(day);
}

if (month < 10) {
    month = appendZero(month);
}

today = day + "/" + month + "/" + today.getFullYear();

document.getElementById("date").innerHTML = today;

var myVar = setInterval(function () {
    theTime();
}, 1000);