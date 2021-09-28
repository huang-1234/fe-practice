/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let L = 0, R = height.length - 1;
  let MaxArea = Number.MIN_VALUE
  while (L < R) {
    const LH = height[L], RH = height[R];
    const h = LH<RH ? LH : RH
    const Area = h * (R - L)
    if (Area > MaxArea) {
      MaxArea = Area;
    }
    if (LH < RH) {
      L++;
    } else if (LH > RH) {
      R--;
    } else {
      L++; R--;
    }
  }
  return MaxArea
};
// @lc code=end

