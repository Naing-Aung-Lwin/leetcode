/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 1 || s.length > 1000) return "";
  const palindromic = [];
  const strArray = s.split("");
  for (let i = 0; i < strArray.length; i++) {
    const parentValue = strArray[i];
    let arr = [parentValue];
    let isSame = false
    for (let j = i + 1; j < strArray.length; j++) {
      const childValue = strArray[j];
      if (isSame && parentValue !== childValue) {
        break;
      }
      if (parentValue === childValue) {
        isSame = true;
      }
      arr.push(childValue)
    }
    console.log(arr, isSame)
    palindromic.push({arr, isSame})
  }
  const isPalindromic = palindromic.filter(p => p.isSame);
  if (isPalindromic && isPalindromic.length > 0) {
    return isPalindromic[0].arr.join('')
  }
  return palindromic[0].arr.join('');
};

const s = "ac";
console.log(longestPalindrome(s));
