const fs = require('fs');
const readline = require('readline');
const util = require('util');
const readfile = util.promisify(fs.readFile);

console.time('#startScript');

const readName = (msg) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(msg, answer => {
      rl.close();
      resolve(answer);
    });
  });
};

const runApp = async () => {
  const name1 = await readName('Nome do arquivo1: ');

  try {
    console.time('#readFile1');
    const file1 = await readfile(name1);
    console.log(file1.byteLength);
    console.log(`Tamanho do arquivo: ${file1.byteLength}`);
  } catch (err) {
    console.log(`Tipo do erro: ${err.code}`);
  }

  const name2 = await readName('Nome do arquivo2: ');

  try {
    console.time('#readFile2');
    const file2 = await readfile(name2);
    console.log(`Tamanho do arquivo: ${file2.byteLength}`);
    console.timeEnd('#readFile2');
  } catch (err) {
    console.log(`Tipo do erro: ${err.code}`);
  }

  console.timeEnd('#startScript');

};

runApp();


