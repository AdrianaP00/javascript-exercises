const secondDiv_ = document.querySelectorAll('div')[1];

const p_ = document.createElement('p');
p_.textContent = 'Voy en medio!'

document.body.insertBefore(p_, secondDiv_);