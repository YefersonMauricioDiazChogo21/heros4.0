import {heroes} from './data/hero.js'

const id1="5d86371fd55e2e2a30fe1cc4"
console.log('Inicio')

console.log(heroes)

const findHero=async(id)=>{
    const hero=heroes.find(hero=>hero.id===id);
    if (hero){
        throw `Hero with id ${id} not found`;
    
    }
    return hero.name;
}
findHero(id1)
    .then(name=>console.log(name))
    .catch(error=> console.log(error))

console.log('fin')
