/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let Max = Math.max(nums);
  if (Max <= 0) return Max;

  const len = nums.length;

  let start = nums.findIndex((ele) => ele > 0); console.log('start:', start);
  let dp1 = sum = nums[start];
  console.log(dp1, sum);
  
  for (let i = start;i < len;i++) {
    if (sum <= 0) {
      sum = nums[i]
    } else {
      sum+=nums[i]
    }
    dp1 = Math.max(dp1, sum);
  }
  return dp1;
};

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log('ans', maxSubArray(nums))

/* 
// 太抽象了
//  @param {number[]} nums
//  @return {number}
 
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let Max = Math.max(nums);
  if (Max <= 0) return Max;

  let dp0 = -101;
  const len = nums.length;

  let start = nums.findIndex((ele) => ele > 0); console.log('start:', start);
  let dp1 = sum = nums[start];
  for (let i = start;i < len;i++) {
    sum = dp0;
    if (sum + nums[i] > 0) {
      sum += nums[i];
      console.log(sum);
      dp1 = Math.max(dp1, sum + nums[i - 1])
    } else {
      if (nums[i + 1] <= 0) continue;
      dp0 = nums[i + 1];
    }
  }
  return dp1;
}; */