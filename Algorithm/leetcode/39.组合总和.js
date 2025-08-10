/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(nums, target, is_should_repeat = true) {
  // Input validation
  if (!Array.isArray(nums) || typeof target !== 'number') {
    throw new Error('Invalid input: nums must be an array and target must be a number');
  }

  const ans = [];
  const n = nums.length;

  // Early exit if input is empty
  if (n === 0) return ans;

  // Sort the array to enable pruning and deduplication
  const arraySort = nums.sort((a, b) => a - b);

  // Determine the upper bound index for iteration
  let targetIdx = n;
  for (let i = 0; i < arraySort.length; i++) {
    if (arraySort[i] >= target) {
      targetIdx = i;
      break;
    }
  }

  // Stack for iterative DFS: [startIndex, currentSum, currentPath]
  const dfsStack = [[0, 0, []]];

  while (dfsStack.length > 0) {
    const [startIdx, sum, path] = dfsStack.pop();

    // If the sum matches the target, add the path to results
    if (sum === target) {
      ans.push([...path]);
      continue;
    }

    // Iterate through candidates starting from startIdx
    for (let i = startIdx; i < targetIdx; i++) {
      const element = arraySort[i];

      // Pruning: No need to proceed further if adding this element exceeds the target
      if (sum + element > target) {
        break;
      }

      // Skip duplicates at the same recursion level
      if (i > startIdx && arraySort[i] === arraySort[i - 1]) {
        continue;
      }

      // Create a new path copy to avoid mutation issues
      const newPath = [...path, element];
      const nextIndex = is_should_repeat ? i : i + 1;
      dfsStack.push([nextIndex, sum + element, newPath]);
    }
  }

  return ans;
}
// @lc code=end

