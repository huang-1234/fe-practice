/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

  const map = new Map()
  const numsLen = nums.length
  for(let i=0; i<numsLen; i++){
    if(map.has(nums[i])){
      map.get(nums[i])++
    }else{
      map.set(nums[i],1)
    }
  }
  const 

  function topK(showCountNums,k)
};
// @lc code=end

