import {CharacterClass} from "../character-class";
import {CharacterClassSpec} from "../character-class-spec";

export class DemonHunter extends CharacterClass {
  constructor() {
    super('Demon Hunter', [
        new CharacterClassSpec('Havoc', "DPS", false),
        new CharacterClassSpec('Vengeance', "TANK", false)
      ]
    );
  }
}
