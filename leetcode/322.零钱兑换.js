/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {
  const memo = new Array(amount + 1).fill(-666);

  function findMin(coins, n) {
    if (n <= 0) {
      return n === 0 ? 0 : -1;
    }
    if (memo[n] !== -666) {
      return memo[n];
    }
    let res = Number.MAX_SAFE_INTEGER;
    for (co of coins) {
      const subPro = findMin(coins, n - co);
      if (subPro === -1) {
        continue;
      }
      res = Math.min(res, 1 + subPro)
    }

    memo[n] = res === Number.MAX_SAFE_INTEGER ? -1 : res;
    return memo[n];
  }
  return findMin(coins, amount)
};
function calcPerf() {
  let start = new Date();
  for (let i = 0;i < 10;i++) {
    const amount = i * 1000;
    console.log('res', coinChange([1, 2, 5], amount), i);
  }
  let end = new Date();
  console.log('running cost time is:', end - start)
}
calcPerf()

// @lc code=end

