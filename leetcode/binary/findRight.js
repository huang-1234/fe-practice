// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。

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
