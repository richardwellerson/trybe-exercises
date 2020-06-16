const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o arquivo que deseja ler? ', (answer) => {
  fs.readFile(answer, 'utf-8', (err, data) => {
    if (err) {
      console.error(`Deu ruim. Erro: ${err.code}`);
      return;
    }
    console.log(`Dados: ${data}`);
    console.log(`Bytes: ${Buffer.byteLength(data)}`);
  });
  rl.close();
});

