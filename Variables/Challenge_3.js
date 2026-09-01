const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Stockage : ", (value) => {
  value = value.split(" ")[0];
  console.log(`Résultat : ${value * 1024} MB`);
  rl.close();
})