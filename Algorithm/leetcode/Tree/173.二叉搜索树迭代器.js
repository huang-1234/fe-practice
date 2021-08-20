/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */

var BSTIterator = function (root) {
  this.queueCurIndex = 0;
  this.inorder = new Array();
  // 使用中序遍历得到一个数组
  this.inorderTraversal(root, this.inorder)


};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.inorder[this.queueCurIndex++]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.inorder.length > this.queueCurIndex
};

/**
 *
 */
BSTIterator.prototype.inorderTraversal = function(root, arr){
  if (!root) { return null }
  if (root.left) this.inorderTraversal(root.left, arr)
  arr.push(root.val);
  if(root.right) this.inorderTraversal(root.right, arr)
}
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

