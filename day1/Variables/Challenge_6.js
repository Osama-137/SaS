const prompt = require("prompt-sync")();
const s1 = +prompt("Score 1: ");
const s2 = +prompt("Score 2: ");
const s3 = +prompt("Score 3: ");
const s4 = +prompt("Score 4: ");
const total = s1 + s2 + s3 + s4;
console.log(`Total Score: ${total}`);
console.log(`Avrage: ${total / 4}`);