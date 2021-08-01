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
  if (!root) { return [] }
  else if (!root.left && !root.right) {
    res.push(root.val)
    return res
  }
  const res = new Array()
  const inorderTree = (root) => {
    if(!root) return null
    if (root.left) inorderTree(root.left)

    console.log(res);
    res.push(root.val);
    if(root.right) inorderTree(root.right)
  }
  return res

};
// @lc code=end

