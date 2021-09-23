/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs[0].length === 0) return ""
  const len = 200;
  let preRes = [];
  let minLen = 201;
  let priotStr;
  // 求所有串中最短的串, 并以此为哨兵串
  for (let i = 0, len = strs.length;i < len;i++) {
    if (strs[i].length < minLen) {
      minLen = strs[i].length;
      priotStr = strs[i];
    }
  }
  // 遍历所有串, 依次从第一个开始比较, 直到遇到不相等即可退出
  for (let i = 0;i < minLen;i++) {
    const curWord = priotStr[i];
    for (let j = 0, len = strs.length;j < len;j++) {
      if (curWord !== strs[j][i]) {
        console.log('难道不相等')
        return preRes.join('');
      }
    }
    preRes.push(curWord);
  }
  return preRes.join('');
};
// @lc code=end

