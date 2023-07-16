const array = [{v: 1}, {v: 2}, {v: 3}, {v: 4}, {v: 5}];

array.find(elem => elem.v > 3); // {v: 4}
array.findIndex(elem => elem.v > 3); // 3

Array.prototype.findLast = function (arr, callback, thisArg) {
  for (let index = arr.length - 1; index >= 0; index--) {
    const value = arr[index];
    if (callback.call(thisArg, value, index, arr)) {
      return value;
    }
  }
  return undefined;
}
Array.prototype.findLastIndex = function(arr, callback, thisArg) {
  for (let index = arr.length - 1; index >= 0; index--) {
    const value = arr[index];
    if (callback.call(thisArg, value, index, arr)) {
      return index;
    }
  }
  return -1;
}