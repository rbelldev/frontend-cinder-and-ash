import {Warrior} from "../character-classes/warrior";
import {Paladin} from "../character-classes/paladin";
import {Hunter} from "../character-classes/hunter";
import {Rouge} from "../character-classes/rouge";
import {Priest} from "../character-classes/priest";
import {DeathKnight} from "../character-classes/death-knight";
import {Shaman} from "../character-classes/shaman";
import {Mage} from "../character-classes/mage";
import {Warlock} from "../character-classes/warlock";
import {Monk} from "../character-classes/monk";
import {DemonHunter} from "../character-classes/demon-hunter";
import {Druid} from "../character-classes/druid";
import {CharacterClassFactory} from "../character-class-factory";

describe('Character Class Factory', () => {

  const classObjectOrder = [
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

  it('should build the correct classes', () => {
    for(let i = 0; i < classObjectOrder.length; i++){
      const actualClass = CharacterClassFactory.buildClass(i);
      const expectedClass = classObjectOrder[i];

      expect(actualClass).toEqual(expectedClass, `Actual Class: ${actualClass} -- Expected Class: ${expectedClass}`);
    }
  });

});
