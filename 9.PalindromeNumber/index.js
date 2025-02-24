/**
 *
 * https://leetcode.com/problems/palindrome-number
 */
var isPalindrome = function (x) {
  const str = String(x);
  const strArr = str.split("");
  let revStr = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    const val = strArr[i];
    revStr += val;
  }
  if (str === revStr) {
    return true;
  }
  return false;
};

const x = 10001;
console.log(isPalindrome(x));
