/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// const merge = function(intervals) {
//   const sortStart = intervals.sort((a, b) => a[0] - b[0]);
//   const mergedInter = [];
//   mergedInter.push(sortStart[0]);
//   const interLen = sortStart.length;
//   for (let i = 1;i < interLen;i++) {
//     if (cur[0] > endMergedInter[1]) {
//       mergedInter.push(cur);
//     } else if (cur[1] > endMergedInter[1]) {
//       const end = mergedInter.pop();
//       end[1] = cur[1];
//       mergedInter.push(end);
//     } else if (cur[1] <= endMergedInter[1]) {
//       continue;
//     }
//   }
//   return mergedInter;
// };
const merge = function(intervals) {
  const sortStart = intervals.sort((a, b) => a[0] - b[0]);
  const mergedInter = [];
  mergedInter.push(sortStart[0]);
  const interLen = sortStart.length;
  for (let i = 1;i < interLen;i++) {
    const cur = sortStart[i];
    const endMergedInter = mergedInter[mergedInter.length - 1];
    if (cur[0] > endMergedInter[1]) {
      mergedInter.push(cur);
    } else if (cur[1] > endMergedInter[1]) {
      const end = mergedInter.pop();
      end[1] = cur[1];
      mergedInter.push(end);
    } else if (cur[1] <= endMergedInter[1]) {
      continue;
    }
  }
  return mergedInter;
};
// merge([[1,3],[2,6],[8,10],[15,18]])
// @lc code=end

