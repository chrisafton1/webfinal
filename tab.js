// Array of random messages for tab title
var randomMessages = [
  "Come Back",
  "See You Soon...",
  "Y U Leave?",
  "boo :( come back",
  "come back noob",
  "get back here pls",
  "Cant Leave, Bro.",
  "where do you think your going",
  "Comeback, Bro.",
  "get back here, Bro.",
  "Where u going, Bro."
];

// Function to generate a random message from the array
function getRandomMessage() {
  var randomIndex = Math.floor(Math.random() * randomMessages.length);
  return randomMessages[randomIndex];
}

// Variable to store the timeout ID
var timeoutId;

// Set initial tab title to "Ptobin"
document.title = "Ptobin!";

// Event listener for when the user clicks off the page
window.addEventListener("blur", function () {
  clearTimeout(timeoutId);
  document.title = getRandomMessage();
});

// Event listener for when the user clicks back on the page
window.addEventListener("focus", function () {
  clearTimeout(timeoutId);
  document.title = "Welcome back, bro.";
  timeoutId = setTimeout(function () {
    document.title = "Ptobin!";
  }, 3000);
});
