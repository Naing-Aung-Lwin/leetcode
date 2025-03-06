/**
 * https://leetcode.com/problems/container-with-most-water/
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let area = width * minHeight;
        max = Math.max(max, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}

const height = [1,8,6,2,5,4,8,3,7];
maxArea(height);
