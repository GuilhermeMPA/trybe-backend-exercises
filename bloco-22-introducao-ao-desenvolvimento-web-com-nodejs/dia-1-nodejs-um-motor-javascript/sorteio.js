const readline = require('readline-sync');

const logResultado = (number, randomNumber) => {
  if (number !== randomNumber) {
    return console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  }
  return console.log('Parabéns, número correto!');
};

const main = () => {
  const randomNumber = parseInt(Math.random() * 10, 10);
  const number = readline.questionInt('Qual o número? ');

  logResultado(number, randomNumber);

  const playAgain = readline.question('Jogar novamente? (Digite s para sim ou qualquer coisa para não) ');
  if (playAgain !== 's') return console.log('Até a próxima!');

  main();
};

main();