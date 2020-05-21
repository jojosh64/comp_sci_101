import { reverseInt } from "./index";

describe('reversing given signed integers', () => {
    [
        [123, 321],
        [-123, -321],
        [120, 21],
        [Math.pow(2, 31), 0],
        [Math.pow(-2, 31) - 1, 0]
    ].forEach(([value, expectedResult]) => {
        describe(`The reversed value of : ${value}`, () => {
            let result;

            beforeEach(() => {
                result = reverseInt(value)
            });

            it(`Should be : ${expectedResult}`, () => {
                expect(result).toEqual(expectedResult);
            });
        });
    });
});