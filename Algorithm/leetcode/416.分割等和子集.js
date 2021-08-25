6/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const nLen = nums.length;
  let sum = 0;
  if (nLen < 2) return false;
  let maxNum = 0;
  for (let i = 0;i < nLen;i++){
    sum += nums[i];
    maxNum = maxNum > nums[i] ? maxNum : nums[i];
  }
  if (sum % 2 !== 0) return false;
  let simeSum = Math.floor(sum / 2);
  if (maxNum > simeSum) return false;
  const dp = new Array(nLen+1).fill(0).map(v => new Array(simeSum + 1, false));
  for (let i = 0;i <= nLen;i++){
    dp[i][0] = true;
  }
  dp[0][nums[0]] = true;
  for (let i = 1;i <= nLen;i++){
    const num = nums[i];
    for (let j = 1;j <= simeSum; j++){
      if (j >= num) {
        dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[nLen][simeSum];

};
// @lc code=end

