function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0;i < len - 1;i++) {
    for (let j = 0;j < len - 1 - i;j++) {
      if (arr[j] > arr[j + 1]) {        // 相邻元素两两对比
        const temp = arr[j + 1];        // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}