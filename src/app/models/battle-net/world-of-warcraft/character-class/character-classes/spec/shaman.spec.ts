import {DeathKnight} from "../death-knight";
import {Shaman} from "../shaman";

describe('Shaman', () => {

  let shaman = new Shaman();

  it('should have the correct class name', () => {
    expect(shaman.name).toEqual('Shaman')
  });

  describe('Class Specs', () => {

    it('Should have 3 class specs', () => {
      expect(shaman.classSpecs.length).toEqual(3);
    });

    it('Should have a Elemental spec', () => {
      const spec = shaman.classSpecs.find(spec => {
        return spec.name == 'Elemental'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Enhancement spec', () => {
      const spec = shaman.classSpecs.find(spec => {
        return spec.name == 'Enhancement'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Restoration spec', () => {
      const spec = shaman.classSpecs.find(spec => {
        return spec.name == 'Restoration'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('HEALING')
    });

  });
});


