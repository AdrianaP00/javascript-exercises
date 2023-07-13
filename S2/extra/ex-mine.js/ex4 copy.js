function findArrayIndex(array, 
    text) {
    for(let i = 0; i <= array.length; i++){
        if(text == array[i]){
          return i 
        }
    }

    return 'Text not present in array';
}

function removeItem(array, texto){
  let indexToDelete = findArrayIndex(array, texto);
  array.splice(indexToDelete,1);
  return array
}


let ret
ret = removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'],
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
