import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class DeathKnight extends CharacterClass {
  constructor() {
    super('Death Knight', [
        new CharacterClassSpecialization('Blood', 'TANK', false),
        new CharacterClassSpecialization('Frost', 'DPS', false),
        new CharacterClassSpecialization('Unholy', 'DPS', false)
      ],
      '#C41F3B'
    );
  }
}
