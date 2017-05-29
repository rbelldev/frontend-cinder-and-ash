import {CharacterClass} from "./character-class";
import {Warrior} from "./character-classes/warrior";
import {Paladin} from "./character-classes/paladin";
import {Hunter} from "./character-classes/hunter";
import {Rogue} from "./character-classes/rogue";
import {Priest} from "./character-classes/priest";
import {DeathKnight} from "./character-classes/death-knight";
import {Shaman} from "./character-classes/shaman";
import {Mage} from "./character-classes/mage";
import {Warlock} from "./character-classes/warlock";
import {Monk} from "./character-classes/monk";
import {Druid} from "./character-classes/druid";
import {DemonHunter} from "./character-classes/demon-hunter";

export class CharacterClassFactory {

  public static buildClass(classIndex:number):CharacterClass{
    switch (classIndex) {
      case 0:
        return null;
      case 1:
        return new Warrior();
      case 2:
        return new Paladin();
      case 3:
        return new Hunter();
      case 4:
        return new Rogue();
      case 5:
        return new Priest();
      case 6:
        return new DeathKnight();
      case 7:
        return new Shaman();
      case 8:
        return new Mage();
      case 9:
        return new Warlock();
      case 10:
        return new Monk();
      case 11:
        return new Druid();
      case 12:
        return new DemonHunter();
      default:
        return null;

    }
  }

}
