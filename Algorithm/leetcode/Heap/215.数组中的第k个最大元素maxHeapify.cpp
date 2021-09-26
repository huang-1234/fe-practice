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
#include<iostream>
#include<vector>
// 建立 k 型最大堆
class Solution {
public:
    void maxHeapify(vector<int>& a, int i, int heapSize) {
        int left = i * 2 + 1, right = i * 2 + 2;
        int largest = i;
        if (left < heapSize && a[left] > a[largest]) {
            largest = left;
        }
        if (right < heapSize && a[right] > a[largest]) {
            largest = right;
        }
        if (largest != i) {
            swap(a[i], a[largest]);
            maxHeapify(a, largest, heapSize);
        }
    }

    void buildMaxHeap(vector<int>& a, int heapSize) {
        for (int i = heapSize / 2; i >= 0; --i) {
            maxHeapify(a, i, heapSize);
        }
    }

    // int findKthLargest(vector<int>& nums, int k) {
    //     int heapSize = nums.size();
    //     buildMaxHeap(nums, heapSize);
    //     for (int i = nums.size() - 1; i >= nums.size() - k + 1; --i) {
    //         swap(nums[0], nums[i]);
    //         --heapSize;
    //         maxHeapify(nums, 0, heapSize);
    //     }
    //     return nums[0];
    // }
    int findKthLargest(vector<int>& nums, int k) {
        int heapSize = nums.size();
        buildMaxHeap(nums, heapSize);
        for (int i = nums.size() - 1; i >= nums.size() - k + 1; --i) {
            swap(nums[0], nums[i]);
            --heapSize;
            maxHeapify(nums, 0, heapSize);
        }
        return nums[0];
    }
};
// @lc code=end

