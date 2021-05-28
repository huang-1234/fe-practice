package main

import (
	"fmt"
)

func createSlice(){
	var s1 [10] int;
	var s2  = [10] int{1,2,3}
	s3 := s2[1:]
	fmt.Printf("array-:%T  array--:%T",s1,s2);
	fmt.Printf("\n");
	fmt.Printf("slice--:%T",s3);
}


func main(){
	createSlice();
}