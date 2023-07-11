const peliculaPequeña = []
const peliculaMediana = []
const peliculaGrande = []
const movies = [{ name: "Your Name", durationInMinutes: 130 }, 
{ name: "Pesadilla antes de navidad", durationInMinutes: 225 }, 
{ name: "Origen", durationInMinutes: 165 }, 
{ name: "El señor de los anillos", durationInMinutes: 967 }, { name: "Solo en casa", durationInMinutes: 214 }, { name: "El jardin de las palabras", durationInMinutes: 40 }];

for (let i = 0; i < movies.length; i++) {

const film = movies[i];

    if (film.durationInMinutes <= 100){

          peliculaPequeña.push(film)

    } else if (film.durationInMinutes >= 100 && movies.durationInMinutes < 200) {

          peliculaMediana.push(film);
        
    } else {
          peliculaGrande.push(film);
    }
}    console.log(peliculaGrande)