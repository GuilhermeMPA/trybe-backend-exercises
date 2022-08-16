const fs = require('fs').promises;

async function readAllSimpsons() {
  const simpsonsJson = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsJson);
  const simpsonsByIdAndName = simpsons.map(({ id, name }) => `${id} - ${name}`);
  simpsonsByIdAndName.forEach((simpson) => console.log(simpson)); 
}

async function simpsonsById(id) {
  const simpsonsJson = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsJson);
  const choosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
  if (!choosenSimpson) {
    throw new Error('Id não encontrado');
  }
  return choosenSimpson;
};

async function removeSimpson() {
  const simpsonsJson = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsJson);
  const newSimpsons = simpsons.filter((simpson) => Number(simpson.id) !== 10 && Number(simpson.id) !== 6);
  console.log(newSimpsons);
  await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
};

async function simpsonsFamily() {
  const simpsonsJson = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(simpsonsJson);
  const simpsonsFamily = simpsons.filter((simpson) => simpson.id >= 1 && simpson.id <= 5);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily), { flag: 'wx' });
};

async function main() {
  readAllSimpsons();
  const simpson = await simpsonsById(9);
  console.log(simpson);
  await removeSimpson();
  await simpsonsFamily();
};

main();