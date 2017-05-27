import {CharacterClassSpecialization} from "./character-class-specialization";
export class CharacterClass {
  constructor(
    public name:string,
    public classSpecs:CharacterClassSpecialization[]
  ){}

  getActiveSpec():CharacterClassSpecialization{
    return this.classSpecs.find(spec => {return spec.active})
  }
}
