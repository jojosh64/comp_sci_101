import { stringInParenthesis } from './index';

test('return (abc) from jjj(abc)lll', () => {
    expect(stringInParenthesis("jjj(abc)lll")).toBe("(abc)");
})