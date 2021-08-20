/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  const res = new Array();
  if (!root) return [];
  else if (!root.left && !root.right) {
    res.push([root.val])
    return res
  }
  const queue = new Array();

  queue.push(root)

  let flag = true

  while (queue.length > 0) {
    const listArr = new Array();
    const qLen = queue.length

    for (let i = 0;i < qLen;i++){
      const cur = queue.shift();
      if (flag) {
        listArr.push(cur.val)
      } else {
        listArr.unshift(cur.val)
      }
      if (cur.left) { queue.push(cur.left) }
      if (cur.right) { queue.push(cur.right) }

    }
    res.push(listArr);
    flag = flag;
  }
  return res;
};
// @lc code=end

