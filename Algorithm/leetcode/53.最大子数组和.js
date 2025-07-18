/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let ans = nums[0], sum = 0, len = nums.length;
  let left = 0, right = 0;
  for (let i = 0; i < len; i++) {
    const element = nums[i];
    if (element > sum + element) {
      sum = element; // 如果当前元素大于之前的和加上当前元素，则重新开始计算
      left = i;
    } else {
      sum += element; // 否则继续累加
    }
    if (sum > ans) {
      right = i;
      ans = sum;
    }
  }
  console.log(`最大子数组和为 ${ans}，起始索引为 ${left}，结束索引为 ${right}`)
  return ans;
};
// @lc code=end

