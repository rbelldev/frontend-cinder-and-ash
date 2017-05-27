import {CharacterClassSpecialization} from "./character-class/character-class-specialization";
import {EquippedItems} from "./equipped-items";
import {TierAssessment} from "../../../helpers/TierAssessment";
import {Talents} from "./talents";
import {CharacterClassFactory} from "./character-class/character-class-factory";
import {CharacterClass} from "./character-class/character-class";

export class Character {

  name: string;
  realm: string;
  battleGroup: string;
  class: CharacterClass;
  classSpec: CharacterClassSpecialization;
  race: string;
  gender: string;
  level: number;
  achievementPoints: number;
  guild: string;
  guildRealm: string;
  equippedItems:EquippedItems;
  tierAssessment:TierAssessment;
  progression:any;
  talents:Talents;

  constructor(json: JSON) {

    this.name = json['name'];
    this.realm = json['realm'];
    this.battleGroup = json['battleGroup'];

    this.class = CharacterClassFactory.buildClass(json['class']);

    if(json['spec']){
      this.class.setActiveSpec(json['spec']['name']);
    }

    this.race = json['race'];
    this.gender = json['gender'];
    this.level = json['level'];
    this.achievementPoints = json['achievementPoints'];
    this.guild = json['guild'];
    this.guildRealm = json['guildRealm'];

    if(json['items']){
      this.equippedItems = new EquippedItems(json['items']);
    }

    if(json['progression']){
      this.progression = json['progression'];
    }

    if(json['talents']){
      this.talents = new Talents(json['talents']);
    }

    this.tierAssessment = new TierAssessment(this);

  }

  getClassColor():string{
    switch (this.class.name) {
      case '':
        return '#D3D3D3';
      case 'Warrior':
        return '#C79C6E';
      case 'Paladin':
        return '#F58CBA';
      case 'Hunter':
        return '#ABD473';
      case 'Rogue':
        return '#FFF569';
      case 'Priest':
        return '#FFFFFF';
      case 'Death Knight':
        return '#C41F3B';
      case 'Shaman':
        return '#0070DE';
      case 'Mage':
        return '#69CCF0';
      case 'Warlock':
        return '#9482C9';
      case 'Monk':
        return '#00FF96';
      case 'Druid':
        return '#FF7D0A';
      case 'Demon Hunter':
        return '#A330C9';
    }
  }

  getClassColorForWhiteBackground():string{
    switch (this.class.name) {
      case '':
        return '#D3D3D3';
      case 'Warrior':
        return '#C79C6E';
      case 'Paladin':
        return '#F58CBA';
      case 'Hunter':
        return '#ABD473';
      case 'Rogue':
        return '#FFF569';
      case 'Priest':
        return '#FFFFFF';
      case 'Death Knight':
        return '#C41F3B';
      case 'Shaman':
        return '#0070DE';
      case 'Mage':
        return '#69CCF0';
      case 'Warlock':
        return '#9482C9';
      case 'Monk':
        return '#00FF96';
      case 'Druid':
        return '#FF7D0A';
      case 'Demon Hunter':
        return '#A330C9';
    }
  }
}
  // getClassIcon():string {
  //   const simpleClassName = this.class.replace(" ", "").toLowerCase();
  //   let iconPath: string = `/assets/battle-net/class/${simpleClassName}.png`;
  //
  //   return iconPath;
  // }
  //
  // getClassSpecIcon():string {
  //   const simpleClassName = this.class.replace(" ", "").toLowerCase();
  //   const simpleClassSpec = this.classSpec.name.toLowerCase();
  //
  //   let iconPath: string = `/assets/battle-net/spec/${simpleClassName}/${simpleClassSpec}.png`;
  //
  //   return iconPath;
  // }
