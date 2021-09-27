
/* 请实现有重复数字的升序数组的二分查找。
输出在数组中第一个大于等于查找值的位置，如果数组中不存在这样的数
(指不存在大于等于查找值的数)，则输出数组长度加一。
示例1
输入
5,4,[1,2,4,4,5]
输出
3
说明
输出位置从1开始计算   */
function findLeftTarget(nums, target) {
  const len = nums.length;
  let left = 0, right = len;
  if(target>nums[len-1]){
    return len + 1;
  }
  while (left < right) {
    const mid = left + (right - left) / 2 | 0;
    if (nums[mid] < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
    return left + 1;
  }
}