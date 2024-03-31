(() => {

  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || 'NoLastName' }`
  }

  let noName: any;
  const name = fullName('juan')
  console.log({ name })
})()