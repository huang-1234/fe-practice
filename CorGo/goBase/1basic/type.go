package main

import (
	"fmt"
)
func main()  {
	var cbyte byte = 'a';
	var crune rune = 'a';
	fmt.Println(cbyte,crune)
	
	var ch int = '\u0041';
	var ch2 int = '\u03B2';
	var ch3 int = '\U00101234';
	fmt.Printf("%d - %d - %d\n", ch, ch2, ch3); // integer
	fmt.Printf("%c - %c - %c\n", ch, ch2, ch3); // character
	fmt.Printf("%X - %X - %X\n", ch, ch2, ch3); // UTF-8 bytes
	fmt.Printf("%U - %U - %U\n", ch, ch2, ch3);   // UTF-8 code point
	fmt.Printf("=============================================================\n");

	count := 128;
	for i := 32; i < count; i++ {
		if 1==(i-31)%5 {
			fmt.Printf("\n");
		}
		fmt.Printf("c:<%c> it's %d  ",i,i);
	}
}