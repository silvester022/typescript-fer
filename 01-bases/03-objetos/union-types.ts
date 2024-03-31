(() => {

  type Hero = {
    name: string
    age?: number
    powers: number[]
    getName?: () => string
  }

  let myCustomVariable: string | number | Hero = 1122 
  console.log(typeof myCustomVariable)

  myCustomVariable = 20
  console.log(typeof myCustomVariable)
  
  myCustomVariable = {
    name: 'bruce',
    age: 90,
    powers: [1]
  }
  console.log(typeof myCustomVariable)


})()