/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 */

var isReverseEqual = function (arr) {
  const str = arr.join("");
  let strReverse = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    strReverse += arr[i];
  }
  if (str === strReverse) return true;
  return false;
};

var longestPalindrome = function (s) {
  if (s.length < 1 || s.length > 1000) return "";
  const palindromic = [];
  const strArray = s.split("");
  for (let i = 0; i < strArray.length; i++) {
    const parentValue = strArray[i];
    const arr = [parentValue];
    for (let j = i + 1; j < strArray.length; j++) {
      const childValue = strArray[j];
      arr.push(childValue);
      if (isReverseEqual(arr)) {
        palindromic.push(arr.join(""));
      }
    }
  }
  let result = s;
  if (palindromic.length > 0) {
    const sortedArr = palindromic.sort((a, b) => b.length - a.length);
    result = sortedArr[0];
  }
  return result;
};

const s = "jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel";
console.log(longestPalindrome(s));
