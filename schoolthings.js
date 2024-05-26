const terminalIntro = document.getElementById("terminal-intro");
const terminalLoaded = document.getElementById("terminal-loaded");

const startupMessages = [
    "Starting up...",
    "Loading system modules...",
    "Establishing connection...",
    "Initialization complete!"
];

const commands = [
    "Pat:/home/school$ ls",
    "",
    "💾 Ptobin",
    "└📁 School things",
    "  ┠📁 Random english/computer thing",
    "  ┠📁 Learn Circuts slides",  
    "  ┠📁 Scratch game I made :D",
    "  ┠📁 Original website",
    "  ┠📁 This website's code :D",  
];

let currentLine = 0;
let currentChar = 0;

const displayLine = () => {
    if (currentLine < commands.length) {
        const line = commands[currentLine];
        if (currentChar < line.length) {
            terminalIntro.innerHTML += line[currentChar];
            currentChar++;
        } else {
            terminalIntro.innerHTML += "<br>";
            currentLine++;
            currentChar = 0;
        }
    } else {
        terminalIntro.hidden = true;
        terminalLoaded.hidden = false;
    }
};

const startTyping = () => {
    terminalIntro.innerHTML = "";
    displayLine();
    setInterval(displayLine, 50);
};

terminalIntro.innerHTML = startupMessages[0];
setTimeout(() => {
    terminalIntro.innerHTML = "";
    startTyping();
}, 3000);

const volumeSlider = document.getElementById("volumeSlider");
const backgroundAudio = document.getElementById("looped-audio");
const volumeSliderValue = document.getElementById("volumeSliderValue");

backgroundAudio.volume = volumeSlider.value / 100;

volumeSlider.addEventListener("input", function () {
    if (!backgroundAudio.paused) {
        backgroundAudio.volume = volumeSlider.value / 100;
        volumeSliderValue.textContent = `Volume: ${volumeSlider.value}`;
    }
});

backgroundAudio.addEventListener("play", () => {
    volumeSliderValue.textContent = "Volume: " + volumeSlider.value;
});

backgroundAudio.addEventListener("pause", () => {
    volumeSliderValue.textContent = "Paused";
});
