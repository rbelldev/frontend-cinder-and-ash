import {Character} from "./character";
import {GuildRank} from "./guild-rank";
import {GuildMember} from "./guild-member";
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

      const character = new Character(member['character']);
      const guildRank = new GuildRank(member['rank']);

      const guildMember = new GuildMember(character, guildRank);

      this.guildMembers.push(guildMember)

    }

  }

  name:string;
  realm:string;
  battleGroup:string;
  level:number;
  side:number;
  achievementPoints:number;
  guildMembers:GuildMember[] = [];

}
