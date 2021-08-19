/*
 * @lc app=leetcode.cn id=172 lang=java
 *
 * [172] 阶乘后的零
 */

// @lc code=start
class Solution {
    public int trailingZeroes(int n) {
      int res = 0;
      int divisor = 5;
      while (divisor <= n) {
        res += n / divisor;
        divisor *= 5; 
      }
      return res;
    }
}
// @lc code=end

