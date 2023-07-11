Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:

```js
function findArrayIndex(array, 
                        text) {
    for(let = 0; i <= array.length; i++){
        if(text == array[i]){
            return i
        }
    }
    return 'Text not present in array';
}
```

Ej array:
````js
['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
````

Ej pruebas:
````js
let ret
ret = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'],
                'Salamandra');

console.log(ret);
// 2

ret = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'],
                'Mosquito');
                
console.log(ret);
// 1

ret = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'],
                '123');

console.log(ret);
//Text not present in array
````

