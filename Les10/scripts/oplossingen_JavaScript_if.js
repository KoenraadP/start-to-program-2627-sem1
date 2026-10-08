"use strict";

/* Loterij-deelname

let age = prompt("Wat is jouw leeftijd?");

if (age >= 18) {
    console.log("Je bent toegelaten");
} else {
    console.log("Je bent nog geen 18!");
}

*/

/* Lidgeld bibliotheek

let membershipFee = 10;
let age = prompt("Wat is jouw leeftijd?");

if (age < 26) {
    membershipFee = membershipFee / 2;
}

console.log("Het lidgeld bedraagt: " + membershipFee + " EUR");

*/

/* Bioscoopticket

const ticketPrice = 13.7;
let adjustedPrice = 0;

let age = prompt("Wat is jouw leeftijd?");

//in principe is onderstaande code niet nodig als je al de eerste waarde op 0 zet
if (age <= 5 || age >= 55) {
    adjustedPrice = 0;
} else if (age <= 12) {
    adjustedPrice = ticketPrice / 2;
} else {
    adjustedPrice = ticketPrice;
}

console.log("De prijs die je moet betalen is: " + adjustedPrice + " EUR");

*/

/* Vijf evaluaties

let scoreOne = parseInt(prompt("Wat is de eerste score?"));
let scoreTwo = parseInt(prompt("Wat is de tweede score?"));
let scoreThree = parseInt(prompt("Wat is de derde score?"));
let scoreFour = parseInt(prompt("Wat is de vierde score?"));
let scoreFive = parseInt(prompt("Wat is de vijfde score?"));

let result = "Geslaagd!";

if (scoreOne < 50 || scoreTwo < 50 || scoreThree < 50 || scoreFour < 50 || scoreFive < 50) {
    result = "Niet geslaagd.";
} 

console.log(result);

*/

/* Welkomsttekst op basis van uur 

let today = new Date();
let currentHour = today.getHours();
console.log(currentHour);

if (currentHour >= 6 && currentHour < 12) {
    console.log("Goedemorgen");
} else if (currentHour >= 12 && currentHour < 17) {
    console.log("Goeiedag");
} else if (currentHour >= 17 && currentHour < 23) {
    console.log("Goede avond");
} else {
    console.log("Goedenacht");
}

*/

/* hoger lager 

let input = parseInt(prompt("Pick a number from 1 to 10"));
let randomNumber = Math.floor(Math.random() * 10 + 1);

if(input === randomNumber){
    console.log("Correct geraden! Het getal was inderdaad " + randomNumber + ".");
} else if(input > randomNumber){
    console.log("Lager! Het cijfer was " + randomNumber + ".");
} else if(input < randomNumber){
    console.log("Hoger! Het cijfer was " + randomNumber + ".");
} 

*/

/* Schrikkeljaar check 

let year = parseInt(prompt("Geef het jaartal in."));
let leapYear = "Ja";

if (year % 4 !== 0) {
    leapYear = "Nee";
} else if (year % 100 === 0 && year % 400 !== 0) {
    leapYear = "Nee";
}

console.log(leapYear);

*/

/* dagen tot verjaardag 

let input = prompt("Wat is jouw geboortedatum? (alleen dag en maand ingeven, voorbeeld: 0504 voor 5 april)");
 
let day = input.slice(0,2);
let month = input.slice(2);
let today = new Date();
let year = today.getFullYear();
let oneDay = 1000*60*60*24;
let birthday = new Date(year, month-1, day);

if (today > birthday) {
    birthday.setFullYear(year+1);
} 
 
let resultDays = Math.ceil((birthday - today)/oneDay);
 
console.log(resultDays);

*/