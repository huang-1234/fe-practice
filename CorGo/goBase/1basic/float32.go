package main

import (
	"fmt"
)

func main(){
	var (
		a float64 = 1.1234567899;
		b float64 = 1.12345678;
		c float64 = 1.123456788;
	)
	var lex float64 = a-b; 
	// fmt.Println(typeof lex)
	fmt.Println(a,b,c,lex)
}