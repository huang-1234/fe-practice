/*
 * @lc app=leetcode.cn id=122 lang=golang
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
func max(a int, b int) int{
	if a > b {
		return a
	}else{
		return b
	}
}
func maxProfit(prices []int) int {
	LEN := len(prices)
	buy := make([]int, LEN)
	sell := make([]int, LEN)
	buy[0] = -prices[0]
	for i:=1; i<LEN; i++ {
		sell[i] = max(sell[i-1], buy[i-1] + prices[i])
		buy[i] = max(buy[i-1], sell[i-1] - prices[i])
	}
	return sell[LEN-1]
}
// @lc code=end

