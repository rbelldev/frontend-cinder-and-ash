import {DemonHunter} from "../demon-hunter";

describe('Demon Hunter', () => {

  let demonHunter = new DemonHunter();

  it('should have the correct class name', () => {
    expect(demonHunter.name).toEqual('Demon Hunter')
  });

  describe('Class Specs', () => {

    it('Should have 2 class specs', () => {
      expect(demonHunter.classSpecs.length).toEqual(2);
    });

    it('Should have a Havoc spec', () => {
      const spec = demonHunter.classSpecs.find(spec => {
        return spec.name == 'Havoc'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('DPS')
    });

    it('Should have a Vengeance spec', () => {
      const spec = demonHunter.classSpecs.find(spec => {
        return spec.name == 'Vengeance'
      });

      expect(spec).toBeDefined();
      expect(spec.role).toEqual('TANK')
    });

  });
});


