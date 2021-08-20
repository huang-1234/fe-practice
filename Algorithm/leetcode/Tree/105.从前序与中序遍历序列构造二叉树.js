/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const Len = preorder.length
  // const res = new Array()
  const root = new TreeNode(preorder[0], null, null)

  // const nodeToIndex = new Map()
  // for (let i = 0;i < Len;i++){
  //   nodeToIndex.set(preorder[i],i)
  // }

  if (0 === preorder.length) return null
  const rootIndex = inorder.findIndex(item => item === preorder[0])
  // const rootIndex = nodeToIndex.get(pre)
  root.left = buildTree(
    preorder.slice(1, inorder.slice(0, rootIndex).length + 1),
    inorder.slice(0, rootIndex)
  )
  root.right = buildTree(
    preorder.slice(inorder.slice(0, rootIndex).length + 1),
    inorder.slice(rootIndex + 1,)
  )
  return root

};
// @lc code=end

