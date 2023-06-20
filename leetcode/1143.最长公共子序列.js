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
  // 短的放前面
  // const [textA, textB] = [text1, text2];
  const [lenA, lenB] = [text1.length, text2.length]
//   if (lenA === 0 | lenB === 0) {
//     return 0;
//   } else if (lenA === 1 && lenB === 1) {
//     return text1[0] === text2[0] ? 1 : 0;
//   }
  // const dp = new Array(lenA + 1).fill(new Array(lenB + 1).fill(0));
  const dp = new Array(lenA + 1).fill(0).map(() => new Array(lenB + 1).fill(0));
  for (let i = 1;i <= lenA;i++) {
    const iCur = text1[i - 1];
    for (let j = 1;j <= lenB;j++) {
      const jCur = text2[j - 1];
      // 状态转移
      if (iCur === jCur) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j]  = Math.max(dp[i -1][j], dp[i][j - 1])
      }
    }
  }
  return dp[lenA][lenB]
};


var longestCommonSubsequenceV2 = function (text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1;i <= m;i++) {
    const c1 = text1[i - 1];
    for (let j = 1;j <= n;j++) {
      const c2 = text2[j - 1];
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
};
const [s1, s2] = ["abcba",
"abcbcba"];
console.log(longestCommonSubsequence(s1, s2))
console.log(longestCommonSubsequenceV2(s1, s2))
// @lc code=end

