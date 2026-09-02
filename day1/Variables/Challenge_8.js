const prompt = require("prompt-sync")();
let volte = +prompt("Tension: ").split(" ")[0];
let amp = +prompt("Intensity: ").split(" ")[0];
let t = +prompt("Time: ").split(" ")[0];

let result = volte * amp * t;

console.log(`\nEnergy: ${result} Wh`);