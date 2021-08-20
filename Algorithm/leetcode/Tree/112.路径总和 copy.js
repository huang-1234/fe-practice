/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let p = root
  if (!p) {
    return false
  }
  if (p.left === null && p.right === null) {
    return targetSum - p.val === 0;
  }
  return hasPathSum(p.left, targetSum-p.val) || hasPathSum(p.right, targetSum-p.val)

};
// @lc code=end

