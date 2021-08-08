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

  const topK = new Array(k + 1);
  for (let i = 1; i <= k; i++){
    topK[i]=nums[i-1]
  }
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j]; arr[j] = temp;
  }
  function heapify(topK, i) {
    const left = 2 * i, right = 2 * i + 1;
    let parent = i
    if (left < k && topK[left] > topK[i]) {
      parent = left
    }
    if (right < k && topK[right] > topK[i]) {
      parent = right
    }
    if (parent !== i) {
      swap(topK, i, parent)
      heapify(topK, parent)
    }
  }
  for (let i = 1;i <= k;i++) {
    heapify(topK, i)
  }
  return topK.slice(1)

};
const arr = [12, 12, 43, 5, 23, 64]
console.log(findKthLargest(arr, 5))
// @lc code=end

