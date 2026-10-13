"use strict";

// array met tekst in (namen)
let students = ["Kevin", "Kseniia", "Tessa"];

// array tonen in console
console.log(students);
// array tonen op pagina
document.body.innerHTML += students;

// eerste element uit array tonen in console
console.log(students[0]); // index cijfer 0

// laatste element uit array tonen in console
console.log(students[2]);
console.log(students[students.length - 1]);

// tonen in console hoe 'groot' de array is
// hoe veel elementen zitten er in de array
console.log(students.length);

// element toevoegen aan array
students.push("Gwen");
// of meerdere
students.push("Adam", "Mick");

console.log(students);

// array alfabetisch sorteren
students.sort();
console.log(students);

// nog naam toevoegen
students.push("heven"); // naam met kleine letter
students.sort(); // woorden hoofdletters worden eerst gesorteert
console.log(students);

// naam "heven" vervangen door "Heven"

// students.pop(); // laatste element verwijderen
// students.push("Heven");

students[students.length - 1] = "Heven";
console.log(students);

// waarde uit variabele in array 'pushen'
let nextName = "Mehdi";
students.push(nextName);
console.log(students);

// array met cijfers
let numbers = [4, 100, 30, 2];
// sorteren
numbers.sort();
console.log(numbers);
// correct cijfers sorteren
numbers.sort(function (a, b) { return a - b });
console.log(numbers);

// namen van studenten in één keer
// omgekeerd alfabetisch sorteren
students.sort().reverse();
console.log(students);

// tweede, derde en vierde naam tonen
console.log(students.slice(1, 4));
console.log(students); // array is nog intact

// kan ook bij tekst/string waarden gebruikt worden
let firstName = "Koenraad";
console.log(firstName.slice(0, 4));

// alle namen onder elkaar plaatsen op de pagina
// document.body.innerHTML += "<br>" + students[0] + "<br>";
// document.body.innerHTML +=  students[1] + "<br>";
// document.body.innerHTML +=  students[2] + "<br>";
// document.body.innerHTML +=  students[3] + "<br>";

students.push("Keegan");

for (let i = 0; i < students.length; i++) {
    document.body.innerHTML += students[i] + "<br>";
}

// oefening 4.15.1 pagina 72

// lege array aanmaken
let randomNumbers = [];

// tien keer een random cijfer maken
// en dat telkens toevoegen aan de array
for (let i = 0; i < 10; i++) {
    // cijfer vanaf 0 tot en met 100
    let number = Math.floor(Math.random() * 101);
    // cijfer toevoegen aan array
    randomNumbers.push(number);
}

// array van klein naar groot plaatsen (sorteren)
randomNumbers.sort(function (a, b) { return a - b });
console.log(randomNumbers);

// grootste cijfer tonen
// dit is het LAATSTE element uit de gesorteerde array
console.log(randomNumbers[randomNumbers.length-1]);