const prompt = require("prompt-sync")()

let x = +prompt("Base: ")
let y = +prompt("Exposant: ")
let result = 1;
for (; y > 0; y--)
  result *= x;
console.log("result: " + result);