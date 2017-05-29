import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Monk extends CharacterClass {
  constructor() {

    const classColor = '#00FF96';

    super('Monk', [
      new CharacterClassSpecialization('Brewmaster', 'TANK', false),
      new CharacterClassSpecialization('Mistweaver', 'HEALING', false),
      new CharacterClassSpecialization('Windwalker', 'DPS', false)
    ], classColor, classColor);
  }
}
