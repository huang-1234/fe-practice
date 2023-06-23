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
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
const valToIndex = new Map();
function initMap(nums) {
  const len = nums.length;
  for (let i = 0;i < len;i++) {
    valToIndex.set(nums[i], i);
  }
}
const buildTree = function (preorder, inorder) {
  const [preStart, preEnd, inStart, inEnd] = [0, preorder.length - 1, 0, inorder.legnth - 1];
  initMap(inorder);
  return build(preorder, preStart, preEnd, inorder, inStart, inEnd);
};

const build = function (preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd) {
    // 如果没有节点了，则返回 null
    return null;
  }
  // 先取出根节点
  const rootVal = preorder[preStart];
  // 在中序遍历中取出根节点的位置
  const rootIdx = valToIndex.get(rootVal);

  // 计算左子树的长度
  const leftSize = rootIdx - inStart;

  // 构造出当前根节点
  const root = new TreeNode(rootVal);

  // 递归构造左右子树
  root.left = build(preorder, preStart + 1, preStart + leftSize, inorder, inStart, rootIdx - 1);

  root.right = build(preorder, preStart + leftSize + 1, preEnd, inorder, rootIdx + 1, inEnd);
  return root;
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];


console.log('buildTree', buildTree(preorder, inorder))