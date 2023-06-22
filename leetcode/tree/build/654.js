/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

function findMaxIdx(nums, left, right) {
  let maxValIdx = left;
  for (let i = left + 1;i <= right;i++) {
    if (nums[i] > nums[maxValIdx]) {
      maxValIdx = i;
    }
  }
  return maxValIdx;
}
const constructMaximumBinaryTree = function (nums) {
  const mapIdxToVal = new Map();
  nums.forEach((val, idx) => {
    mapIdxToVal.set(val, idx);
  });

  function buildTree(nums, lo, hi) {
    if (lo > hi) {
      return null;
    }
    const targetIdx = findMaxIdx(nums, lo, hi)
    const node = new TreeNode(nums[targetIdx], null, null);
    node.left = buildTree(nums, lo, targetIdx - 1);
    node.right = buildTree(nums, targetIdx + 1, hi);
    return node;
  }

  const root = buildTree(nums, 0, nums.length - 1);
  return root;
};



