const url = 'https://api.agify.io?name=michael';

fetch(url)
.then(response => response.json())
.then(data => console.log(data));


