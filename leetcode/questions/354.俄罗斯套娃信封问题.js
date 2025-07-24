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
  const top = new Array(len).fill(0);
  let piles = 0;
  for(let i = 0; i < len; i++) {
      const curVal = nums[i];
      let [left, right] = [0, piles];
      while(left < right) {
          const mid = Math.floor((right - left) / 2) +  left;
          if (top[mid] > curVal) {
              right = mid;
          } else if(top[mid] < curVal) {
              left = mid + 1;
          } else {
              right = mid;
          }
      }
      if(left === piles) {
          piles++
      }
      top[left] = curVal;
  }
  return piles;
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
  const heights = new Array(len).fill(0).map((_, i) => envelopeSorted[i][1]);
  return lengthOfLIS(heights)

};

function getTimeDiff(start, end) {
  return start.getMilliseconds();
}

const envelopes = [[5,4],[6,4],[6,7],[2,3]]
const start = new Date();
console.log('res', maxEnvelopes(envelopes));
const end = new Date();
console.log(getTimeDiff(start, end))
// @lc code=end

