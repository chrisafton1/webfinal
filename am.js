// Array of background audio tracks with corresponding names
var audioTracks = [
  { name: "Mail Inc0,Cewer,Heroinsick", file: "ASSets/music/mail.wav" },
  { name: "sherbet lobby w/ bxnji", file: "ASSets/music/sherbert.mp3" },
  { name: "What if You're Right And They're Wrong?", file: "ASSets/music/tropes.wav" }
];

var audio = new Audio(); // Create a global Audio object

// Function to play a random track
function playRandomTrack() {
  var randomIndex = Math.floor(Math.random() * audioTracks.length);
  var track = audioTracks[randomIndex];
  
  audio.src = track.file; // Set the source of the Audio object to the selected track
  audio.play(); // Play the audio
}

// Play a random track initially
playRandomTrack();

// Event listener to play next track when current track ends
audio.addEventListener('ended', function() {
  playRandomTrack(); // Play another random track when current track ends
});
