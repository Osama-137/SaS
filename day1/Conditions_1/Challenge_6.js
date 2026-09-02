const prompt = require("prompt-sync")()

let num = +prompt("Choix: ")

switch (num)
{
  case 1:
    console.log("Afficher le profil")
    break;
  case 2:
    console.log("Afficher les paramètres")
    break;
  case 3:
    console.log("Afficher les notifications")
    break;
  case 4:
    console.log("Se déconnecter")
    break;
  default:
    console.log("Choix invalide!")
    break;
}