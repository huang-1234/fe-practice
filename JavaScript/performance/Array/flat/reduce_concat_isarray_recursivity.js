// 使用 reduce、concat 和递归展开无限多层嵌套的数组
let arr1 = [1, 2, 3, [1, 2, 3, 4, [2,[1,3,1,4,2,5,0], 3, 4]]];
function reduceCallBack(d) {
  return (acc, val) =>
    acc.concat(
      Array.isArray(val)
        ? flatDeep(val, d - 1)
        : val
    )
}
function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce(reduceCallBack(d), [])
    : arr.slice();
};
console.log(flatDeep(arr1, Infinity));
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]