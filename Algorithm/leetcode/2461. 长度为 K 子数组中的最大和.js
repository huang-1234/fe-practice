
/*
 * @lc app=leetcode.cn id=2461 lang=javascript
 *
 * [2461] 二叉搜索子树的最大键值和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const mp = new Map();
  let res = 0, temp = 0;
  for (let i = 0;i < nums.length;i++) {
    const s = nums[i];
    temp += s;
    mp.set(s, (mp.get(s) ?? 0) + 1)
    let left = i - k + 1;
    if (left < 0) {
      continue;
    }

    if (mp.size == k) {
      res = Math.max(res, temp)
    }

    const out = nums[left]
    temp -= out;
    const c = mp.get(out);
    if (c > 1) {
      mp.set(out, c - 1)
    } else {
      mp.delete(out)
    }

  };
  return res
}

// @lc code=end