/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const path = new Set(), len = nums.length, ans = [];
  function dfs() {
    if (path.size === len) {
      ans.push(Array.from(path))
      return;
    }
    for (let i = 0;i < len;i++) {
      if (path.has(nums[i])) {
        continue
      }
      path.add(nums[i])
      dfs();
      path.delete(nums[i])
    }
  }
  dfs();
  return ans;
};

console.log(permute([1, 2, 3]))