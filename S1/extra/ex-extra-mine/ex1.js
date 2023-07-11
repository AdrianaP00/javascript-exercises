const users = [{name: "Abel", years: 43}, 
{name: "Maria", years: 18}, 
{name: "Pedro", years: 14}, 
{name: "Samantha", years: 32}, 
{name: "Raquel", years: 16}];

for (let i = 0; i < users.length; i++) {
    
    const person = users[i];
    
    console.log(person.years <= 18 ? 'Usuarios menores de edad:' :'Usuarios mayores de edad:', person.name) 
}
