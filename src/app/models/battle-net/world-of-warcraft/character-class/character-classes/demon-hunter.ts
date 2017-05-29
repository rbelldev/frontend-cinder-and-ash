import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class DemonHunter extends CharacterClass {
  constructor() {
    super('Demon Hunter', [
        new CharacterClassSpecialization('Havoc', 'DPS', false),
        new CharacterClassSpecialization('Vengeance', 'TANK', false)
      ],
      '#A330C9'
    );
  }
}
