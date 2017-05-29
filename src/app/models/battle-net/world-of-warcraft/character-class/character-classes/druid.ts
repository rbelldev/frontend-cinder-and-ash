import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Druid extends CharacterClass {
  constructor() {

    const classColor = '#FF7D0A';

    super('Druid', [
      new CharacterClassSpecialization('Balance', 'DPS', false),
      new CharacterClassSpecialization('Feral', 'DPS', false),
      new CharacterClassSpecialization('Guardian', 'TANK', false),
      new CharacterClassSpecialization('Restoration', 'HEALING', false)
    ], classColor, classColor);
  }
}
