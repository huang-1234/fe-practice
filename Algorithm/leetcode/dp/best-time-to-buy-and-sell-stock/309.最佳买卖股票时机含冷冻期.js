/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const k = 1;
  const len = prices.length;
  const buy = new Array(len).fill(0); buy[0] = -prices[0]
  const sell = new Array(len).fill(0);
  const cool = new Array(len).fill(0);
  let t;
  for (let i = 1;i < len;i++){
    buy[i] = Math.max(buy[i - 1], cool[i - 1] - prices[i]);
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
    cool[i] = Math.max(sell[i-1],cool[i-1], buy[i-1])
    // if 语句执行代表 当天买入, 昨天卖出会比较赚, 因此当天不能买入，只能第k+1天再买入
    // if (t = sell[i - 1] - prices[i] > buy[i - 1]) {
    //   buy[i] = t;
    //   i += k;
    //   buy[i] = t;
    // } else {
    //   buy[i] = buy[i-1]
    // }
    // // 当天要卖出, 是因为前一天买入, 今天卖出会比较赚。但是今天卖出以后要嗝k天
    // if (t = buy[i - 1] + prices[i] > sell[i - 1]) {
    //   sell[i] = t;
    //   i += k;
    // } else {
    //   sell[i] = sell[i-1]
    // }
  }
  return sell[len-1]
};
// @lc code=end

