/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   const len = nums.length;
//   let Left = Array(len).fill(1), Right = Array(len).fill(1);
//   for (let l = 1, r = len - 1;l < len - 1 && r >= 0;l++, r--) {
//     Left[l + 1] = Left[l] * nums[l];
//     Right[r - 1] = Right[r - 1] * nums[r]
//   }
//   const res = Array(len).fill(1);
//   for (let i = 0;i < len;i++) {
//     res[i] = Right[i] * Left[i];
//   }
//   return res;
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let ans = [1]
  //前项积
  for (let i = 1;i < nums.length;i++) {
    ans[i] = ans[i - 1] * nums[i - 1]
  }
  // 当前项等于前项积乘以后项积
  let end = 1
  for (let j = nums.length - 1;j >= 0;j--) {
    ans[j] *= end
    end *= nums[j]
  }
  return ans
};

if (require.main === module) {
  console.log(productExceptSelf([1, 2, 3, 4]));
}
// @lc code=end

