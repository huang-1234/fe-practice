/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  function dfsPathSum(root, targetSum) {
    const st = new Array();
    st.push(root)

    while (st.length > 0) {

      const cur = st.pop();
      prece
      if (cur.left) {
        st.push(cur.left);

      }
      if (cur.right) {
        st.push(cur.right)
      }
    }
  }
};
// @lc code=end

