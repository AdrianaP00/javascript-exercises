let pokeArray = [];

async function getAllPokemons() {
    let pokeObj = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=898")
      .then((response) => response.json())
      .then((result) => result.results)
      .catch((error) => console.log("error", error));

    pokeObj.map((poke) => {
      fetch(poke.url)
        .then((response) => response.json())
        .then((result) => pokeArray.push(result))
        .catch((error) => console.log("error", error));

        console.log(pokeArray);
    });


    setTimeout(() => {
        repeatpoke();
    }, 1000);
}

function repeatpoke() {
    for (const poke of pokeArray) {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = poke.sprites.front_default;
      card.appendChild(img);

      const h2 = document.createElement("h2");
      h2.textContent = poke.name;
      card.appendChild(h2);

      document.body.appendChild(card);
    }
}


getAllPokemons();

// async function getPokemons(){
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon")
//   const resPokemons = await res.json();
//   getDetailPokemons(resPokemons.results);
// }

// async function getDetailPokemons(pokemons){
//   const pokemonsPromises = []
//   for (const pokemon of pokemons) {
//     pokemonsPromises.push(fetch(pokemon.url))
//   }

//   const resDetailPokemons = await Promise.all(pokemonsPromises);
//   const detailPokemons = [];

//   for (const resDetailPokemon of resDetailPokemons) {
//     detailPokemons.push(await resDetailPokemon.json())
//   }
  
//   console.log(detailPokemons)

// }

// getPokemons()