const prompt = require("prompt-sync")();
let choice = inputMe();
do {
 
  if (choice == 1) {
    rollDice();
  }
} while (choice != 2);

function rollDice() {
  let cpu = Math.floor(Math.random() * 6);
  let me = Math.floor(Math.random() * 6);

  let ret = compare(cpu, me);
  console.log(ret);
}

function compare(cpu, me) {
    choice = 2;
  if (cpu == me) {
    return "Tie";
  } else if (cpu < me) {
    return "You wins";
  } else {
    return "You lose";
  }
 
}

function inputMe() {
  console.log(`1 - start`);
  console.log(`2 - exit`);
  let menuChoice = prompt(``).toLowerCase();
  return menuChoice;
}
