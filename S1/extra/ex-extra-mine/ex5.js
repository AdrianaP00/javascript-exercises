let sum = 0; 
sum = sum + media.sellCount;

for(let i = 0; i < products.length; i++){
const media = products[i];

 sum += media.sellCount;

console.log (sum / products.length)
}