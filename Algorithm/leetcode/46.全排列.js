/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length === 0) return []
  else if (nums.length === 1) return nums

  const nLen = nums.length;
  const resAll = [];
  const resC = []
  function permutation(resC,index) {
    if(index>nLen){
      return;
    }
    if (resC.length === nLen) {
      resAll.push(resC)
      return
    }
    for (let i = 0;i < nLen;i++) {
      if (resC.indexOf(nums[i])) {
        continue;
      }
      resC.push(nums[i]);
      permutation(resC, index+1)
      resC.pop()
    }
  }
  permutation(resC,0);
  return resAll
};
// @lc code=end

