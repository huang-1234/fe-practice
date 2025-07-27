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
  const T = ['#'];
  for (const c of s) {
    T.push(c, '#');
  }
  const n = T.length;
  const P = new Array(n).fill(0); // 存储每个字符的回文半径
  let center = 0, rightBounce = 0; // 最长回文子串的中心和右边界
  let maxCenter = 0, maxRadius = 0;
  for (let i = 0; i < n; i++) {
    const mirror = 2 * center - i;
    if (i < rightBounce) {
      P[i] = Math.min(rightBounce - i, P[mirror]);
    }
    // 尝试扩展回文子串
    let left = i - (P[i] + 1), right = i + (P[i] + 1);
    while (left >= 0 && right < n && s[left] === s[right]) {
      P[i]++;
      left--;
      right++;
    }
    // 更新最右侧边界
    if (i + P[i] > rightBounce) {
      center = i;
      rightBounce = i + P[i];
    }
    // 获取当前最大回文半径
    if (P[i] > maxRadius) {
      maxRadius = P[i];
      maxCenter = i;
    }
  }
  const startIdx = Math.floor((maxCenter - maxRadius) / 2);
  return s.substring(startIdx, startIdx + maxRadius);
}
console.log(longestPalindrome("babad"))
// @lc code=end

