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
    /**
     * @desc 倒序遍历是为了避免状态覆盖问题。在二维DP中，计算当前行时使用的是上一行的状态值。如果改为一维数组后顺序遍历，会导致前面的值被覆盖，影响后面的状态转移。
     * 比如计算dp[j]时若依赖dp[j - num]，但j - num可能已经被更新过（属于当前物品的更新），这就不对了。倒序则保证了依赖的状态是上一个物品的状态。
     *
     * @enum 正序问题​​：若正序遍历 remain，则 dp[remain - nums[i]] 可能已被当前物品更新，导致重复计算（一个物品被选多次）。
     * @enum ​倒序解决​​：从 target 递减至 nums[i]，保证 dp[remain - nums[i]] 始终基于​​未包含当前物品​​的状态
     */
    for (let remain = target; remain >= num; remain--){
      dp[remain] = dp[remain] || dp[remain - num];
    }
  }
  return dp[target];
};
// @lc code=end

