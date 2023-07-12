Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado 
que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular 
una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca 
información sobre la función de javascript ``Math.random()``

const prompt = require('prompt-sync')();

do{
let choice = inputMe()   
if(choice == 1){
    rollDice()
}
} while (choice != 2);

function rolldice(){
    let cpu = Math.floor(Math.random() * 6);
let me = Math.floor(Math.random() * 6);

let ret = compare(cpu, me);
console.log(ret);
}

function compare(cpu, me) {
    if (cpu == me) {
        return "Tie";
    } else if (cpu < me) {
        return "You wins";
    } else {
        return "You lose";
    }
}

function inputMe() {
                console.log(`1 - start`)
                    console.log(`2 - exit`)
                    let menuChoice = prompt(``).toLowerCase();
                    return menuChoice;

}