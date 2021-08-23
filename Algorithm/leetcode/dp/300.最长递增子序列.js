/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  let result = [nums[0]];
  for (let i = 1;i < nums.length;++i) {
    // 如果当前数值大于已选结果的最后一位，则直接往后新增，若当前数值更小，则直接替换前面第一个大于它的数值
    if (nums[i] > result[result.length - 1]) {
      result[result.length] = nums[i];
    } else {
      // 二分查找：找到第一个大于当前数值的结果进行替换
      let left = 0,
        right = result.length - 1;
      while (left < right) {
        let middle = Math.floor((left + right) / 2);
        if (result[middle] < nums[i]) {
          left = middle + 1;
        } else {
          right = middle;
        }
      }
      console.log('left:', left, `---`, 'nums[i]:',nums[i])
      // 替换当前下标
      result[left] = nums[i]; // 起着举足轻重的作用，是一种策略贪心法则
    }
    console.log('result:', result)
  }
  return result.length;
};
const arr = [10, 9, 2, 3, 7, 101,102, 18, 19, 20]
console.log(lengthOfLIS(arr));
// @lc code=end

