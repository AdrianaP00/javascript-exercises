fetch('http://localhost:3000/movies').then(results => results.json()).then(result => {
    movieRep(result)
})
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));

function movieRep(result) {
        for (const movie of result) {
          const div_ = document.createElement("div");
          const img = document.createElement("img");
          img.src = `http://localhost:3000/${movie.img}`;
          div_.appendChild(img);
          document.body.appendChild(div_);
        }}
    

