import {CharacterClassSpecialization} from "../character-class-specialization";
import {CharacterClass} from "../character-class";
describe('Character Class Specialization', () => {

  it('should have a constructor', () => {
    const expectedName = 'name';

    const expectedClassSpecs = [
      new CharacterClassSpecialization('Frost', 'DPS', false),
      new CharacterClassSpecialization('Unholy', 'DPS', false)
    ];

    const characterClass = new CharacterClass(expectedName, expectedClassSpecs);

    expect(characterClass.name).toEqual(expectedName);
    expect(characterClass.classSpecs).toEqual(expectedClassSpecs);
  });

  it('should get active spec', () => {
    const expectedActiveCharacterClassSpecialization = new CharacterClassSpecialization('Unholy', 'DPS', true);

    const characterClass = new CharacterClass('name', [
      new CharacterClassSpecialization('Frost', 'DPS', false),
      expectedActiveCharacterClassSpecialization
    ]);

    expect(characterClass.getActiveSpec()).toEqual(expectedActiveCharacterClassSpecialization);
  });

  it('should return undefined for active spec if not found', () => {
    const characterClass = new CharacterClass('name', [
      new CharacterClassSpecialization('Frost', 'DPS', false),
      new CharacterClassSpecialization('Unholy', 'DPS', false)
    ]);

    expect(characterClass.getActiveSpec()).toBeUndefined();
  });


});
