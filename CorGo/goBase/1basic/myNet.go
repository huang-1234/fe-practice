package go_lib

import (
	"net"
	"fmt"
	"math"
)

func myNet()  {
	conn, err = net.Dial("tcp","127.0.0.1:8080");
	fmt.Printf("%.30f\n",math.Pi);
	fmt.Println(math.Pi);
}

