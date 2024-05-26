document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("looping-video");
    const skipButton = document.getElementById("skip-button");
  
    video.addEventListener("canplaythrough", () => {
      skipButton.addEventListener("click", () => {
        const frameRate = 10; // Example frame rate (adjust to your video's frame rate)
        const skipTime = 10 * 60 + 20; // 10 minutes and 14 seconds in total
        video.currentTime = skipTime - frameRate; // Subtract one frame duration
      });
    });
  
    // Prevent right-click on the entire document
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });
  });
  