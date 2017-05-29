import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Priest extends CharacterClass {
  constructor() {
    super('Priest', [
      new CharacterClassSpecialization('Discipline', 'HEALING', false),
      new CharacterClassSpecialization('Holy', 'HEALING', false),
      new CharacterClassSpecialization('Shadow', 'DPS', false)
    ], '#FFFFFF', "#000000");
  }
}
