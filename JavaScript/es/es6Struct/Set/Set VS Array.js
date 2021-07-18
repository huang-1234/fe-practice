/* 我确信有很多开发人员坚持使用基本的全局对象：数字，字符串，对象，数组和布尔值。对于许多用例，这些都是需要的。
但是如果想让你的代码尽可能快速和可扩展，那么这些基本类型并不总是足够好。
在本文中，我们将讨论JS 中Set对象如何让代码更快— 特别扩展性方便。 Array 和Set工作方式存在大量的交叉。
但是使用Set会比Array在代码运行速度更有优势。 */
/* Set 有何不同
最根本的区别是数组是一个索引集合，这说明数组中的数据值按索引排序。 */
/* const arr = [A, B, C, D];
console.log(arr.indexOf(A)); // Result: 0
console.log(arr.indexOf(C)); // Result: 2 */

/* 相比之下，set是一个键的集合。set不使用索引，而是使用键对数据排序。set 中的元素按插入顺序是可迭代的，
它不能包含任何重复的数据。换句话说，set中的每一项都必须是惟一的。 */
/* 主要的好处是什么
set 相对于数组有几个优势，特别是在运行时间方面：

查看元素：使用indexOf()或includes()检查数组中的项是否存在是比较慢的。
删除元素:在Set中，可以根据每项的的 value 来删除该项。在数组中，等价的方法是使用基于元素的索引的splice()。与前一点一样，
依赖于索引的速度很慢。
保存 NaN：不能使用indexOf()或 includes() 来查找值 NaN，而 Set 可以保存此值。
删除重复项:Set对象只存储惟一的值,如果不想有重复项存在，相对于数组的一个显著优势，因为数组需要额外的代码来处理重复。
时间复杂度？
数组用来搜索元素的方法时间复杂度为0(N)。换句话说，运行时间的增长速度与数据大小的增长速度相同。

相比之下，Set用于搜索、删除和插入元素的方法的时间复杂度都只有O(1)，这意味着数据的大小实际上与这些方法的运行时间无关。*/




(() => {
  /* Set 究竟有多快？
  虽然运行时间可能会有很大差异，具体取决于所使用的系统，所提供数据的大小以及其他变量，但我希望我的测试结果能够让你真实地了解Set的速度。
  我将分享三个简单的测试和我得到的结果。

  准备测试
  在运行任何测试之前，创建一个数组和一个 Set，每个数组和 Set 都有100万个元素。为了简单起见，我从0开始，一直数到999999 */

  let arr = [], set = new Set(), n = 1000000;
  for (let i = 0; i < n; i++) {
    arr.push(i);
    set.add(i);
  }
  /* 我们搜索数字123123 */
  let result;
  console.time('Array');
  result = arr.indexOf(123123) !== -1;
  console.timeEnd('Array');
  console.time('Set');
  result = set.has(123123);
  console.timeEnd('Set');
  // Array: 0.331ms
  // Set: 0.015ms
  console.time('Array');
  arr.push(n);
  console.timeEnd('Array');
  console.time('Set');
  set.add(n);
  console.timeEnd('Set');
  // Array: 0.006ms
  // Set: 0.01ms
  /* 测试3：删除元素
  最后，删除一个元素，由于数组没有内置方法，首先先创建一个辅助函数： */
  const deleteFromArr = (arr, item) => {
    let index = arr.indexOf(item);
    return index !== -1 && arr.splice(index, 1);
  };
  console.time('Array');
  deleteFromArr(arr, n);
  console.timeEnd('Array');
  console.time('Set');
  set.delete(n);
  console.timeEnd('Set');
  // Array: 1.593ms
  // Set: 0.021ms
/*
  案例2：谷歌面试问题
  问题：

  给定一个整数无序数组和变量 sum，如果存在数组中任意两项和使等于 sum 的值，则返回true。否则,返回false。例如，数组[3,5,1,4]和 sum = 9，函数应该返回true，因为4 + 5 = 9。

  解答

  解决这个问题的一个很好的方法是遍历数组，创建 Set保存相对差值。

  当我们遇到3时，我们可以把6加到Set中, 因为我们知道我们需要找到9的和。然后，每当我们接触到数组中的新值时，我们可以检查它是否在 Set 中。当遇到5时，在 Set 加上4。最后，当我们最终遇到4时，可以在Set中找到它，就返回true。 */

const findSum = (arr, val) => {
  let searchValues = new Set();
  searchValues.add(val - arr[0]);
  for (let i = 1, length = arr.length; i < length; i++) {
    let searchVal = val - arr[i];
    if (searchValues.has(arr[i])) {
      return true;
    } else {
      searchValues.add(searchVal);
    }
  };
  return false;
};
  // 简洁的版本：

  const findSum = (arr, sum) =>
    arr.some((set => n => set.has(n) || !set.add(sum - n))(new Set));
  // 因为Set.prototype.has()的时间复杂度仅为O(1)，所以使用 Set 来代替数组，最终使整个解决方案的线性运行时为O(N)。

  // 如果使用 Array.prototype.indexOf()或Array.prototype.includes()，它们的时间复杂度都为 O(N)，则总运行时间将为O(N²)，慢得多！
})()