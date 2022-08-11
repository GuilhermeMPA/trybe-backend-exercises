const { imcCalculator, calculaSituacao } = require('./imcCalculator');
const readline = require('readline-sync');

const weight = readline.questionFloat('Qual o seu peso em KG? ');
const height = readline.questionFloat('Qual a sua altura em CM? ');

const imc = imcCalculator(weight, height);
console.log(`Seu IMC é ${imc}`);
const situacao = calculaSituacao(imc);
console.log(`Você está ${situacao}`);
