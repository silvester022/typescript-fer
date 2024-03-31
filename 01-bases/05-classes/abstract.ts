(() => {

  // una clase abstracta no sirve para crear instancias, sino para ser de cascaron
  // hace que otras clases sean extendidas de ellas
  // o para tener un argumento como en la linea 33
  abstract class Mutante {

    constructor(
      public name: string,
      public realName: string,
    ) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return 'se salvo el mundo!!!!!'
    }
  }

  class Villians extends Mutante {

    conquistarMundo() {
      return 'el mundo se perdio!!'
    }
  }

  // const wolverine = new Xmen('wolve', 'Juan')
  // const magneto = new Villians('magne', 'Juan 2')
  
  // console.log(wolverine.salvarMundo())
  // console.log(magneto.conquistarMundo())

  // const printName = ( character: Mutante ) => {
  //   console.log(character.realName)
  // }

  // printName( magneto )

})()