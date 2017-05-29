import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Monk extends CharacterClass {
  constructor() {
    super('Monk', [
        new CharacterClassSpecialization('Brewmaster', 'TANK', false),
        new CharacterClassSpecialization('Mistweaver', 'HEALING', false),
        new CharacterClassSpecialization('Windwalker', 'DPS', false)
      ],
      '#00FF96'
    );
  }
}
