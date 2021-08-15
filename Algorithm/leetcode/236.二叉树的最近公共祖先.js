/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  // write code here
  if (!root || p.val === root.val || q.val === root.val) {
    return root
  }
  let map = new Map()
  let que = [];
  que.push(root)

  while (que.length > 0) {
    let qSize = que.length;
    while (qSize--) {
      let cur = que.shift();
      if (cur.left) {
        que.push(cur.left);
        map.set(cur.left, cur)
      }
      if (cur.right) {
        que.push(cur.right);
        map.set(cur.right, cur)
      }
    }
  }

  let rootParentSet = new Set();
  while (p) {
    rootParentSet.add(p);
    p = map.get(p)
  }
  while (q) {
    if (rootParentSet.has(q)) {
      return q
    }
    q = map.get(q)
  }
}
// @lc code=end

