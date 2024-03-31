(() => {


  class Apocalipsis {
    static instance: Apocalipsis

    private constructor( public name: string ) {}

    static callApocalipsis(): Apocalipsis {
      if( !Apocalipsis.instance ) {
        Apocalipsis.instance = new Apocalipsis('hola desde adentro!!!!!')
      }

      return Apocalipsis.instance
    }

    changeName( newName: string ): void {
      this.name = newName
    }
  }

  // const apocalipsis1 = new Apocalipsis('myname1')
  // const apocalipsis2 = new Apocalipsis('myname2')
  // const apocalipsis3 = new Apocalipsis('myname3')
  
  // console.log(apocalipsis1)


  // const apocalipsis1 = Apocalipsis.callApocalipsis()
  // apocalipsis1.changeName('sensella')
  
  // console.log(apocalipsis1)
})()