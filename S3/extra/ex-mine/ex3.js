const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div_= document.querySelector('[data-function="printHere"]')
const ul_ = document.create("ul");
div_.appendChild(ul_);

for (const car of cars) {
  const li_ = document.create("li");
  ul_.appendChild(li_);
  li_.textContent = car;
}
