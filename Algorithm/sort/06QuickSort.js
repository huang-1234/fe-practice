function quickSort(arr, left, right) {
  let len = arr.length,
    partitionIndex,
    left = typeofleft != 'number' ? 0 : left,
    right = typeofright != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {     // 分区操作
  let pivot = left,                      // 设定基准值（pivot）
    index = pivot + 1;
  for (let i = index;i <= right;i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}
function swap(arr, i, j) {
  let temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
}
console.log(quickSort([12, 12, 43, 5, 23, 64]))