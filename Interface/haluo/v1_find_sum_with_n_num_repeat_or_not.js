
/**
 * @desc 给一个不重复的整数数组和一个自然数目标数、求这个数组中多少个和为目标数的组合
 * @external 1组合数可以重复；类似于零钱问题
 * @external 2组合数不允许重复
 * @param {number[]} nums
 * @param {number} target
 * @returns
 */
function find_sum_with_n_num_repeat_or_not(nums, target, is_should_repeat = true) {
  const ans = [], n = nums.length;
  const arraySort = nums.sort((a, b) => a - b);
  let targetIdx = n;
  for (let i = 0;i < arraySort.length;i++) {
    const ele = arraySort[i];
    if (target <= ele) {
      targetIdx = i;
      break;
    }
  }

  /**
   * @desc 递归
   * @argument 1. 当前数字索引；
   * @example 1. 如果设置为 i + 1，则说明当前数字是不能重复使用；
   * @example 2. 如果设置为 i，则说明当前数字可以重复使用；
   * @exports 当前数字数组
   * @argument 2. 当前数字和；
   * @argument 3. 当前数字数组
   */
  function dfs(startIdx, sum, sumPath = []) {
    if (sum === target) {
      ans.push([...sumPath])
      return;
    }
    /**
     * @desc 每次递归都从下一个数字进行遍历、防止重复组合、列如 [4, 5] 和 [5, 4] 实际是重复的组合
     */
    for (let i = startIdx;i < targetIdx;i++) {
      const currentEle = arraySort[i];
      // 剪枝
      if (sum + arraySort[i] > target) {
        break;
      }
      if (i > startIdx && arraySort[i] === arraySort[i - 1]) {
        continue;
      }
      // 添加当前数字
      sumPath.push(currentEle)
      const nextIdx = is_should_repeat ? i : i + 1
      dfs(nextIdx, sum + currentEle, sumPath)
      // 回溯、撤销选择
      sumPath.pop()
    }
  }
  dfs(0, 0, []);

  return ans;
}
console.log(find_sum_with_n_num_repeat_or_not([1, 10, 12, 14, 2, 3, 4, 5], 10, false))
console.log(find_sum_with_n_num_repeat_or_not([4, 3, 1, 2], 6))