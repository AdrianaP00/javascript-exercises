const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const country of countries) {
  const div_ = document.createElement("div");
  const h4_ = document.createElement("h4");
  const img_ = document.createElement("img");
  div_.appendChild(h4_);
  div_.appendChild(img_);
  h4_.textContent = country.title;
  img_.src = country.imgUrl;
  document.body.appendChild(div_);
}


function cancel() {
const div_= document.querySelectorAll("div")
div_[div_.length - 1].remove()

console.log(div_)
}

const butt_ = document.createElement("button");
butt_.textContent = "Delate";
butt_.addEventListener("click", cancel);
document.body.appendChild(butt_)