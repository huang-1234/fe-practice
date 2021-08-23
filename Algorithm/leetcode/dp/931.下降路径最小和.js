931/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const mLen = matrix[0].length;
  let minSum = 0;
  let dp = new Array(mLen + 1).fill(new Array(mLen + 1).fill(0));
  for (let i = 0;i < mLen;i++) {
    dp[i+1][0] = matrix[i][0];
  }
  for (let j = 0;j < mLen;j++) {
    dp[0][j+1] = matrix[0][j];
  }
  for (let i = 0;i < mLen;i++) {
    for (let j = 0;j < mLen;j++) {
      dp[i+1][j+1] = Math.min(
        dp[i, j] + matrix[i][j],
        dp[i+1,j]     + matrix[i][j],
        dp[i+2, j] + matrix[i][j]
      )
    }
  }
  return dp[mLen-1][mLen-1];
};
// @lc code=end

