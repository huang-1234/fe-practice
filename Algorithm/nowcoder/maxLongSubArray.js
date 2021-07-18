/**
 *
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxLength(arr) {
  // write code here
  function getIndexByItem(iterator, item) {
    let index = 0;
    while (iterator.next().value) {
      index++;
      if (iterator.next().value === item) break;
    }
    return index;
  }
  let L = 0, R = 0, Len = arr.length;
  let maxValue = Number.MIN_VALUE;
  let unreSet = new Set();
  for (let i = 0;i < Len;i++) {
    if (!unreSet.has(arr[i])) {
      unreSet.add(arr[i])
      R++;
    } else {
      maxValue = maxValue > R - L ? maxValue : R - L
      //             L = R - 1;
      const step = getIndexByItem(unreSet.keys(), arr[i])
      L = L + step;
      unreSet.clear();
      unreSet.add(arr[i])
    }
    maxValue = maxValue > R - L ? maxValue : R - L
  }
  return maxValue;
}

console.log(maxLength([2, 2, 3, 4, 8, 99, 3]))