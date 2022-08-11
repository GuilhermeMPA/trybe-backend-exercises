const imcCalculator = (weight, height) => {
  const heightInMeters = height / 100;
  const heightSquare = heightInMeters * heightInMeters;
  const imc = weight / heightSquare;
  return imc.toFixed(2); 
};

module.exports = imcCalculator;