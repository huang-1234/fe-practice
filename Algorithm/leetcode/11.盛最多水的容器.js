/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxRes = 0, n = height.length;
  let left = 0, right = n - 1;
  while (left < right) {
    const leftEle = height[left], rightEle = height[right];
    const left1 = left + 1, right1 = right - 1;
    const minH = leftEle < rightEle ? leftEle : rightEle;
    maxRes = Math.max(maxRes, minH * (right - left));
    if (height[left] < height[left1]) {
      left = left1
    }else if (height[right] < height[right1]) {
      right = right1;
    } else {
      left++;
      right--;
    }
  }
  return maxRes
};
// @lc code=end

