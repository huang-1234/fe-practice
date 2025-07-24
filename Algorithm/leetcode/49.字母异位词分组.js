/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start


// 通过将合数筛掉、剩下的就是素数、
// 通过素数的乘积来唯一标识一个字符串
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
// 通过一个函数来获取 primes
// 将 26个字符映射26个英文字母
function getPrimes(str) {
  let res = 1;
  for (let i = 0;i < str.length;i++) {
    res *= primes[str.charCodeAt(i) - 97];
  }
  return res;
}

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupAnagrams = function (strings) {
  if (strings.length === 0) return [];
  if (strings.length === 1) return [strings];
  let mp = new Map();
  for (let i = 0;i < strings.length;i++) {
    let array = Array.from(strings[i]);
    array.sort();
    let key = array.toString();
    let list = mp.get(key) ? mp.get(key) : new Array();
    list.push(strings[i]);
    mp.set(key, list);
  }
  return Array.from(mp.values())
};
// @lc code=end

