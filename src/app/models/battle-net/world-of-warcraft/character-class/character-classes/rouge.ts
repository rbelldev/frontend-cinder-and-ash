import {CharacterClass} from "../character-class";
import {CharacterClassSpec} from "../character-class-spec";

export class Rouge extends CharacterClass {
  constructor() {
    super('Rouge', [
        new CharacterClassSpec('Assassination', "DPS", false),
        new CharacterClassSpec('Outlaw', "DPS", false),
        new CharacterClassSpec('Subtlety', "DPS", false)
      ]
    );
  }
}
