import {Character} from "../models/battle-net/world-of-warcraft/character";
/**
 * Created by Rob on 3/13/2017.
 */
export class TierAssessment {

  constructor(private character: Character) {
  }

  hasPiece(slotName: string, raid:string): boolean {
    switch (raid){

      case "All":
        return this._hasToSPiece(slotName) || this._hasABTPiece(slotName);

      case "Tomb of Sargeras":
        return this._hasToSPiece(slotName);

      case "Antorus, the Burning Throne":
        return this._hasABTPiece(slotName);

      default:
        return false;
    }
  }

  _hasToSPiece(slotName: string): boolean {
    const tierName = this.classToTierNameMap_ToS[this.character.characterClass.name];
    const equippedItemInSlot = this.character.equippedItems[slotName];
    return equippedItemInSlot.name.indexOf(tierName) >= 0;
  }

  _hasABTPiece(slotName: string): boolean {
    const tierName = this.classToTierNameMap_ABT[this.character.characterClass.name];
    const equippedItemInSlot = this.character.equippedItems[slotName];
    return equippedItemInSlot.name.indexOf(tierName) >= 0;
  }

  hasLeggo(slotName: string): boolean {
    const equippedItemInSlot = this.character.equippedItems[slotName];
    return equippedItemInSlot.itemLevel == 970;
  }

  getTierGroup(): string {
    return this.classToTierGroupMap[this.character.characterClass.name];
  }

  // classToTierNameMap_NH = {
  //   'Warrior':'Obsidian Aspect',
  //   'Paladin':'Highlord',
  //   'Hunter':'Eagletalon',
  //   'Rogue':'Doomblade',
  //   'Priest':'Purifier',
  //   'Death Knight':'Dreadwyrm',
  //   'Shaman':'Shackled Elements',
  //   'Mage':'Everburning Knowledge',
  //   'Warlock':'Azj\'Aqir',
  //   'Monk':'Enveloped Dissonance',
  //   'Druid':'Astral Warden',
  //   'Demon Hunter':'Second Sight'
  // };

  classToTierNameMap_ToS = {
    'Warrior': 'Titanic Onslaught',
    'Paladin': 'Radiant Lightbringer',
    'Hunter': 'Wildstalker',
    'Rogue': 'Fanged Slayer\'s',
    'Priest': 'Blind Absolution',
    'Death Knight': 'Gravewarden',
    'Shaman': 'Skybreaker',
    'Mage': 'Arcane Tempest',
    'Warlock': 'Diabolic',
    'Monk': 'Xuen\'s',
    'Druid': 'Stormheart',
    'Demon Hunter': 'Demonbane'
  };

  classToTierNameMap_ABT = {
    'Warrior': 'Juggernaut',
    'Paladin': 'Light\'s Vanguard',
    'Hunter': 'Serpentstalker',
    'Rogue': 'Dashing Scoundrel',
    'Priest': 'Gilded Seraph\'s',
    'Death Knight': 'Dreadwake',
    'Shaman': 'Venerated Spirits',
    'Mage': 'Runebound',
    'Warlock': 'Grim Inquisitor\'s',
    'Monk': 'Chi\'ji',
    'Druid': 'Bearmantle',
    'Demon Hunter': 'Felreaper'
  };

  classToTierGroupMap = {
    'Warrior': 'Protector',
    'Paladin': 'Conqueror',
    'Hunter': 'Protector',
    'Rogue': 'Vanquisher',
    'Priest': 'Conqueror',
    'Death Knight': 'Vanquisher',
    'Shaman': 'Protector',
    'Mage': 'Vanquisher',
    'Warlock': 'Conqueror',
    'Monk': 'Protector',
    'Druid': 'Vanquisher',
    'Demon Hunter': 'Conqueror'
  }


}
