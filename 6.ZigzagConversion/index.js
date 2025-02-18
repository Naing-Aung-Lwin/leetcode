/**
 * https://leetcode.com/problems/zigzag-conversion/description
 */

const convert = (s, numRows) => {
  if (numRows === 1) {
    return s;
  }
  const arr = generateArray(numRows);
  let index = 0;
  let increase = true;
  for (let i = 0; i < s.length; i++) {
    if (increase) {
      index += 1;
    } else {
      index -= 1;
    }
    if (index === numRows || (index == 1 && i !== 0)) {
      increase = !increase;
    }
    console.log(index, s[i]);
    arr[index - 1].push(s[i]);
  }
  return arr
    .map((a) => {
      return a.join("");
    })
    .join("");
};

const generateArray = (numRows) => {
  const arr = [];
  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }
  return arr;
};

const s = "AB";
const numRows = 1;
console.log(convert(s, numRows));
