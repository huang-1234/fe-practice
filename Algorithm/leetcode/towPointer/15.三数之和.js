/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const len = nums.length;
  if (len===undefined || len < 3 || 3 === len && 0 !== nums[0] + nums[1] + nums[2]) {
    return []
  }
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (nums[i] >= 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = len - 1;
    const target = -nums[i];
    // 使用 left right 两个指针可以使得 O(n^2) 变为 O(n)
    while (left < right) {
      if (nums[left] + nums[right] === target) {
        ans.push([nums[left], nums[i], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++; right--;
      } else if (nums[left] + nums[right] < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;
};
// @lc code=end

