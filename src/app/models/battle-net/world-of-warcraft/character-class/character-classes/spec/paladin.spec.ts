import {Paladin} from "../paladin";
describe('Paladin', () => {

  let paladin = new Paladin();

  it('should have the correct class name', () => {
    expect(paladin.name).toEqual('Paladin')
  });

  describe('Class Specs', () => {

    it('Should have 3 class specs', () => {
      expect(paladin.classSpecs.length).toEqual(3);
    });

    it('Should have a Holy spec', () => {
      const spec = paladin.classSpecs.find(spec => {
        return spec.name == 'Holy'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('HEALING')
    });

    it('Should have a Retribution spec', () => {
      const spec = paladin.classSpecs.find(spec => {
        return spec.name == 'Retribution'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Protection spec', () => {
      const spec = paladin.classSpecs.find(spec => {
        return spec.name == 'Protection'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('TANK')
    });

  });
});

