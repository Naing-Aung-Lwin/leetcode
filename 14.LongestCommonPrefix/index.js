/**
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 1 && strs.length > 200) {
    return "";
  }
  const first = strs[0];
  let result = "";
  let isBreak = false;
  for (let i = 0; i < first.length; i++) {
    if (isBreak) {
      break;
    }
    let prev = result;
    let curr = prev + first[i];
    for (let j = 1; j < strs.length; j++) {
      if (!strs[j].startsWith(curr)) {
        curr = prev;
        isBreak = true;
        break;
      }
    }
    result = curr;
  }
  return result;
};

console.log(longestCommonPrefix(["c", "acc", "ccc"]));
