/*
 * @lc app=leetcode.cn id=1262 lang=javascript
 *
 * [1262] 可被三整除的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSumDivThree(nums) {
  let dp = [0, -Infinity, -Infinity]; // 初始状态：余0=0，余1/2无效
  for (const num of nums) {
    const k = num % 3;
    const g = [...dp]; // 复制当前状态
    for (let j = 0;j < 3;j++) {
      // 从余j状态转移到余(j+k)%3的状态
      const newRemainder = (j + k) % 3;
      // console.log(num, j, k, newRemainder, g[newRemainder]);
      g[newRemainder] = Math.max(g[newRemainder], dp[j] + num);
      console.log('first', g[newRemainder], dp[j], num)
    }
    dp = g; // 更新状态
  }
  return dp[0];
}
// var maxSumDivThree = function (nums) {
//   const topMax = nums.sort((a, b) => a - b);
//   const len = topMax.length;
//   let maxNum = 0;
//   for (let i = 0;i < len - 2;i++) {
//     let left = i + 1, right = len - 1;
//     while (left < right) {
//       let sum = topMax[i] + topMax[left] + topMax[right];
//       if (sum > maxNum) {
//         if (sum % 3 === 0) {
//           maxNum = sum;
//         }
//         right--;
//       } else {
//         left++;
//       }
//     }
//   }
//   return maxNum;
// };
// @lc code=end

