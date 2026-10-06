"use strict";

const text1 = "Ik kan programmeren!";
const text2 = "Oefening gelukt"

for (let i = 1; i <= 6; i++) {
    document.body.innerHTML += "<p>" + text1 + "</p>";
}

// deze hieronder is fout want i is niet gekend buiten de for loop
// console.log(i);

let j = 1;
while (j <= 6) {
    document.body.innerHTML += "<p>" + text1 + "</p>";
    j++;
}

console.log(j); // 7

for (let i = 1; i <= 3; i++) {
    console.log(text2);
}

j = 1;
while (j <= 3) {
    console.log(text2);
    j++;
}

