document.addEventListener('DOMContentLoaded', function () {
  var startScreen = document.getElementById('startScreen');
  var nextScreen = document.getElementById('nextScreen');
  var backgroundAudio = document.getElementById('background-audio');
  var volumeSlider = document.getElementById('volume');
  var playPauseButton = document.getElementById('playPauseButton');
  var skipButton = document.getElementById('skipButton');
  var nowPlayingBox = document.getElementById('nowPlayingBox');
  var nowPlayingText = document.getElementById('nowPlayingText');
  var backgroundVideo = document.getElementById('background-video');
  var backgroundSource = document.getElementById('background-source');
  var isPlaying = true; // Flag to track if audio is currently playing

  var audioTracks = [
    { name: "OUTBREAK-Nicopatty", file: "ASSets/music/backround1.wav" },
    { name: "Safe room-Nicopatty", file: "ASSets/music/safe room.wav" },
    { name: "Day Dream in Blue", file: "ASSets/music/DGIB.wav" },
    { name: "Vanished", file: "ASSets/music/Crystal Castles - Vanished.wav" },
    { name: "Brutal", file: "ASSets/music/backround3.wav" },
    { name: "CRYSTALS", file: "ASSets/music/backround4.wav" },
    { name: "Rustys Theme", file: "ASSets/music/backround5.wav" },
    { name: "Song11- Chris Afton", file: "ASSets/music/song11.wav" },
    { name: "all i wanted", file: "ASSets/music/wantedwasu.wav" },
    { name: "Fly me to the moon", file: "ASSets/music/flymetothemoon.wav" },
    { name: "Crimewave", file: "ASSets/music/Crimewave.wav" },
    { name: "Mail Inc0,Cewer,Heroinsick", file: "ASSets/music/mail.wav" },
    { name: "In my Grasp", file: "ASSets/music/inmygrasp.wav" },
    { name: "Numa Numa", file: "ASSets/music/numanuma.mp3" },
    { name: "sherbet lobby w/ bxnji", file: "ASSets/music/sherbert.mp3" },
    { name: "What if You're Right And They're Wrong?,", file:"ASSets/music/tropes.wav"}
  ];

  var mp4Videos = [
    { src: "ASSets/vids/strk.mp4", type: "video/mp4" },
    { src: "ASSets/vids/shapeshift.mp4", type: "video/mp4" },
    { src: "ASSets/vids/cars.mp4", type: "video/mp4" },
    { src: "ASSets/vids/caff.mp4", type: "video/mp4" },
    { src: "ASSets/vids/sply.mp4", type: "video/mp4" },
    { src: "ASSets/vids/fu.mp4", type: "video/mp4" },
    { src: "ASSets/vids/herbr.mp4", type: "video/mp4" },
    { src: "ASSets/vids/fhritp.mp4", type: "video/mp4" },
    { src: "ASSets/vids/bbp.mp4", type: "video/mp4" }
  ];

  var webmVideo = { src: "ASSets/vids/backvid.webm", type: "video/webm" };

  var currentTrackIndex = 0;

  function playCurrentTrack() {
    var track = audioTracks[currentTrackIndex];
    backgroundAudio.src = track.file;
    backgroundAudio.currentTime = 0;
    backgroundAudio.play();
    isPlaying = true;
    updatePlayPauseIcon();
    showNowPlaying(track.name);
  }

  function shuffleTracks() {
    var currentIndex = audioTracks.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = audioTracks[currentIndex];
      audioTracks[currentIndex] = audioTracks[randomIndex];
      audioTracks[randomIndex] = temporaryValue;
    }
  }

  function switchToNextTrack() {
    currentTrackIndex++;
    if (currentTrackIndex >= audioTracks.length) {
      currentTrackIndex = 0;
      shuffleTracks();
    }
    playCurrentTrack();
  }

  function showNowPlaying(song) {
    nowPlayingText.textContent = `Now Playing: ${song}`;
    nowPlayingBox.classList.add("show");
  }

  function togglePlayPause() {
    if (backgroundAudio.paused) {
      backgroundAudio.play();
      isPlaying = true;
    } else {
      backgroundAudio.pause();
      isPlaying = false;
    }
    updatePlayPauseIcon();
  }

  function updatePlayPauseIcon() {
    if (isPlaying) {
      playPauseButton.classList.remove("play");
      playPauseButton.classList.add("pause");
    } else {
      playPauseButton.classList.remove("pause");
      playPauseButton.classList.add("play");
    }
  }

  function playRandomMp4() {
    var randomIndex = Math.floor(Math.random() * mp4Videos.length);
    var selectedVideo = mp4Videos[randomIndex];
    backgroundSource.src = selectedVideo.src;
    backgroundSource.type = selectedVideo.type;
    backgroundVideo.removeAttribute('loop'); // Ensure the video does not loop
    backgroundVideo.load();

    backgroundVideo.oncanplay = function() {
      backgroundAudio.pause();
      backgroundVideo.muted = false;
      backgroundVideo.play();
    }

    backgroundVideo.onended = function() {
      playWebm();
    }
  }

  function playWebm() {
    backgroundSource.src = webmVideo.src;
    backgroundSource.type = webmVideo.type;
    backgroundVideo.setAttribute('loop', ''); // Ensure the video loops
    backgroundVideo.load();

    backgroundVideo.oncanplay = function() {
      backgroundAudio.play();
      backgroundVideo.muted = true;
      backgroundVideo.play();
    }
  }

  startScreen.addEventListener("click", function () {
    startScreen.style.display = "none";
    nextScreen.style.display = "flex";
    playRandomMp4(); // Start with a random MP4 video
  });

  backgroundAudio.addEventListener("ended", switchToNextTrack);

  volumeSlider.addEventListener("input", function () {
    backgroundAudio.volume = volumeSlider.value / 100;
  });

  playPauseButton.addEventListener('click', togglePlayPause);
  skipButton.addEventListener('click', switchToNextTrack);

  shuffleTracks();
  playCurrentTrack();

  // Console message
  console.log('%cHOLD UP!', 'color: red; font-size: 50px; font-weight: bold;');
  console.log('%cWhat do you think you\'re doing, bro.', 'color: black; font-size: 20px; font-weight: bold;');

  // Random console error messages
  const messages = [
    "Your not the boss of me, bro.",
    "Sorry bro, cant type here, bro.",
    "No. Bro.",
    "Stop it, Bro."
  ];

  function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // Overwrite console methods to intercept input
  const originalConsoleLog = console.log;
  const originalConsoleError = console.error;

  console.log = function() {
    originalConsoleError('%c' + getRandomMessage(), 'color: red; font-size: 20px; font-weight: bold;');
  };

  console.error = function() {
    originalConsoleError('%c' + getRandomMessage(), 'color: red; font-size: 20px; font-weight: bold;');
  };

  // Use a Proxy to capture any arbitrary input
  window.console = new Proxy(console, {
    get(target, prop) {
      return (...args) => {
        originalConsoleError('%c' + getRandomMessage(), 'color: red; font-size: 20px; font-weight: bold;');
      };
    }
  });
});

