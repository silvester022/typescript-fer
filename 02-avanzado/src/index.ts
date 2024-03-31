// import { getPokemon } from './generics/get-pokemon'

// getPokemon(5)
//   .then(pokemon => console.log(pokemon.sprites.front_default))
//   .catch(error => console.log(error))
//   .finally(() => console.log('se ejecuto el finally'))

// decoradores 
import { Pokemon } from './decorators/pokemon-class'

const charmander = new Pokemon('Charmander')
// (Pokemon.prototype as any).customName = 'pikachu'
// console.log(charmander.savePokemonToDb(2))

// decoradores de metodos
// charmander.savePokemonToDb(-1)

// decoradores de propiedades

charmander.publicApi = 'http://que tal eh'
console.log( charmander )