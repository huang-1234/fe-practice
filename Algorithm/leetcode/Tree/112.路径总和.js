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
  if(!root ){
    return false
  }
  const que_node = [];
  const que_val = [];
  que_node.push(root);
  que_val.push(root.val)
  while (que_node.length > 0) {
    const cur = que_node.pop();
    que_val.push(cur.val);
    let temp = que_val.pop();
    if(!cur.left && !cur.right){
      if (temp === targetSum) {
        return true;
      }
      continue;
    }
    if(cur.left) {
      que_node.push(cur.left)
      que_val.push(temp + cur.left.val)
    }
    if (cur.right) {
      que_node.push(cur.right)
      que_val.push(temp + cur.right.val)
    }
  }
  return false
};
// @lc code=end

