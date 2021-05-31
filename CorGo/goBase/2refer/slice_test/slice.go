package slice_test

import (
	"fmt"
)

func createSlice(){
	arr3 := [...]int {1,2,3,4,5,6,7};
	fmt.Println(arr3);
	for _,i:= range arr3{
		fmt.Println(arr3[:i]);
	}
	
}


func main(){
	createSlice();
}