//Basandote en elsiguiente html, añade un evento 'focus' que ejecute un console.log 
//con el valor del input.

const input_ = document.querySelector("input")
console.log(input_)
function focus(event){
    console.log(event.target.value);
}

input_.addEventListener("input", focus)



