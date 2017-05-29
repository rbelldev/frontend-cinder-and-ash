import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Warlock extends CharacterClass {
  constructor() {
    super('Warlock', [
        new CharacterClassSpecialization('Affliction', 'DPS', false),
        new CharacterClassSpecialization('Demonology', 'DPS', false),
        new CharacterClassSpecialization('Destruction', 'DPS', false)
      ],
      '#9482C9'
    );
  }
}
