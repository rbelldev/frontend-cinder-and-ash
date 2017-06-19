import {Character} from "../models/battle-net/world-of-warcraft/character";
/**
 * Created by Rob on 3/13/2017.
 */
export class TierAssessment {

  constructor(private character: Character) {
  }

  hasPiece(slotName: string): boolean {
    const tierName = this.classToTierNameMap[this.character.characterClass.name];
    const equippedItemInSlot = this.character.equippedItems[slotName];
    return equippedItemInSlot.name.indexOf(tierName) >= 0;
  }

  hasLeggo(slotName: string): boolean {
    const equippedItemInSlot = this.character.equippedItems[slotName];
    return equippedItemInSlot.itemLevel == 940 || equippedItemInSlot.itemLevel == 970;
  }

  needsBis(slotName: string): boolean {
    const characterBisList = this.characterToBis[this.character.name.toLowerCase()];

    if (characterBisList) {
      return characterBisList[slotName] == 'BIS';
    }

    return false;
  }

  getTierGroup(): string {
    return this.classToTierGroupMap[this.character.characterClass.name];
  }

  // classToTierNameMap = {
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

  characterToBis = {

    'elderwulf': {
      'head': 'BIS',
      'shoulder': 'OFF',
      'chest': 'BIS',
      'back': 'OFF',
      'hands': 'BIS',
      'legs': 'BIS'
    },

    'lepickle': {
      'head': 'BIS',
      'shoulder': 'OFF',
      'chest': 'BIS',
      'back': 'BIS',
      'hands': 'BIS',
      'legs': 'BIS'
    },

    'cattìbrie': {
      'head': 'BIS',
      'shoulder': 'BIS',
      'chest': 'BIS',
      'back': 'OFF',
      'hands': 'BIS',
      'legs': 'BIS'
    },

    'sçythér': {
      'head': 'BIS',
      'shoulder': 'OFF',
      'chest': 'OFF',
      'back': 'OFF',
      'hands': 'BIS',
      'legs': 'BIS'
    },

    'embersong': {
      'head': 'BIS',
      'shoulder': 'OFF',
      'chest': 'BIS',
      'back': 'BIS',
      'hands': 'OFF',
      'legs': 'BIS'
    },

    'graybrew': {
      'head': 'BIS',
      'shoulder': 'BIS',
      'chest': 'OFF',
      'back': 'BIS',
      'hands': 'OFF',
      'legs': 'BIS'
    },

    'halapeño': {
      'head': 'BIS',
      'shoulder': 'OFF',
      'chest': 'BIS',
      'back': 'BIS',
      'hands': 'BIS',
      'legs': 'OFF'
    },

    'djeckt': {
      'head': 'OFF',
      'shoulder': 'BIS',
      'chest': 'BIS',
      'back': 'OFF',
      'hands': 'BIS',
      'legs': 'BIS'
    },

    'revërie': {
      'head': 'OFF',
      'shoulder': 'BIS',
      'chest': 'BIS',
      'back': 'OFF',
      'hands': 'BIS',
      'legs': 'BIS'
    },

    'bigdoss': {
      'head': 'OFF',
      'shoulder': 'BIS',
      'chest': 'BIS',
      'back': 'BIS',
      'hands': 'OFF',
      'legs': 'BIS'
    },

    'knutè': {
      'head': 'OFF',
      'shoulder': 'BIS',
      'chest': 'BIS',
      'back': 'BIS',
      'hands': 'OFF',
      'legs': 'BIS'
    },

    'fredthemage': {
      'head': 'BIS',
      'shoulder': 'OFF',
      'chest': 'BIS',
      'back': 'BIS',
      'hands': 'BIS',
      'legs': 'OFF'
    },

    'kenlòre': {
      'head': 'BIS',
      'shoulder': 'BIS',
      'chest': 'OFF',
      'back': 'OFF',
      'hands': 'OFF',
      'legs': 'OFF'
    },

    'ravenoth': {
      'head': 'BIS',
      'shoulder': 'OFF',
      'chest': 'OFF',
      'back': 'BIS',
      'hands': 'BIS',
      'legs': 'BIS'
    },

    'twinslayerz': {
      'head': 'OFF',
      'shoulder': 'BIS',
      'chest': 'BIS',
      'back': 'OFF',
      'hands': 'BIS',
      'legs': 'BIS'
    },

    'supbae': {
      'head': 'OFF',
      'shoulder': 'BIS',
      'chest': 'BIS',
      'back': 'OFF',
      'hands': 'BIS',
      'legs': 'BIS'
    },

    'hezbolah': {
      'head': 'BIS',
      'shoulder': 'OFF',
      'chest': 'BIS',
      'back': 'BIS',
      'hands': 'OFF',
      'legs': 'BIS'
    },

    'kirelion': {
      'head': 'BIS',
      'shoulder': 'OFF',
      'chest': 'OFF',
      'back': 'BIS',
      'hands': 'BIS',
      'legs': 'BIS'
    },
  };

  // 'Head', 'Shoulder', 'Chest', 'Back', 'Hands', 'Legs'

  classToTierNameMap = {
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
