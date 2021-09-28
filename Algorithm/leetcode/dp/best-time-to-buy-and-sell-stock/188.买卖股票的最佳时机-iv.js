/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  const len = prices.length;
  const dp = new Array(len).fill(0).map(() => new Array(2).fill(0).map(() => new Array(k + 1)));
  for (let j = k;j > 0;j--) {
    dp[0][0][j] = 0;
    dp[0][1][j] = -prices[0];
    for (let i = 1;i < len;i++){
      dp[i][1][k] = Math.max(dp[i-1][1][k], dp[i-1][1][k] - prices[i])
      dp[i][0][k] = Math.max(dp[i - 1][0][k], dp[i - 1][1][k - 1] + prices[i])

    }
  }
  return Math.max(...dp[len - 1][0])
};
// @lc code=end

