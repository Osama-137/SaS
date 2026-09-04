const prompt = require("prompt-sync")()

let num = +prompt("N = ")

for (let i = 2; i <= num; i += 2)
  console.log(i);