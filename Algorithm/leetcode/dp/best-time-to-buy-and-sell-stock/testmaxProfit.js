var maxProfit = function(prices) {
  const len = prices.length, k = 2, status = 2;
  const dp = new Array(len).fill(0).map(() => new Array(k+1).fill(0).map(() => new Array(status).fill(0)))
  for (let j = 0;j <= k;j++){
    dp[0][j][0] = 0; dp[0][j][1] = -prices[0];
  }
  for (let j = k;j > 0;j--) {
    for (let i = 0;i < len;i++){
      if(i === 0){
        // dp[i][j][0] = 0;
        // dp[i][j][1] = -prices[0]
        continue;
      }
      console.log(dp[i - 1])
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
    }
  }
  return dp[len - 1][k][0];
};

const prices = [3, 3, 5, 0, 0, 3, 1, 4];
console.log(maxProfit(prices))