package main 

import "fmt";

func main(){
	var arrOne = make([] int8,30,100);
	arrlen := len(arrOne);
	fmt.Println(arrlen);
/* 
	for i := range(len(arrOne)){
		if 1==i%8{
			fmt.Printf("/n");
		}
		fmt.Printf(arrOne[i])
	}
	 */
	fmt.Println(arrOne);
}