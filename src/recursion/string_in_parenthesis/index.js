export const stringInParenthesis = string => {
    if (string === '') return string;

    const firstIndex = 0;
    const lastIndex = string.length - 1;

    if (string[firstIndex] === '(' && string[lastIndex] === ')') return string;

    if (string[lastIndex] != ')') {
        return stringInParenthesis(string.substring(0, lastIndex));
    }
    if (string[firstIndex] != '(') {
        return stringInParenthesis(string.substring(1, string.length));
    }
        
    
}
