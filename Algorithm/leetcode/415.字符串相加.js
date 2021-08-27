/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const scale = 10
  let res = [];
  let np1 = num1.length-1, np2 = num2.length -1;
  let add = 0
  while(np1>=0 || np2>=0 || add!==0){
    const x = np1 >= 0 ? num1.charAt(np1) - '0' : 0
    const y = np2 >= 0 ? num2.charAt(np2) - '0' : 0
    const towSum = x + y + add;
    res.push(towSum % scale);
    // add = Math.floor(towSum / 10)
    add = (towSum / scale) | 0
    np1--; np2--;
  }

  return res.reverse().join('')

};
// @lc code=end

