const prompt = require('prompt-sync')();
let n = prompt("Stockage : ");
console.log(`Résultat : ${+n.split(" ")[0] * 1024} MB`);