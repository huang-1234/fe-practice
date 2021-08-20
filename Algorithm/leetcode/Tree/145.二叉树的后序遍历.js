/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const res = new Array();
  const stack = new Array();


/*   let p = root
  stack.push(p)
  while (stack.length > 0 || p) {
    while ( p && (p.left || p.right) ) {
      if (p.right) {
        res.unshift(p.val)

        stack.push(p)
        p = p.right
      } else if (p.left) {
        stack.push(p)
        p = p.left
        stack.push(p)
        p = p.right
      }
    }
    if (stack.length > 0) {
      // res.push(p.val)
      p = stack.pop()
    }
  } */

  // stack.push(root)
  // while (root || stack.length>0) {
  //   while (root) {
  //     stack.push(root)
  //     res.unshift(root.val)
  //     if (root.right) {
  //       root = root.right
  //     }
  //   }
  //   if (stack.length>0) {
  //     root = stack.pop()
  //     root = root.left
  //   }
  // }

  let cur, pre = null;
  stack.push(root);
  while (stack.length > 0 && root) {
    cur = stack.slice(0,1);
    // cur = stack.pop();
    if (
      (cur.left === null && cur.right === null) ||
      (pre!==null && (pre==cur.left || pre==cur.right ))
    ) {
      res.push(cur.val)
      stack.pop()
      pre = cur;
    } else {
      if (cur.right) stack.push(cur.right)
      if (cur.left)  stack.push(cur.left)
    }
  }

  return res

};
// @lc code=end

