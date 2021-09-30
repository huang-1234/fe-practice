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
var twoSum = function(nums, target) {
  const tMap = new Map()
  const Len = nums.length
  let res = []
  for (let i = 0;i < Len;i++){
    if (tMap.has(target - nums[i])) {
      res = [tMap.get(target - nums[i]),i]
    } else {
      tMap.set(nums[i],i)
    }
  }
  return res
};
// @lc code=end

