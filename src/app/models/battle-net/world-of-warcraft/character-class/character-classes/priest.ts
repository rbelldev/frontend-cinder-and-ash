import {CharacterClass} from "../character-class";
import {CharacterClassSpec} from "../character-class-spec";

export class Priest extends CharacterClass {
  constructor() {
    super('Priest', [
        new CharacterClassSpec('Discipline', "HEALING", false),
        new CharacterClassSpec('Holy', "HEALING", false),
        new CharacterClassSpec('Shadow', "DPS", false)
      ]
    );
  }
}
