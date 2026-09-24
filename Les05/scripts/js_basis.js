// dit lijntje altijd bovenaan plaatsen
"use strict";

// hoofdtitel plaatsen op pagina
document.body.innerHTML += "<h1>Les 5</h1>";

// variabelen maken
let width = 7;
let height = 5;

// variabele maken voor resultaat
// en ook berekening doen
let area = width * heght;

// resultaat tonen in console
console.log(area);

// nieuwe waarden toekennen aan bestaande variabelen
width = 8;
height = 9;
area = width * height;
console.log("De uitkomst is: " + area);

// uittesten ++ en --
let a = 10;
a++;
console.log(a); // 11
console.log(a++); // 11
console.log(a); // 12
console.log(++a); // 13

// langer alternatief 
a = a + 1; // a++
console.log(a); // 14

// andere korte manier
a += 1; // 15
console.log(a);

// tekst aan elkaar plakken
let firstName = "Koenraad";
let lastName = "Pecceu";
console.log(firstName + " " + lastName);

// gebruik van constante
const pi = 3.14;
let radius = 4;
let circumference = 2 * radius * pi;
console.log("De omtrek van een cirkel met straal "
    + radius
    + " is "
    + circumference
    + ".");
document.body.innerHTML += "<p>" + circumference + "</p>";
console.log(Math.PI);

// html element koppelen aan constante
const parName = document.getElementById("par-name");
// data toevoegen aan element
parName.innerHTML += "Koenraad ";
// alternatief
parName.textContent += "Pecceu";

// gebruik van prompt als input (invoer)
// let age = prompt("Hoe oud ben je?");
// alert("Ok, je leeft al ongeveer "
//     + (age * 365)
//     + " dagen"
// );

let nr1 = prompt("Cijfer 1");
let nr2 = prompt("Cijfer 2");
console.log(nr1 + nr2);

