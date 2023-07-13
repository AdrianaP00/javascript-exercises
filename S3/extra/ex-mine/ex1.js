const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul_ = document.create("ul");
document.body.appendChild(ul_);

for (const country of countries) {
  const li_ = document.create("li");
  ul_.appendChild(li_);
  li_.textContent = country;
}
