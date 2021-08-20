/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {
  const res = new Array()
  if (!root) {
    return res
  } else if (!root.left && !root.right) {
    res.push([root.val])
    return res
  }
  const queue = new Array()
  queue.push(root)

  let flag = false;
  while (queue.length > 0) {
    const listArr = new Array()
    const qLen = queue.length
    for (let i = 0;i < qLen; i++){
      const cur = queue.shift()
      // if (flag) {
      //   listArr.push(cur.val)
      // } else {
      //   listArr.unshift(cur.val)
      // }
      listArr.push(cur.val)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    if (flag) {
      listArr.reverse()
    }
    res.push(listArr)
    flag = !flag
  }
  return res
};
// @lc code=end

