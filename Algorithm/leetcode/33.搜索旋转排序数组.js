i/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const nLen = nums.length;
  if (nLen === 1) {
    return target === nums[0] ? 0 : -1
  }
  let left = 0, right = nLen - 1;
  // let isLeft = false;
  const findMin = function (nums) {
    let left = 0, right = nLen - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < nums[nLen - 1]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    console.log(left)
    return left;
  }
  const minIndex = findMin(nums);
  if (target === nums[minIndex]) {
    return minIndex;
  } else if (target === nums[minIndex - 1]) {
    return minIndex - 1;
  } else if (target < nums[minIndex] || target > nums[minIndex - 1]) {
    return -1
  } else if (target > nums[nLen - 1]) {
    right = minIndex - 1;
  } else if (target < nums[nLen - 1]) {
    left = minIndex
  } else if (target === nums[nLen - 1]) {
    return nLen - 1;
  }
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid
    } else if (target > nums[mid]) {
      left = mid;
    } else {
      right = mid + 1;
    }
  }
  return -1;
};
// @lc code=end

