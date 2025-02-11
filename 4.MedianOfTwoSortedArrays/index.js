/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const totalLength = m + n;
  if (m < 0 || m > 1000) return 0;
  if (n < 0 || n > 1000) return 0;
  if (totalLength < 1 || totalLength > 2000) return 0;

  const maxNumber = Math.pow(10, 6);
  const minNumber = Math.pow(-10, 6);

  const mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);

  for (let i = 0; i < mergedArr.length; i++) {
    if (mergedArr[i] < minNumber || mergedArr[i] > maxNumber) continue;
  }

  const arrLength = mergedArr.length;
  const mod = arrLength % 2;
  const dividedVal = Math.trunc(arrLength / 2);
  if (mod !== 0) {
    return mergedArr[dividedVal];
  }
  return (mergedArr[dividedVal -1] + mergedArr[dividedVal]) / 2;
};

const nums1 = [1,2];
const nums2 = [3,4, 5];
console.log(findMedianSortedArrays(nums1, nums2));
