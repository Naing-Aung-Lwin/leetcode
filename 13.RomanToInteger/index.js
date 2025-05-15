/**
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const strLen = s.length;
  const specialRoman = ["IV", "IX", "XL", "XC", "CD", "CM"];
  let skip = false;
  let result = 0;
  for (let i = 0; i < strLen; i++) {
    if (skip) {
      skip = false;
      continue;
    }
    const curr = s[i];
    let next = "";
    if (i !== strLen - 1) {
      next = s[i + 1];
    }
    if (next && specialRoman.includes(curr + next)) {
      skip = true;
      result += roman[next] - roman[curr];
    } else {
      result += roman[curr];
    }
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
