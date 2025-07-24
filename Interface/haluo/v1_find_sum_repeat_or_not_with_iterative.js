/**
 * @desc 递归函数转为迭代、防止递归栈溢出
 * @argument 1. 当前数字索引；
 * @example 1. 如果设置为 i + 1，则说明当前数字是不能重复使用；
 * @example 2. 如果设置为 i，则说明当前数字可以重复使用；
 * @exports 当前数字数组
 * @argument 2. 当前数字和；
 * @argument 3. 当前数字数组
 */
/**
 * @desc Iteratively finds combinations of numbers that sum to target, avoiding recursion stack overflow
 * @param {number[]} nums - List of candidate numbers
 * @param {number} target - Target sum value
 * @param {boolean} is_should_repeat - Whether elements can be reused (default: true)
 * @returns {number[][]} - All valid combinations that sum to target
 */
function find_sum_repeat_or_not_with_iterative(nums, target, is_should_repeat = true) {
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

console.log(find_sum_repeat_or_not_with_iterative([1, 10, 12, 14, 2, 3, 4, 5], 10, false))
console.log(find_sum_repeat_or_not_with_iterative([4, 3, 1, 2], 6))
