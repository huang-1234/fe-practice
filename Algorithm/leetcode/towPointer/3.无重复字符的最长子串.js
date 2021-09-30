/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const sLen = s.length;
  if (0 === sLen) return 0;
  else if(1 === sLen) return 1;
  let hight = 0, low = 0;
  const set = new Set();
  let res = 1;
  for (let i = 0;i < sLen;i++){
    if (!set.has(s[i])) {
      set.add(s[i]);
    }
    while (set.has(s[i])) {
      set.delete(s[low++]);
    }
    res = res > set.size ? res : set.size;
  }
  return res;
};
// @lc code=end

