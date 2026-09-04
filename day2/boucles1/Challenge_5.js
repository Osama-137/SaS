const prompt = require("prompt-sync")()

let N = +prompt("N = ")
let X = +prompt("X = ")
let sum = 0;
for (let i = X; i <= N; i+=X){
  console.log(i); sum += i;
}
console.log(`total :${sum}`)
