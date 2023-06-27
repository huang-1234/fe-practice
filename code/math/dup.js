// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。

// 返回两个数字，分别是 {dup, missing}
var findErrorNums = function (nums) {
  // 在新的数组中，1 到 n 存在哪些数字
  var newNums = new Array(nums.length + 1).fill(false);

  var dup = -1, missing = -1;

  for (var i = 0;i < nums.length;i++) {
    // 如果这个数字已经出现过，说明出现重复的数字
    if (newNums[nums[i]]) {
      dup = nums[i];
    }
    // 在新的数组中标记这个数字已经出现过
    newNums[nums[i]] = true;
  }

  for (var i = 1;i < newNums.length;i++) {
    // 没被标记过的数字，说明缺失了某个数字
    if (!newNums[i]) {
      missing = i;
      break;
    }
  }

  return [dup, missing];
};
