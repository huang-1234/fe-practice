/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 0) return []
  else if (nums.length === 1) return nums

  const nLen = nums.length;
  const resAll = [];
  const resC = []
  function permutation(nums, resC) {
    if (resC.length === nLen) {
      resAll.push(resC)
      return
    }
    for (let i = 0;i < nLen;i++) {
      if (resC.indexOf(nums[i])) {
        continue;
      }
      resC.push(nums[i]);
      permutation(nums, resC)
      resC.pop()
    }
  }
  permutation(nums, resC);
  return resAll

};
// @lc code=end

