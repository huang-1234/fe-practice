// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
class BinaryTreeSearch {
  /* 限定以 root 为根的子树节点必须满足 max.val > root.val > min.val */
  isValidBST(root, min, max) {
    // base case
    if (root === null) return true;
    // 若 root.val 不符合 max 和 min 的限制，说明不是合法 BST
    if (min !== null && root.val <= min.val) return false;
    if (max !== null && root.val >= max.val) return false;
    // 限定左子树的最大值是 root.val，右子树的最小值是 root.val
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
  }

  checkValidBST(root) {
    return isValidBST(root, null, null);
  };
  find(root, target) {
    if (root === null) {
      return null;
    }
    if (root.val === target) {
      return root;
    }
    if (target < root.val) {
      return this.find(root.left, target)
    } else if (target > root.val) {
      return this.find(root.right, target);
    }
    return root;
  }
  insertIntoBST(root, val) {
    if (root === null) {
      return new TreeNode(val);
    }
    // if (root.val == val)
    //     BST 中一般不会插入已存在元素
    if (root.val < val) {
      root.right = this.insertIntoBST(root.right, val);
    } else if (root.val > val) {
      root.left = this.insertIntoBST(root.left, val);
    }
    return root;
  }

  /**
   * 删除 BST 中的一个节点并返回根节点。
   * @param {TreeNode} root - 二叉树的根节点。
   * @param {number} key - 待删除节点的值。
   * @return {TreeNode} - 删除节点后的 BST。
   */
  deleteNode(root, key) {
    const { deleteNode, getMin } = this;
    if (root == null) return null;
    if (root.val == key) {
      // 这两个 if 把情况 1 和 2 都正确处理了
      if (root.left == null) return root.right;
      if (root.right == null) return root.left;
      // 处理情况 3
      // 获得右子树最小的节点
      let minNode = getMin(root.right);
      // 删除右子树最小的节点
      root.right = deleteNode(root.right, minNode.val);
      // 用右子树最小的节点替换 root 节点
      minNode.left = root.left;
      minNode.right = root.right;
      root = minNode;
    } else if (root.val > key) {
      root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
      root.right = deleteNode(root.right, key);
    }
    return root;
  }

  /**
  * 获得 BST 中最小的节点。
  * @param {TreeNode} node - 待查找 BST。
  * @return {TreeNode} - BST 中最小的节点。
  */
  getMin(node) {
    // BST 最左边的就是最小的
    while (node.left != null) node = node.left;
    return node;
  }
}