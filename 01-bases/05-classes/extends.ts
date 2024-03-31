(() => {

  class Avenger {

    constructor( 
      public name: string,
      public realName: string,
    ) {
      // console.log('constructor Avenger llamado')
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`
    }
  }

  class Xmen extends Avenger {
    
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean

    ) {
      super(name, realName)
      // console.log('constructor Xmen llamado')
    }

    // por defecto, los getters tienen que regresar algo. no reciben nada
    // la respuesta tiene que ser sincrona
    get fullName() {
      return `${this.name} - ${this.realName}`
    }

    // por defecto, los setters no tienen que regresar nada. reciben solo 1 cosa
    set fullName(name: string) {
      if(name.length <= 3) throw new Error('El nombre debe de ser mayor a 3 letras')
      
      this.name = name
    }

    getFullNameDesdeXmen() {
      console.log(super.getFullName())
    }
  }

  const personaje1 = new Xmen('miNombreSecreto', 'Juan', true)
  // personaje1.getFullNameDesdeXmen()

  // personaje1.fullName = 'Jose' // <- setter
  // console.log(personaje1.fullName) // <- getter

})()