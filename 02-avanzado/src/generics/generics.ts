export const printObject = (args: any) => {
  console.log(args)
}

export function genericFunction<T>(argument: T): T {
  return argument
}

export const genericFunctionArrow = <T>(argument: T): T => argument
