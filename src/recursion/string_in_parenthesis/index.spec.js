import { stringInParenthesis } from './index';

describe('checking for a string in parentheses', () => {
  [
    { valueToTest: 'jjj(abc)lll', expectedResult: '(abc)' },
    { valueToTest: '()', expectedResult: '()' },
    { valueToTest: '', expectedResult: '' },
  ].forEach(({ valueToTest, expectedResult }) => {
    describe(`In the value: ${valueToTest}`, () => {
      let result;

      beforeEach(() => {
        result = stringInParenthesis(valueToTest);
      });

      it(`should find: ${expectedResult}`, () => {
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
