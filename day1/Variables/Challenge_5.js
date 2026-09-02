const prompt = require("prompt-sync")();

const time = +prompt("Durée : ").split(" ")[0];

if (time < 60)
{
  console.log("Catégorie : Court métrage");
}
else if (time >= 60 && time <= 120)
{
  console.log("Catégorie : Film standard");
}
else
{
  console.log("Catégorie : Film long");
}