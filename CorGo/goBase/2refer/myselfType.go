package main

import (
	"fmt";
)

func createStruct(){
	type (
		user struct{ 
			name string
			age int8
			place string
			// next user
		}
		event func(string) bool
	)

	var p2 = user{"hsq",18,"changsha"};
	fmt.Println("输出这个人的个人信息--：", p2);
	var fn1 event = func(s string) bool{
		println("输出函数fn1的params s--:",s);
		return ""!=s;
	}
	fn_result := fn1("hsq");
	println("fn_result--:", fn_result)
}

func main(){
	createStruct()
	/* $ go run "g:\Study\Code\Web\NodeJS\learnFrontTest\Go\goBase\refer\myselfType.go"
	输出这个人的个人信息--： {hsq 18 changsha}
	输出函数fn1的params s--: hsq
	fn_result--: true
	*/
}