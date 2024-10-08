// Access the video element and the pause/play button
const video = document.getElementById("video-background");
const pauseButton = document.getElementById("pause-button");

// Add event listener to toggle play/pause on button click
pauseButton.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    pauseButton.textContent = "Pause Video"; // Update button text
  } else {
    video.pause();
    pauseButton.textContent = "Play Video"; // Update button text
  }
});