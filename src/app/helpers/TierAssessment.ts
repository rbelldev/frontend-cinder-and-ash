import {Character} from "../models/battle-net/world-of-warcraft/character";
/**
 * Created by Rob on 3/13/2017.
 */
export class TierAssessment {

  constructor(private character:Character){}

  hasPiece(slotName:string):boolean{
    const tierName = this.tierNameToClassMap[this.character.class];
    const equippedItemInSlot = this.character.equippedItems[slotName];
    return equippedItemInSlot.name.indexOf(tierName) >= 0 || equippedItemInSlot.itemLevel == 940;
  }

  tierNameToClassMap = {
    'Warrior':'Obsidian Aspect',
    'Paladin':'Highlord',
    'Hunter':'Eagletalon',
    'Rogue':'Doomblade',
    'Priest':'Purifier',
    'Death Knight':'Dreadwyrm',
    'Shaman':'Shackled Elements',
    'Mage':'Everburning Knowledge',
    'Warlock':'Azj\'Aqir',
    'Monk':'Enveloped Dissonance',
    'Druid':'Astral Warden',
    'Demon Hunter':'Second Sight'
  }

}
