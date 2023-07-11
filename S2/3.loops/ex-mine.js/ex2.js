const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (const prop in alien) {
  console.log(`alien ${prop} = ${alien[prop]}`)
}
