export namespace Validations {

  export const validateText = (text: string): boolean => {
    return (text.length > 3) ? true : false
  }

  export const validateDate = (myDate: Date): boolean => {
    return ( isNaN(myDate.valueOf())) ? false : true
  }

  // let fecha = new Date
  // console.log(fecha.getDate())

}

console.log( Validations.validateText('hol') )