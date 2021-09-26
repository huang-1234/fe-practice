/*
 * @lc app=leetcode.cn id=215 lang=go
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
func findKthLargest(nums []int, k int) int {
	rand.Seed(time.Now().UnixNano())
	return quickSelect(nums, 0, len(nums)-1, len(nums)-k)
}

func quickSelect(a []int, l, r, index int) int {
	q := randomPartition(a, l, r)
	if q == index {
			return a[q]
	} else if q < index {
			return quickSelect(a, q + 1, r, index)
	}
	return quickSelect(a, l, q - 1, index)
}

func randomPartition(a []int, l, r int) int {
	i := rand.Int() % (r - l + 1) + l
	a[i], a[r] = a[r], a[i]
	return partition(a, l, r)
}

func partition(a []int, l, r int) int {
	x := a[r]
	i := l - 1
	for j := l; j < r; j++ {
			if a[j] <= x {
					i++
					a[i], a[j] = a[j], a[i]
			}
	}
	a[i+1], a[r] = a[r], a[i+1]
	return i + 1
}
// @lc code=end

