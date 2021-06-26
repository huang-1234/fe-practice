function insertionSort(arr) {
  const Len = arr.Length;
  let preIndex, current;
  for(let i = 1; i < Len; i++) {
      preIndex = i - 1;
      current = arr[i];
      while(preIndex >= 0 && arr[preIndex] > current) {
          arr[preIndex + 1] = arr[preIndex];
          preIndex--;
      }
      arr[preIndex + 1] = current;
  }
  return arr;
}