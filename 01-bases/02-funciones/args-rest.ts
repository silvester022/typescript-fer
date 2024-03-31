(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(' ')} `
  }

  const superman = fullName('silver', 'stall', 'juan')
  console.log({superman})

})()