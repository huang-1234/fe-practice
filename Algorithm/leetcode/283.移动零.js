/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length === 0) return []; // 边界：空数组
  let slow = 0;
  for (let fast = 0;fast < nums.length;fast++) {
    if (nums[fast] !== 0) {
      // 避免不必要的交换（当 slow 和 fast 相同时）
      console.log(`Step ${fast}:`, { slow, fast, nums: [...nums] });
      // 示例输出：Step 2: { slow: 1, fast: 2, nums: [1,0,0,3,12] }
      if (slow !== fast) {
        [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      }
      slow++; // 移动非零指针
    }
  }
  return nums; // 原地修改，返回数组
};

(function () { // 测试代码
  console.log(moveZeroes([0, 1, 0, 3, 12]));
  // console.log(moveZeroes([0]));
  // console.log(moveZeroes([1, 0]));
  // console.log(moveZeroes([0, 0, 1]));

})()
// var moveZeroes = function (nums) {
//   let left = 0, right = nums.length;
//   while (left < right) {
//     while (nums[left] !== 0 && left < right) {
//       left++;
//     }
//     while (nums[right] === 0 && left < right) {
//       right--;
//     }
//     if (left < right && nums[left] === 0 && nums[right] !== 0 && nums[left] && nums[right]) {
//       let temp = nums[left];
//       nums[left] = nums[right];
//       nums[right] = temp;
//     }
//     left++;
//     right--;
//   }
//   return nums;
// };
// @lc code=end

