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
var lengthOfLIS = function (nums) {
  const nLen = nums.length;
  if (nLen = 1) return nums;
  const memo = new Array(nLen + 1).fill(1e-6);

  let ans = Number.MIN_VALUE;
  const tempCount = 0;
  for (let i = 0;i < nLen;i++){
    
  }
};
// @lc code=end

