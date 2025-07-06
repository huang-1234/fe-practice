/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 仅供参考

var removeDuplicates = function(nums) {
  if (nums.length == 0) {
      return 0;
  }
  var slow = 0, fast = 0;
  while (fast < nums.length) {
      if (nums[fast] != nums[slow]) {
          slow++;
          // 维护 nums[0..slow] 无重复
          nums[slow] = nums[fast];
      }
      fast++;
  }
  // 数组长度为索引 + 1
  return slow + 1;
};

// @lc code=end

