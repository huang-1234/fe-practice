package main

import (
	"fmt"
	"testing"
)

func createSlice(){
	s1 := [] string{"sdf","kljsdfj","skdljfi"}
	s1 = append(s1,"fawd")
	// s1 = append(s1,["kalsdj","ajsdifj"])
	fmt.Println(s1)
}


func myAppend(){
	var numbers []int
	for i := 0; i < 10; i++ {
		numbers = append(numbers, i)
		fmt.Printf("len: %d  cap: %d pointer: %p\n", len(numbers), cap(numbers), numbers)
	}
}

func TestSliceGrowing(t *testing.T)  {
	const Len = 10;
	s := [] int{};
	for i:= 0 ;i<Len; i++{
		s = append(s,i);
		// t.Log(len(s),cap(s))
		fmt.Println(len(s),cap(s))
	}
}

func TestSliceShareMemory()  {
	year:=[]string{"January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"};
	start := 0;
	seg := 3;
	spring := make([]string,10,20);
	// cannot use copy(spring, year[start:start + seg]) (type int) as type []string in assignment
	spring = copy(spring,year[start:start+seg]);  
	summer := year[start+seg:start+2*seg];
	autumn := year[start+2*seg:start+3*seg];
	winter := year[start+3*seg:start+4*seg];

	spring[1] = "a"

	fmt.Println(spring,summer,autumn,winter);
	fmt.Println(year);


}

func TestSliceComparing()  {
	s1 := []int{1,2,3,4,5};
	s2 := []int{1,2,3,4,5};
	// if s1==s2{ // invalid operation: s1 == s2 (slice can only be compared to nil)

	// }
}

func main(){
	TestSliceShareMemory();
	// TestSliceComparing();
}