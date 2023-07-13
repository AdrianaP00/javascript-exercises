const divs_= document.querySelectorAll('fn-remove-me')

for (const div_ of divs_) {
    const p_ = document.createElement('p');
    p_.textContent = 'Voy dentro!';
    div_.appendChild(p_);
}