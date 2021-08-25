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
 var permutation = function(nums) {
  const sLen = nums.length;
  if(sLen === 1) return nums;
  const res = [];
  const track = new Set();
  const permu = (track, index) => {
    if(index>sLen){
      return ;
    }
    if(track.size === sLen){
      res.push(Array.from(track).join(''))
    }
    for(let i=0; i<sLen; i++){
      if(track.has(nums[i])){
        continue;
      }
      track.add(nums[i]);
      permu(track, index+1);
      track.delete(nums[i]);
    }

  }
  permu(track, 0);
  return res;
};
// @lc code=end

