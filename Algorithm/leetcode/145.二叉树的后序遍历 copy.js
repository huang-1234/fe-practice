/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  const res = new Array();
  const stack = new Array();
  if(root) stack.push(root)

  while (stack.length > 0 ) {
    let node = stack.pop()
    if (node) {
      stack.push(node)
      stack.push(null)

      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left)

    } else {
      node = stack.pop();
      res.push(node.val)
    }
  }
  return res
};
// @lc code=end

