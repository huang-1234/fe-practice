/*
 * @lc app=leetcode.cn id=712 lang=javascript
 *
 * [712] 两个字符串的最小ASCII删除和
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  const s1Len = s1.length, s2Len = s2.length;
  const memo = new Array(s1Len);
  for (let i = 0;i <= s1Len;i++){
    memo[i] = new Array(s2Len).fill(-1)
  }
  const dp = (s1, i, s2, j) => {
    let res = 0;
    if (i === s1Len) {
      while (j < s2Len) {
        res += s2.charCodeAt(j); j++;
      }
    }
    if (j === s2Len) {
      while (i < s1Len) {
        res += s1.charCodeAt(i); i++;
      }
    }
    if (-1 !== memo[i][j]) {
      return memo[i][j];
    }
    if (s1.charCodeAt(i) === s2.charCodeAt(j)) {
      memo[i][j] = dp(s1, i + 1, s2, j + 1);
    } else {
      memo[i][j] = Math.min(
        s1.charCodeAt(i) + dp(s1, i+1, s2, j),
        s2.charCodeAt(j) + dp(s1, i,   s2, j+1)
      )
    }
    return memo[i][j];
  }
  return dp(s1, 0, s2, 0)
};
// @lc code=end

