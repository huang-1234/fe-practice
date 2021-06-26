function countingSort(arr, maxValue) {
  let bucket = newArray(maxValue + 1),
    sortedIndex = 0;
  arrLen = arr.length,
    bucketLen = maxValue + 1;

  for (let i = 0;i < arrLen;i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }

  for (let j = 0;j < bucketLen;j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }
  return arr;
}
console.log(countingSort([12, 12, 43, 5, 23, 64]))