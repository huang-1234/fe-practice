
/*
 * @lc app=leetcode.cn id=215 lang=cpp
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// @lc code=start
/* 创建一个k容量的小根堆，不断将剩下的元素与根相比较，比根小的直接排除，比根元素大的才将该元素下沉到堆中
添加parent child 等中间变量 */
class Solution {
public:
  int findKthLargest(vector<int>& nums, int k) {
    // 对前k个元素建成小根堆
    for (int i = 0; i < k; i++) {
      swim(nums, i);
    }
    // 剩下的元素与堆顶比较，若大于堆顶则去掉堆顶，再将其插入
    for (int i = k; i < nums.size(); i++) {
      if (nums[i] > nums[0]) {
        swap(nums[0], nums[i]);
        sink(nums, 0, k - 1);
      }
    }
    // 结束后第k个大的数就是小根堆的堆顶
    return nums[0];
  }

private:
  // 若v1比v2优先度高，返回true
  bool priorityThan(int v1, int v2) {
    return v1 < v2;
  }

  // 上浮 从下到上调整堆
  void swim(vector<int>& heap, int child) {

    while (child > 0 && priorityThan(heap[child], heap[(child - 1) / 2])) {
      int parent = (child - 1) / 2;
      swap(heap[child], heap[parent]);
      child = parent;
    }
  }

  // 下沉 从下到上调整堆
  void sink(vector<int>& heap, int parent, int HeapSize) {

    while (2 * parent + 1 <= HeapSize) {
      int child = 2 * parent + 1;
      if (child + 1 <= HeapSize && priorityThan(heap[child + 1], heap[child])) {
        child++;
      }
      if (priorityThan(heap[parent], heap[child])) {
        break;
      }
      swap(heap[parent], heap[child]);
      parent = child;
    }
  }
};
// @lc code=end

/* 执行结果：
通过
显示详情
添加备注

执行用时：
8 ms
, 在所有 C++ 提交中击败了
81.47%
的用户
内存消耗：
9.7 MB
, 在所有 C++ 提交中击败了
62.04%
的用户
通过测试用例：
32 / 32 */