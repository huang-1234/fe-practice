// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。

var Difference = function(nums) {
  // 差分数组
  this.diff = [];

  /* 输入一个初始数组，区间操作将在这个数组上进行 */
  if (nums.length > 0) {
      this.diff = new Array(nums.length);
      // 根据初始数组构造差分数组
      this.diff[0] = nums[0];
      for (var i = 1; i < nums.length; i++) {
          this.diff[i] = nums[i] - nums[i - 1];
      }
  }
};

/* 给闭区间 [i, j] 增加 val（可以是负数）*/
Difference.prototype.increment = function(i, j, val) {
  this.diff[i] += val;
  if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val;
  }
};

/* 返回结果数组 */
Difference.prototype.result = function() {
  var res = new Array(this.diff.length);
  // 根据差分数组构造结果数组
  res[0] = this.diff[0];
  for (var i = 1; i < this.diff.length; i++) {
      res[i] = res[i - 1] + this.diff[i];
  }
  return res;
};

// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。

var getModifiedArray = function(length, updates) {
  // nums 初始化为全 0
  var nums = new Array(length).fill(0);
  // 构造差分解法
  var df = new Difference(nums);

  for (var i = 0; i < updates.length; i++) {
      var update = updates[i];
      var iVal = update[0];
      var jVal = update[1];
      var val = update[2];
      df.increment(iVal, jVal, val);
  }

  return df.result();
};

