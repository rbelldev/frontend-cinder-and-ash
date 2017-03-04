import {Character} from "./character";
import {GuildRank} from "./guild-rank";
export class GuildMember {

  constructor(character:Character, guildRank: GuildRank){

    this.character = character;
    this.guildRank = guildRank;

  }

  character:Character;
  guildRank:GuildRank;

}
