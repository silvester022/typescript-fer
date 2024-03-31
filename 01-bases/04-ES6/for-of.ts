(() => {

  type Avenger = {
    name: string
    weapon: string
  }

  const ironman: Avenger = {
    name: 'tony',
    weapon: 'armor suit'
  }
  
  const man2: Avenger = {
    name: 'man2',
    weapon: 'weapon2'
  }

  const man3: Avenger = {
    name: 'man3',
    weapon: 'weapon3'
  }

  const avengers: Avenger[] = [ironman, man2, man3]
  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon)
  }



})()