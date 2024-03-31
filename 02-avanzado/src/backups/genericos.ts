import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics'
import { Hero, Villain} from '../interfaces'
// import { Hero } from './interfaces/hero'
// import { Villain } from './interfaces/villain'

// printObject(123)
// printObject(new Date)
// printObject({a: 1, b: 2})
// printObject(false)

// console.log(genericFunctionArrow(123.321213).toFixed(2))
// console.log(genericFunctionArrow('hola mundo').toUpperCase())


const deadpoll = {
  name: 'Juan',
  realName: 'Juancito Villanueva',
  dangerLevel: 130
}

console.log(genericFunctionArrow<Villain>(deadpoll))