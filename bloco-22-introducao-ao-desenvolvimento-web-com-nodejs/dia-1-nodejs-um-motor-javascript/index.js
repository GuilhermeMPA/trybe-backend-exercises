const imcCalculator = require('./imcCalculator');
const readline = require('readline-sync');

const weight = readline.questionFloat('Qual o seu peso em KG? ');
const height = readline.questionFloat('Qual a sua altura em CM? ');

console.log(`Seu IMC é ${imcCalculator(weight, height)}`);