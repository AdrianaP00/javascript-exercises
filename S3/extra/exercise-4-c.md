# Español
Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.


function cancel(div_,butt_){
return butt_.remove(div_)
}
   

for (const country of countries) {
  const div_ = document.create("div");
   const h4_ = document.create("h4");
   const img_ = document.create("img");

   const butt_ = document.create("button")
   butt_.addEventListener("click", cancel(div_,butt_))
   butt_.textContent = "Delate";
  
  h4_.appendChild(div_);
   butt_.appendChild(div_);
  img_.appendChild(div_);
  
  h4_.textContent = country.title;
   img_.src = country.imgUrl;
  
   return  document.body.appendChild(div_)
}
