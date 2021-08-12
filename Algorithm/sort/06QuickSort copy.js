function Sort(arr) {
  function partition(arr, left, right) {
    let value = arr[left];
    let _left = left, _right = right;
    while (_left < _right) {0
      while (arr[_right] >= value && _left < _right) {
        _right--;
      }
      while (arr[_left] <= value && _left < _right) {
        _left++;
      }
      [arr[_right], arr[_left]] = [arr[_left], arr[_right]]
    }
    [arr[left], arr[_left]] = [arr[_left], arr[left]]
    return _left;
  }
  function quickSort(arr, left, right) {
    if (left >= right) return;
    let pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  quickSort(arr, 0, arr.length - 1);
  return arr;
}