function selectionSort(arr) {
  const len = arr.length;
  let minIndex, temp;
  for (let i = 0;i < len - 1;i++) {
    minIndex = i;
    for (let j = i + 1;j < len;j++) {
      if (arr[j] < arr[minIndex]) {     // 寻找最小的数
        minIndex = j;                 // 将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  returnarr;
}