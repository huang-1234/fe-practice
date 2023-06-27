// 注意：javascript 代码由 chatGPT🤖 根据我的 cpp 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 cpp 代码对比查看。

/**
 * @param {number} a
 * @param {number} k
 * @return {number}
 */
var mypow = function (a, k) {
  var base = 1337;
  // 对因子求模
  a %= base;
  var res = 1;
  for (var i = 0;i < k;i++) {
    // 这里有乘法，是潜在的溢出点
    res *= a;
    // 对乘法结果求模
    res %= base;
  }
  return res;
};

/**
* @param {number} a
* @param {number[]} b
* @return {number}
*/
var superPow = function (a, b) {
  var base = 1337;
  if (b.length === 0) return 1;
  var last = b.pop();
  var part1 = mypow(a, last);
  var part2 = mypow(superPow(a, b), 10);
  // 每次乘法都要求模
  return (part1 * part2) % base;
};
