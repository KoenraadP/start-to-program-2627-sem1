"use strict";

// quiz vraag via prompt
// vraag blijft herhalen tot het juiste antwoord 
// gegeven wordt

// let answer = prompt("Wat is de hoofdstad van België?");
// answer = answer.toLowerCase(); // input wordt in kleine letters geplaatst

// vraag herhalen als deze niet goed beantwoord werd
// while (answer !== "brussel") {
//     answer = prompt("Wat is de hoofdstad van België?");
//     answer = answer.toLowerCase();
// }

// alert("Juist, het antwoord was inderdaad Brussel!");

// dobbel spelletje

// aantal ogen of 'grootte' dobbelsteen instellen
const dice = 6;

// random getal van 1 tot en met 6 maken en tonen
let diceRoll = Math.floor(Math.random() * dice + 1);

// controleren of we nu al 6 hebben
if (diceRoll === dice) {
    alert("Wow, onmiddellijk 6 gegooid!");
} else {
    // als we nog geen 6 hadden, blijven rollen
    while (diceRoll < dice) {
        console.log(diceRoll);
        diceRoll = Math.floor(Math.random() * dice + 1);
    }
}

// controleren of laatste rol effectief een 6 was
console.log(diceRoll);
