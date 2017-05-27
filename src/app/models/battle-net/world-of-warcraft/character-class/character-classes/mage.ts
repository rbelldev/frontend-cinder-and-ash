import {CharacterClass} from "../character-class";
import {CharacterClassSpec} from "../character-class-spec";

export class Mage extends CharacterClass {
  constructor() {
    super('Mage', [
        new CharacterClassSpec('Arcane', "DPS", false),
        new CharacterClassSpec('Frost', "DPS", false),
        new CharacterClassSpec('Fire', "DPS", false)
      ]
    );
  }
}
