import {CharacterClass} from "../character-class";
import {CharacterClassSpecialization} from "../character-class-specialization";

export class Shaman extends CharacterClass {
  constructor() {
    super('Shaman', [
        new CharacterClassSpecialization('Elemental', "DPS", false),
        new CharacterClassSpecialization('Enhancement', "DPS", false),
        new CharacterClassSpecialization('Restoration', "HEALING", false)
      ]
    );
  }
}
