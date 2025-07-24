/*
 * @lc app=leetcode.cn id=560 lang=javascript
 * @desc 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

子数组是数组中元素的连续非空序列。

示例 1：
输入：nums = [1,1,1], k = 2
输出：2
示例 2：

输入：nums = [1,2,3], k = 3
输出：2


提示：

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const prefixSumMap = new Map();
  prefixSumMap.set(0, 1); // 初始前缀和为0出现1次
  let currentSum = 0, count = 0;

  for (const num of nums) {
    currentSum += num; // 计算当前前缀和
    // 查找是否存在 preSum[i-1] = currentSum - k
    if (prefixSumMap.has(currentSum - k)) {
      count += prefixSumMap.get(currentSum - k);
    }
    // 更新当前前缀和频次
    prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);
  }
  return count;
};
// @lc code=end

