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
  const len = prices.length;

  let res = 0;
  let [minVal] = [Number.MAX_SAFE_INTEGER];
  for (let i = 0;i < len;i++) {
    if (minVal > prices[i]) {
      minVal = prices[i];
    } else if (prices[i] - minVal > res) {
      res = prices[i] - minVal;
    }
  }
  return res
};
// @lc code=end

