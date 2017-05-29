import {Monk} from "../monk";

describe('Monk', () => {

  let monk = new Monk();
  const classColor = '#00FF96';

  it('should have the correct class name', () => {
    expect(monk.name).toEqual('Monk')
  });

  it('should have the correct class color', () => {
    expect(monk.color).toEqual(classColor)
  });

  it('should have the correct alternative class color', () => {
    expect(monk.altColor).toEqual(classColor)
  });

  describe('Class Specs', () => {

    it('Should have 3 class specs', () => {
      expect(monk.classSpecs.length).toEqual(3);
    });

    it('Should have a Brewmaster spec', () => {
      const spec = monk.classSpecs.find(spec => {
        return spec.name == 'Brewmaster'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('TANK')
    });

    it('Should have a Mistweaver spec', () => {
      const spec = monk.classSpecs.find(spec => {
        return spec.name == 'Mistweaver'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('HEALING')
    });

    it('Should have a Windwalker spec', () => {
      const spec = monk.classSpecs.find(spec => {
        return spec.name == 'Windwalker'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

  });
});


