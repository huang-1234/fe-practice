/**
 * @param {number[]} nums
 * @return {number[]}
 */

function merge(nums, low, mid, high, temp) {
  for (let i = low;i <= high;i++) {
    temp[i] = nums[i];
  }
  let [p1, p2] = [low, mid + 1];
  for (let i = low;i <= high;i++) {
    if (p1 === mid + 1) {
      nums[i] = temp[p2++];
    } else if (p2 === high + 1) {
      nums[i] = temp[p1++]
    } else if (temp[p1] < temp[p2]) {
      nums[i] = temp[p1++];
    } else {
      nums[i] = temp[p2++];
    }

  }
}
function mergeSort(nums, low, high, temp) {
  if (low === high) {
    return;
  }
  const mid = low + Math.floor((high - low) / 2);
  mergeSort(nums, low, mid, temp);
  mergeSort(nums, mid + 1, high, temp);
  merge(nums, low, mid, high, temp);
}
const sortArray = function (nums) {
  const [low, high] = [0, nums.length - 1];
  const temp = new Array(nums.length).fill(0);
  mergeSort(nums, low, high, temp);
  return nums;
};