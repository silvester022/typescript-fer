(() => {

  const addNumbers = (a: number, b: number) => a + b
  const greet = (name: string) => `hola ${name}`
  const saveWorld = () => 'El mundo esta salvado'

  // let myFunction: (x: number, y: number) => number
  // let myFunction: (x: string) => string
  let myFunction: () => string

  // myFunction = 10
  // console.log(myFunction)

  // myFunction = addNumbers
  // console.log(myFunction(3, 9))
  
  // myFunction = greet
  // console.log(myFunction('bartolo'))
  
  myFunction = saveWorld
  console.log(myFunction())
})()