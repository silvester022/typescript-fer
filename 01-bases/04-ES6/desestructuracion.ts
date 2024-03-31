(() => {

  // desestructuracion de objetos
  // type Avenger = {
  //   nick: string,
  //   ironman: string,
  //   vision: string,
  //   activo: boolean,
  //   poder: number
  // }

  // const avengers: Avenger = {
  //   nick: 'nick',
  //   ironman: 'ironman',
  //   vision: 'vision',
  //   activo: true,
  //   poder: 1500,
  // }

  // const { poder, vision } = avengers
  // console.log(poder, vision.toUpperCase())

  // const printAvenger = ({ vision, ...resto }: Avenger) => {
  //   console.log(vision, resto)
  // }

  // printAvenger(avengers)


  // desestructuracion de arreglos
  const AvengerArr: [string, number, boolean] = ['personaje 1', 12, true]
  const [ ,ironman, hulk ] = AvengerArr
  // console.log(ironman, hulk)

  
})()