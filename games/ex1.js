/*Memory game
Dado el html `exercise-1.html` y el css` exercise-1.css`, 
crea un archivo de javascript 
 para crear un juego de memoria con
los datos proporcionados por el siguiente array:*/

let cardArray = [
  {
    id: 1,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
];

let card1;
let card2;

let view = [];

compare(5, 11);
populate();

function populate() {
  const pippe = document.querySelector(".grid-container");

  cardArray.forEach((card) => {
    const div_ = document.createElement("div");
    const img_ = document.createElement("img");
    div_.className = "card";
    img_.src = card.img;
    div_.appendChild(img_);
    pippe.appendChild(div_);
  });
}

function compare(i, j) {
  if (cardArray[i].name === cardArray[j].name) {
    view.push(i, j);
    console.log(view);
  } else {
    console.log("Oh noooooo!");
  }
}

function restart() {
  alert("");
  view = [];
}
