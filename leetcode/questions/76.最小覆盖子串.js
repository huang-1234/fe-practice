/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const winCon = new Map();
  const tMap = new Map();
  let [validInWin, resLen] = [0, Number.MAX_SAFE_INTEGER];
  const [sLen, tLen] = [s.length, t.length];
  for (let i = 0;i < tLen;i++) {
    if (tMap.has(t[i])) {
      tMap.set(t[i], tMap.get(t[i]) + 1)
    } else {
      tMap.set(t[i], 1);
    }
    console.log('deb', tMap)
  }
  let [left, right, start] = [0, 0, 0];

  // right move, expand window
  while (right < sLen) {
    const rightChar = s[right];
    right++;
    //
    if (tMap.has(rightChar)) {
      if (winCon.has(rightChar)) {
        winCon.set(rightChar, winCon.get(rightChar) + 1);
      } else {
        winCon.set(rightChar, 1);
      }

      // console.log('deb', start, left, right, resLen, validInWin, tMap.size);
      // console.log('deb', winCon.get(rightChar) , tMap.get(rightChar), rightChar)
      if (winCon.get(rightChar) === tMap.get(rightChar)) {
        validInWin++;
      }

    }


    // left move, shrink window, get the min valid
    while (validInWin === tMap.size) {
      const curWinLen = right - left;

      if (curWinLen < resLen) {
        resLen = curWinLen;
        start = left;
      }
      const leftChar = s[left];
      left++;
      if (tMap.has(leftChar)) {
        if (winCon.get(leftChar) === tMap.get(leftChar)) {
          validInWin--;
        }
        if (winCon.has(leftChar)) {
          winCon.set(leftChar, winCon.get(leftChar) - 1)
        }
      }
    }
  }
  console.log('res', resLen)

  return resLen === Number.MAX_SAFE_INTEGER ? '' : s.slice(start, start + resLen);
};
const [s, t] = ["aa", "aa"]
console.log('out', minWindow(s, t))
// @lc code=end

