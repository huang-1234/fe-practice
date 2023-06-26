/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
var maxEnvelopes = function (envelopes) {
  if (envelopes.length === 0) {
    return 0;
  }

  const n = envelopes.length;
  envelopes.sort((e1, e2) => {
    if (e1[0] - e2[0]) {
      return e1[0] - e2[0];
    } else {
      return e2[1] - e1[1];
    }
  })

  const f = [envelopes[0][1]];
  for (let i = 1;i < n;++i) {
    const num = envelopes[i][1];
    if (num > f[f.length - 1]) {
      f.push(num);
    } else {
      const index = binarySearch(f, num);
      f[index] = num;
    }
  }
  return f.length;
}

const binarySearch = (cell, target) => {
  let low = 0, high = cell.length - 1;
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low;
    if (cell[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

const envelopes = [[5, 4], [6, 4], [6, 7], [2, 3]]
const start = new Date();
console.log('res', maxEnvelopes(envelopes));
const end = new Date();
console.log(getTimeDiff(start, end))
// @lc code=end

