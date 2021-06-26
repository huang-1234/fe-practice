function quickSort(arr, left, right) {
  const len = arr.length;
  let partitionIndex;
  left = typeof left != 'number' ? 0 : left;
  right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {     // 分区操作
  const pivot = left;                      // 设定基准值（pivot）
  let index = pivot + 1;
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
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


let waitingArr = [4, 5, 64, 4, 54, 56, 59, 64, 54, 4, 4, 45, 4]

console.log(quickSort(waitingArr,1,5))