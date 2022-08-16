const fs = require('fs').promises;

async function readAllSimpsons() {
  const simpsonsJson = await fs.readFile('./simpsons.json', 'utf8');
  const simpsons = JSON.parse(simpsonsJson);
  const simpsonsByIdAndName = simpsons.map(({ id, name }) => `${id} - ${name}`);
  simpsonsByIdAndName.forEach((simpson) => console.log(simpson)); 
}

function main() {
  readAllSimpsons();
};

main();