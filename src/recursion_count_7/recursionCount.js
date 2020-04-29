
const count7 = num => {
if (num < 7) return 0;

if (num % 10 === 7) {
    return 1 + count7(Math.floor(num / 10));
}
return count7(Math.floor(num /10));
}
module.exports = count7;