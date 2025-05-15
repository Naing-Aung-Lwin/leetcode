/**
 * https://leetcode.com/problems/integer-to-roman/description/
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  const roman = [
    {
      I: 1,
      V: 5,
    },
    {
      X: 10,
      L: 50,
    },
    {
      C: 100,
      D: 500,
    },
    {
      M: 1000,
    },
  ];
  const specialNum = ["4", "9"];
  let result = "";

  const numArr = destructNum(num);

  for (let i = 0; i < numArr.length; i++) {
    const curr = numArr[i];
    const rIndex = curr.length - 1;
    const romanObj = roman[rIndex];
    if (specialNum.includes(curr[0])) {
      result += generateForSpecialNumber(curr, roman, romanObj, rIndex);
    } else {
      result += generateForNormalNumber(romanObj, curr);
    }
  }
  return result;
};

const destructNum = (num) => {
  const numArr = [];
  const numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    const decimalCount = numStr.length - (i + 1);
    let value = numStr[i];
    for (let i = 0; i < decimalCount; i++) {
      value += "0";
    }
    numArr.push(value);
  }
  return numArr;
};

const generateForSpecialNumber = (curr, roman, romanObj, rIndex) => {
  let result = "";
  if (curr[0] === "4") {
    let val = "";
    Object.keys(romanObj).forEach((k) => {
      val += k;
    });
    result += val;
  } else if (curr[0] === "9") {
    const currentKey = Object.keys(romanObj)[0];
    const nextObj = roman[rIndex + 1];
    const nextKey = Object.keys(nextObj)[0];
    result += currentKey + nextKey;
  }
  return result;
};

const generateForNormalNumber = (romanObj, curr) => {
  let prev = [];
  let result = "";
  Object.keys(romanObj).forEach((k) => {
    if (romanObj[k] === parseInt(curr)) {
      result += k;
      prev = [];
    } else if (romanObj[k] < parseInt(curr)) {
      prev.push({
        key: k,
        value: romanObj[k],
      });
    }
  });
  if (prev.length > 0) {
    const lstIndex = prev.length - 1;
    const firstIndex = 0;
    let val = "";
    let start = 0;
    if (parseInt(curr) > prev[lstIndex].value) {
      val += prev[lstIndex].key;
      start += prev[lstIndex].value;
    }
    while (start < parseInt(curr)) {
      start += prev[firstIndex].value;
      val += prev[firstIndex].key;
    }
    result += val;
  }
  return result;
};

console.log(intToRoman(1994));
