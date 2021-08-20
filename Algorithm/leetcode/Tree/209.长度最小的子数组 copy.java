package Tree;
/*
 * @lc app=leetcode.cn id=209 lang=java
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
class Solution {

  public int minSubArrayLen(int s, int[] nums) {
      int lo = 0, hi = 0, sum = 0, min = Integer.MAX_VALUE;
      while (hi < nums.length) {
          sum += nums[hi++];
          while (sum >= s) {
              min = Math.min(min, hi - lo);
              sum -= nums[lo++];
          }
      }
      return min == Integer.MAX_VALUE ? 0 : min;
  }
}
// @lc code=end

