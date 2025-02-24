/**
 * https://leetcode.com/problems/string-to-integer-atoi
 */
var myAtoi = function (s) {
  const arr = s.split("");
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    if (isFirstSpace(a, result)) {
      continue;
    }
    if (
      isNumber(a) ||
      isFirstNegative(a, result) ||
      isFirstPositive(a, result)
    ) {
      result += a;
      continue;
    }
    break;
  }
  const min = Math.pow(-2, 31);
  const max = Math.pow(2, 31) - 1;
  let num = Number(result.trim());
  num = isNaN(num) ? 0 : num;
  if (num < min) return min;
  if (num > max) return max;
  return num;
};

var isNumber = function (str) {
  return /^\d+$/.test(str);
};

var isFirstNegative = function (str, result) {
  return str === "-" && result.length === 0;
};

var isFirstPositive = function (str, result) {
  return str === "+" && result.length === 0;
};

var isFirstSpace = function (str, result) {
  return str === " " && result.length === 0;
};

const s = "-12";
console.log(myAtoi(s));
