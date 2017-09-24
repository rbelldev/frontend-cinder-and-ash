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
  characterClass: CharacterClass;
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
  imageUrl:string;

  constructor(json: JSON) {

    this.name = json['name'];
    this.realm = json['realm'];
    this.battleGroup = json['battleGroup'];
    this.characterClass = CharacterClassFactory.buildClass(json['class']);

    if(json['spec']){
      this.characterClass.setActiveSpec(json['spec']['name']);
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

    this.imageUrl = `https://render-us.worldofwarcraft.com/character/${json['thumbnail'].replace('avatar', 'main')}`;
    console.log(this.imageUrl);

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
