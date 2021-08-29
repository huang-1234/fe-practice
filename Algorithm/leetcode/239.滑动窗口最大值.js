/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function maxQueue() {
  this.queue = [];

  this.push = function (item) {
    while (this.queue.length && item > this.queue[this.queue.length - 1]) {
      this.queue.pop();
    }
    this.queue.push(item)
  }
  this.fetchMax = function () {
    return this.queue[0]
  }
  this.deleteLast = (item) => {
    if (item === this.queue[0]) {
      this.queue.shift();
    }

  }
}
var maxSlidingWindow = function (nums, k) {
  const numsLen = nums.length;

  const wind = new maxQueue();
  const ans = [];
  if (nums.length <= k) return [Math.max(...nums)]
  if (k === 1) return nums;
  for (let i = 0;i < numsLen;i++) {
    if (i < k - 1) {
      wind.push(nums[i]);
    } else {
      wind.push(nums[i]);
      ans.push(wind.fetchMax());
      wind.deleteLast(nums[i - k + 1]);
    }
  }
  return ans
};
// @lc code=end

