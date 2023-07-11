const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];


let food = 0;

for (let i = 0; i < products.length; i++) {

    const food = products[i];

    if(sellCount > 20){

          goodProducts.push(food)

    } else {
          badProducts.push(food);
    }
}