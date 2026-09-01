const prompt = require('prompt-sync')();
let n = prompt("Budget en MAD : ")
console.log(`Budget en EUR : ${+n / 11}`);