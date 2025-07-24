/*
 * @lc app=leetcode.cn id=930 lang=javascript
 * @desc 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。

子数组 是数组的一段连续部分。



示例 1：

输入：nums = [1,0,1,0,1], goal = 2
输出：4
解释：
有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
示例 2：

输入：nums = [0,0,0,0,0], goal = 0
输出：15


提示：

1 <= nums.length <= 3 * 104
nums[i] 不是 0 就是 1
0 <= goal <= nums.length
 * [930] 和相同的二元子数组
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
  for (let i = 1;i < this.len;i++) {
    this.preSum[i] = this.preSum[i - 1] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.preSum[right] - this.preSum[left] + this.nums[left];
};
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  const prefixSumMap = new Map();
  prefixSumMap.set(0, 1); // 初始前缀和为0出现1次
  let currentSum = 0, count = 0;

  for (const num of nums) {
    currentSum += num; // 计算当前前缀和
    // 查找是否存在 preSum[i-1] = currentSum - goal
    if (prefixSumMap.has(currentSum - goal)) {
      count += prefixSumMap.get(currentSum - goal);
    }
    // 更新当前前缀和频次
    prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);
  }
  return count;
};
// @lc code=end
