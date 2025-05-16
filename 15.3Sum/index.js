/**
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  if (nums.length < 3 && nums.length > 3000) return [];
  let result = [];
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let k = i + 1;
    let j = nums.length - 1;
    while (k < j) {
      let sum = nums[i] + nums[k] + nums[j];
      if (sum === 0) {
        result.push([nums[i], nums[k], nums[j]]);
        while (k < j && nums[k] === nums[k + 1]) k++;
        while (k < j && nums[j] === nums[j - 1]) j--;
        k++;
        j--;
      } else if (sum < 0) {
        k++;
      } else {
        j--;
      }
    }
    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return result;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 1, 1]));
// console.log(threeSum([0, 0, 0, 0]));
console.log(
  threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10])
);
