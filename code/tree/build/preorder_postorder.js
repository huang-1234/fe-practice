
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const { initMap } = require('./utils.js')
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


const constructFromPrePost = function (preorder, postorder) {
  // 存储 postorder 中值到索引的映射
  const valToIndex = initMap(postorder)
  return buildByPrePost(preorder, 0, preorder.length - 1, postorder, 0, postorder.length - 1, valToIndex);
};

// 定义：根据 preorder[preStart..preEnd] 和 postorder[postStart..postEnd]
// 构建二叉树，并返回根节点。
const buildByPrePost = function (preorder, preStart, preEnd,
  postorder, postStart, postEnd, valToIndex) {
  if (preStart > preEnd) {
    return null;
  }
  if (preStart === preEnd) {
    return new TreeNode(preorder[preStart]);
  }

  // root 节点对应的值就是前序遍历数组的第一个元素
  const rootVal = preorder[preStart];
  // root.left 的值是前序遍历第二个元素
  // 通过前序和后序遍历构造二叉树的关键在于通过左子树的根节点
  // 确定 preorder 和 postorder 中左右子树的元素区间
  const leftRootVal = preorder[preStart + 1];
  // leftRootVal 在后序遍历数组中的索引
  const index = valToIndex.get(leftRootVal);
  // 左子树的元素个数
  const leftSize = index - postStart + 1;

  // 先构造出当前根节点
  const root = new TreeNode(rootVal);


  // 递归构造左右子树
  // 根据左子树的根节点索引和元素个数推导左右子树的索引边界
  root.left = buildByPrePost(preorder, preStart + 1, preStart + leftSize, postorder, postStart, index, valToIndex);
  root.right = buildByPrePost(preorder, preStart + leftSize + 1, preEnd, postorder, index + 1, postEnd - 1, valToIndex);

  return root;
};

const tree = constructFromPrePost([1, 2, 3], [3, 2, 1]);
console.log(tree)