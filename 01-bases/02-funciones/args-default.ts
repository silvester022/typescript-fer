(() => {

  const fullName = (firstName: string, upper: boolean = false, lastName?: string): string => {
    
    if(upper) {
      return `${firstName} ${lastName || '---' }`.toUpperCase()
    } else {
      return `${firstName} ${lastName || '---' }`
    }
  }

  // let noName: any;
  const name = fullName('juan')
  console.log({ name })
})()