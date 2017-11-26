import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Guild} from "../../models/battle-net/world-of-warcraft/guild";
import {GuildMemberSorter} from "../../models/utilities/guild-member-sorter";
import {Character} from "../../models/battle-net/world-of-warcraft/character";
import {GuildMember} from "../../models/battle-net/world-of-warcraft/guild-member";
import {BattleNetService} from "../../services/battle-net/battle-net.service";

@Component({
  selector: 'roster-main',
  templateUrl: 'roster-main.component.html',
  styleUrls: ['roster-main.component.css'],
  providers: [GuildMemberSorter]
})

export class RosterMainComponent {

  isLoading:boolean = true;

  guild: Guild;

  mythicTanks:GuildMember[];
  mythicHeals:GuildMember[];
  mythicRanged:GuildMember[];
  mythicMelee:GuildMember[];
  mythicTrials:GuildMember[];
  mythicBench:GuildMember[];

  currentTierGroupFilter: string = 'All';
  currentSlotFilter: string = 'All';
  currentRaidFilter: string = 'Antorus, the Burning Throne';

  tierGroups:string[] = ['Conqueror', 'Protector', 'Vanquisher'];
  tierSlots:string[] = ['Head', 'Shoulder', 'Chest', 'Back', 'Hands', 'Legs'];
  raids:string[] = ['Tomb of Sargeras', 'Antorus, the Burning Throne'];
  activeTierSlots:string[] = [];

  constructor(private battleNetService: BattleNetService, private guildMemberSorter: GuildMemberSorter) {}

  ngOnInit() {
    this.battleNetService.getGuildRoster().subscribe( guild => {
      this.guild = this.guildMemberSorter.sortByRankDescending(guild);
      this.isLoading = false;
      this.filterTierGroup(this.currentTierGroupFilter);
      this.filterTierSlot(this.currentSlotFilter)
    });
  }

  filterTierGroup(tierGroup:string){

    this.currentTierGroupFilter = tierGroup;

    if(tierGroup.toLowerCase() == 'all') {

      this.mythicTanks = this.guild.getMythicTanks();
      this.mythicHeals = this.guild.getMythicHeals();
      this.mythicRanged = this.guild.getMythicRanged();
      this.mythicMelee = this.guild.getMythicMelee();
      this.mythicTrials = this.guild.getMythicTrials();
      this.mythicBench = this.guild.getMythicBench();

    } else {

      this.mythicTanks = this.guild.getMythicTanks().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
      this.mythicHeals = this.guild.getMythicHeals().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
      this.mythicRanged = this.guild.getMythicRanged().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
      this.mythicMelee = this.guild.getMythicMelee().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
      this.mythicTrials = this.guild.getMythicTrials().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
      this.mythicBench = this.guild.getMythicBench().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);

    }

  }

  filterTierSlot(tierSlot:string){
    this.currentSlotFilter = tierSlot;

    if(tierSlot.toLowerCase() == 'all'){
      this.activeTierSlots = this.tierSlots;
    } else {
      this.activeTierSlots = [tierSlot];
    }
  }

  filterRaid(raid:string){
    this.currentRaidFilter = raid;
  }

}
