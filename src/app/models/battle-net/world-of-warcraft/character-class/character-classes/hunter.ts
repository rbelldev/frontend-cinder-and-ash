import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Hunter extends CharacterClass {
  constructor() {

    const classColor = '#ABD473';

    super('Hunter', [
      new CharacterClassSpecialization('Beast Mastery', 'DPS', false),
      new CharacterClassSpecialization('Marksmanship', 'DPS', false),
      new CharacterClassSpecialization('Survival', 'DPS', false)
    ], classColor, classColor);
  }
}
