fetch('http://localhost:4000/diary').then(results => results.json()).then(result => {
    diaryRep(result)
})
    .then((response) => response.json())
    .then((result) => (result))
    .catch((error) => console.log("error", error));

    function cancel(div_) {
      return div_.remove()
    }

    function diaryRep(result) {
        for (const note of result) {
          const div_ = document.createElement("div");
    
          const h3 = document.createElement("h3");
          h3.textContent = note.title;
          div_.appendChild(h3);

          const h5 = document.createElement("h5");
          h5.textContent = note.date;
          div_.appendChild(h5);

          const p = document.createElement("p");
          p.textContent = note.description;
          div_.appendChild(p);

          const butt_ = document.createElement("button");
          butt_.addEventListener("click", function () {
            cancel(div_)
          });
          butt_.textContent = "Delete";
          div_.appendChild(butt_);
      
      
          document.body.appendChild(div_);
        }
      }