import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Guild} from "../../models/battle-net/world-of-warcraft/guild";
import {GuildMemberSorter} from "../../models/utilities/guild-member-sorter";

@Component({
  selector: 'roster-main',
  templateUrl: 'roster-main.component.html',
  styleUrls: ['roster-main.component.css'],
  providers: [GuildMemberSorter]
})
export class RosterMainComponent {

  guild: Guild;

  constructor(private route: ActivatedRoute, private guildMemberSorter: GuildMemberSorter) {}

  ngOnInit() {
    this.guild = this.guildMemberSorter.sortByRankDescending(this.route.snapshot.data['guild']);
  }

}
