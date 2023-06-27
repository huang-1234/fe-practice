{
  // dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])
  // dp[i][1][1] = max(dp[i-1][1][1], dp[i-1][0][0] - prices[i])
  //             = max(dp[i-1][1][1], -prices[i])
  // 解释：k = 0 的 base case，所以 dp[i-1][0][0] = 0。

  // 现在发现 k 都是 1，不会改变，即 k 对状态转移已经没有影响了。
  // 可以进行进一步化简去掉所有 k：
  // dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
  // dp[i][1] = max(dp[i-1][1], -prices[i])

  const maxProfit = function (prices) {
    const n = prices.length;
    const dp = new Array(n).fill(new Array(2).fill(0))
    for (let i = 0;i < n;i++) {
      if (i === 0) {
        dp[i][0] = 0;
        dp[i][1] = -prices[i];
        continue;
      }
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
      dp[i][1] = Math.max(dp[i - 1][1], - prices[i]);
    }
    return dp[n - 1][0]
  };

  const test = [7, 1, 5, 3, 6, 4];

  console.log(maxProfit(test));
}

{
  // 不断记录最小值的那一天，然后更新最小值（什么时候开始买股票），同时根据最小值去更新最大利润 `maxProfit` 假如当天买，利润最大的时候我就更新
  /**
   * @param {number[]} prices
   * @return {number}
   */
  const maxProfit = function (prices) {
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
}