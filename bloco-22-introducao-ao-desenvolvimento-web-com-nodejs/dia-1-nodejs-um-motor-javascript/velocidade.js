const readline = require('readline-sync');

const speedCalculator = (range, time) => {
  const speed = range / time;
  return speed;
};

const main = () => {
  const range = readline.questionInt('Qual a distância em metros? ');
  const time = readline.questionInt('Qual o tempo em segundos? ');
  
  const speed = speedCalculator(range, time);
  console.log(`A velocidade é ${speed} m/s`);
}

main();