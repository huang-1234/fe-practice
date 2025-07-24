/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  if (m <= 1 && n <= 1) {
    return matrix[0][0];
  }
  this.preSumMat = (new Array(m + 1)).fill(0).map(() => new Array(n + 1).fill(0));
  this.preSumMat[0][0] = matrix[0][0];
  this.preSumMat[0][1] = m >= 2 ? matrix[1][0] : 0;
  this.preSumMat[1][0] = n >= 2 ? matrix[0][1] : 0;
  for (let i = 0;i < m;i++) {
    for (let j = 0; j < n; j++) {
      this.preSumMat[i + 1][j + 1] = this.preSumMat[i][j + 1] + this.preSumMat[i + 1][j] - this.preSumMat[i][j] + matrix[i][j];
    }
  }
};
/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  const preSumMat = this.preSumMat;
  return preSumMat[row2 + 1][col2 + 1] - preSumMat[row1][col2 + 1] - preSumMat[row2 + 1][col1] + preSumMat[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

