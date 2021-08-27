/*
 * @lc app=leetcode.cn id=895 lang=javascript
 *
 * [895] 最大频率栈
 */

// @lc code=start

var FreqStack = function () {
  this.arr = [];
  this.count = [];
};


FreqStack.prototype.push = function (x) {
  if (this.arr[x]) {
    this.arr[x]++;
  } else {
    this.arr[x] = 1;
  }
  if (this.count[this.arr[x]]) {
    this.count[this.arr[x]].push(x)
  } else {
    this.count[this.arr[x]] = [x]
  }
};

FreqStack.prototype.pop = function () {
  let row = this.count.length;
  let res = 0;
  if (this.count[row - 1].length === 0) {
    this.count.pop()
    res = this.count[row - 2].pop()
  } else {
    res = this.count[row - 1].pop();
  }
  this.arr[res]--;
  return res
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
// @lc code=end

