import { count7 } from './index';

describe('counting for occurences of 7', () => {
  [
    [717, 2],
    [7, 1],
    [123, 0],
  ].forEach(([valueToCheck, expectedResults]) => {
    describe(`In the value: ${valueToCheck}`, () => {
      let result;

      beforeEach(() => {
        result = count7(valueToCheck);
      });

      it(`should find: ${expectedResults} occurences`, () => {
        expect(result).toEqual(expectedResults);
      });
    });
  });
});
