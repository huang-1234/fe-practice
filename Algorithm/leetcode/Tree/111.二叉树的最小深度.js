/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  if (!root) {
    return 0
  } else if (!root.left && !root.right) {
    return 1
  }
  let MinDepthV = Number.MAX_VALUE
  const que = []
  let p = root
  que.push(p);
  while (que.length > 0 && p) {
    let depthCount = 1;
    const cur = que.pop()
    p = cur
    while (!!p.left || !!p.right) {
      depthCount++;
      p = p.left || p.right
      que.push(p)
    }
    MinDepthV = MinDepthV > depthCount ? depthCount : MinDepthV
  }
  return MinDepthV;
};
// @lc code=end

