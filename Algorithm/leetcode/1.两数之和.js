/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let left = 0, right = 0, mp = new Map();
  for (let i = 0;i < nums.length;i++) {
    if (mp.has(target - nums[i])) {
      left = mp.get(target - nums[i]);
      right = i;
      return [left, right];
    } else {
      mp.set(nums[i], i);
    }
  }
  return [];
};
// @lc code=end

