/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const nLen = nums.length;
  if (0 === nLen) { return 0; }
  else if (1 === nLen && nums[0] >= target) {
    return 1;
  }
  let ans = Number.MAX_VALUE;
  let hight = 0, low = 0;
  let tarSum = 0;
  while (hight < nLen) {
    tarSum += nums[hight++];
    while (tarSum >= target) {
      const section = hight - low;
      ans = ans > section ? section : ans;
      tarSum -= nums[low++];
    }
  }
  return ans === Number.MAX_VALUE ? 0 : ans;
};
// @lc code=end



/*
var minSubArrayLen = function (target, nums) {
  const nLen = nums.length;
  if (0 === nLen) { return 0 }
  else if (1 === nLen && nums[0] >= target) {
    return 1;
  }
  let ans = Number.MAX_VALUE;
  for (let i = 0;i < nLen;i++) {
    let tarSum = nums[i];
    if (tarSum > target) {
      return 1
    }
    for (let j = i + 1;j < nLen;j++) {
      tarSum += nums[j];
      if (tarSum > target) {
        const section = j - i + 1 ;
        ans = ans > section ? section : ans;
        break;
      }
    }

  }
  return ans === Number.MAX_VALUE ? 0 : ans;
};
*/