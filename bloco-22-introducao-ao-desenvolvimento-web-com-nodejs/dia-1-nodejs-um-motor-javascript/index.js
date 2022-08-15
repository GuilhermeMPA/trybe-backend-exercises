const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', path: './imcCalculator'},
  { name: 'Jogo de adivinhação', path: './sorteio'},
  { name : 'Calcular velocidade média', path: './velocidade'},
];

function chooseScript() {
  const enunciado = 'Escolha um número para executar o script correspondente\n'; 
  const mensagem = scripts.reduce((message, script, index) => `${message}${index + 1} - ${script.name}\n`, enunciado);

  const numeroEscolhido = readline.questionInt(mensagem) - 1;

  const script = scripts[numeroEscolhido];
  // const choosedScript = readline.question('Escolha um script: ');
  // switch (choosedScript) {
  //   case 'imcCalculator'
  // }
  return script;
};

function main() {
  const script = chooseScript();

  if (!script) return console.log('Número inválido, tchau!');

  require(script.path);
};

main();