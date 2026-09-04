const prompt = require("prompt-sync")()

let num = +prompt("Nomber : ")

for (let i = 1; i <= 10; i++)
  console.log(`${num} * ${i} = ${num*i}`)