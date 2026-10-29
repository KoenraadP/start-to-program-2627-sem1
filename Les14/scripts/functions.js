"use strict";

// function aanroepen (kan zowel bovenaan als onderaan)
sayHello();
sayHello();
sayHello();

// function maken om het woord "hallo" in console te plaatsen
function sayHello() {
    console.log("Hallo!");
}

saySomething("Vandaag is les 14");
saySomething("Het is geen goed weer vandaag");
saySomething(); // undefined als output

// function om een specifieke string in console te plaatsen
function saySomething(blargh) {
    console.log(blargh);
}

console.log(areaRectangle(5, 6)); // 30
document.body.innerHTML += areaRectangle(4, 8); // 32
let area = areaRectangle(3, 7); // 21

// function om de oppervlakte van een rechthoek te berekenen
// berekening is length * width
function areaRectangle(length, width) {
    let result = length * width;
    // resultaat uit de function halen met return
    return result;
    // code na return wordt niet meer uitgevoerd
    console.log("function gedaan");
}

const correctUser = "Koenraad";
const correctPassword = "1234";

console.log(checkLogin("Jean-Paul", "1234"));
console.log(checkLogin("Koenraad", "1234"));

function checkLogin(user, password) {
    if (user === correctUser
        && password === correctPassword) {
        return "Login ok";
    } else {
        return "Login failed";
    }
}

let score = 76;
console.log(gradeScore(score));

function gradeScore(scoreInput) {
    if (scoreInput >= 85) {
        return "grootste onderscheiding";
    }
    if (scoreInput >= 75) {
        return "grote onderscheiding";
    }
    if (scoreInput >= 50) {
        return "geslaagd";
    }
}

// oefening 1 pagina 79

let ageInput = prompt("Hoe oud ben je?")
let days = ageInDays(ageInput);
alert("Je leeft al ongeveer " + days + " dagen");

function ageInDays(age) {
    return age * 365;
    // alternatief
    // let result = age * 365;
    // return result;
}