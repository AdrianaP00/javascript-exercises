Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

````js
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
```` 

const evenAges = ages.filter(age => age !(age % 2));

console.log(evenAges);