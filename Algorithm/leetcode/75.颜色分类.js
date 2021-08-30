/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  function swap(nums, x, y) {
    const t = nums[x]; nums[x] = nums[y]; nums[y] = t;
  }
  let left = 0, right = nums.length-1;
  let p1 = left, p2 = right;
  while (left <= right) {
    if(nums[])
  }
};
// @lc code=end

