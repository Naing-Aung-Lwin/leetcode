/**
 * https://leetcode.com/problems/reverse-integer/description/
 */
var reverse = function (x) {
  const min = Math.pow(-2, 31);
  const max = Math.pow(2, 31) - 1;
  const str = String(Math.abs(x));
  let res = "";
  const isNegative = x < 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === 0 && i === str.length - 1) {
      continue;
    }
    res += str[i];
  }
  if (isNegative) res = "-" + res;
  res = Number(res);
  if (res < min || res > max) return 0;
  return Number(res);
};

const x = -12554432;
console.log(reverse(x));
