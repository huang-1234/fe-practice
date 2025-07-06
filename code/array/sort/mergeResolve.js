// 仅供参考

var countSmaller = function (nums) {
  class Pair {
    constructor(val, id) {
      // 记录数组的元素值
      this.val = val;
      // 记录元素在数组中的原始索引
      this.id = id;
    }
  }

  // 归并排序所用的辅助数组
  var temp;
  // 记录每个元素后面比自己小的元素个数
  var count;

  var sort = function (arr, lo, hi) {
    if (lo == hi) return;
    var mid = lo + Math.floor((hi - lo) / 2);
    sort(arr, lo, mid);
    sort(arr, mid + 1, hi);
    merge(arr, lo, mid, hi);
  };

  // 合并两个有序数组
  var merge = function (arr, lo, mid, hi) {
    for (var i = lo;i <= hi;i++) {
      temp[i] = arr[i];
    }

    var i = lo, j = mid + 1;
    for (var p = lo;p <= hi;p++) {
      if (i == mid + 1) {
        arr[p] = temp[j++];
      } else if (j == hi + 1) {
        arr[p] = temp[i++];
        // 更新 count 数组
        count[arr[p].id] += j - mid - 1;
      } else if (temp[i].val > temp[j].val) {
        arr[p] = temp[j++];
      } else {
        arr[p] = temp[i++];
        // 更新 count 数组
        count[arr[p].id] += j - mid - 1;
      }
    }
  };

  var n = nums.length;
  count = new Array(n).fill(0);
  temp = new Array(n);
  var arr = new Array(n);
  // 记录元素原始的索引位置，以便在 count 数组中更新结果
  for (var i = 0;i < n;i++)
    arr[i] = new Pair(nums[i], i);

  // 执行归并排序，本题结果被记录在 count 数组中
  sort(arr, 0, n - 1);

  var res = [];
  for (var c of count) res.push(c);
  return res;
};
