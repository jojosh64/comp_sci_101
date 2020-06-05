export const reverseInt = num => {
let reverseNum = 0
let lastDigit;

// handling overflow cases
if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) return 0;

//handling negative number input cases
if (num < 0) {
    num = num * -1;
    return reverseInt(num) * -1;
}

while (num > 0) {
    lastDigit = num % 10;
    reverseNum = (reverseNum * 10) + lastDigit;
    num = Math.floor(num / 10);
}
return reverseNum;
}
