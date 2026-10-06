"use strict";

// cijfer opvragen met prompt
const number = Number(prompt("Typ een cijfer in"));

// versie met for uitwerken voor de herhaling
for (let i = 1; i <= 10; i++) {
    // berekening uitvoeren en resultaat opslaan
    let result = number * i;
    // resultaat tonen op pagina
    document.body.innerHTML += "<p>" + result + "</p>";
}

// versie met while uitwerken voor dezelfde herhaling
let j = 1; // andere naam want conflict mogelijk met i in for loops
while (j <= 10) {
    // berekening uitvoeren en resultaat opslaan
    let result = number * j;
    // resultaat tonen op pagina
    document.body.innerHTML += "<p>" + result + "</p>";
    // teller j verhogen
    j++;
}

// alle cijfers van 1 tot en met 100 in de console tonen
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// // cijfer opvragen met prompt
// const number = Number(prompt("Typ een cijfer in"));

// // variabele voor vermenigvuldigingscijfer
// // starten bij 1, later 2, 3, 4, ...
// let multiplication = 1;

// // variabele voor resultaat berekening
// let result;

// // eerste berekening uitvoeren
// result = number * multiplication;

// // resultaat op de pagina tonen
// document.body.innerHTML += "<p>" + result + "</p>";

// // multiplication aanpassen voor volgende berekening
// multiplication++;
// // berekening opnieuw uitvoeren
// result = number * multiplication;
// // output opnieuw toevoegen
// document.body.innerHTML += "<p>" + result + "</p>";

// // slechte manier van werken: alles constant herhalen

// // multiplication aanpassen voor volgende berekening
// multiplication++;
// // berekening opnieuw uitvoeren
// result = number * multiplication;
// // output opnieuw toevoegen
// document.body.innerHTML += "<p>" + result + "</p>";

// // multiplication aanpassen voor volgende berekening
// multiplication++;
// // berekening opnieuw uitvoeren
// result = number * multiplication;
// // output opnieuw toevoegen
// document.body.innerHTML += "<p>" + result + "</p>";

// // multiplication aanpassen voor volgende berekening
// multiplication++;
// // berekening opnieuw uitvoeren
// result = number * multiplication;
// // output opnieuw toevoegen
// document.body.innerHTML += "<p>" + result + "</p>";

// // multiplication aanpassen voor volgende berekening
// multiplication++;
// // berekening opnieuw uitvoeren
// result = number * multiplication;
// // output opnieuw toevoegen
// document.body.innerHTML += "<p>" + result + "</p>";

// // multiplication aanpassen voor volgende berekening
// multiplication++;
// // berekening opnieuw uitvoeren
// result = number * multiplication;
// // output opnieuw toevoegen
// document.body.innerHTML += "<p>" + result + "</p>";

