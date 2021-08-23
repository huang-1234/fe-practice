i/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @description
 * 利用二分查找方式
 * 1.利用将数组从中间分开
 * 此时肯定存在前半部分或是后半部分是有序的（重要）
 * 2.对有序部分执行二分查找
 * 3.如果目标值不可能存在于有序部分
 * 4.则将目标查找数组选择在无序部分
 * 5.继续进行1进行判断
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
  if (!nums || nums.length === 0) return -1;
  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.ceil((start + end) / 2);
    // 首尾中全部验证
    if (nums[mid] === target) return mid;
    if (nums[start] === target) return start;
    if (nums[end] === target) return end;
    // 说明前半部分有序
    if (nums[start] < nums[mid]) {
      // 说明目标值存在于有序部分，将末尾设置为mid
      // 继续执行二分查找
      if (nums[start] < target && target < nums[mid]) {
        end = mid - 1;
      } else {
        // 说明目标值存在于后半段
        start = mid + 1;
      }
    } else {
      // 说明后半部分有序
      // 判断目标值是否在后半部分
      if (nums[mid] < target && target < nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};


let nums = [7,8,1,2,3,4,5,6];
let target = 2;

console.log(search(nums, target));
// @lc code=end

