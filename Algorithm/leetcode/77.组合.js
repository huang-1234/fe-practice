/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const track = new Set();
  const res = new Set();
  const Len = n;
  function trackback(track, index,x) {
    if (index < 0) {
      return;
    }

    if (track.size === k && !res.has(track)) {
      res.add(Array.from(track));
    }
    for (let i = x + 1;i <= Len;i++) {
      if (track.has(i)) {
        continue;
      }
      track.add(i);
      trackback(track, index - 1, i);
      track.delete(i);
    }
  }
  trackback(track, n, 0);
  return Array.from(res);
};
// @lc code=end

