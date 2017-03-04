import {ClassSpec} from "./class-spec";

export class Character {

  name: string;
  realm: string;
  battleGroup: string;
  class: string;
  classSpec: ClassSpec;
  race: string;
  gender: string;
  level: number;
  achievementPoints: number;
  guild: string;
  guildRealm: string;

  constructor(json: JSON) {

    this.name = json['name'];
    this.realm = json['realm'];
    this.battleGroup = json['battleGroup'];
    this.class = this.classes[json['class']];

    if (json['spec']) {
      this.classSpec = new ClassSpec(json['spec']);
    }

    this.race = json['race'];
    this.gender = json['gender'];
    this.level = json['level'];
    this.achievementPoints = json['achievementPoints'];
    this.guild = json['guild'];
    this.guildRealm = json['guildRealm'];

  }

  classes: string[] = [
    '',
    'Warrior',
    'Paladin',
    'Hunter',
    'Rogue',
    'Priest',
    'Death Knight',
    'Shaman',
    'Mage',
    'Warlock',
    'Monk',
    'Druid',
    'Demon Hunter'
  ];
}
