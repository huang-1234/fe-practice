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

  // 1. 预处理：添加边界字符统一奇偶性
  const T = ['$', '#'];
  for (const c of s) {
    T.push(c, '#');
  }
  T.push('@');
  const n = T.length;

  const P = new Array(n).fill(0);
  let center = 0, rightBounce = 0;
  let maxCenter = 0, maxRadius = 0;

  for (let i = 1; i < n - 1; i++) { // 跳过边界符
    const mirror = 2 * center - i;
    if (i < rightBounce) {
      P[i] = Math.min(rightBounce - i, P[mirror]);
    }

    // 2. 关键修复：使用T而非s进行扩展比较
    while (T[i - P[i] - 1] === T[i + P[i] + 1]) {
      P[i]++;
    }

    if (i + P[i] > rightBounce) {
      center = i;
      rightBounce = i + P[i];
    }

    if (P[i] > maxRadius) {
      maxRadius = P[i];
      maxCenter = i;
    }
  }

  // 3. 映射回原字符串
  const startIdx = Math.floor((maxCenter - maxRadius) / 2);
  return s.substring(startIdx, startIdx + maxRadius);
}
// console.log(longestPalindrome("babad"))
// @lc code=end

