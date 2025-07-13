/*
 * @lc app=leetcode.cn id=1235 lang=javascript
 *
 * [1235] 规划兼职工作
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  const n = startTime.length;
  const jobs = new Array(n).fill(0).map((_, i) => [startTime[i], endTime[i], profit[i]]);
  jobs.sort((a, b) => a[1] - b[1]);
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
      const k = binarySearch(jobs, i - 1, jobs[i - 1][0]);
      dp[i] = Math.max(dp[i - 1], dp[k] + jobs[i - 1][2]);
  }
  return dp[n];
}

const binarySearch = (jobs, right, target) => {
  let left = 0;
  while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (jobs[mid][1] > target) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }
  return left;
};
// @lc code=end

