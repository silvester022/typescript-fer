(() => {

  interface Hero {
    name: string
    age?: number 
    powers: number[]
    getName?: () => string
  }

  let flash: Hero = {
    name: 'my name',
    age: 24,
    powers: [1, 2]
  }

  let superman: Hero = {
    name: 'my name2',
    age: 25,
    powers: [3, 4],
    
  }

  

})()