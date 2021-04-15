

/* 
使用队列，按层处理，每层的数量是2的层高次方。
先去除队列首，然后生成左右节点，链接出队节点的左右节点后push自己入队。 
*/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var buildTree = function (nums) {
  var root = new TreeNode(nums[0]);
  var queue = [];
  queue.push(root);
  var cur;
  var lineNodeNum = 2;
  var startIndex = 1;
  var restLength = nums.length - 1;
  while (restLength > 0) {
    for (var i = startIndex;i < startIndex + lineNodeNum;i = i + 2) {
      if (i == nums.length) return root;
      cur = queue.shift();
      if (nums[i] != null) {
        cur.left = new TreeNode(nums[i]);
        queue.push(cur.left);
      }

      if (i + 1 == nums.length) return root;
      if (nums[i + 1] != null) {
        cur.right = new TreeNode(nums[i + 1]);
        queue.push(cur.right);
      }
    }
    startIndex += lineNodeNum;
    restLength -= lineNodeNum;
    lineNodeNum = queue.length * 2;
  }
  return root;
}


//===============================================================
/* 
// leetcode的数组生成树 用于本地调试代码（js版）
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const creatTree = function (src) {
  let root = new TreeNode()
  let result = new TreeNode()
  result = null
  let queue = []
  for (let i = 0;i < src.length;i++) {
    if (i == 0) {
      root = new TreeNode(src[i])
      result = root
      queue.push(root)
    }
    if (queue.length) {
      root = queue.shift()
    } else {
      break
    }
    if (i + 1 < src.length && src[i + 1] !== null) {
      root.left = new TreeNode(src[i + 1])
      queue.push(root.left)
    }
    if (i + 2 < src.length && src[i + 2] !== null) {
      root.right = new TreeNode(src[i + 2])
      queue.push(root.right)
    }
    i = i + 1
  }
  return result
}
module.exports = creatTree;
 */
