import {Druid} from "../druid";

describe('Druid', () => {

  let druid = new Druid();

  it('should have the correct class name', () => {
    expect(druid.name).toEqual('Druid')
  });

  describe('Class Specs', () => {

    it('Should have 4 class specs', () => {
      expect(druid.classSpecs.length).toEqual(4);
    });

    it('Should have a Balance spec', () => {
      const spec = druid.classSpecs.find(spec => {
        return spec.name == 'Balance'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Feral spec', () => {
      const spec = druid.classSpecs.find(spec => {
        return spec.name == 'Feral'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Guardian spec', () => {
      const spec = druid.classSpecs.find(spec => {
        return spec.name == 'Guardian'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('TANK')
    });

    it('Should have a Restoration spec', () => {
      const spec = druid.classSpecs.find(spec => {
        return spec.name == 'Restoration'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('HEALING')
    });

  });
});


