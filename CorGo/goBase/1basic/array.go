package main

import (
	"fmt"
)

func max(x1 int, x2 int) int{
	if(x1 > x2){
		return x1;
	}
	return x2;
}

func main(){
	const n = 5
	var buy [n]int
	for i,v := range(buy){
		fmt.Println(i, v)
	}
	maxVal := max(4, 6)
	fmt.Println(maxVal)
	fmt.Println(max(4, 6))
}