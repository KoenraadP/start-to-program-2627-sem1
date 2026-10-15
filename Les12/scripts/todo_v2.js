"use strict";

let todoList = [];
let listHTML = "<ul>";

// beginnen met eerste to do item
// let todoItem = prompt("Wat moet je nog doen deze week?");
// todoList.push(todoItem);

let todoItem = "";

// blijven vragen naar nieuwe items tot ik 'stop' intyp
while (todoItem !== "stop") {
    todoItem = prompt("Wat moet je nog doen deze week?");
    todoList.push(todoItem);
}

// laatste element (stop) verwijderen uit array
todoList.pop();

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