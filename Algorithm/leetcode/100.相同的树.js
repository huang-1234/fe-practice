/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) { return true }
  else if (!q || !p || p.val !== q.val) {
    return false
  }
  const qe = new Array(); // 队列
  // const qe = new Array(); // 队列

  // qe.push(p)
  // while (qe.length > 0) {
  //   const qSize = qe.length
  //   const cur = qe.pop()
  //   while (cur) {

  //   }
  // }
  let flag = false;
  const subIsSameTree = (p, q ,flag) => {

    if (!p || !q || p.val !== q.val) {
      flag = false;
      return flag
    } else if(p && q || p.val === q.val) {
      flag = true
      return flag
    }
    if ((p.left && q.left && p.left === q.left)) {
      return subIsSameTree(p.left, q.left)
    }
    if (p.right && q.right && p.right === q.right) {
      return subIsSameTree(p.right, p.right)
    }

  }
  return subIsSameTree(p, q, flag)
};
// @lc code=end

