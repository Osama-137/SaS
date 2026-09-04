const prompt = require("prompt-sync")()

let num = +prompt("nomber de missions: ")

for (let i = 1; i <= num; i++)
  console.log(`Mission ${i} -> Score: ${100*i}`)