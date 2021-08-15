/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 3) {
    return 0
  }
  let sum = 0;
  const Len = height.length;
  let left = 0, right = left+1

  while (left < right && left >= 0 && right < Len) {
    let curIndex = 0
  }

};
// @lc code=end

