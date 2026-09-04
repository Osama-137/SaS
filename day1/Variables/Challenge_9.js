const prompt = require("prompt-sync")();

const a = prompt("Position A: ").match(/-?\d+(\.\d+)?/g).map(Number);
const b = prompt("Position B: ").match(/-?\d+(\.\d+)?/g).map(Number);

const distance = (
    (b[0] - a[0]) ** 2 +
    (b[1] - a[1]) ** 2 +
    (b[2] - a[2]) ** 2
) ** 0.5;

console.log("Distance: " + distance);