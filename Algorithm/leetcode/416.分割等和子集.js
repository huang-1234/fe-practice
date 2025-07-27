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
  if (nLen < 2) return false;
  let maxNum = 0;
  const sumAll = nums.reduce((currentSum, current) => {
    maxNum = Math.max(maxNum, current);
    return currentSum + current;
  });
  if (sumAll % 2 !== 0) return false;
  let target = Math.floor(sumAll / 2);
  if (maxNum > target) return false;
  /**
   * 创建一个一维数组，用来保存中间结果; dp[i] 表示是否可以找到和为 i 的子集
   */
  const dp = new Array(target + 1).fill(false)
  dp[0] = true;
  for (let i = 1;i <= nLen;i++){
    const num = nums[i];
    for (let remain = target; remain >= num; remain--){
      dp[remain] = dp[remain] || dp[remain - num];
    }
  }
  return dp[target];
};
// @lc code=end

// var canPartition = function(nums) {
//   const nLen = nums.length;
//   let sum = 0;
//   if (nLen < 2) return false;
//   let maxNum = 0;
//   for (let i = 0;i < nLen;i++){
//     sum += nums[i];
//     maxNum = maxNum > nums[i] ? maxNum : nums[i];
//   }
//   if (sum % 2 !== 0) return false;
//   let sameSum = Math.floor(sum / 2);
//   if (maxNum > sameSum) return false;
//   /**
//    * 创建一个二维数组，用来保存中间结果; dp[i][j]表示前i个数字，是否能找到和为j的子集
//    */
//   const dp = new Array(nLen+1).fill(0).map(v => new Array(sameSum + 1, false));
//   for (let i = 0;i <= nLen;i++){
//     dp[i][0] = true;
//   }
//   dp[0][nums[0]] = true;
//   for (let i = 1;i <= nLen;i++){
//     const num = nums[i];
//     for (let j = 1;j <= sameSum; j++){
//       if (j >= num) {
//         dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num];
//       } else {
//         dp[i][j] = dp[i - 1][j];
//       }
//     }
//   }
//   return dp[nLen][sameSum];
// };
