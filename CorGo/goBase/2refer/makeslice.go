package main

import (
	"fmt"
)

func createSlice(){
	s1 := [] string{"sdf","kljsdfj","skdljfi"}
	s1 = append(s1,"fawd")
	// s1 = append(s1,...["kalsdj","ajsdifj"])
	fmt.Println(s1)
}

func myAppend(){
	var numbers []int
	for i := 0; i < 10; i++ {
		numbers = append(numbers, i)
		fmt.Printf("len: %d  cap: %d pointer: %p\n", len(numbers), cap(numbers), numbers)
	}
}


func main(){
	myAppend();
}