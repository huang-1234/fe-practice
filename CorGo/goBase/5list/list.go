package main
import (
	"container/list"
	"fmt"
)

func useList(){
	li := list.New();
	li.PushFront(55);
	li.PushFront("hsq");
	el := li.PushFront("front");

	for i:=li.Front(); i!=nil; i=i.Next() {
		fmt.Println(i.Value)
	}
	// PrintList(li)
}

func PrintList(list){
	for i:=list.Front(); i!=nil; i=i.Next() {
		fmt.Println(i.Value)
	}
}

func main(){
	useList()
}