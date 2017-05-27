import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Rouge extends CharacterClass {
  constructor() {
    super('Rouge', [
        new CharacterClassSpecialization('Assassination', "DPS", false),
        new CharacterClassSpecialization('Outlaw', "DPS", false),
        new CharacterClassSpecialization('Subtlety', "DPS", false)
      ]
    );
  }
}
