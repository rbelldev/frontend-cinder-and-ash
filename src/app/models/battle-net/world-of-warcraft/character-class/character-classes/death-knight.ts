import {CharacterClass} from "../character-class";
import {CharacterClassSpec} from "../character-class-spec";

export class DeathKnight extends CharacterClass {
  constructor() {
    super('Death Knight', [
        new CharacterClassSpec('Blood', "TANK", false),
        new CharacterClassSpec('Frost', "DPS", false),
        new CharacterClassSpec('Unholy', "DPS", false)
      ]
    );
  }
}
