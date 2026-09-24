"use strict";

// twee variabelen voor cijfer maken
// en laten invullen door prompt
let number1 = prompt("Cijfer 1?");
let number2 = prompt("Cijfer 2?");

// tekst waarden 'omzetten' naar cijfer waarden
number1 = Number(number1);
number2 = Number(number2);

// som berekenen
let sum = number1 + number2;

// uitkomst tonen in console
console.log(sum);