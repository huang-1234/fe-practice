package main
import (
    "fmt"
)

func add3(param1){
	return func(param2){
		return func(param3){
			return param1+param2+parma3;
		}
	}
}

func main() {
	sum := add3(1)(2)(3);
	fmt.Println(sum)
}