/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const res = new Array();
  if (!root) { return [] }
  else if (!root.left && !root.right) {
    res.push([root.val]);
    return res
  }
  const queue = new Array()
  queue.push(root)
  while (queue.length > 0) {
    const qLen = queue.length;
    const listArr = new Array()
    for (let i = 0;i < qLen;i++){
      const cur = queue.shift()
      listArr.push(cur.val)
      if (cur.left) queue.push(cur.left)
      if(cur.right) queue.push(cur.right)
    }
    res.unshift(listArr)
  }
  return res

};
// @lc code=end

