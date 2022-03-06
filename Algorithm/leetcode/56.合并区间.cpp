/*
 * @lc app=leetcode.cn id=56 lang=cpp
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
class Solution {
public:
  vector<vector<int>> merge(vector<vector<int>>& intervals) {
    if (intervals.size() == 0) {
      return {};
    }
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> merged;
    for (int i = 0; i < intervals.size(); ++i) {
      int L = intervals[i][0], R = intervals[i][1];
      if (!merged.size() || merged.back()[1] < L) {
        merged.push_back({L, R});
      }
      else {
        merged.back()[1] = max(merged.back()[1], R);
      }
    }
    return merged;
  }
};
// merge([[1,3],[2,6],[8,10],[15,18]])
// @lc code=end
