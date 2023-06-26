/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const leng = s.length;
  if (leng === 1) {
    return 1;
  }
  let left = 0, right = 0;
  let leftIdx = 0, rightIdx = 1, maxLen = 1;
  for (let i = 1; i < leng; i++) {
    const center = s[i];
    left = i - 1, right = i + 1;
    leftIdx = i, rightIdx = i;
    while (left<=right && left>=0 && right<=leng) {
      if ( (center === s[left] && center === s[right]) || s[left] === s[right] ) {
        left--;
        leftIdx--;
        right++;
        rightIdx++;
      }
      break;
    }
    maxLen = rightIdx - leftIdx;
  }
  return s.slice(leftIdx, rightIdx);
};
// @lc code=end

