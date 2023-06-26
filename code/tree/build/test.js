
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
const valToIndex = new Map();
function initMap(nums) {
  const len = nums.length;
  for (let i = 0;i < len;i++) {
    valToIndex.set(nums[i], i);
  }
}
const buildTree = function (inorder, postorder) {
  initMap(inorder);
  return buildByInPost(inorder, postorder);
};

var buildByInPost = function(inorder, postorder) {

  const root = new TreeNode(postorder[postorder.length - 1], null, null)
  if (0 === postorder.length) return null
  const rootIndex = valToIndex.get(postorder[postorder.length - 1]);
    console.log(rootIndex)
  root.left = buildByInPost(
    inorder.slice(0, rootIndex),
    postorder.slice(0, rootIndex)
  );
  root.right = buildByInPost(
    inorder.slice(rootIndex + 1,inorder.length),
    postorder.slice(rootIndex,postorder.length-1)
  )
  return root
};

// exc error