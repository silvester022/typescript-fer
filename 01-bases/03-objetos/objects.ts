(() => {

  let flash: { name: string, age?: number, powers: string[], getName?: () => string }  = {
    name: 'my name',
    age: 24,
    powers: ['1', '2']
  }
  
  let superman: { name: string, age?: number, powers: string[], getName?: () => string }  = {
    name: 'my name2',
    age: 25,
    powers: ['3', '4']
  }

  // flash = {
  //   name: 'otro nombre',
  //   // age: 33,
  //   powers: ['poderoso'],
  //   getName() {
  //     return this.name
  //   }
  // }

  // console.log(flash.getName())

})()