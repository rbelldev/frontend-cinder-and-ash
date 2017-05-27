import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Druid extends CharacterClass {
  constructor() {
    super('Druid', [
        new CharacterClassSpecialization('Balance', "DPS", false),
        new CharacterClassSpecialization('Feral', "DPS", false),
        new CharacterClassSpecialization('Guardian', "TANK", false),
        new CharacterClassSpecialization('Restoration', "HEALING", false)
      ]
    );
  }
}
