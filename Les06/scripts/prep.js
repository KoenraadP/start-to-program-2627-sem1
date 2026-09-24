"use strict";

// waarden opvragen via prompts
let firstName = prompt("Wat is je naam?");
let city = prompt("Waar woon je?");
let age = prompt("Hoe oud ben je?");

// alles van output bundelen in één variabele
let output = "<p>Naam: " + firstName + "</p>";
output += "<p>Woonplats: " + city + "</p>";
output += "<p>Leeftijd: " + age + "</p>";

// output op de pagina plaatsen
document.body.innerHTML += output;