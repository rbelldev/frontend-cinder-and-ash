import {CharacterClassSpecialization} from "../character-class-specialization";
describe('Character Class Specialization', () => {

  it('should have a constructor', () => {
    const expectedName = 'name';
    const expectedRole = 'role';
    const expectedActive = true;

    const characterClassSpecialization = new CharacterClassSpecialization(expectedName, expectedRole, expectedActive);

    expect(characterClassSpecialization.name).toEqual(expectedName);
    expect(characterClassSpecialization.role).toEqual(expectedRole);
    expect(characterClassSpecialization.active).toEqual(expectedActive);

  });

});
