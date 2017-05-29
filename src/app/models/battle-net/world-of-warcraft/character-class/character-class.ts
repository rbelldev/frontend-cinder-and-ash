import {CharacterClassSpecialization} from "./character-class-specialization";
export class CharacterClass {
  constructor(
    public name:string,
    public classSpecs:CharacterClassSpecialization[],
    public color:string
  ){}

  getActiveSpec():CharacterClassSpecialization{
    let activeSpec = this.classSpecs.find(spec => {return spec.active});
    if(!activeSpec){
      activeSpec = new CharacterClassSpecialization('undefined', '', true);
    }
    return activeSpec
  }

  setActiveSpec(specialization:string){
      this.classSpecs.forEach(spec => {
        spec.active = spec.name === specialization;
      });
  }
}
