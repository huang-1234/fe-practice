/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let hight = grid[0].length, width = grid.length;
  if (width === 0 || hight === 0) return 0;
  for (let i = 1;i < hight;i++){
    grid[i][0] += grid[i - 1][0];
  }
  for (let i = 1;i < width;i++){
    grid[0][i] += grid[0][i - 1];
  }
  for (let i = 1;i < hight; i++){
    for (let j = 1;j < width; j++){
      grid[i][j] += Math.min(
        grid[i - 1][j],
        grid[i][j - 1],
        grid[i][j]
      )
    }
  }
  return grid[hight-1][width-1]
};
// @lc code=end

