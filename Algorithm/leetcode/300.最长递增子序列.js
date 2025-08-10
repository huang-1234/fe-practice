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

var lengthOfLIS = function(nums) {
	if (!nums || nums.length === 0) return 0;
  const dp = new Array(nums.length).fill(1);
  let maxRes = 1;
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1); // dp[i] = Math.max(dp[i], dp[j] + 1);
        maxRes = Math.max(maxRes, dp[i]);
			}
		}
	}
	return maxRes;
};
// @lc code=end

