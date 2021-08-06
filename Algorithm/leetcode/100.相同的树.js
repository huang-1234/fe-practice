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
  const pQue = new Array(); // 队列
  const qQue = new Array(); // 队列
  pQue.push(p), qQue.push(q);
  let flag = true;
  while (pQue.length > 0 && qQue.length > 0) {
    const pSize = pQue.length;
    const pCur = pQue.pop();
    const qCur = qQue.pop();
    for (let i = 0;i < pSize;i++){
      // 判断两棵树的左子树
      if (pCur.left && qCur.left && pCur.val === qCur.val) {
        pQue.push(pCur.left); qQue.push(qCur.left)
      } else if (!pCur.left && !qCur.left) {

      } else {
        flag = false;
        break
      }
      // 判断两棵树的右子树
      if (pCur.right && qCur.right && pCur.val === qCur.val) {
        pQue.push(pCur.right); qQue.push(qCur.right)
      } else if (!pCur.right && !qCur.right) {

      } else {
        flag = false
        break
      }
    }
    if (false === flag) {
      return flag;
    }
  }
  return flag;
};
// @lc code=end

