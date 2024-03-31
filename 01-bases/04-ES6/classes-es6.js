(() => {

  class Avenger {

    constructor(name = 'ups..', power = 'ups..') {
      this.name = name
      this.power = power


      this.otraPropiedad = true
    }

  }

  class FlyingAvenger extends Avenger {

    constructor(name, power) {
      super(name, power)
      this.flying = true
    }

  }

  const hulk = new Avenger('hulk', 'bastante')
  const falcon = new FlyingAvenger('Falcon', '50')
  // console.log(hulk)
  console.log(falcon.otraPropiedad)

})()