/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  if (0 === text1.length || 0 === text2.length ) {
    return 0
  }
  const len1 = text1.length, len2 = text2.length
  let dp = new Array(len1 + 1)
  for (let i = 0;i <= len1;i++){
    dp[i] = new Array(len2+1).fill(0)
  }
  // for(let i = 1; i < len1; i++){
  //   // dp[i][0] = text1[i]===text2[0] ? 1 : dp[i-1][0];
  //   dp[i][0] = 0;
  // }
  // for(let i = 1; i < len2 ; i++){
  //   // dp[0][i] = text1[0]===text2[i] ? 1 : dp[0][i-1];
  //   dp[0][i] = 0;
  // }
  for (let i = 1;i <= len1;i++) {
    for (let j = 1;j <= len2;j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // s1[i-1] 和 s2[j-1] 必然在 lcs 中
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j-1])
      }
    }
  }
  return dp[len1][len2]
};
// @lc code=end

