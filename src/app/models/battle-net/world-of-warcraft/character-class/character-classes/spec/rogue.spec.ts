import {Rogue} from "../rogue";

describe('Rogue', () => {

  let rouge = new Rogue();
  const classColor = '#FFF569';

  it('should have the correct class name', () => {
    expect(rouge.name).toEqual('Rogue')
  });

  it('should have the correct class color', () => {
    expect(rouge.color).toEqual(classColor)
  });

  it('should have the correct alternative class color', () => {
    expect(rouge.altColor).toEqual(classColor)
  });

  describe('Class Specs', () => {

    it('Should have 3 class specs', () => {
      expect(rouge.classSpecs.length).toEqual(3);
    });

    it('Should have a Assassination spec', () => {
      const spec = rouge.classSpecs.find(spec => {
        return spec.name == 'Assassination'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Outlaw spec', () => {
      const spec = rouge.classSpecs.find(spec => {
        return spec.name == 'Outlaw'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Subtlety spec', () => {
      const spec = rouge.classSpecs.find(spec => {
        return spec.name == 'Subtlety'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

  });
});

