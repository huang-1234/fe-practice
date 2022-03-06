/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length === 0) {
    return 0
  }
  const len = height.length;
  const leftMax = new Array(len).fill(0);
  leftMax[0] = height[0];
  const rightMax = new Array(len).fill(0);
  rightMax[len - 1] = height[len - 1];
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }
  for (let i = len-2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  };
  let ans = 0;
  for (let i = 0; i < len; i++) {
    const min = Math.min(leftMax[i], rightMax[i]);
    console.log(min - height[i])
    ans += min - height[i];
  };
  return ans;
};
// @lc code=end

