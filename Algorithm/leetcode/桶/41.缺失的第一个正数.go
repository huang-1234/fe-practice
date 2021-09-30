/*
 * @lc app=leetcode.cn id=41 lang=golang
 *
 * [41] 缺失的第一个正数
 */
package main
import (
	"fmt"
)



// @lc code=start
func firstMissingPositive(nums [6]int) int {
	n := len(nums);
	for i:=0; i<n; i++{
		fmt.Println(nums[i])
	}
}
func main(){
	firstMissingPositive([1,2,3,4,56])
}

// @lc code=end

