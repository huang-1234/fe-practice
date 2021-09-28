/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const Len = prices.length
  if (prices.length <= 1) {
    return 0
  }
  let maxVal = 0
  let lowest = Number.MAX_VALUE
  for (let i = 0; i<Len; i++) {
    if (lowest > prices[i]) {
      lowest = prices[i]
    } else if ((prices[i] - lowest) > maxVal) {
      maxVal = prices[i]-lowest
    }
  }
  return maxVal
};
// @lc code=end

