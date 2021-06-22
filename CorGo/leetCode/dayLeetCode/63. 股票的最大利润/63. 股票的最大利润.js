/* 63. 股票的最大利润

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const pricesLen = prices.length;
  if (0===pricesLen) return 0;
  let MAX_profit = Number.MIN_VALUE, min_value = Number.MAX_VALUE;
  for (let i = 0;i < pricesLen;i++){
    if (prices[i] < min_value) {
      min_value = prices[i];
    }
    if ((prices[i] - min_value) > MAX_profit) {
      MAX_profit = prices[i] - min_value;
    }
  }
  return MAX_profit;
};
