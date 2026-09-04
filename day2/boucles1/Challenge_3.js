const prompt = require("prompt-sync")()

let num = +prompt("N = ")
let j = 0;
for (let i = 1; i <= num; i++)
  j += i;
console.log(j);
