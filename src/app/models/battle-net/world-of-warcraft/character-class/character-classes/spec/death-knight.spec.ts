import {DeathKnight} from "../death-knight";

describe('Death Knight', () => {

  let deathKnight = new DeathKnight();
  const classColor = '#C41F3B';

  it('should have the correct class name', () => {
    expect(deathKnight.name).toEqual('Death Knight')
  });

  it('should have the correct class color', () => {
    expect(deathKnight.color).toEqual(classColor)
  });

  it('should have the correct alternative class color', () => {
    expect(deathKnight.altColor).toEqual(classColor)
  });

  describe('Class Specs', () => {

    it('Should have 3 class specs', () => {
      expect(deathKnight.classSpecs.length).toEqual(3);
    });

    it('Should have a Blood spec', () => {
      const spec = deathKnight.classSpecs.find(spec => {
        return spec.name == 'Blood'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('TANK')
    });

    it('Should have a Frost spec', () => {
      const spec = deathKnight.classSpecs.find(spec => {
        return spec.name == 'Frost'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Unholy spec', () => {
      const spec = deathKnight.classSpecs.find(spec => {
        return spec.name == 'Unholy'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

  });
});


