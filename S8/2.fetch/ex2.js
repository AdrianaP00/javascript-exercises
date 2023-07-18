const baseUrl = 'https://api.nationalize.io?name=';

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const name = input.value;

  fetch(baseUrl + name)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
});