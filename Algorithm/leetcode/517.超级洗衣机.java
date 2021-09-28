/*
 * @lc app=leetcode.cn id=517 lang=java
 *
 * [517] 超级洗衣机
 */

// @lc code=start
/**
 * @param {number[]} machines
 * @return {number}
 */
class Solution {
  public int findMinMoves(int[] machines) {
      int len = machines.length;
      for(int i = 1; i < len; i++){
          machines[i] += machines[i-1];
      }
      if(machines[len-1] % len != 0) return -1;
      int avg = machines[len-1] / len;
      int res = 0;
      for(int i = 0; i < len; i++){
          int leftneed = avg * i;
          int rightneed = avg * (len - i - 1);
          int left = i > 0 ? machines[i-1] : 0;
          int right = machines[len-1] - machines[i];
          leftneed -= left;
          rightneed -= right;
          if(leftneed > 0 &&  rightneed > 0){
            res = Math.max(res, Math.abs(leftneed) + Math.abs(rightneed));
          } else {
            res = Math.max(res, Math.max(Math.abs(leftneed), Math.abs(rightneed)));
          }
      }
      return res;
  }
}
// @lc code=end


