/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const mp = new Map();
  for (let i = 0;i < nums.length;i++) {
    const ele = nums[i];
    if (!mp.has(ele)) {
      mp.set(ele, i)
    } else {
      if (Math.abs(i - mp.get(ele)) <= k) {
        return true;
      } else {
        mp.set(ele, i);
      }
    }
  }
  return false
};
// @lc code=end

