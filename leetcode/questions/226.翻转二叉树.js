/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */

var invertTree = function(root) {
  const traverse = function(root) {
      if (root === null) {
          return;
      }

      /**** 前序位置 ****/
      // 每一个节点需要做的事就是交换它的左右子节点
      let tmp = root.left;
      root.left = root.right;
      root.right = tmp;

      // 遍历框架，去遍历左右子树的节点
      traverse(root.left);
      traverse(root.right);
  };

  // 遍历二叉树，交换每个节点的子节点
  traverse(root);
  return root;
};

// @lc code=end

