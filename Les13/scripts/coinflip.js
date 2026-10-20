"use strict";

// mogelijke opties van coin flip
const options = ["kop", "munt"];

// nodige variabelen voor later gebruik
let userInput = "";
let result = "";
let wins = 0;

for (let i = 0; i < 3; i++) {
    // vragen aan gebruiker of hij/zij kop of munt kiest
    userInput = prompt("kop of munt?");

    // computer laten kiezen tussen kop of munt
    let randomIndex = Math.floor(Math.random() * options.length); // 0 of 1
    let coinFlip = options[randomIndex];

    // controleren of user goed geraden heeft
    if (userInput === coinFlip) {
        // aantal wins verhogen
        wins++;
        result = "Goed geraden, het was " + coinFlip;
    } else {
        result = "Helaas, het was " + coinFlip;
    }

    // result tonen in alert
    alert(result);
}

// eindresultaat tonen
alert("Je hebt " + wins + " keer goed geraden");