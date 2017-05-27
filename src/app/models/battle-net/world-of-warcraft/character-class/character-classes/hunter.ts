import {CharacterClass} from "../character-class";
import {CharacterClassSpec} from "../character-class-spec";

export class Hunter extends CharacterClass {
  constructor() {
    super('Hunter', [
        new CharacterClassSpec('Beast Mastery', "DPS", false),
        new CharacterClassSpec('Marksmanship', "DPS", false),
        new CharacterClassSpec('Survival', "DPS", false)
      ]
    );
  }
}
