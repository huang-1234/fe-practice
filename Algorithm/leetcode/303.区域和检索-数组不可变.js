/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.len = nums.length;
  if (this.len === 0) return;
  if (this.len === 1) {
    this.preSum = [nums[0]];
    return;
  }
  this.preSum = new Array(nums.length);
  this.preSum[0] = nums[0];
  for (let i = 1; i < this.len; i++) {
    this.preSum[i] = this.preSum[i - 1] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.preSum[right] - this.preSum[left] + this.nums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

