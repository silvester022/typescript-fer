
function printToConsole(constructor: Function) {
  // console.log(constructor)
}

const bloquearPrototipo = function (constructor: Function) {
  // Object.seal(constructor)
  // Object.seal(constructor.prototype)
}

const printToConsoleConditional = (print: boolean = false): Function => {

  if (print) {
    return printToConsole
  } else {
    return () => { }
  }

}

// decorador de metodos 

function CheckValidPokemonId() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log({target, propertyKey, descriptor})
    // descriptor.value = () => console.log('hola mundo')

    const originalMethod = descriptor.value


    // la funcion de abajo se va a ejecutar con los argumentos de la funcion en la que se coloco el @
    // en este caso, se recibe el id
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) return console.error('El id del pokemon debe estar entre 1 y 800')

      return originalMethod(id)
    }
  }
}

// decorador de propiedades. el objetivo es hacer que aunque la propiedad publicApi sea publica, esta no pueda ser cambiada

function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) { // <- no se recibe el: "descriptor: PropertyDescriptor " porque es una propiedad
    // console.log({target, propertyKey})

    const descriptor: PropertyDescriptor = {
      get() {
        // console.log(this, 'getter')
        // return 'algo'
      },
      set(this, val) {
        // console.log(this, val)

        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        })
      }
    }

    return descriptor
  }
}

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {

  @readonly()
  public publicApi: string = 'https://pokeapi.co'

  constructor(
    public name: string
  ) { }

  @CheckValidPokemonId()
  savePokemonToDb(id: number) {
    console.log(`pokemon saved correctly! id: ${id}`)
  }

}