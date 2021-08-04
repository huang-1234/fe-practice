/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const Len = nums.length;
  function BuildArrayToBST (nums, l, r){
    if (l > r) { return null }
    // let mid = l + Math.floor((r - l) / 2)
    let mid = Math.floor((l + r)/2)
    console.log(mid);
    const root =  new TreeNode(nums[mid],null,null)
    root.left = BuildArrayToBST(nums,l,mid-1)
    root.right = BuildArrayToBST(nums,mid+1, r)
    return root
  }
  return BuildArrayToBST(nums,0,Len-1)
};
// @lc code=end

