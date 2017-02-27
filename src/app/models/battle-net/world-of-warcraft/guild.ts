import {Character} from "./character";
export class Guild {

  constructor(json:JSON){
    this.name = json['name'];
    this.realm = json['realm'];
    this.battleGroup = json[' battleGroup'];
    this.level = json['level'];
    this.side = json['side'];
    this.achievementPoints = json['achievementPoints'];

    const membersJson = json['members'];

    for (let i = 0; i < membersJson.length; i++){
      const member = membersJson[i];
      this.members.push(new Character(member['character']))
    }
  }

  name:string;
  realm:string;
  battleGroup:string;
  level:number;
  side:number;
  achievementPoints:number;
  members:Character[] = [];

}
