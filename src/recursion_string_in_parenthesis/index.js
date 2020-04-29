export const stringInParenthesis = string => {
    if (string[0] === '(' && string[string.length - 1] === ')') return string;

    if (string[string.length - 1] != ")") {
        return stringInParenthesis(string.substring(0, string.length - 1));
    }
    if (string[0] != "(") {
        return stringInParenthesis(string.substring(1, string.length));
    }
        
    
}
