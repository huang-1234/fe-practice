/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) {
    return n;
  }
  // const dp = new Array(n).fill(0);
  // dp[0] = 1, dp[1] = 2;
  let a1 = 1, a2 = 2, a3 = 0
  for (let i = 2;i < n;i++) {
    a3 = a1 + a2;
    a1 = a2;
    a2 = a3
  }
  return a3
};
// @lc code=end

