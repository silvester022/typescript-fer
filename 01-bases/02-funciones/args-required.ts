(() => {

  const fullName = (firstName: string, lastName: (string|boolean)): string => {
    return `${firstName} ${lastName}`
  }

  let noName: any;
  const name = fullName(noName, true)
  console.log({ name })
})()