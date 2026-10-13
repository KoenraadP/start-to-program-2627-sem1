"use strict";

/* Ik kan programmeren! 

let text1 = "Ik kan programmeren!";
let text2 = "Oefening gelukt!";

for (let i = 0; i < 6; i++) {
    document.body.innerHTML += text1 + "<br>";
}

//het zou kunnen dat je in de console slechts één keer de tekst ziet maar dat er wel een drie naast staat
for (let i = 0; i < 3; i++) {
    console.log(text2);
}

*/

/* while 

let text1 = "Ik kan programmeren!";
let text2 = "Oefening gelukt!";

let i = 0;

while (i < 6) {
    document.body.innerHTML += text1 + "<br>";
    i++;
}

i = 0;

while (i < 3) {
    console.log(text2);
    i++;
}*/

/* tafels van vermenigvuldiging tot 5 

let number = prompt("Geef een getal in van 1 tot 10");
let result = 0;

if (number <= 0 || number > 10) { //controle of de gebruiker wel een correct cijfer ingeeft
    document.body.innerHTML += "Geef een getal in van 1 tot 10!";
} else {
    
    for (let i = 1; i < 6; i++) {
        result = number * i; //je zou ook hier kunnen beginnen met 'let', dan moet je het in principe niet bovenaan al declareren
        document.body.innerHTML += i + " x " + number + " = " + result + "<br>";             
    }
}

*/

/* Tafels van vermenigvuldiging 2 

let number = prompt("Geef een getal in");
let result = 0;

for (let i = 10; i > 0 ; i--) { //teller starten op 10 en telkens eentje aftrekken via i--
    result = i * number;
    document.body.innerHTML += i + " x " + number + " = " + result + "<br>";
}

*/

/* even/oneven 

for (let i = 0 ; i < 16 ; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even.");
    } else {
        console.log(i + " is oneven.");
    }
}

*/

/* deelbaar door 4 

let number = prompt("Tot welk cijfer wil je gaan?");

for(let i = 0; i <= number; i++){
    if( i % 4 === 0){
        console.log(i);
    }
}

*/

/* FizzBuzz 


for (let i = 1 ; i < 101 ; i++) {
    //je kunt hieronder ook plaatsen i%15 === 0 in plaats van de dubbele check op 3 en 5
    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    } else if (i%3 === 0) {
        console.log("Fizz");
    } else if (i%5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

*/

/* ratten in New York 

let rats = 2000000;
const increaseRate = 1.15;
let years = 0;

while (rats < 10000000) { //code uitvoeren zolang er nog geen 10000000 ratten zijn
    rats = rats * increaseRate;
    years++; //aantal jaar met 1 verhogen
}

console.log("Na " + years + " jaar zullen er " + Math.round(rats) + " ratten zijn in New York.");

*/

/* hoger lager versie 2 

let chosenNumber = 0;
let randomNumber = Math.floor(Math.random()*10)+1;

//ik heb gekozen om af te tellen vanaf 3 voor deze loop maar uiteraard kun je ook optellen en starten vanaf 0
for (let i = 3 ; i > 0 ; i--) {
    chosenNumber = prompt("Kies een getal van 1 tot 10");
    if (chosenNumber == randomNumber) {
        console.log("Correct, het cijfer was inderdaad " + randomNumber + "!");
        break; //for-loop stoppen als het cijfer correct geraden is
    } else if (i != 1) { //deze check zit er in zodat je niet nog eens lager/hoger ziet staan bij de derde keer raden
        if (chosenNumber > randomNumber) {
            console.log("Lager!");            
        } else {
            console.log("Hoger!");            
        }        
    }
}

if (randomNumber != chosenNumber) { //zorgen dat er nog output is als het cijfer uiteindelijk niet correct geraden was
    console.log("Helaas, het cijfer was " + randomNumber + ".");
} 
*/

/* fibonacci versie 1

let number1 = 0;
let number2 = 1;
let number3 = 0;

//de eerste twee cijfers plaats ik gewoon zo, buiten de loop
console.log(number1);
console.log(number2);

for (let i = 0 ; i < 8 ; i++) {
    number3 = number2 + number1;
    console.log(number3);
    number1 = number2;
    number2 = number3;
}

*/

/* fibonacci versie 2

let number1 = 0;
let number2 = 1;
let number3;

for (let i = 0 ; i < 10 ; i++) {
    console.log(number1);
    number3 = number2 + number1;
    number1 = number2;
    number2 = number3;
}

*/

/* priemgetallen 

let number = prompt("Tot aan welk getal wil je alle priemgetallen?");

// ik stel een variabele prime (priemgetal) standaard in op 'waar' (true)
// als het cijfer binnen het script geen enkele keer perfect deelbaar blijkt, blijft deze waarde op true staan
// als blijkt dat het cijfer wel kan gedeeld worden door één van de getallen binnen de loop, wordt de waarde op false gezet

let prime = true;

// starten bij 2 omdat 0 en 1 geen priemgetallen zijn
// dubbele loop: eerste for om alle getallen af te lopen
// tweede om per getal 'i' te checken of het een priemgetal is door te delen door getallen 'x'

for (let i = 2; i<=number; i++) {
    // je moet niet door ALLE getallen delen, tot aan de vierkantswortel van het huidige getal is voldoende
    for(let x = 2; x<=Math.sqrt(i); x++){
        if(i%x===0){
            prime = false;
        }
    }
    //een boolean (true/false) moet je niet 'vergelijken', onderstaande wordt enkel uitgevoerd als prime gelijk is aan true
    if (prime) {
        console.log(i);
    }else{
        //de waarde van 'prime' moet telkens terug op true gezet worden voordat de loop herbegint
        prime = true;
    }
}

*/