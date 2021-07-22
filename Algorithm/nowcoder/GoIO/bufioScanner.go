package main

import(
	"bufio"
	"fmt"
	"os"
)

func scanner() string {
	scanner := bufio.NewScanner(os.Stdin)
	var str string
	for scanner.Scan()!="\r\n" {
		fmt.Println(scanner.Text());
		str = scanner.Text();
	}
	return str
}

func main(){
	str := scanner();
	fmt.Println(str)
}