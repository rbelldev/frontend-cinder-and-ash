import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Paladin extends CharacterClass {
  constructor() {

    const classColor = '#F58CBA';

    super('Paladin', [
      new CharacterClassSpecialization('Holy', 'HEALING', false),
      new CharacterClassSpecialization('Retribution', 'DPS', false),
      new CharacterClassSpecialization('Protection', 'TANK', false)
    ], classColor, classColor);
  }
}
