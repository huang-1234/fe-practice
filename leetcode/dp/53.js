{
  // 接下来讨论一般情况，nums 中有正有负，这种情况下元素和最大的那个子数组一定是以正数开头的
  // （以负数开头的话，把这个负数去掉，就可以得到和更大的子数组了，与假设相矛盾）。
  // 那么此时我们需要穷举所有以正数开头的子数组，计算他们的元素和，找到元素和最大的那个子数组。
  var maxSubArray = function(nums) {
    let ans = nums[0], sum = 0;
    for (let i = 0, len = nums.length;i < len; i++) {
      if (sum <= 0) {
        sum = nums[i];
      } else {
        sum += nums[i];
      }
      ans = ans > sum ? ans : sum;
    }
    return ans;
  };
}