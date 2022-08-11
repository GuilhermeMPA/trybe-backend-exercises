const imcCalculator = (weight, height) => {
  const heightInMeters = height / 100;
  const heightSquare = heightInMeters * heightInMeters;
  const imc = weight / heightSquare;
  return imc.toFixed(1); 
};

const IMC_MAXIMO_E_MINIMO_POR_SITUACAO = {
  'Abaixo do peso (magreza)': {
    imcMinimo: 0, // Um valor default mínimo qualquer, impossível de alcançar no imc.
    imcMaximo: 18.4,
  },
  'Peso normal': {
    imcMinimo: 18.5,
    imcMaximo: 24.9,
  },
  'Acima do peso (sobrepeso)': {
    imcMinimo: 25,
    imcMaximo: 29.9,
  },
  'Obesidade grau I': {
    imcMinimo: 30.0,
    imcMaximo: 34.9,
  },
  'Obesidade grau II': {
    imcMinimo: 35,
    imcMaximo: 39.9,
  },
  'Obesidade graus III e IV': {
    imcMinimo: 40,
    imcMaximo: 100 // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

const calculaSituacao = (imc) => {
  const situacoes = Object.keys(IMC_MAXIMO_E_MINIMO_POR_SITUACAO);
  const situacaoEncontrada = situacoes.find((situacao) => {
    const { imcMinimo, imcMaximo } = IMC_MAXIMO_E_MINIMO_POR_SITUACAO[situacao];
    return imc >= imcMinimo && imc <= imcMaximo;
  })
  return situacaoEncontrada;
};

module.exports = {
  imcCalculator,
  calculaSituacao
};