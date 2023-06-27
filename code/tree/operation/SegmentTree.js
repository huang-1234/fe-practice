// 这个算法实现了线段树（Segment Tree）的基本功能，主要包括构建树、更新节点值和查询区间和。以下是对算法的分析：

// 构建树（buildTree）：

// 在构建树过程中，将输入的数组按照二叉树的形式存储在树结构中。
// 通过递归将数组的左半部分和右半部分分别构建成左子树和右子树。
// 递归过程中，根据区间的起始和结束索引计算出当前节点的区间范围。
// 当区间范围缩小到只包含一个元素时，将该元素作为叶子节点存储在树中。
// 通过将左子树和右子树的值相加，将当前节点的值设置为两个子节点的和。
// 更新节点值（update）：

// 在更新节点值时，首先确定要更新的节点所在的区间范围。
// 通过递归查找到要更新的节点。
// 当找到目标节点时，更新节点的值为新的给定值。
// 如果目标节点不是叶子节点，会根据要更新的索引位置，选择向左子树或右子树递归查找并更新。
// 查询区间和（queryRange）：

// 在查询区间和时，根据给定的查询区间起始和结束索引，与当前节点所代表的区间范围进行比较。
// 若查询区间完全包含了当前节点所代表的区间范围，则直接返回当前节点的值。
// 若查询区间与当前节点所代表的区间范围没有交集，则返回 0。
// 若查询区间与当前节点所代表的区间范围存在交集，会递归查找左子树和右子树，并将其返回的结果相加。
// 这个算法的时间复杂度是 O(log N)，其中 N 是线段树中叶子节点的数量，也就是原始数组的长度。由于每次操作都将树的高度减半，因此操作的时间复杂度是对数级别的。

// 线段树的主要优势在于支持高效地更新和查询区间。它常用于解决需要频繁查询区间和的问题，比如求解数组某个区间的最小值、最大值、和等等。通过构建线段树，可以在 O(log N) 的时间复杂度内完成这些操作，大大提高了效率。线段树的应用范围广泛，包括处理动态的区间操作、统计和等问题。

class SegmentTree {
  constructor(arr) {
    this.tree = [];
    this.n = arr.length;
    this.buildTree(arr, 0, this.n - 1, 0);
  }

  buildTree(arr, start, end, treeIndex) {
    if (start === end) {
      this.tree[treeIndex] = arr[start];
      return;
    }

    const mid = Math.floor((start + end) / 2);
    const leftChild = 2 * treeIndex + 1;
    const rightChild = 2 * treeIndex + 2;

    this.buildTree(arr, start, mid, leftChild);
    this.buildTree(arr, mid + 1, end, rightChild);

    this.tree[treeIndex] = this.tree[leftChild] + this.tree[rightChild];
  }

  update(index, value) {
    this._update(0, this.n - 1, 0, index, value);
  }

  _update(start, end, treeIndex, index, value) {
    if (start === end) {
      this.tree[treeIndex] = value;
      return;
    }

    const mid = Math.floor((start + end) / 2);
    const leftChild = 2 * treeIndex + 1;
    const rightChild = 2 * treeIndex + 2;

    if (index <= mid) {
      this._update(start, mid, leftChild, index, value);
    } else {
      this._update(mid + 1, end, rightChild, index, value);
    }

    this.tree[treeIndex] = this.tree[leftChild] + this.tree[rightChild];
  }

  queryRange(queryStart, queryEnd) {
    return this._queryRange(0, this.n - 1, 0, queryStart, queryEnd);
  }

  _queryRange(start, end, treeIndex, queryStart, queryEnd) {
    if (queryStart <= start && queryEnd >= end) {
      return this.tree[treeIndex];
    }

    if (queryStart > end || queryEnd < start) {
      return 0;
    }

    const mid = Math.floor((start + end) / 2);
    const leftChild = 2 * treeIndex + 1;
    const rightChild = 2 * treeIndex + 2;

    const leftSum = this._queryRange(start, mid, leftChild, queryStart, queryEnd);
    const rightSum = this._queryRange(mid + 1, end, rightChild, queryStart, queryEnd);

    return leftSum + rightSum;
  }
}
