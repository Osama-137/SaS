const prompt = require("prompt-sync")();

let note = +prompt("Note: ");

if (note <= 20 && note >= 0)
{
  if (note >= 18)
    console.log("Excellent")
  else if (note >= 16)
    console.log("Très bien")
  else if (note >= 14)
    console.log("Bien")
  else if (note >= 12)
    console.log("Assez bien")
  else if (note >= 10)
    console.log("Passable")
  else
    console.log("Failure")
}
else
  console.log("invalid note!")