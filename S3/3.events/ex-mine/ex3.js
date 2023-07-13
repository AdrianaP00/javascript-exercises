const input_ = document.querySelector('input');

function cambio(event){
    console.log(event.target.value);
}

input_.addEventListener('input', cambio);