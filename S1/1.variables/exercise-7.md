Dado el siguiente javascript, actualiza el valor de la variable ``globalBasePrice`` a 25000 y actualiza la propiedad ``finalPrice`` de todos los coches con el valor de su propiedad ``basePrice`` más el valor de la variable ``globalBasePrice``.

```js
let globalBasePrice = 10000;
globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
car1.finalprice = car1.basePrice + globalBasePrice;
car2.finalprice = car2.basePrice + globalBasePrice;

console.log(car1.finalprice);
console.log(car2.finalprice);


```