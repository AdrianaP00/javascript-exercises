Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.


```js
const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
``` 

for (const country of countries) {
  const div_ = document.create("div");
   const h4_ = document.create("h4");
   const img_ = document.create("img");
  h4_.appendChild(div_);
  img_.appendChild(div_);
  h4_.textContent = country.title;
   img_.src = country.imgUrl;
   return  document.body.appendChild(div_)
}

function cancel(countries){
   return countries.pop
}

const butt_ = document.create("button")
butt_.textContent = "Delate";
butt_.addEventListener("click",cancel(countries))
