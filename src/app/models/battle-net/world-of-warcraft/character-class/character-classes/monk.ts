import {CharacterClass} from "../character-class";
import {CharacterClassSpec} from "../character-class-spec";

export class Monk extends CharacterClass {
  constructor() {
    super('Monk', [
        new CharacterClassSpec('Brewmaster', "TANK", false),
        new CharacterClassSpec('Mistweaver', "HEALING", false),
        new CharacterClassSpec('Windwalker', "DPS", false)
      ]
    );
  }
}
