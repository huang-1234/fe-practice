/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const len = prices.length, k = 2, status = 2;
  const dp = new Array(len).fill(0).map(() => new Array(status).fill(0).map(() => new Array(k+1).fill(0)))
  for (let j = k;j > 0;j--) {
    dp[0][0][j] = 0; dp[0][1][j] = -prices[0];
    for (let i = 1;i < len;i++){
      // if(i < 1){
      //   // dp[i][j][0] = 0;
      //   // dp[i][j][1] = -prices[0]
      //   continue;
      // }
      dp[i][0][j] = Math.max(dp[i - 1][0][j], dp[i - 1][1][j-1] + prices[i])
      dp[i][1][j] = Math.max(dp[i - 1][1][j], dp[i - 1][0][j] - prices[i])
    }
  }
  return dp[len - 1][0][k]
  // return Math.max(...dp[len - 1][0])
};
var maxProfit = function(prices) {
  const dp = new Int32Array(4)
  dp[0] = dp[2] = -prices[0]
  for (let i = 1; i < prices.length; i++) {
      dp[0] = Math.max(dp[0],       - prices[i])
      dp[1] = Math.max(dp[1], dp[0] + prices[i])
      dp[2] = Math.max(dp[2], dp[1] - prices[i])
      dp[3] = Math.max(dp[3], dp[2] + prices[i])
  }
  return dp[3]
};
// @lc code=end

