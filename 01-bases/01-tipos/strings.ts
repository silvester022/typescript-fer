(() => {

  const batman: string = 'bat\'man'
  // const linterna: string = "linter'na"
  // const hulk: string = `hulk`
  // const abc = 123

  // console.log(`I'm ${batman}, ${abc.toString()}`)
  console.log(`I'm ${batman}`)
  console.log(batman.toUpperCase())

  console.log(batman[7]?.toUpperCase() || 'no esta batman')
})()