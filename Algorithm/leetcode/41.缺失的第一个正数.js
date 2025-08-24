/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  if (nums.length === 0) return 1;
  if (nums.length === 1) {
    return nums[0] === 1 ? 2 : 1;
  }
  const numsSet = new Set(nums);
  if (!numsSet.has(1)) return 1;
  for (let i = 1;i <= nums.length;i++) {
    if (!numsSet.has(i)) return i;
  }
  if (numsSet.has(nums.length)) {
    return nums.length + 1;
  }
  return nums.length
};
// @lc code=end

