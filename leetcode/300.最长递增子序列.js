/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length;
  if (len <= 1) {
    return len;
  }
  const dp = new Array(len).fill(1);
  dp[0] = 1;
  for (let i = 0;i < len;i++) {
    for (let j = 0;j < i;j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
console.log('res', lengthOfLIS(
  [1,3,6,7,9,4,10,5,6]))
// @lc code=end

