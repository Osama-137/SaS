const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Budget en MAD : ", (answer) => {
  console.log(`Budget en EUR : ${answer/11}`);
  rl.close();
});