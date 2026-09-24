"use strict";

let weight = 100;
let length = 1.82;

let bmi = weight / (length * length);

console.log(bmi);

weight = prompt("Gewicht?");
length = prompt("Lengte?");
bmi = weight / (length * length);

console.log(bmi.toFixed(2));