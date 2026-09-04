const prompt = require("prompt-sync")()

let num = +prompt("Montant commande: ").split(" ")[0]

if (num >= 500)
  console.log(`Frais livraison : gratuie livraison\nTotal à payer : ${num} DH`)
else if (num >= 300)
  console.log(`Frais livraison : 10 DH\nTotal à payer : ${num+10} DH`)
else if (num >= 100)
  console.log(`Frais livraison : 20 DH\nTotal à payer : ${num+20} DH`)
else if (num < 100 && num > 0)
  console.log(`Frais livraison : 30 DH\nTotal à payer : ${num+30} DH`)