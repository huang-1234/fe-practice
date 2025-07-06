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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let height = 0
  function maxDepth(node) {
    if (!node) {
      return 0;
    }
    let left = maxDepth(node.left), right = maxDepth(node.right)
    height = Math.max(left + right, height) //左子树深度 + 右子树深度
    return Math.max(left, right) + 1 //以该节点为根节点的最大深度
  }
  maxDepth(root)
  return height
};