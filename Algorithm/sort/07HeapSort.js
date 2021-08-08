let len;    // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量
function buildMaxHeap(arr) {   // 建立大顶堆
  len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0;i--) {
    heapify(arr, i);
  }
}
function heapify(arr, i) { // 堆调整：调整父节点i和和它的两个孩子节点，并递归的调整下去
  let left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;
  if (left < len && arr[left] > arr[largest]) { // 如果i节点的左孩子大于父节点，
    largest = left;
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapSort(arr) {
  buildMaxHeap(arr);
  for (let i = arr.length - 1;i > 0;i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, 0);
  }
  return arr;
}
console.log(heapSort([12,12,43,5,23,64]))
