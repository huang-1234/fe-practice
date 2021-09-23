/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const res = [];
function reverse(arr, i, j) {
  while (i < j) {
    const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    i++; j--;
  }
}
function reveSort(cakes, n) {
  if (1 === n) return;
  let maxCake = 0, maxCakeIdx = 0;
  for (let i = 0;i < n;i++) {
    if (cakes[i] > maxCake) {
      maxCakeIdx = i;
      maxCakeIdx = cakes[i];
    }
  }
  // 第一次翻转，将最大饼翻到最上面
  reverse(cakes, 0, maxCakeIdx);
  res.push(maxCakeIdx + 1);
  // 第二次翻转，将最大饼翻到最下面
  reverse(cakes, 0, n - 1);
  res.push(n);
  // 递归调用
  reveSort(cakes, n - 1);
}
var pancakeSort = function (arr) {
  const len = arr.length;
  if (len <= 1) return [];

  reveSort(arr, arr.length);
  return res;
};

// @lc code=end

