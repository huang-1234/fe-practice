package main
import (
    "fmt"
)
func main() {
    name,str := "hsq" ,"Beginning  " +
"second part ";
    fmt.Println(name,str); //hsq hsq Beginning of the string second part of the string
		namelen,strlen := len(name),len(str)
    fmt.Println(namelen,strlen); //3 9
}