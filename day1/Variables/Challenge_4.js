const prompt = require('prompt-sync')();
let x = prompt("Distance : ").split(" ")[0];
let y = prompt("Carburant : ").split(" ")[0];
console.log(`Consommation : ${Math.round((+y / +x)*100)} L/100 km`);