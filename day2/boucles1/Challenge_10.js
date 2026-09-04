const prompt = require("prompt-sync")()
let i = -1;
let num;
let result = 0;
do {
  num = +prompt("Saisie: ")
  result += num;
  i++;
}
while(num !== 0)
console.log(`Nombre de valeurs : ${i}\nSomme : ${result}`)