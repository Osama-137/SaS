const prompt = require("prompt-sync")()

let num = +prompt("Nomber de participants: ")

for (let i = 1; i <= num; i++)
  console.log(`Participant ${i}`)
