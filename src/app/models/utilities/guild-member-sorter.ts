import {Guild} from "../battle-net/world-of-warcraft/guild";
import {GuildMember} from "../battle-net/world-of-warcraft/guild-member";

export class GuildMemberSorter {

  sortByRankDescending(guild: Guild):Guild{

    var sortedGuildMembers: GuildMember[] = guild.guildMembers.sort((member_1,member_2) => {
      if (member_1.guildRank.rankId > member_2.guildRank.rankId) {
        return 1;
      }

      if (member_1.guildRank.rankId < member_2.guildRank.rankId) {
        return -1;
      }

      return 0;
    });

    guild.guildMembers = sortedGuildMembers;

    return guild;
  }

}
