/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function (nums) {
//   function swap(nums, x, y) {
//     const t = nums[x]; nums[x] = nums[y]; nums[y] = t;
//   }
//   const len = nums.length
//   let left = 0, right = len - 1;
//   let p1 = left;
//   while (p1 < len && left < right) {
//     if (nums[p1] === 0) {
//       swap(nums, p1++, left++);
//     } else if (nums[p1] === 2) {
//       swap(nums, p1++, right--)
//     } else {
//       p1++;
//     }
//   }
// };
var sortColors = function (nums) {
  const len = nums.length
  let count = new Array(3).fill(0);
  for (let i = 0;i < len;i++) {
    count[nums[i]]++;
  }
  let index = 0;
  for (let i = 0;i !== count[0];i++) {
    nums[index++] = 0;
  }
  for (let i = 0;i !== count[1];i++) {
    nums[index++] = 1;
  }
  for (let i = 0;i !== count[2];i++) {
    nums[index++] = 2;
  }
};
// @lc code=end

