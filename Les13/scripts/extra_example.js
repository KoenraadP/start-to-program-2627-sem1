"use strict";

const options = ["bloo", "bla", "bli"];

let userInput = prompt("Kies: bloo, bla, bli");

let randomIndex = Math.floor(Math.random() * options.length);
let computerChoice = options[randomIndex];

if (userInput === computerChoice) {
    alert("Draw");
}


if (userInput === "paper") {
    if (computerChoice === "scissors") {
        // lose
    } else {
        // win
    }
}

if (userInput === "paper" && computerChoice === "scissors"
) {
    // lose
} else {
    // win
}

document.body.innerHTML += "<p>Wins: " + playerwins + "</p>";