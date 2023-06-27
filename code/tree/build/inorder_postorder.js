
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
const buildTreeByInPost = function (inorder, postorder) {
  const [inStart, inEnd, postStart, postEnd] = [0, inorder.length - 1, 0, postorder.length - 1];
  initMap(inorder);
  return buildByInPost(inorder, inStart, inEnd, postorder, postStart, postEnd);
};


const buildByInPost = function (inorder, inStart, inEnd, postorder, postStart, postEnd) {
  if (inStart > inEnd) {
    // 如果没有节点了，则返回 null
    return null;
  }
  // 先取出根节点
  const rootVal = postorder[postEnd];
  // 在中序遍历中取出根节点的位置
  const rootIdx = valToIndex.get(rootVal);

  // 计算左子树的长度
  const leftSize = rootIdx - inStart;

  // 构造出当前根节点
  const root = new TreeNode(rootVal);

  console.log('rootVal', rootVal)

  // 递归构造左右子树

  root.left = buildByInPost(inorder, inStart, rootIdx - 1, postorder, postStart, postStart + leftSize - 1);
  root.right = buildByInPost(inorder, rootIdx + 1, inEnd, postorder, postStart + leftSize, postEnd - 1);
  return root;
};

const inorder = [9, 3, 15, 20, 7];
const postorder = [3, 9, 20, 15, 7];


console.log('buildTreeByInPost', buildTreeByInPost(inorder, postorder))

