// 仅供参考

var right_bound = function (nums, target) {
  var left = 0, right = nums.length;

  while (left < right) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      left = mid + 1; // 注意
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    }
  }
  return left - 1; // 注意
}
