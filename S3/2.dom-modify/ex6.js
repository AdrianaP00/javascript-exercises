
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul_ = document.create ('ul')
document.body.appendChild(ul_)

     for (let i = 0; i < apps.length; i++) {  
    const li_ = document.create ('li')
     ul_.appendChild(li_)
     li_.textContent = apps[i]
     }