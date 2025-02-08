/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  let targetFound = false;
  if (nums.length < 2 || nums.length > Math.pow(10, 4)) {
    return result;
  }
  if (target < Math.pow(-10, 9) || target > Math.pow(10, 9)) {
    return result;
  }
  nums.forEach((current, index) => {
    if (current < Math.pow(-10, 9) || current > Math.pow(10, 9)) return;
    if (index + 1 >= nums.length || targetFound) return;
    const arr = nums.slice(index + 1, nums.length);
    const nextIndex = index + 1;

    arr.forEach((a, i) => {
      if (current + a === target) {
        result = [index, nextIndex + i];
        targetFound = true;
        return;
      }
    });
  });
  return result;
};

const nums = [3, 1, 3, 4];
const target = 6;

twoSum(nums, target);
