(() => {

  const hero: [string, number, boolean] = ['personaje 1', 100, true]
  hero[1] = 50
  hero[0] = '50'
  hero[2] = false
  
  console.log({hero})
})()