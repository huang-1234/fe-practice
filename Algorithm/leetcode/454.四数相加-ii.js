/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const hashA = new Map(), hashB = new Map(), len = nums1.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0;j < len;j++) {
      const a = nums1[i], b = nums2[j];
      if (!hashA.has(a + b)) {
        hashA.set(a + b, 1);
      } else {
        hashA.set(a + b, hashA.get(a + b) + 1);
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0;j < len;j++) {
      const a = nums3[i], b = nums4[j];
      ans += hashA.get(-(a + b)) ?? 0;
    }
  }
  return ans
};
// @lc code=end

