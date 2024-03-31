(() => {


  interface Client {
    name: string
    age?: number
    address?: Address
    getFullAddress(id: string): string
  }

  interface Address {
    id: number
    zip: string
    city: string
  } 

  const client: Client = {
    name: 'Sylve',
    age: 90,
    address: {
      id: 1122,
      zip: 'AVK KLL',
      city: 'Hokk'
    },
    getFullAddress(id: string) {
      return 'hola'
    },
  }

  const client2: Client = {
    name: 'melissa',
    age: 9,
    address: {
      id: 111,
      city: 'colombia',
      zip: '112233'
    },
    getFullAddress(id: string) {
      return 'hola'
    },
  }

})()