import {CharacterClass} from "../character-class";
import {CharacterClassSpec} from "../character-class-spec";

export class Druid extends CharacterClass {
  constructor() {
    super('Druid', [
        new CharacterClassSpec('Balance', "DPS", false),
        new CharacterClassSpec('Feral', "DPS", false),
        new CharacterClassSpec('Guardian', "TANK", false),
        new CharacterClassSpec('Restoration', "HEALING", false)
      ]
    );
  }
}
