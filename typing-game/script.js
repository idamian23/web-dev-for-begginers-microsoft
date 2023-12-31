const quotes = [
    // "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
    // "There is nothing more deceptive than an obvious fact.",
    // "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
    // "I never make exceptions. An exception disproves the rule.",
    // "What one man can invent another can discover.",
    // "Nothing clears up a case so much as stating it to another person.",
    // "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
    "asd",
];

let words = [];
let wordIndex = 0;
let startTime = Date.now();

let typedValueElement = document.getElementById("typed-value");
let quoteElement = document.getElementById("quote");
let messageElement = document.getElementById("message");

let startButton = document.getElementById("start");

startButton.addEventListener("click", () => {
    quoteElement.style.padding = "1rem";
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];

    words = quote.split(" ");
    wordIndex = 0;

    const spanWords = words.map(function (word) {
        return `<span>${word}</span>`;
    });
    quoteElement.innerHTML = spanWords.join(" ");
    quoteElement.childNodes[0].className = "highlight";
    messageElement.innerHTML = "";
    typedValueElement.value = "";
    typedValueElement.focus();

    startTime = new Date().getTime();
    console.log(startTime);
});

// add typing logic

typedValueElement.addEventListener("input", () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;
    let topScores = [];

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        const elapsedTime = (new Date().getTime() - startTime) / 1000;
        const message = `Congratz! You have finished in ${elapsedTime} seconds!`;
        messageElement.innerText = message;

        //storage
        localStorage.setItem("topScores", "0");
        topScores.push(elapsedTime);
        localStorage.setItem("topScores", JSON.stringify(topScores));
        console.log(topScores);
    } else if (typedValue.endsWith("") && typedValue.trim() === currentWord) {
        typedValueElement.value = "";

        wordIndex++;

        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = "";
        }

        quoteElement.childNodes[wordIndex].className = "highlight";
    } else if (currentWord.startsWith(typedValue)) {
        typedValueElement.className = "";
    } else {
        typedValueElement.className = "error";
    }
});

// TODO
// Disable the input event listener on completion, and re-enable it when the button is clicked
// Disable the textbox when the player completes the quote
// Display a modal dialog box with the success message
// Store high scores using localStorage
