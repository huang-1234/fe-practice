/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let start = 0, ans = 1;
  for (let i = 0;i < len;i++) {
    if (nums[i] <= 0) {
      continue;
    } else if (i === len) {
      break;
    } else {
      if (nums[i] === 1) {
        ans = nums[i];
        break;
      } else if (nums[i + 1] === nums[i] + 1) {
        continue;
      } else {
        ans = nums[i] + 1;
        break;
      }
    }
  }
  return ans;
};
// @lc code=end

