/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  /**
 * @desc 状态转移方程解释：
 * dp[i] 表示以 nums[i] 结尾的最长递增子序列的长度。
 * 如果 nums[i] 大于 nums[j]，则可以将 nums[j] 添加到以 nums[i] 结尾的子序列中。
 * 因此，我们可以更新 dp[i] 的值为 dp[j] + 1。
 * 这意味着我们可以在 nums[j] 的最长递增子序列长度的基础上增加 1。
 * 通过遍历所有 j < i 的情况，我们可以找到所有可能的递增子序列，并更新 dp[i] 的值。
 * 例如，假设 nums = [10, 9, 2, 5, 3, 7, 101, 18]，我们可以通过以下方式更新 dp 数组：
 * dp[0] = 1; // nums[0] = 10，最长递增子序列长度为 1
 * dp[1] = 1; // nums[1] = 9，最长递增子序列长度为 1
 * dp[2] = 1; // nums[2] = 2，最长递增子序列长度为 1
 * dp[3] = 2; // nums[3] = 5，最长递增子序列为 [2, 5]，长度为 2
 * dp[4] = 2; // nums[4] = 3，最长递增子序列为 [2, 3]，长度为 2
 * dp[5] = 3; // nums[5] = 7，最长递增子序列为 [2, 3, 7]，长度为 3
 * dp[6] = 4; // nums[6] = 101，最长递增子序列为 [2, 3, 7, 101]，长度为 4
 * dp[7] = 4; // nums[7] = 18，最长递增子序列为 [2, 3, 7, 18]，长度为 4
 * 最终，dp 数组为 [1, 1, 1, 2, 2, 3, 4, 4, 4]。
 * 因此，最长递增子序列的长度为 4。
 * @example dp[i] = Math.max(dp[i], dp[j] + 1);
 * 输入: [10, 9, 2, 5, 3, 7, 101, 18]
 * 输出: 4
 * 解释: 最长递增子序列是 [2, 3, 7, 101]，它的长度是 4。
 */
  if (!nums || nums.length === 0) return 0;
  let maxRes = 1;
  // 采用双端队列来优化时间复杂度
  const deque = [];
  for (let i = 0; i < nums.length; i++) {
    if (deque.length === 0 || nums[i] > nums[deque[deque.length - 1]]) {
      deque.push(i);
    } else {
      let left = 0;
      let right = deque.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[deque[mid]] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      deque[left] = i;
    }
    maxRes = Math.max(maxRes, deque.length);
  }
  return maxRes;
};
// @lc code=end

