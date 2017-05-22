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
  mythicTrials:GuildMember[];

  currentTierGroupFilter: string = 'All';
  currentSlotFilter: string = 'All';

  tierGroups:string[] = ['Conqueror', 'Protector', 'Vanquisher'];
  tierSlots:string[] = ['Head', 'Shoulder', 'Chest', 'Back', 'Hands', 'Legs'];
  activeTierSlots:string[] = [];

  constructor(private route: ActivatedRoute, private router: Router ,private guildMemberSorter: GuildMemberSorter) {}

  ngOnInit() {
    this.guild = this.guildMemberSorter.sortByRankDescending(this.route.snapshot.data['guild']);
    this.filterTierGroup(this.currentTierGroupFilter);
    this.filterTierSlot(this.currentSlotFilter)
  }

  filterTierGroup(tierGroup:string){

    this.currentTierGroupFilter = tierGroup;

    if(tierGroup.toLowerCase() == 'all') {

      this.mythicTanks = this.guild.getMythicTanks();
      this.mythicHeals = this.guild.getMythicHeals();
      this.mythicRanged = this.guild.getMythicRanged();
      this.mythicMelee = this.guild.getMythicMelee();
      this.mythicTrials = this.guild.getMythicTrials();

    } else {

      this.mythicTanks = this.guild.getMythicTanks().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
      this.mythicHeals = this.guild.getMythicHeals().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
      this.mythicRanged = this.guild.getMythicRanged().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
      this.mythicMelee = this.guild.getMythicMelee().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);
      this.mythicTrials = this.guild.getMythicTrials().filter( guildMember => guildMember.character.tierAssessment.getTierGroup() == tierGroup);

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

}
