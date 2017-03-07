import {Component, OnInit} from '@angular/core';
import {Character} from "../../../models/battle-net/world-of-warcraft/character";
import {ActivatedRoute} from "@angular/router";
import {Item} from "../../../models/battle-net/world-of-warcraft/item/item";

@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit{

  character:Character;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.character = this.route.snapshot.data['character'];
  }

  generateRelForWowhead(item:Item):string{
    let gems = '';
    let ench = '';
    let pcs = '';

    if(item.tooltipParams.enchant){
      ench += item.tooltipParams.enchant;
    }

    const rawSetCodes = item.tooltipParams.set;

    if(rawSetCodes) {

      for (let i = 0; i < rawSetCodes.length; i++) {
        pcs += rawSetCodes[i];
        if (i != (rawSetCodes.length - 1)) {
          pcs += ':'
        }
      }

    }

    let params = '';

    if(ench.length > 0){
      params += 'ench=' + ench + '&'
    }

    if(pcs.length > 0){
      params += 'pcs=' + pcs
    }

    return params;
  }

}
