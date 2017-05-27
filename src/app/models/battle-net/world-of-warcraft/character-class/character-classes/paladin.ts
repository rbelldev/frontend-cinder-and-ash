import {CharacterClass} from "../character-class";
import {CharacterClassSpec} from "../character-class-spec";

export class Paladin extends CharacterClass {
  constructor() {
    super('Paladin', [
        new CharacterClassSpec('Holy', "HEALING", false),
        new CharacterClassSpec('Retribution', "DPS", false),
        new CharacterClassSpec('Protection', "TANK", false)
      ]
    );
  }
}
