"use strict";

// opvragen via prompt hoe veel keer we de loop willen uitvoeren
let amount = Number(prompt("Hoe veel keer?"));
// voornaam instellen als constante
const firstName = "Koenraad";
// variabele voor list
let list = "<ul>";

// x aantal keer (volgens amount)
// de firstName plaatsen
for (let i = 0; i < amount; i++) {
    // eerst in de console
    console.log(firstName);
    // op de pagina onder elkaar met <br>
    document.body.innerHTML += firstName + "<br>";
    // list opbouwen om later op de pagina te plaatsen
    list += "<li>" + firstName + "</li>";
}

// list afsluiten
list += "</ul>";
// volledige list in document plaatsen
document.body.innerHTML += list;

// versie met while
// let i = 0;
// while (i < amount) {
//     console.log(firstName);
//     i++;
// }

// random cijfer aanmaken van 1 tot en met 10
let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);