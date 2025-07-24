
/**
 * @desc 给一个不重复的整数数组和一个自然数目标数、求这个数组中多少个和为目标数的组合、组合数不允许重复
 * @param {number[]} array
 * @param {number} target
 * @returns
 */
function findTargetSum(array, target) {
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

  function dfs(startIdx, sum, sumArr = []) {
    if (sum === target) {
      ans.push([...sumArr])
      return;
    }
    for (let i = startIdx; i < targetIdx; i++) {
      const currentEle = arraySort[i];
      if (sum + arraySort[i] > target) {
        break;
      }
      sumArr.push(currentEle)
      dfs(startIdx + 1, sum + currentEle, sumArr)
      sumArr.pop()
    }
  }
  dfs(0, 0, []);

  return ans;
}
/**
 * [1,2,3,4,5], 10

[4,3,1, 2], 6
 */
// const [a, b] = [, 10]
console.log(findTargetSum([1, 10, 12, 14, 2, 3, 4, 5], 10))