package testing

import (
	"fmt"
	"testing"
)
func TestInitMap(t *testing.T)  {
	m1 := map[int]int{1:1,2:2,3:3};
	t.Log(m1[0]);
	fmt.Println(m1)
}
