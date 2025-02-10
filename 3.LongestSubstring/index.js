/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
  var lengthOfLongestSubstring = function (str) {
    if (!str) return 0;
  const s = str.split("");
  if (s.length === 1) return 1;

  let subStrArr = [];
  for (let i = 0; i < s.length; i++) {
    const arr = [s[i]];
    for (let j = i + 1; j < s.length; j++) {
      const isInclude = arr.some(a => a === s[j])
      if (!isInclude) {
        arr.push(s[j]);
      } else {
        break;
      }
    }
    subStrArr.push(arr.length);
  }
  return subStrArr.sort((a,b) => b -a)[0] || 1;
};

const s = "";
console.log(lengthOfLongestSubstring(s));
