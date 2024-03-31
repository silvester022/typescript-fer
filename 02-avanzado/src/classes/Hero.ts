
import powers from '../data/powers'

export class Hero {

  constructor(
    public name: string,
    public powerId: number,
    public age: number,
  ) {}

  get power(): string {
    return powers.find( power => power.id === this.powerId )?.desc || 'not found'
  }
}

class Hero2 {}
class Hero3 {}
class Hero4 {}

export default Hero2