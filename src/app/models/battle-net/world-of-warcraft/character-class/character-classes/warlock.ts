import {CharacterClass} from "../character-class";
import {CharacterClassSpec} from "../character-class-spec";

export class Warlock extends CharacterClass {
  constructor() {
    super('Warlock', [
        new CharacterClassSpec('Affliction', "DPS", false),
        new CharacterClassSpec('Demonology', "DPS", false),
        new CharacterClassSpec('Destruction', "DPS", false)
      ]
    );
  }
}
