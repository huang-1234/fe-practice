/*
 * @lc app=leetcode.cn id=5 lang=go
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 func longestPalindrome(s string) string {
	if s == "" {
			return ""
	}
	start, end := 0, 0
	for i := 0; i < len(s); i++ {
			left1, right1 := expandAroundCenter(s, i, i)
			left2, right2 := expandAroundCenter(s, i, i + 1)
			if right1 - left1 > end - start {
					start, end = left1, right1
			}
			if right2 - left2 > end - start {
					start, end = left2, right2
			}
	}
	return s[start:end+1]
}

func expandAroundCenter(s string, left, right int) (int, int) {
	leng := len(s);

	for ; left >= 0 && right < leng && s[left] == s[right]; left, right = left-1 , right+1 { }

	return left + 1, right - 1
}
// @lc code=end

