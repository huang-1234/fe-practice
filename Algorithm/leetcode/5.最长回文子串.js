/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  if (len === 0) {
    return 0;
  } else if ( len === 1) {
    return 1;
  }
  let ans = 0;
  const dp = new Array(len).fill(new Array(len).fill(1));
  for (let i = 1;i < len - 1;i++){
    for (let j = i; j < len - 1; j++) {
      if (s[i-1] === s[j+1]) {
        dp[i - 1][j + 1] = dp[i][j] + 2;
        ans = Math.max(dp[i - 1][j + 1], ans)
      }
    }
  }
  return ans;
};
// @lc code=end

