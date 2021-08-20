/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

  const root = new TreeNode(postorder[postorder.length - 1], null, null)
  if (0 === postorder.length) return null
  const rootIndex = inorder.findIndex(item => item === postorder[postorder.length - 1])

  root.left = buildTree(
    inorder.slice(0, rootIndex),
    postorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    inorder.slice(rootIndex + 1,inorder.length),
    postorder.slice(rootIndex,postorder.length-1)
  )
  return root
};
// @lc code=end
