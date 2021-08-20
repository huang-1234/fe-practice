/*
 * @lc app=leetcode.cn id=145 lang=go
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
func postorderTraversal(root *TreeNode) (res []int) {
	stk := []*TreeNode{}
	var prev *TreeNode
	for root != nil || len(stk) > 0 {
			for root != nil {
					stk = append(stk, root)
					root = root.Left
			}
			root = stk[len(stk)-1]
			stk = stk[:len(stk)-1]
			if root.Right == nil || root.Right == prev {
					res = append(res, root.Val)
					prev = root
					root = nil
			} else {
					stk = append(stk, root)
					root = root.Right
			}
	}
	return
}
// @lc code=end