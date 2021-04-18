/* 
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1, 0, 1, 2, -1, -4]
输出：[[-1, -1, 2], [-1, 0, 1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]
 */

/* 
nums
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/* 
var threeSum = function (nums) {
  if (nums.length < 3 || 3 === nums.length && 0 !== nums[0] + nums[1] + nums[2]) {
    return []
  }

  let resArr = [];
  const length = nums.length;
  let front = 0, end = nums.length - 1;
  for (let i = 1;i <= length - 1;++i) {
    front = i + 1;
    while (front !== end) {
      if (0 === nums[front] + nums[end] + nums[i]) {
        resArr.push([nums[front], nums[end], nums[i]]);
      }
      else if (0 < nums[front] + nums[end] + nums[i]) {
        ++front;
      } else {
        --end;
      }
    }
  }
  return resArr;
};
let nums = [-1, 0, 1, 2, -1, -4];
const res = threeSum(nums);
console.log(res)

 */

console.log([].length===null)