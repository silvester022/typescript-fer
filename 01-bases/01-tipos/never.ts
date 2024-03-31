(() => {

  const error = (msg: string): (never | number) => {
    
    if(false) {
      throw new Error(msg)
    }

    return 1
  }

  error('hola')
  console.log('hola mundo')
})()