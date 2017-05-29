import {Hunter} from "../hunter";

describe('Hunter', () => {

  let hunter = new Hunter();
  const classColor = '#ABD473';

  it('should have the correct class name', () => {
    expect(hunter.name).toEqual('Hunter')
  });

  it('should have the correct class color', () => {
    expect(hunter.color).toEqual(classColor)
  });

  it('should have the correct alternative class color', () => {
    expect(hunter.altColor).toEqual(classColor)
  });

  describe('Class Specs', () => {

    it('Should have 3 class specs', () => {
      expect(hunter.classSpecs.length).toEqual(3);
    });

    it('Should have a Beast Mastery spec', () => {
      const spec = hunter.classSpecs.find(spec => {
        return spec.name == 'Beast Mastery'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Marksmanship spec', () => {
      const spec = hunter.classSpecs.find(spec => {
        return spec.name == 'Marksmanship'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Survival spec', () => {
      const spec = hunter.classSpecs.find(spec => {
        return spec.name == 'Survival'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

  });
});

