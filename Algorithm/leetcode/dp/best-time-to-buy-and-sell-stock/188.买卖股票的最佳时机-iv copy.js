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
var maxProfit = function (k, prices) {
  const len = prices.length;
  if (0 === len) { return 0;}
  k = Math.min(k, (len / 2) | 0);
  const buy = new Array(len).fill(0).map(() => new Array(k + 1).fill(0));
  const sell = new Array(len).fill(0).map(() => new Array(k + 1).fill(0));
  sell[0][0] = 0; buy[0][0] = -prices[0];
  for (let i = 1; i < len; i++) {
    buy[0][i] = sell[0][i] = -Number.MAX_VALUE;
  }
  for (let j = 1;j < len;j++){
    for (let i = 1;i <=k;i++) {
      // buy[j][0] = Math.max(buy[j - 1][0], sell[j - 1][0] - prices[j]);
      buy[j][i] = Math.max(buy[j - 1][i], sell[j - 1][i] - prices[j]);
      sell[j][i] = Math.max(sell[j-1][i], buy[j-1][i-1] + prices[j])
    }
  }
  return Math.max(...sell[len-1])
};
// @lc code=end

