package main

import (
	"fmt";
)

func main(){
	var prices = [...]int{7,1,5,3,6,4}
	ans := maxProfit(prices)
	fmt.Println(ans)
}
func maxProfit(prices []int) int {
  const Len = len(prices)
  if 0==Len {
    return 0
  } 
  max := -1
	min := 100000
	// len := len(prices)
	for _,item:=range(prices){
		if item < min {
			min = item
		}
		if (item-min)>max {
			max = item-min
		}
	}
	return max
}
/* 
func printNumber(num1 int32){
	const UINT_MIN uint64 = 0
	const UINT_MAX uint64 = ^uint64(0)
	const INT_MAX = int(^uint(0) >> 1)
	const INT_MIN = ^INT_MAX
	fmt.Println(UINT_MIN,UINT_MAX,INT_MAX,INT_MIN)
	return num1;
}
 */