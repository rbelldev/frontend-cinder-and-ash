import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Warlock extends CharacterClass {
  constructor() {

    const classColor = '#9482C9';

    super('Warlock', [
      new CharacterClassSpecialization('Affliction', 'DPS', false),
      new CharacterClassSpecialization('Demonology', 'DPS', false),
      new CharacterClassSpecialization('Destruction', 'DPS', false)
    ], classColor, classColor);
  }
}
