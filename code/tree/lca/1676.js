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
function find(root, values) {
  if (root == null) {
    return null;
  }
  if (values.includes(root.val)) {
    return root;
  }
  const left = find(root.left, values);
  const right = find(root.right, values);
  if (left && right) {
    return root;
  }
  return left || right;
}
const lowestCommonAncestor = function (root, nodes) {
  const nodeArr = Array.from(nodes).map(node => node.val);
  return find(root, nodeArr);
};


// ac
// 68 ms	50.3 MB	JavaScript