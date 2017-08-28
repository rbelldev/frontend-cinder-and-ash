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

  mythicTanks: string[] = ['Embersong', 'Knutè'];
  mythicHeals: string[] = ['Naminé', 'Iyin', 'Synthoras'];
  mythicRanged: string[] = ['Broxalar', 'Gingerbrows', 'Revërie', 'Calissta', 'Fredthemage', 'Ravenoth', 'Buljii', 'Grayfeather', 'Halìax'];
  mythicMelee: string[] = ['Kirelion', 'Sçythér', 'Supbae', 'Djeckt', 'Bigdoss', 'Twinslayerz'];
  mythicTrials: string[] = ['Lavalash', 'Viciousvixen'];

}
