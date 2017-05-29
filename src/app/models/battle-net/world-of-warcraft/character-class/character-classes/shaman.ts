import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Shaman extends CharacterClass {
  constructor() {

    const classColor = '#0070DE';

    super('Shaman', [
      new CharacterClassSpecialization('Elemental', 'DPS', false),
      new CharacterClassSpecialization('Enhancement', 'DPS', false),
      new CharacterClassSpecialization('Restoration', 'HEALING', false)
    ], classColor, classColor);
  }
}
