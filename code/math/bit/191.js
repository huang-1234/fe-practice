/**
 * @param {number} n - a positive integer
 * @return {number}
 */

function lowbit(n) {
  return n & (-n);
}
function shiftLastOne(n) {
  return n & (n - 1);
}
const hammingWeight = function (n) {
  let cnt = 0;
  let p = n;
  while (p) {
    cnt++;
    p = shiftLastOne(p)
  }

  return cnt;
};