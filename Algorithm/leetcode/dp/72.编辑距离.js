/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

  const len1 = word1.length, len2 = word2.length;
  const minDis = function (Len1, Len2) {
    let i = Len1, j = Len2

    if (-1 === i) return j + 1; // 说明word1串已经遍历完了
    if (-1 === j) return i + 1;
    if (word1[i] === word2[j]) {
      return minDis(i - 1, j - 1);
    } else {
      return Math.min(
        minDis(i - 1, j - 1) + 1 , // 替换
        minDis(i, j - 1) + 1 , // 插入
        minDis(i-1, j) + 1 // 删除
      )
    }
  }
  return minDis(len1,len2)
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

  const len1 = word1.length, len2 = word2.length;
  const dp = new Array(len1+1).fill(new Array(len2+1).fill(0));
  for (let i = 1; i <= len1; i++)  dp[i][0] = i;
  for (let j = 1;j <= len2;j++)  dp[0][j] = j;

  for (let i = 1;i <= len1;i++){
    for (let j = 1;j <= len2;j++){
      if (word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          dp[i-1][j-1] + 1,
          dp[i - 1, j] + 1,
          dp[i, j - 1] + 1
        )
      }
    }
  }
  return dp[len1][len2];
};
// @lc code=end

