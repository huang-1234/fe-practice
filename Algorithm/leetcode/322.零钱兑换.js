/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0;
  for (let j = 0, cLen = coins.length;j < cLen;j++ ) {
    for ( let i = coins[j]; i <= amount; i++ ) {
      dp[i] = Math.min(
        dp[i],
        dp[i - coins[j]] + 1
      )
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end

