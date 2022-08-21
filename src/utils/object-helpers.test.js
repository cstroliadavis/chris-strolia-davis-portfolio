import { toObjectArray } from "./object-helpers";

describe('Object Helpers', () => {

  describe('toObjectArray', () => {
    it('converts an array of arrays to an array of objects', () => {
      const source = [ [ 1, 2 ], [ 3, 6 ] ];
      const result = toObjectArray(source, 'from', 'to');
      expect(result).toEqual([ { from: 1, to: 2 }, { from: 3, to: 6 } ])
    });
  })
});
