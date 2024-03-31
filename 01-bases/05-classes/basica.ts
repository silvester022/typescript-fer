(() => {

  class Avenger {
    // private name: string
    // private team: string
    // public realName?: string
    static avgAge: number = 35
    static getAvgAge() {
      return this.name
    }

    constructor( 
      private name: string, 
      private team: string, 
      public realName?: string,
    ) {
      // Avenger.avgAge = avgAge
    }

    public bio() {
      return `${this.name} (${this.team})`
    }
  }

  // const hulk: Avenger = new Avenger('nombre', 'equipo', 'nombre real')
  // console.log(hulk)
  // console.log(Avenger.avgAge)

  
  // console.log(hulk.bio())
  // console.log(Avenger.getAvgAge())
})()