const prompt = require("prompt-sync")();

let note = +prompt("Note: ");

if (note <= 20 && note >= 0)
{
  if (note >= 10)
    console.log("Admis")
  else
    console.log("Non Admis")
}
else
  console.log("invalid note!")