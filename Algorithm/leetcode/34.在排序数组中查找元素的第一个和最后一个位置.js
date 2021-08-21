/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const nLen = nums.length;
  if (nLen === 0) return [-1, -1];
  if (nLen === 1 && nums[0] !== target) {
    return [-1, -1];
  } else if (nLen === 1 && nums[0] === target) {
    return [0, 0]
  }
  const failedSection = [-1, -1];
  let left = 0, right = nLen - 1;
  function binarySearch(left, right) {
    while (left <= right) {
      const mid = left + Math.ceil((right - left) / 2)
      if (target === nums[mid]) {
        return mid;
      }
      else if (target > nums[mid]) {
        left = mid + 1;
      } else if (target < nums[mid]) {
        right = mid - 1;
      }
    }
    return -1;
  }
  let index = binarySearch(left, right);
  if (index === -1) {
    return failedSection;
  }
  for (let i = index, j = index;i >= 0 && j <= nLen;) {
    while (target === nums[i - 1]) {
      i--;
    }
    while (target === nums[j + 1]) {
      j++;
    }
    return [i, j]
  }
};
// @lc code=end

