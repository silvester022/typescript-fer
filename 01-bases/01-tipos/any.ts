(() => {

  let avenger: any = 123
  let exists
  let power

  avenger = 'hola'
  // console.log(avenger[2])
  console.log((avenger as string).charAt(2))

  avenger = 12312.111111
  console.log( <number>avenger.toFixed(3))

  console.log(exists)
  console.log(power)
})()