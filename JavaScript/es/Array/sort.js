/* sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，
然后比较它们的UTF-16代码单元值序列时构建的
由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。
arr.sort([compareFunction])
参数f
compareFunction 可选
用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
firstEl
第一个用于比较的元素。
secondEl
第二个用于比较的元素。
返回值
排序后的数组。请注意，数组已原地排序，并且不进行复制。

描述
如果没有指明 compareFunction ，那么元素会按照转换为的字符串的诸个字符的Unicode位点进行排序。
例如 "Banana" 会被排列到 "cherry" 之前。当数字按由小到大排序时，9 出现在 80 之前，
但因为（没有指明 compareFunction），比较的数字会先被转换为字符串，所以在Unicode顺序上 "80" 要比 "9" 要靠前。

如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：

如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。
备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
所以，比较函数格式如下： */

function compareA(a, b) {
  if (a < b) {           // 按某种排序标准进行比较, a 小于 b
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
//
function compareB(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
// 要比较数字而非字符串，比较函数可以简单的以 a 减 b，如下的函数将会将数组升序排列
let a = 'aaa';
let b = 'aaa';
const ans1=compareA(a,b)
const ans2=compareB(a,b)
console.log(ans1,ans2);