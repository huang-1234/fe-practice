package main

import (
	"fmt"
)
func merge_sort_c(arr,L,R)  {
	
}
func merge_sort(arr []int,n int)  {
	L,R := 0, n-1;
	fmt.Println(L,R);
	// arr[0]=520;
	// fmt.Println(arr);
	
	merge_sort_c(arr,L,R);

}

func main()  {
	array := [...]int{454,11,65,256,5,2323,23,32,33,3,323,323,2,323};
	arr := array[:]
	length := len(arr);
	merge_sort(arr,length)
	
	fmt.Println(array)
}