/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//   if (nums.length <= 1) {
//     return nums.length === 1 ? nums[0] : 0;
//   }
//   const mp = new Map()
//   function dfs(i, _mp = new Map()) {
//     if (i < 0) {
//       return 0
//     }
//     if (_mp.has(i)) {
//       return _mp.get(i)
//     }
//     const res = Math.max(dfs(i - 2) + nums[i], dfs(i - 1));
//     _mp.set(i, res)
//     console.log('rob', i, res, _mp, nums[i], nums.length, _mp.size, _mp.get(i))
//     return res;
//   }
//   return dfs(nums.length - 1, mp);
// };
var rob = function (nums) {
  if (nums.length <= 1) {
    return nums.length === 1 ? nums[0] : 0;
  }
  let a = nums[0], b = Math.max(nums[0], nums[1]), c = b;
  for (let i = 2; i < nums.length; i++) {
    c = Math.max(a + nums[i], b);
    a = b;
    b = c;
    // console.log('rob', a, b, c, nums[i])
  }
  return c
};
// console.log(rob([2,7,9,3,1]))
// @lc code=end

