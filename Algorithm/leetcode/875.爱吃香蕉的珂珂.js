/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function needHours(piles, k){
  let hours = 0;
  const pLen = piles.length;
  for(let i=0; i<pLen; i++){
    hours += piles[i]/k;
    if(piles[i]%k > 0){
      hours++;
    }
  }
  return hours;
}
var minEatingSpeed = function(piles, h) {
  let left=1, right=1000000000 + 1;
  while(left<right){
    const mid = left + Math.floor((right-left))
    if(needHours(piles, mid) <= h){
      right = mid
    }else{
      left = mid +1
    }
  }
  return left;
};
// @lc code=end

