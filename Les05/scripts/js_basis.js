// dit lijntje altijd bovenaan plaatsen
"use strict";

// hoofdtitel plaatsen op pagina
document.body.innerHTML += "<h1>Les 5</h1>";

// variabelen maken
let width = 7;
let height = 5;

// variabele maken voor resultaat
// en ook berekening doen
let area = width * height;

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