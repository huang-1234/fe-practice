/*
 * @lc app=leetcode.cn id=1738 lang=javascript
 *
 * [1738] 找出第 K 大的异或坐标值
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function(matrix, k) {
  let m = matrix.length, n = matrix[0].length;
  const mlen = m + 1, nlen = n + 1;
  let pre = new Array(mlen).fill().map(() => new Array(nlen).fill(0));
  let result = [];
  for (let i = 1; i < mlen; i++) {
    for (let j = 1;j < nlen;j++) {
      pre[i][j] = pre[i - 1][j - 1] ^ pre[i][j - 1] ^ pre[i-1][j] ^ matrix[i-1][j - 1];
      result.push(pre[i][j])
    }
  }
  result.sort((a, b) => b - a);
  return result[k - 1];
};
// @lc code=end

