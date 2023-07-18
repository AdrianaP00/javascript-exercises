let amiboArray;

async function getAmibo() {
  let myHeaders = new Headers();
  myHeaders.append("X-RapidAPI-Host", "n3evin-amiiboapi-v1.p.rapidapi.com");
  myHeaders.append(
    "X-RapidAPI-Key",
    "e56cb3d176mshd9b8080b057c0cbp10f7b7jsn04af09923bdd"
  );

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  fetch(
    "https://n3evin-amiiboapi-v1.p.rapidapi.com/amiibo/?gameseries=zelda",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {repeatAmiibo(result.amiibo)})
    .catch((error) => console.log("error", error));

}



function repeatAmiibo(result) {
  for (const amiibo of result) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = amiibo.image;
    card.appendChild(img);

    const h2 = document.createElement("h2");
    h2.textContent = amiibo.name;
    card.appendChild(h2);

    document.querySelector(".gallery").appendChild(card);
  }
}
getAmibo()
