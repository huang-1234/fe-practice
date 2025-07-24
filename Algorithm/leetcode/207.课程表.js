/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function isSafeNumber(target, max = 2000, min = 0) {
  return Number.isInteger(target) && target >= min && target <= max;
}
var canFinish = function (numCourses, prerequisites) {
  const adjList = {}
  const deg = new Array(numCourses).fill(0);
  for (let i = 0;i < numCourses;i++) {
    const [a, b] = prerequisites[i] || [];
    if (a === b) {
      return false;
    }
    if (isSafeNumber(b, numCourses) && isSafeNumber(a, numCourses)) {
      deg[a]++;
      if (adjList[b]) {
        adjList[b].push(a);
      } else {
        adjList[b] = [a]
      }
    }
  }

  let visit = 0;
  const queue = [];
  for (let i = 0;i < numCourses;i++) {
    if (deg[i] === 0) {
      queue.push(i)
    }
  }
  while (queue.length) {
    const toDeg = queue.unshift()
    visit++;
    if (toDeg && toDeg.length) {
      for (let j = 0;j < toDeg.length;j++) {
        adjList[toDeg[i]]--;
        if (adjList[toDeg[i]] === 0) {
          queue.push(toDeg[i])
        }

      }
    }
  }

  return visit === numCourses;
};
// @lc code=end

