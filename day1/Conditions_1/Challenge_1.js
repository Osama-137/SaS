const prompt = require("prompt-sync")();
let age = +prompt("age: ");
if (age >= 18)
{
  console.log("\nAccès autorisé");
} else {
  console.log("\nAccès refusé");
}