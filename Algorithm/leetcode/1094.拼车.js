/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const n = trips.length;
  if (n === 0) return true;
  let to_max = 0;
  for (const trip of trips) {
    to_max = Math.max(to_max, trip[2]);
  }
  const diffLen = to_max + 1
  const diff = new Array(diffLen).fill(0);
  for (let i = 0;i < n; i++) {
    const startFrom = trips[i][1];
    const  endTo = trips[i][2];
    let numPaa = trips[i][0];
    diff[startFrom] += numPaa;
    diff[endTo] -= numPaa;
  }
  const res = new Array(n).fill(0);
  res[0] = diff[0]
  if (res[0] > capacity) {
    return false;
  }
  for (let i = 1;i < diffLen;i++) {
    res[i] = res[i - 1] + diff[i];
    if (res[i] > capacity) {
      return false;
    }
  }
  return true
};
// @lc code=end
