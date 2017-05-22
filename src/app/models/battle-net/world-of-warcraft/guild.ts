import {Character} from "./character";
import {GuildRank} from "./guild-rank";
import {GuildMember} from "./guild-member";
import {isNullOrUndefined} from "util";
export class Guild {

  constructor(json:JSON){

    this.name = json['name'];
    this.realm = json['realm'];
    this.battleGroup = json[' battleGroup'];
    this.level = json['level'];
    this.side = json['side'];
    this.achievementPoints = json['achievementPoints'];

    if(json['members']) {
      const membersJson = json['members'];

      for (let i = 0; i < membersJson.length; i++) {

        const member = membersJson[i];

        const character = new Character(member['character']);
        const guildRank = new GuildRank(member['rank']);

        if (character.classSpec != null || character.classSpec != undefined) {

          const guildMember = new GuildMember(character, guildRank);
          this.guildMembers.push(guildMember);

        }
      }
    }
  }

  getMythicTanks():GuildMember[]{
    return this.findMembers(this.mythicTanks)
  }

  getMythicHeals():GuildMember[]{
    return this.findMembers(this.mythicHeals)
  }

  getMythicRanged():GuildMember[]{
    return this.findMembers(this.mythicRanged)
  }

  getMythicMelee():GuildMember[]{
    return this.findMembers(this.mythicMelee)
  }

  getMythicTrials():GuildMember[]{
    return this.findMembers(this.mythicTrials)
  }

  findMembers(membersToFind:string[]):GuildMember[]{
    return this.guildMembers.filter( guildMember => membersToFind.indexOf(guildMember.character.name) > -1)
  }

  name:string;
  realm:string;
  battleGroup:string;
  level:number;
  side:number;
  achievementPoints:number;
  guildMembers:GuildMember[] = [];

  mythicTanks:string[] = ['Embersong', 'Graybrew'];
  mythicHeals:string[] = ['Cattìbrie', 'Kÿra', 'Elderwulf', 'Kenlòre'];
  mythicRanged:string[] = ['Twinslayerzz', 'Hezbolah', 'Gingerbrows', 'Revërie', 'Calissta', 'Chandresh', 'Supplicant'];
  mythicMelee:string[] = ['Dasan', 'Knutè', 'Kirelion', 'Sçythér', 'Supbae', 'Djeckt', 'Bigdoss'];
  mythicTrials:string[] = ['Sapcraklepop', 'Elpickle', 'Krnofex'];

}
