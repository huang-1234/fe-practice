/*
 * @lc app=leetcode.cn id=714 lang=golang
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
func maxProfit(prices []int, fee int) int {
  LEN := len(prices)
  buy := make([]int, LEN)
  buy[0] = -prices[0]
  sell := make([]int, LEN)
  for i:=1; i<LEN; i++ {
    buy[i] = max( buy[i-1], sell[i-1] - prices[i])
    sell[i] = max( sell[i-1], buy[i-1] + prices[i] - fee)
  }
  return sell[LEN-1]
}

func max(a int, b int) int {
  if a > b {
    return a
  }else{
    return b
  }
}
// @lc code=end

