/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @requires error
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const [m, n] = [nums1.length, nums2.length];
  const mMidIdx = m % 2 === 0 ? Math.floor(m / 2) : Math.floor(m / 2) + 1;
  const nMidIdx = n % 2 === 0 ? Math.floor(n / 2) : Math.floor(n / 2) + 1;
  let [mMid, nMid] = [nums1[mMidIdx - 1], nums2[nMidIdx - 1]];
  if (m === 0) return nMid;
  if (n === 0) return mMid;
  console.log('first', m, n, mMid, nMid)
  if (mMid < nMid) {
    return findMedianSortedArrays(nums1.slice(Math.floor(m / 2)), nums2);
  } else {
    return findMedianSortedArrays(nums1, nums2.slice(Math.floor(n / 2)));
  }
};
// @lc code=end
