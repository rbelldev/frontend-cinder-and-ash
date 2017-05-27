import {CharacterClass} from "./character-class";
import {Warrior} from "./character-classes/warrior";
import {Paladin} from "./character-classes/paladin";
import {Hunter} from "./character-classes/hunter";
import {Rouge} from "./character-classes/rouge";
import {Priest} from "./character-classes/priest";
import {DeathKnight} from "./character-classes/death-knight";
import {Shaman} from "./character-classes/shaman";
import {Mage} from "./character-classes/mage";
import {Warlock} from "./character-classes/warlock";
import {Monk} from "./character-classes/monk";
import {Druid} from "./character-classes/druid";
import {DemonHunter} from "./character-classes/demon-hunter";

export class CharacterClassFactory {

  private static classObjectOrder: CharacterClass[] = [
    null,
    new Warrior(),
    new Paladin(),
    new Hunter(),
    new Rouge(),
    new Priest(),
    new DeathKnight(),
    new Shaman(),
    new Mage(),
    new Warlock(),
    new Monk(),
    new Druid(),
    new DemonHunter()
  ];

  public static buildClass(classIndex:number):CharacterClass{
    return CharacterClassFactory.classObjectOrder[classIndex];
  }

}
