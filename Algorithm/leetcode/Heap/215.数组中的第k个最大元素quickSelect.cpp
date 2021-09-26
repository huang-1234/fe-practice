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
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
#include<iostream>
#include<vector>
class Solution {
public:
    int quickSelect(vector<int>& a, int left, int right, int index) {
        int q = randomPartition(a, left, right);
        if (q == index) {
            return a[q];
        } else {
            return q < index ? quickSelect(a, q + 1, right, index) : quickSelect(a, left, q - 1, index);
        }
    }

    inline int randomPartition(vector<int>& a, int left, int right) {
        int i = rand() % (right - left + 1) + left;
        swap(a[i], a[right]);
        return partition(a, left, right);
    }

    inline int partition(vector<int>& a, int left, int right) {
        int x = a[right], i = left - 1;
        for (int j = left; j < right; ++j) {
            if (a[j] <= x) {
                swap(a[++i], a[j]);
            }
        }
        swap(a[i + 1], a[right]);
        return i + 1;
    }

    int findKthLargest(vector<int>& nums, int k) {
        srand(time(0));
        return quickSelect(nums, 0, nums.size() - 1, nums.size() - k);
    }
};
// @lc code=end

