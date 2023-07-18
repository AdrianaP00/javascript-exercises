const baseUrl = 'https://api.nationalize.io?name=';

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const name = input.value;

  fetch(baseUrl + name)
    .then(response => response.json())
    .then(data => {
      const p = document.createElement('p');
      p.textContent = `El nombre ${name} tiene un ${data.percentage} porciento de ser de ${data.country}`;
      document.body.appendChild(p);
    });
  });
