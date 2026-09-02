const prompt = require("prompt-sync")()

let price = +prompt("prix de la commande: ")

if (price > 0) {
  if (price >= 500)
    console.log(`Livraison: Gratuite\nTotal à payer: ${price} DH`)
  else
  console.log(`Livraison: 40 DH\nTotal à payer: ${price + 40} DH`)
} else
  console.log("Invalid prix!")