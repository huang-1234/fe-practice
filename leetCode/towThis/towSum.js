/* 
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。



示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]


提示：

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
  nums.sort((a,b)=>a-b);
  console.log(nums)
  let ans = [];
  const len = nums.length;
  let L = 0, R = len - 1;
  while (L < R) {
    // if(L<len-1 && nums[L]===nums[L+1]) L++;
    if (nums[L] + nums[R] === target) {
      // return [L, R]
      ans.push(L, R);
      while (nums[L] === nums[L + 1]) L++;
      while (nums[R] === nums[R - 1]) R--;
    } else if (nums[L] + nums[R] > target) {
      R--;
    } else {
      L++;
    }
  }
  return ans;
};

let nums = [2, 7, 11, 15];
const tar = 9;
let ans = twoSum(nums, tar);
console.log(ans);