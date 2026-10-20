"use strict";

// zin laten intypen met prompt
let input = prompt("Typ een zin in");

// zin opsplitsen in aparte karakters
let characters = input.split("");

// for loop gebruiken om volledige verzameling karakters te overlopen
for (let i = 0; i < characters.length; i++) {
    // controleren of karakter een hoofdletter is op dit moment
    if (characters[i] === characters[i].toUpperCase()) {
        // karakter omzetten naar kleine letter
        characters[i] = characters[i].toLowerCase();
    } else {
        characters[i] = characters[i].toUpperCase();
    }
}

// verzameling karakters opnieuw aan elkaar plakken
// in één string en tonen in console
console.log(characters.join(""));