/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const res = new Array()
  let p = root;
  const stack = new Array()

  while (stack.length > 0 || p) {
    while (p) {
      res.push(p.val);
      stack.push(p)
      p = p.left
    }
    if (stack.length > 0) {
      p = stack.pop()
      p = p.right
    }
  }
  return res
};
// @lc code=end

