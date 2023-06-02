/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length;
  if (len <= 1) {
    return len;
  }
  const dp = new Array(len).fill(1);
  dp[0] = 1;
  for (let i = 0;i < len;i++) {
    for (let j = 0;j < i;j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
var maxEnvelopes = function (envelopes) {
  const len = envelopes.length;
  if (len <= 1) {
    return len;
  }
  const envelopeSorted = envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });
  console.log(envelopeSorted)
  const heights = new Array(len).fill(0).map((_, i) => envelopeSorted[i][1]);
  console.log('height', heights)
  return lengthOfLIS(heights)

};

const envelopes = [[4,5],[4,6],[6,7],[2,3],[1,1]]

console.log('res', maxEnvelopes(envelopes))
// @lc code=end

