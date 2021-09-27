/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumberOfLIS = function(nums) {
  const len = nums.length;
  if (len <= 1) return len;
  const res = []; res.push(nums[0]);
  // const ans = [];
  let count=1;
  for (let i = 1; i < len; i++) {
    if (nums[i] > res[res.length - 1]) {
      res.push(nums[i])
    } else {
      count++;
      let left = 0, right = res.length - 1;
      for (;left < right;){
        const mid =  Math.floor((right + left) / 2)
        if (res[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
        res[left] = nums[i]
      }
    }
  }
  return count
};
// @lc code=end