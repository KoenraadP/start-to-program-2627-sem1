// altijd beginnen met volgende lijn code
"use strict";

// variabelen maken voor hoogte en basis
// 'declaratie'
let height;
let base;

// waarden toekennen aan variabelen
// 'initialisatie'
height = 4;
base = 7;

// variabele voor uitkomst
let area;

// berekening doen en uitkomst opslaan in variabele
area = height * base;

// op verschillende manieren de area 'tonen'
console.log(area); // in de console
document.body.innerHTML += "<p>De oppervlakte is " + area + "</p>"; // op de pagina
// alert(area); // via een alert pop-up

// via prompt nieuwe hoogte en basis waarden invullen
height = prompt("Wat is de hoogte?");
base = prompt("Wat is de basis?");

// tweede keer berekenen
area = height * base;

// afronden en opnieuw opslaan
// area = Math.round(area); // round --> afronden tot geheel getal, zonder cijfers na de komma
area = area.toFixed(2); // toFixed --> zelf kiezen hoeveel cijfers na de komma

// tweede uitkomst tonen
document.body.innerHTML += "<p>De oppervlakte is "
    + area + "</p>";