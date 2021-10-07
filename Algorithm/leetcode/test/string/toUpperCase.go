/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
package main

import (
	"fmt"
	"unicode"
)

func licenseKeyFormatting(s string, k int) string {
	ans := []byte{}
	for i, cnt := len(s)-1, 0; i >= 0; i-- {
		if s[i] != '-' {
			ans = append(ans, byte(unicode.ToUpper(rune(s[i]))))
			cnt++
			if cnt%k == 0 {
				ans = append(ans, '-')
			}
		}
	}
	if len(ans) > 0 && ans[len(ans)-1] == '-' {
		ans = ans[:len(ans)-1]
	}
	for i, n := 0, len(ans); i < n/2; i++ {
		ans[i], ans[n-1-i] = ans[n-1-i], ans[i]
	}
	return string(ans)
}

func main() {
	var str = "5F3Z-2e-9-wk"
	fmt.Println(str[:5])
	k := 4
	fmt.Println(licenseKeyFormatting(str, k))
}
