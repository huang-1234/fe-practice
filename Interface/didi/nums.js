
// /**
//  * @desc 全排列
//  * @param {number[]} nums 数组
//  * @returns 全排列数组
//  */
// function allNums(nums) {
//   const visit = new Set();
//   const ans = [];
//   const path = [];

//   function dfs() {
//     if (path.length === nums.length) {
//       ans.push([...path])
//       path = [];
//       return;
//     }
//     for (let i = 0;i < nums.length;i++) {
//       const num = nums[i];
//       if (visit.has(nums[i])) {
//         continue;
//       } else {
//         path.push(num)
//       }
//       const next = nums[i];
//       visit.add(num)
//       dfs(path, next);
//       visit.delete(num)
//     }
//   }

//   dfs();
//   return ans;
// }

// console.log(allNums([1, 2, 3]))



/**
 * @desc 给一个不重复的整数数组和一个自然数目标数、求这个数组中多少个和为目标数的组合、组合数不允许重复
 * @param {number[]} array
 * @param {number} target
 * @returns
 */
function find_sum_with_n_num_no_repeat(array, target) {
  const ans = [], n = array.length;
  const arraySort = array.sort((a, b) => a - b);
  let targetIdx = n;
  for (let i = 0;i < arraySort.length;i++) {
    const ele = arraySort[i];
    if (target <= ele) {
      targetIdx = i;
      break;
    }
  }

  function dfs(startIdx, sumArr = []) {
    if (sumArr.length === array.length) {
      ans.push([...sumArr])
      return;
    }
    /**
     * @desc 每次递归都从下一个数字进行遍历、防止重复组合、列如 [4, 5] 和 [5, 4] 实际是重复的组合
     */
    for (let i = startIdx; i < targetIdx; i++) {
      const currentEle = arraySort[i];
      // 剪枝
      // if (sum + arraySort[i] > target) {
      //   break;
      // }
      // if (i > startIdx && arraySort[i] === arraySort[i - 1]) {
      //   continue;
      // }
      // 添加当前数字
      sumArr.push(currentEle)
      // 递归
      dfs(i + 1, sumArr)
      // 回溯
      sumArr.pop()
    }
  }
  dfs(0, []);

  return ans;
}
console.log(find_sum_with_n_num_no_repeat([1, 2, 3, 4, 5], 10))
console.log(find_sum_with_n_num_no_repeat([4, 3, 1, 2], 6))

// Q：这个不能重复选择的问题、本质是什么问题；现实中有哪些应用场景