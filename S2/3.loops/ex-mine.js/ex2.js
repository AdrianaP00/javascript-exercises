const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg',
}

for (const prop in alien) {
    if (Object.hasOwnProperty.call(alien, prop)) {
        console.log()
    }
}