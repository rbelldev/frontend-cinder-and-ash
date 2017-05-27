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

  it('should set active for specified specialization', () => {
    const expectedActiveCharacterClassSpecialization = new CharacterClassSpecialization('Frost', 'DPS', false);
    const otherCharacterClassSpecialization = new CharacterClassSpecialization('Unholy', 'DPS', false);

    const characterClass = new CharacterClass('name', [
      expectedActiveCharacterClassSpecialization,
      otherCharacterClassSpecialization
    ]);

    characterClass.setActiveSpec('Frost');

    expect(characterClass.getActiveSpec()).toEqual(expectedActiveCharacterClassSpecialization);
    expect(expectedActiveCharacterClassSpecialization.active).toBeTruthy();
    expect(otherCharacterClassSpecialization.active).toBeFalsy();
  });

  it('should set active to false for other specializations expect for specified specialization', () => {
    const expectedActiveCharacterClassSpecialization = new CharacterClassSpecialization('Frost', 'DPS', false);
    const otherCharacterClassSpecialization = new CharacterClassSpecialization('Unholy', 'DPS', true);

    const characterClass = new CharacterClass('name', [
      expectedActiveCharacterClassSpecialization,
      otherCharacterClassSpecialization
    ]);

    characterClass.setActiveSpec('Frost');

    expect(characterClass.getActiveSpec()).toEqual(expectedActiveCharacterClassSpecialization);
    expect(expectedActiveCharacterClassSpecialization.active).toBeTruthy();
    expect(otherCharacterClassSpecialization.active).toBeFalsy();
  });

  it('should gracefully handle not finding a matching specialization', () => {
    const expectedActiveCharacterClassSpecialization = new CharacterClassSpecialization('Frost', 'DPS', false);
    const otherCharacterClassSpecialization = new CharacterClassSpecialization('Unholy', 'DPS', false);

    const characterClass = new CharacterClass('name', [
      expectedActiveCharacterClassSpecialization,
      otherCharacterClassSpecialization
    ]);

    characterClass.setActiveSpec('Arcane');

    expect(expectedActiveCharacterClassSpecialization.active).toBeFalsy();
    expect(otherCharacterClassSpecialization.active).toBeFalsy();
  });


});
