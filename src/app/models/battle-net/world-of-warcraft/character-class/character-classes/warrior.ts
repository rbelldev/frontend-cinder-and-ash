import {CharacterClass} from "../character-class";
import {CharacterClassSpec} from "../character-class-spec";

export class Warrior extends CharacterClass {
  constructor() {
    super('Warrior', [
        new CharacterClassSpec('Fury', "DPS", false),
        new CharacterClassSpec('Arms', "DPS", false),
        new CharacterClassSpec('Protection', "TANK", false)
      ]
    );
  }
}
