const fs = require('fs').promises;

async function readAllSimpsons() {
  const simpsonsJson = await fs.readFile('./simpsons.json', 'utf8');
  const simpsons = JSON.parse(simpsonsJson);
  const simpsonsByIdAndName = simpsons.map(({ id, name }) => `${id} - ${name}`);
  simpsonsByIdAndName.forEach((simpson) => console.log(simpson)); 
}

async function simpsonsById(id) {
  const simpsonsJson = await fs.readFile('./simpsons.json', 'utf8');
  const simpsons = JSON.parse(simpsonsJson);
  const choosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
  if (!choosenSimpson) {
    throw new Error('Id não encontrado');
  }
  return choosenSimpson;
};

async function main() {
  readAllSimpsons();
  const simpson = await simpsonsById(9);
  console.log(simpson);
};

main();