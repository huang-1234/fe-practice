/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const getMaxArr = (nums) => {
  let ans = nums[0], sum = 0;
  for (let i = 0, leng = nums.length;i < leng;  i++){
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    ans = ans > sum ? ans : sum;
  }
  return ans;
}
const getMinArr = (nums) => {
  let ans = nums[0], sum = 0;
  for (let i = 0, leng = nums.length;i < leng;  i++){
    if (sum < 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    ans = ans < sum ? ans : sum;
  }
  return ans;
}
var maxSubarraySumCircular = function (nums) {
  // const sum = nums.reduce((pre, cur) => pre + cur);
  let sum = 0, positiveCount = 0, negativeCount = 0, minVal = nums[0], maxVal = nums[0];
  for (let i = 0, leng = nums.length;i < leng;i++){
    sum += nums[i];
    if (nums[i] > 0) {
      positiveCount++;
      minVal = minVal < nums[i] ? minVal : nums[i];
    }
    if (nums[i] < 0) {
      negativeCount++;
      maxVal = maxVal > nums[i] ? maxVal : nums[i];
    }
  }
  if (positiveCount === nums.length) {
    return sum;
  }
  if (negativeCount === nums.length) {
    console.log(negativeCount, maxVal)
    return maxVal;
  }

  const numsMin = getMinArr(nums);
  const numsMax = getMaxArr(nums);
  return numsMax > sum - numsMin ? numsMax : sum - numsMin;
};
// @lc code=end

