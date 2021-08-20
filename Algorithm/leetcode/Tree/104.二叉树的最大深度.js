/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  let Longth = 0;
  if (!root) { return Longth }
  else if (!root.left && !root.right) {
    Longth++
    return Longth
  }
  let maxdepth = 0;
  const que = new Array()
  que.push(root)
  while (que.length > 0) {
    const qSize = que.length
    maxdepth++;
    for (let i = 0;i < qSize;i++){
      const cur = que.shift();
      if (cur.left) que.push(cur.left)
      if(cur.right) que.push(cur.right)
    }
  }
  return maxdepth
};
// @lc code=end