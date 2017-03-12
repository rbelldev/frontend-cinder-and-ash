import {Component, Input} from '@angular/core';
import {GuildMember} from "../../../models/battle-net/world-of-warcraft/guild-member";
import {Router} from "@angular/router";

@Component({
  selector: 'roster-table',
  templateUrl: 'roster-table.component.html',
  styleUrls: ['roster-table.component.css']
})
export class RosterTableComponent {

  @Input() memberList: GuildMember[];
  @Input() label: string;

  constructor(private router:Router){}

  navigateToCharacterDetails(name:string){
    this.router.navigateByUrl(`/character/${name}`);
  }

}
