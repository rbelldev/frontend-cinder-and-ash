import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Guild} from "../../models/battle-net/world-of-warcraft/guild";
import {GuildMemberSorter} from "../../models/utilities/guild-member-sorter";
import {Character} from "../../models/battle-net/world-of-warcraft/character";
import {GuildMember} from "../../models/battle-net/world-of-warcraft/guild-member";

@Component({
  selector: 'roster-main',
  templateUrl: 'roster-main.component.html',
  styleUrls: ['roster-main.component.css'],
  providers: [GuildMemberSorter]
})

export class RosterMainComponent {

  guild: Guild;
  mythicTanks:GuildMember[];
  mythicHeals:GuildMember[];
  mythicRanged:GuildMember[];
  mythicMelee:GuildMember[];
  currentFilter: string = 'All';
  tierGroups:string[] = ['Conqueror', 'Protector', 'Vanquisher'];

  constructor(private route: ActivatedRoute, private router: Router ,private guildMemberSorter: GuildMemberSorter) {}

  ngOnInit() {
    this.guild = this.guildMemberSorter.sortByRankDescending(this.route.snapshot.data['guild']);
    this.filter(this.currentFilter);
  }

  filter(tierGroup:string){

    this.currentFilter = tierGroup;

    if(tierGroup.toLowerCase() == 'all') {
      this.mythicTanks = this.guild.getMythicTanks();
      this.mythicHeals = this.guild.getMythicHeals();
      this.mythicRanged = this.guild.getMythicRanged();
      this.mythicMelee = this.guild.getMythicMelee();
    } else {
      this.mythicTanks = this.guild.getMythicTanks().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
      this.mythicHeals = this.guild.getMythicHeals().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
      this.mythicRanged = this.guild.getMythicRanged().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
      this.mythicMelee = this.guild.getMythicMelee().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
    }

  }

}
