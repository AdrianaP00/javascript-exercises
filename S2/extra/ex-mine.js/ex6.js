function swap(array, i, j) {
let appoggio = array[j]

  array[j] = array[i];
  array[i] = appoggio;
  return array;
}
console.log(
  swap(
    ["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"],
    3,
    0
  )
);
