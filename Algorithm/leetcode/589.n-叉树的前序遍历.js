/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const res = []
  if (!root) {
    return res
  }

  let p = root
  const que = []
  que.push(p)
  while (que.length>0) {
    const cur = que.pop()
    res.push(cur.val)
    const childSize = cur.children?.length | 0
    for (let i = childSize-1 ;i >= 0;i--){
      que.push(cur.children[i])
    }
  }
  return res
};
// @lc code=end

