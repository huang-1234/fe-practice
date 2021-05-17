
/* 
利用递归的思想，遍历一遍数组，如果判断一个元素依然是数组，
那么就递归使用函数继续判断，否则加入新数组当中去
 */
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
function flatten(arr) {
  var res = [];
  for (let i = 0, length = arr.length;i < length;i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
      //concat 并不会改变原数组
      //res.push(...flatten(arr[i])); //扩展运算符
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
let out = flatten(arr1); //[1, 2, 3, 1, 2, 3, 4, 2, 3, 4];
console.log(out);