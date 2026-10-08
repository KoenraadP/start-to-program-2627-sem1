"use strict";

// let firstDay = new Date(2026,10,1);
// console.log(firstDay);

// let secondDay = new Date(2026,10,2);
// console.log(secondDay);

// let thirdDay = new Date(2026,10,3);
// console.log(thirdDay);

// for loop die alle dagen van november toont
for (let i = 1; i <= 30; i++) {
    // i gebruiken voor de dag
    let novemberDate = new Date(2026, 10, i);
    document.body.innerHTML += "<p>"
        + novemberDate.toDateString();
    + "</p>";
}

// vanaf laatste dag aftellen naar eerste dag
for (let i = 30; i >= 1; i--) {
    // i gebruiken voor de dag
    let novemberDate = new Date(2026, 10, i);
    document.body.innerHTML += "<p>"
        + novemberDate.toDateString();
    + "</p>";
}

// telkens per twee dagen
for (let i = 1; i <= 30; i += 2) {
    // i gebruiken voor de dag
    let novemberDate = new Date(2026, 10, i);
    document.body.innerHTML += "<p>"
        + novemberDate.toDateString();
    + "</p>";
}

// dobbelsteen scriptje

// aantal ogen op de dobbelsteen vastleggen
const dice = 20;

// eerste worp, random van 1 t/m 20
let diceRoll = Math.floor(Math.random() * dice + 1);

// als de eerste worp al de max was dan alert
if (diceRoll === dice) {
    alert("De eerste worp was al onmiddellijk " 
            + dice
    )
}

// teller maken om bij te houden hoeveel keer we gegooid hebben
let counter = 1;

while (diceRoll < dice) {
    // optellen bij counter voor aantal keer
    counter++;
    diceRoll = Math.floor(Math.random() * dice + 1);
    console.log(diceRoll);
}

alert("Je hebt na " + counter + " keer " + dice + " gegooid."
)