/**
 * @param {number[]} height
 * @return {number}
 */

function maxList(height, isPre = true) {
  const hLen = height.length;

  const res = new Array(hLen).fill(isPre ? height[0] : height[hLen - 1]);
  let curMax = res[0];
  for (let i = 0;i < hLen;i++) {

    const idx = isPre ? i : hLen - i - 1;
    const cur = height[idx];
    if (cur > curMax) {
      res[idx] = cur;
      curMax = cur;
    } else {
      res[idx] = curMax;
    }
  }
  return {
    res,
    curMax
  };
}
const trap = function (height) {
  const preMax = maxList(height).res;
  const sufMax = maxList(height, false).res;
  const hLen = height.length;
  let res = 0;
  for (let i = 1;i < hLen - 1;i++) {
    const ele = height[i];
    const sideMin = Math.min(preMax[i - 1], sufMax[i + 1]);
    if (sideMin > ele) {
      res = res + sideMin - ele;
    }
  }
  return res;
};

