const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o arquivo que deseja ler? ', (answer) => {
  const returnFile = (answer) => {
    return new Promise((resolve, reject) => {
      fs.readFile(answer, 'utf-8', (err, data) => {
        if (err) return reject(err.code);
        resolve(data);
      });
    });
  };
  returnFile(answer)
    .then((response) => {
      console.log(`Dados: \n\n${response}`);
      console.log(`Tamanho do arquivo: ${Buffer.byteLength(response)} Bytes`);
    })
    .catch((error) => { console.error(error) });
  rl.close();
});
