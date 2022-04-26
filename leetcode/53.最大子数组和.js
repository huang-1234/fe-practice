/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let ans = nums[0], sum = 0;
  for (let i = 0, leng = nums.length;i < leng; i++) {
    if (sum <= 0) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    ans = ans > sum ? ans : sum;
  }
  return ans;
};
// @lc code=end

