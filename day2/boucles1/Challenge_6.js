
const prompt = require("prompt-sync")()

let num = +prompt("Départ: ");

while (num >= 0)
  console.log(num--)