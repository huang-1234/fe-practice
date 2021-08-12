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
/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root == null || root == p || root == q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left == null) {
    return right
  } else if (right == null) {
    return left
  }
  return root;
};
/**
 *
 * @param root TreeNode类
 * @param o1 int整型
 * @param o2 int整型
 * @return int整型
 */
/* function lowestCommonAncestor( root ,  o1 ,  o2 ) {
  // write code here
  const map = new WeakMap()
  const que = [];
  que.push(root)
  const preorderTraverse = (root)=>{
      while(que.length>0 ){
          let qSize = que.length;
          while(qSize--){
              let cur = que.shift();
              if(cur.left){
                  que.push(cur.left);map.set(cur.left, cur)
              }
              if(cur.right){
                  que.push(cur.right); map.set(cur.right, cur)
              }
          }
      }
  }
  preorderTraverse(root);
  let resNode = null
  const rootParentSet = new Set();
  while(o1){
      rootParentSet.add(o1);
      o1 = map.get(o1)
  }
  while(o2){
      if(rootParentSet.has(o2)){
          return o2.val
      }
      o2 = map.get(o2)
  } */
//     return resNode
// }
// module.exports = {
//   lowestCommonAncestor : lowestCommonAncestor
// };
// @lc code=end

