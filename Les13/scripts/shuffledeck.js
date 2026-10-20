"use strict";

let suits = ["Spades", "Hearts", "Clubs", "Diamonds"]; // schoppen, harten, klaveren, ruiten
let ranks = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
    "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
let deckOfCards = [];

for (let i = 0; i < suits.length; i++) { // spel kaarten aanmaken
    for (let j = 0; j < ranks.length; j++) {
        deckOfCards.push(ranks[j] + " of " + suits[i]);
    }
}

// volledig spel kaarten tonen
// console.log(deckOfCards);

// loop achteraan laten beginnen bij laatste kaart
for (let i = deckOfCards.length - 1; i >= 0; i--) {
    // kaart die nu gewisseld wordt even apart opslaan
    let currentCard = deckOfCards[i];
    // random kaart kiezen uit array
    let randomIndex = Math.floor(Math.random() * deckOfCards.length); // 0 - 51
    let randomCard = deckOfCards[randomIndex];

    // currentCard en randomCard wisselen van plaats binnen de array
    deckOfCards[i] = randomCard;
    // deckOfCards[randomIndex] = currentCard;

    // [deckOfCards[i], deckOfCards[randomIndex]] = [deckOfCards[randomIndex], deckOfCards[i]];
}

// shuffled deck tonen
console.log(deckOfCards);