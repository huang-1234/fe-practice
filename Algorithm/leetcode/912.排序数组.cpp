/*
 * @lc app=leetcode.cn id=912 lang=cpp
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
      quickSort(nums,0,nums.size()-1);
      return nums;
    }
    void quickSort(vector<int>& nums,int x, int y){
      int left=x; int right =y;
      int mid;
      while(left<right){
        mid = rootIndex(nums, left, right);
        quickSort(nums,left, mid-1);
        quickSort(nums, mid+1, right);
      }
    }
    int rootIndex(vector<int>& nums, int left, int right){
      int priot = left;
      int index = left+1;
      for(int i=index; i<=right; i++){
        if(nums[i]<nums[priot]){
          swap(nums, i, index);
          index++;
        }
      }
      swap(nums, priot, index);
      return index-1;
    }
    void swap(vector<int>& nums, int i, int j){
      int t = nums[i];nums[i]=nums[j];nums[j]=t;
    }
};
// @lc code=end

