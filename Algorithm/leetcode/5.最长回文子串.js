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
function longestPalindrome(s) {
  if (s.length < 2) return s;

  let start = 0, maxLen = 1;

  // 中心扩展函数
  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1; // 返回回文长度
  };

  for (let i = 0;i < s.length;i++) {
    const len1 = expand(i, i);    // 奇数长度（中心为 i）
    const len2 = expand(i, i + 1); // 偶数长度（中心为 i 和 i+1）
    const len = Math.max(len1, len2);

    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2); // 计算起始位置
    }
  }
  return s.substring(start, start + maxLen);
}
// @lc code=end

