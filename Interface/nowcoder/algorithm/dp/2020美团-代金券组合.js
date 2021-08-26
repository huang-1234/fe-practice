const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  ouput: process.stdout
})
let inArr = []
rl.on('line', line => {
  if (!line) return
  inArr.push(line.trim())
  if (inArr[inArr.length - 1] == 0) {
    for (let i = 0;i < inArr.length - 2;i += 2) {
      let amount = +inArr[i]
      let coins = inArr[i + 1].split(' ').map(e => +e)
      console.log(coinChange(coins, amount))

    }
  }
})

var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let coin of coins) {
    for (let i = 1;i <= amount;i++) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? 'Impossible' : dp[amount]
}