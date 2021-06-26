/**
 * @param {Array[]} arr 
 * @returns func
 * 不断对新进来的数组进行拆分,for the length of array is less 3 , then return that arr
 */
function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}


/**
 * 
 * @param {*} left : ;
 * @param {*} right 
 * @returns 
 * merge函数
 */
function merge(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    }
    else {
      result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
}

