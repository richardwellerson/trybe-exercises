const readline = require('readline-sync');

const weight = readline.questionFloat('Digite seu peso: ');
const height = readline.questionFloat('Digite sua altura: ');

const IMC = weight / Math.pow(height, 2);

const thin = IMC < 18.5;
const normal = IMC >= 18.5 && IMC <= 24.9;
const overweight = IMC >= 25 && IMC <= 29.9;
const obesityI = IMC >= 30 && IMC <= 34.9;
const obesityII = IMC >= 35 && IMC <= 39.9;

if (thin) {
  console.log(`Seu IMC é ${IMC} e você está magro demais.`);
  return;
} else if (normal) {
  console.log(`Seu IMC é ${IMC} e você está no seu peso normal.`);
  return;
} else if (overweight) {
  console.log(`Seu IMC é ${IMC} e você está no acima do peso.`);
  return;
} else if (obesityI) {
  console.log(`Seu IMC é ${IMC} e você está com Obesidade Grau I.`);
  return;
} else if (obesityII) {
  console.log(`Seu IMC é ${IMC} e você está com Obesidade Grau II.`);
  return;
}

console.log(`Seu IMC é ${IMC} e você está com Obesidade Grau III ou IV.`);
