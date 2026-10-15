"use strict";

// eerste voorbeeld: p. 72 eerste oefening

// lege array starten
let numbers = [];

// 10 keer random cijfer maken en in array steken
for (let i = 0; i < 10; i++) {
    // random vanaf 0 tot en met 100
    // let randomNumber = Math.floor(Math.random() * 101);
    // random vanaf 10 tot en met 90
    let randomNumber = Math.floor(Math.random() * 81 + 10);
    // random cijfer toevoegen aan array
    numbers.push(randomNumber);
}

// array sorteren van klein naar groot
numbers.sort(function (a, b) { return a - b });

// alle cijfers tonen
console.log(numbers);

// grootste getal tonen
// console.log(numbers[9]);
console.log(numbers[numbers.length-1]);

// makkelijker alternatief
console.log(Math.max(...numbers));

// tweede voorbeeld: to do list maken en opbouwen

const howMany = prompt("Hoe veel?");
let todoList = [];
let listHTML = "<ul>";

for (let i = 0; i < howMany; i++) {
    // item opvragen om toe te voegen aan array
    let todoItem = prompt("Wat moet je nog doen?");
    // todoItem toevoegen aan array
    todoList.push(todoItem);
}

// sorteren van a naar z
todoList.sort();

// tweede loop om elementen toe te voegen aan de
// HTML list
for (let i = 0; i < todoList.length; i++) {
    // alle items uit array toevoegen aan HTML code
    listHTML += "<li>" + todoList[i] +"</li>"; // vb: <li>groceries</li>
}

listHTML += "</ul>";
document.body.innerHTML += listHTML;