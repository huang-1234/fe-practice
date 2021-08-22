/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const topK = new Array(k);
  for (let i = 0;i < k;i++) {
    topK[i] = nums[i]
  }
  function swap(arr, i, j) {
    const temp = arr[i];arr[i] = arr[j]; arr[j] = temp;
  }
  function heapify(topK, i, k) {
    const left = 2 * i + 1, right = 2 * i + 2;
    let parent = i
    if (right < k && topK[right] > topK[parent]) {
      parent = right
    }
    if (left < k && topK[left] > topK[parent]) {
      parent = left
    }
    if (parent !== i) {
      swap(topK, i, parent)
      heapify(topK, parent, k)
    }
  }
  function buildHeap(topK, k) {
    for (let i = Math.floor(k / 2) - 1;i >= 0;i--) {
      heapify(topK, i, k)
    }
    return topK
  }
  function solute(nums, topK, k) {
    for (let i = k, Len = nums.length;i < Len;i++) {
      if (nums[i] > topK[0]) {
        topK[k - 1] = nums[i]
        heapify(topK, k - 1, k)
      }
    }
  }
  // buildHeap(topK, k);
  // solute(nums, topK, k)
  // return topK[k-1]
  return buildHeap(topK, k)
};
const arr = [3, 2, 1, 5, 6, 4]
console.log(findKthLargest(arr, 2))
// @lc code=end

