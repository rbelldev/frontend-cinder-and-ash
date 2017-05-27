import {CharacterClass} from "../character-class";
import {CharacterClassSpec} from "../character-class-spec";

export class Shaman extends CharacterClass {
  constructor() {
    super('Shaman', [
        new CharacterClassSpec('Elemental', "DPS", false),
        new CharacterClassSpec('Enhancement', "DPS", false),
        new CharacterClassSpec('Restoration', "HEALING", false)
      ]
    );
  }
}
