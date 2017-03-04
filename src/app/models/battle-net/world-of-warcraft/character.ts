import {ClassSpec} from "./class-spec";

export class Character {

  name: string;
  realm: string;
  battleGroup: string;
  class: string;
  classId: string;
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
    this.classId = this.classes[json['class']];

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

  getInvertedClassColor():string{
    switch (this.class) {
      case 'Priest':
      case 'Rogue' :
        return 'black';
      default:
        return 'white';
    }
  }

  getClassColor():string{
    switch (this.class) {
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
