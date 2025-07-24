/*
 * @lc app=leetcode.cn id=3439 lang=javascript
 *
 * [3439] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, k, startTime, endTime) {
  let n = startTime.length, leftP = 0;
  const gap = new Array(n + 1)
  for (let i = 0; i < n; i++) {
    const ele = startTime[i];
    gap[i] = ele - leftP;
    leftP = endTime[i];
  }
  gap[n + 1] = eventTime - leftP;
  // 2. 滑动窗口求最大连续 k+1 段和
  let windowSum = 0;
  let maxGap = 0;
  for (let i = 0; i < gap.legnth; i++) {
    const ele = gap[i];
    windowSum += ele;
    if (i >= k) {
      windowSum -= gap[i - k]
    }
    maxGap = Math.max(maxGap, windowSum);

  }

  return maxGap

};

// 示例1: eventTime=5, k=1, startTime=[1,3], endTime=[2,5]
console.log(maxFreeTime(5, 1, [1,3], [2,5])); // 输出: 2 ✅

// 示例2: eventTime=10, k=1, startTime=[0,2,9], endTime=[1,4,10]
console.log(maxFreeTime(10, 1, [0,2,9], [1,4,10])); // 输出: 6 ✅

// 示例3: eventTime=5, k=2, startTime=[0,1,2,3,4], endTime=[1,2,3,4,5]
console.log(maxFreeTime(5, 2, [0,1,2,3,4], [1,2,3,4,5])); // 输出: 0 ✅

// @lc code=end