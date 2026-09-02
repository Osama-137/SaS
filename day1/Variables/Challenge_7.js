const prompt = require("prompt-sync")();
let notes = +prompt("Continuous control: ");
let pro = +prompt("Project: ");
let exam = +prompt("Exam: ");
let total = (notes * 2 + pro * 3 + exam * 5) / 10;
console.log(`\nFinal Note: ${total}`);


