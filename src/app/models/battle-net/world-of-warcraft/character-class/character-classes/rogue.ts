import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Rogue extends CharacterClass {
  constructor() {

    const classColor = '#FFF569';

    super('Rogue', [
      new CharacterClassSpecialization('Assassination', 'DPS', false),
      new CharacterClassSpecialization('Outlaw', 'DPS', false),
      new CharacterClassSpecialization('Subtlety', 'DPS', false)
    ], classColor, classColor);
  }
}
