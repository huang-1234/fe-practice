/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let mp = m-1, np = n-1, mnp = n+m-1
  for (let i = m;i < m + n; i++){
    nums1[i] = 0;
  }
  function swap(arr,i,j){
    const temp = arr[i];
    arr[i]=arr[j]; arr[j]=temp
  }
  while (mp >= 0 && np >= 0 && (mnp > m || mnp > n)) {
    if (nums2[np] >= num1[mp]) {
      num1[mnp--] = num2[np--];
    } else if(nums2[np] < num1[mp]) {
      swap(nums1, np, mnp);
      np--; mnp--;
      nums1[mnp--] = nums2[mp--]
    }
  }


};
// @lc code=end

