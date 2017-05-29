import {Warlock} from "../Warlock";

describe('Warlock', () => {
describe('Warlock', () => {

  let warlock = new Warlock();

  it('should have the correct class name', () => {
    expect(warlock.name).toEqual('Warlock')
  });

  it('should have the correct class color', () => {
    expect(warlock.color).toEqual('#9482C9')
  });

  describe('Class Specs', () => {

    it('Should have 3 class specs', () => {
      expect(warlock.classSpecs.length).toEqual(3);
    });

    it('Should have a Affliction spec', () => {
      const spec = warlock.classSpecs.find(spec => {
        return spec.name == 'Affliction'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Demonology spec', () => {
      const spec = warlock.classSpecs.find(spec => {
        return spec.name == 'Demonology'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Destruction spec', () => {
      const spec = warlock.classSpecs.find(spec => {
        return spec.name == 'Destruction'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

  });
});


