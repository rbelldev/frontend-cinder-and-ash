import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Warrior extends CharacterClass {
  constructor() {

    const classColor = '#C79C6E';

    super('Warrior', [
      new CharacterClassSpecialization('Fury', 'DPS', false),
      new CharacterClassSpecialization('Arms', 'DPS', false),
      new CharacterClassSpecialization('Protection', 'TANK', false)
    ], classColor, classColor);
  }
}
