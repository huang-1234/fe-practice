/*
 * @lc app=leetcode.cn id=918 lang=go
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 func maxSubarraySumCircular(nums []int) int {
	total, maxSum, minSum, currMax, currMin := nums[0], nums[0], nums[0], nums[0], nums[0]

	for i := 1; i < len(nums); i++ {
			total += nums[i]
			currMax = max(currMax+nums[i], nums[i])
			maxSum  = max(maxSum, currMax)
			currMin = min(currMin+nums[i], nums[i])
			minSum  = min(minSum, currMin)
	}

	//等价于if maxSum < 0
	if total == minSum  {
			return maxSum
	} else {
			return max(maxSum, total - minSum)
	}
}

func max(a, b int) int {
	if a > b {
			return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
			return a
	}
	return b
}
// @lc code=end

