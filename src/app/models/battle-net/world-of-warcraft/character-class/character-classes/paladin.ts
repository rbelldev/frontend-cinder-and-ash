import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Paladin extends CharacterClass {
  constructor() {
    super('Paladin', [
        new CharacterClassSpecialization('Holy', 'HEALING', false),
        new CharacterClassSpecialization('Retribution', 'DPS', false),
        new CharacterClassSpecialization('Protection', 'TANK', false)
      ],
      '#F58CBA'
    );
  }
}
