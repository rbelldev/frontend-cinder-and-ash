import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Mage extends CharacterClass {
  constructor() {

    const classColor = '#69CCF0';

    super('Mage', [
      new CharacterClassSpecialization('Arcane', 'DPS', false),
      new CharacterClassSpecialization('Frost', 'DPS', false),
      new CharacterClassSpecialization('Fire', 'DPS', false)
    ], classColor, classColor);
  }
}
