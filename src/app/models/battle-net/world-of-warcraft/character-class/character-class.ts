import {CharacterClassSpec} from "./character-class-spec";
export class CharacterClass {
  constructor(public name:string, public classSpecs:CharacterClassSpec[]){}

  getActiveSpec():CharacterClassSpec{
    return this.classSpecs.find(spec => {return spec.active})
  }
}
