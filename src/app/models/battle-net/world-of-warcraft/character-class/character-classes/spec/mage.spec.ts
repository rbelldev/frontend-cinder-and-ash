import {Mage} from "../mage";

describe('Mage', () => {

  let mage = new Mage();
  const classColor = '#69CCF0';

  it('should have the correct class name', () => {
    expect(mage.name).toEqual('Mage')
  });

  it('should have the correct class color', () => {
    expect(mage.color).toEqual(classColor)
  });

  it('should have the correct alternative class color', () => {
    expect(mage.altColor).toEqual(classColor)
  });

  describe('Class Specs', () => {

    it('Should have 3 class specs', () => {
      expect(mage.classSpecs.length).toEqual(3);
    });

    it('Should have a Arcane spec', () => {
      const spec = mage.classSpecs.find(spec => {
        return spec.name == 'Arcane'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Frost spec', () => {
      const spec = mage.classSpecs.find(spec => {
        return spec.name == 'Frost'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Fire spec', () => {
      const spec = mage.classSpecs.find(spec => {
        return spec.name == 'Fire'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

  });
});


