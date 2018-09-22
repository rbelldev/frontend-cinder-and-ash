import {Character} from "./character";
import {GuildRank} from "./guild-rank";
import {GuildMember} from "./guild-member";
export class Guild {

  constructor(json: JSON) {

    this.name = json['name'];
    this.realm = json['realm'];
    this.battleGroup = json[' battleGroup'];
    this.level = json['level'];
    this.side = json['side'];
    this.achievementPoints = json['achievementPoints'];

    if (json['members']) {
      const membersJson = json['members'];

      for (let i = 0; i < membersJson.length; i++) {

        const member = membersJson[i];

        const character = new Character(member['character']);
        const guildRank = new GuildRank(member['rank']);

        // if (character.classSpec != null || character.classSpec != undefined) {

        const guildMember = new GuildMember(character, guildRank);
        this.guildMembers.push(guildMember);

        // }
      }
    }
  }

  getMythicRoster(): GuildMember[] {
    let mythicRoster: GuildMember[] = this.getMythicTanks();

    mythicRoster = mythicRoster.concat(this.getMythicHeals());
    mythicRoster = mythicRoster.concat(this.getMythicMelee());
    mythicRoster = mythicRoster.concat(this.getMythicRanged());
    mythicRoster = mythicRoster.concat(this.getMythicTrials());
    mythicRoster = mythicRoster.concat(this.getMythicBench());

    return mythicRoster;
  }

  getMythicTanks(): GuildMember[] {
    return this.findMembers(this.mythicTanks)
  }

  getMythicHeals(): GuildMember[] {
    return this.findMembers(this.mythicHeals)
  }

  getMythicRanged(): GuildMember[] {
    return this.findMembers(this.mythicRanged)
  }

  getMythicMelee(): GuildMember[] {
    return this.findMembers(this.mythicMelee)
  }

  getMythicTrials(): GuildMember[] {
    return this.findMembers(this.mythicTrials)
  }

  getMythicBench(): GuildMember[] {
    return this.findMembers(this.mythicBench)
  }

  findMembers(membersToFind: string[]): GuildMember[] {
    return this.guildMembers.filter(guildMember => membersToFind.indexOf(guildMember.character.name) > -1)
  }

  name: string;
  realm: string;
  battleGroup: string;
  level: number;
  side: number;
  achievementPoints: number;
  guildMembers: GuildMember[] = [];

  mythicTanks: string[] = ['Kñute', 'Harmless'];
  mythicHeals: string[] = ['Iyin', 'Rawry', 'Aborn', 'Synthoras', 'Realfair'];
  mythicRanged: string[] = ['Lacunia', 'Broxalar', 'Pillöw', 'Twinshadow', 'Ucriturpantz', 'Cínder'];
  mythicMelee: string[] = ['Ninjaknight', 'Kelthis', 'Ryanpage', 'Lyciri', 'Sçythér', 'Slippywrist', 'Camil'];
  mythicTrials: string[] = [];
  mythicBench: string[] = [];

}
