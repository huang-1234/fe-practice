/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let sum = new Array(n+1).fill(0);
  sum[0] = 1, sum[1] = 1;
  for (let i = 2;i <= n;i++){
    for (let j = 1;j <= i;j++){
      sum[i] += sum[j - 1] * sum[i - j];
    }
  }
  return sum[n]
};
// @lc code=end

