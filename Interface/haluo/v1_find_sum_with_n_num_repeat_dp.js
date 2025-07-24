
/**
 * @desc 给一个不重复的整数数组和一个自然数目标数、求这个数组中多少个和为目标数的组合、组合数可以重复；类似于零钱问题
 * @param {number[]} nums
 * @param {number} target
 * @returns
 */
function find_sum_with_n_num_repeat_or_not(nums, target) {
  let dp = new Array(target + 1).fill(0);
  /**
   * @desc 状态转移方程初始化；目标为0的组合数：空集（即1种）
   */
  dp[0] = 1;
  for (let num of nums) {
    for (let j = num;j <= target;j++) {
      // 状态转移方程
      dp[j] += dp[j - num];
    }
  }

  return dp[target];
}
console.log(find_sum_with_n_num_repeat_or_not([1, 10, 12, 14, 2, 3, 4, 5], 10))
console.log(find_sum_with_n_num_repeat_or_not([4, 3, 1, 2], 6))