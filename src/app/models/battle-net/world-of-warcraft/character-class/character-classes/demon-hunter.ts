import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class DemonHunter extends CharacterClass {
  constructor() {

    const classColor = '#A330C9';

    super('Demon Hunter', [
      new CharacterClassSpecialization('Havoc', 'DPS', false),
      new CharacterClassSpecialization('Vengeance', 'TANK', false)
    ], classColor, classColor);
  }
}
