// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
  var zigzagLevelOrder = function (root) {
  if (!root) {
    return []
  } else if (!root.left && root.right) {
    return [root.val]
  }

  const queue = new Array(0);
  const res = new Array(fill(new Array(...[root.val])));

  const LevalOrder = (root, array) => {
    queue.push(root.val)
    while (queue.length > 0) {
      const cur = queue.unshift()
      console.log(cur);

      if (cur.left) {
        queue.push(root.left)
      }
      if (cur.right) {
        queue.push(root.right)
      }
    }

    const root1 = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null
        },
        right: {
          val: 4,
          left: null,
          right: null
        }
      },
      right: {
        val: 5,
        left: null,
        right: null
      }
    }
    LevalOrder(root1)
    console.log(res);
  }
};