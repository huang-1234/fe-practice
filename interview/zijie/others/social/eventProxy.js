/* 写一个事件代理函数，需要判断child是parent的子节点
function proxy(event, cb, parent, child) {} */
var length = 10;
function fn() {
  return this.length + 1;
}
var obj1 = {
  length: 5,
  test1: function () {
    return fn()
  }
}
obj1.test2 = fn;
obj1.test1.call()
obj1.test1()
obj1.test2.call()
obj1.test2()