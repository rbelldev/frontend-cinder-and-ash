import {Hunter} from "../hunter";

describe('Hunter', () => {

  let paladin = new Hunter();

  it('should have the correct class name', () => {
    expect(paladin.name).toEqual('Hunter')
  });

  describe('Class Specs', () => {

    it('Should have 3 class specs', () => {
      expect(paladin.classSpecs.length).toEqual(3);
    });

    it('Should have a Beast Mastery spec', () => {
      const spec = paladin.classSpecs.find(spec => {
        return spec.name == 'Beast Mastery'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Marksmanship spec', () => {
      const spec = paladin.classSpecs.find(spec => {
        return spec.name == 'Marksmanship'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Survival spec', () => {
      const spec = paladin.classSpecs.find(spec => {
        return spec.name == 'Survival'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

  });
});

