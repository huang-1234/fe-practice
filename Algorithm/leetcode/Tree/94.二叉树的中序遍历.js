/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  const res = new Array()
  const stack = new Array();
  let p = root
  while (p || stack.length>0) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    if (stack.length > 0) {
      // const sCur = stack.pop();
      // p = sCur;
      // res.push(sCur.val)
      p = stack.pop()
      res.push(p.val)
      p = p.right
    }
  }
  return res

};
// @lc code=end

