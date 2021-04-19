/* // call的使用
let p = {
  name: 'hsq',
  sex: 'male',
  sayName() {
    console.log(this.name);
  }
}
let _this;
let sayName = function () {
  console.log(this.name);
}
let fun = {
  name: 'func',
  sayHi() {
    console.log('hi');
  },
  sayName() {
    console.log(this.name);
  }
}
sayName.bind(p.this)
 */
/* 

//call实现原理的细节
Function.prototype.realizeCall = function (context) {
  // 先判断一下this是不是一个函数，这个this下面会打印出来
  if (typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  console.log(1, this);  // 1  看一下this打印出来的结果
  console.log(2, context);  //  2  同时打印出context，看一下context的值
  console.log(3, arguments);  // 3 看一下传入进来的参数
  context = context || window
  context.fn = this
  console.log(4, context); // 4  这个时候我们看一下context的值并且和2进行对比一下
  console.log(5, context.fn); // 5  看一下context.fn的值
  console.log(6, this);  // 6  打印出这个时候的this值和1进行对比一下
  let arg = [...arguments].slice(1)
  console.log(7, arguments);  // 7 看一下传入进来的参数并且和3对比一下
  console.log(8, arg);  //  看一下截取之后的参数
  let result = context.fn(...arg)
  delete context.fn
  return result
}
// 我们先打印这八个看一下，执行函数如下：

console.log(Math.max.call(null, 1, 2, 3, 4, 5))
// 5

console.log(Math.max.realizeCall(null, 1, 2, 3, 4, 5))
    // 1 ƒ max() { [native code] }   ===可以看到到这是this指向的是Math.math()
    // 2 null      ===这个时候context是传入的null
    // 3 Arguments(6) [null, 1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]  ===这个时候arguments也是传入的参数
    // 4 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}  ===经过转化之后context变成了默认的window，这是因为我们传入的是null，所以context || window得到是window
    // 5 ƒ max() { [native code] }   === 把this的值赋值给我们自己定义的context.fn方法（其实这个时候this可以看做一个方法）
    // 6 ƒ max() { [native code] }  === 和1对比可以看到this的值没有变化
    // 7 Arguments(6) [Window, 1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]   ==== 和3对比我们发现arguments的值有变化，context的值由null变成了window，这是因为在方法内部context = context || window，所以context改变了
    // 8 (5) [1, 2, 3, 4, 5]  === 最后截取的值，也是我们的参数值
    // 5
 */

//call实现原理

