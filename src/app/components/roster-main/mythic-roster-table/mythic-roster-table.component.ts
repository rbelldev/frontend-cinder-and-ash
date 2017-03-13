import {Component, Input} from '@angular/core';
import {GuildMember} from "../../../models/battle-net/world-of-warcraft/guild-member";
import {Router} from "@angular/router";
import {Item} from "../../../models/battle-net/world-of-warcraft/item/item";

@Component({
  selector: 'mythic-roster-table',
  templateUrl: 'mythic-roster-table.component.html',
  styleUrls: ['mythic-roster-table.component.css']
})
export class MythicRosterTableComponent {

  @Input() memberList: GuildMember[];
  @Input() label: string;

  constructor(private router:Router){}

  navigateToCharacterDetails(name:string){
    this.router.navigateByUrl(`/character/${name}`);
  }

  tierSlots:string[] = ['head', 'shoulder', 'chest', 'back',
                        'hands', 'legs']

  generateRelBonusForWowhead(item:Item):string{

    let relString = "";

    let enchant = item.tooltipParams.enchant;

    if(enchant){
      relString += "ench=" + enchant
    }

    const rawBonus = item.bonusLists;

    if(rawBonus) {

      if (enchant){ relString += "&" }
      relString += "bonus=";

      for (let i = 0; i < rawBonus.length; i++) {
        relString += rawBonus[i];
        if (i != (rawBonus.length - 1)) {
          relString += ':'
        }
      }

    }

    return relString;
  }

}
