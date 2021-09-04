/*
原文转自：https://blog.csdn.net/u010377383/article/details/80646415
本来计划是, 先把深入React技术栈过完,
  但是，现在在满足RN app开发情况下，我还是先深入js一个系列。
（一）call源码解析
首先上一个call使用
 */
function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = {
  a: 1,
  b: 2
};

console.error(add.call(obj, 3, 4)); // 10

// 大统上的说法就是，call改变了this的指向。然后，介绍this xxx什么一大堆名词，反正不管你懂不懂，成功绕晕你就已经ok了，但是实际发生的过程，可以看成下面的样子。

const o = {
  a: 1,
  b: 2,
  add: function (c, d) {
    return this.a + this.b + c + d
  }
};

// 给o对象添加一个add属性，这个时候 this 就指向了 o，
// o.add(5, 7)得到的结果和add.call(o, 5, 6)相同。
// 但是给对象o添加了一个额外的add属性，这个属性我们是不需要的，所以可以使用delete删除它。
// so, 基本为以下三部。

// 1. 将函数设为对象的属性
o.fn = bar
// 2. 执行该函数
o.fn()
// 3. 删除该函数
delete o.fn

// 所以我们基于ES3 实现call

Function.prototype.es3Call = function (context) {
  var content = context || window;
  content.fn = this;
  var args = [];
  // arguments是类数组对象，遍历之前需要保存长度，过滤出第一个传参
  for (var i = 1, len = arguments.length;i < len;i++) {
    // 避免object之类传入
    args.push('arguments[' + i + ']');
  }
  var result = eval('content.fn(' + args + ')');
  delete content.fn;
  return result;
}
console.error(add.es3Call(obj, 3, 4)); // 10
console.log(add.es3Call({ a: 3, b: 9 }, 3, 4)); // 19
console.log(add.es3Call({ a: 3, b: 9 }, { xx: 1 }, 4)); // 12[object Object]4

// 基于ES6 实现call, 其实差别不大，es6新增… rest，这就可以放弃eval的写法，如下

// ES6 call 实现
Function.prototype.es6Call = function (context) {
  var context = context || window;
  context.fn = this;
  var args = [];
  for (var i = 1, len = arguments.length;i < len;i++) {
    args.push('arguments[' + i + ']');
  }
  const result = context.fn(...args);
  return result;
}

console.error(add.es6Call(obj, 3, 4));
console.log(add.es3Call({ a: 3, b: 9 }, { xx: 1 }, 4)); // 12[object Object]4

// （二）apply源码解析
// apply和call区别在于apply第二个参数是Array，而call是将一个个传入

// 基于es3实现

Function.prototype.es3Apply = function (context, arr) {
  var context = context || window;
  context.fn = this;
  var result;
  if (!arr) {
    result = context.fn();
  } else {
    if (!(arr instanceof Array)) throw new Error('params must be array');
    result = eval('context.fn(' + arr + ')');
  }
  delete context.fn;
  return result
}

console.log(add.apply(obj, [1, 2])); // 6

// 基于es6实现


Function.prototype.es6Apply = function (context, arr) {
  var context = context || window;
  context.fn = this;
  var result;
  if (!arr) {
    result = context.fn();
  } else {
    if (!(arr instanceof Array)) throw new Error('params must be array');
    result = context.fn(...arr);
  }
  delete context.fn;
  return result
}

console.error(add.es6Apply(obj, [1, 2])); // 6

// （三）bind源码解析
// bind() 方法会创建一个新函数。
// 当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，
// 之后的一序列参数将会在传递的实参前传入作为它的参数。
// 先看一个使用bind方法的实例

function foo(c, d) {
  this.b = 100
  console.log(this.a)
  console.log(this.b)
  console.log(c)
  console.log(d)
}
// 我们将foo bind到{a: 1}
var func = foo.bind({ a: 1 }, '1st');
func('2nd'); // 1 100 1st 2nd
// 即使再次call也不能改变this。
func.call({ a: 2 }, '3rd'); // 1 100 1st 3rd


// 当 bind 返回的函数作为构造函数的时候，
// bind 时指定的 this 值会失效，但传入的参数依然生效。
// 所以使用func为构造函数时，this不会指向{a: 1}对象，this.a的值为undefined。如下

// new func('4th'); //undefined 100 1st 4th

// 首先使用ES3实现

Function.prototype.es3Bind = function (context) {
  if (typeof this !== "function") throw new TypeError('what is trying to be bound is not callback');
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  const fBound = function () {
    // 获取函数的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    // 返回函数的执行结果
    // 判断函数是作为构造函数还是普通函数
    // 构造函数this instanceof fNOP返回true，将绑定函数的this指向该实例，可以让实例获得来自绑定函数的值。
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }
  // 创建空函数
  var fNOP = function () { };
  // fNOP函数的prototype为绑定函数的prototype
  fNOP.prototype = this.prototype;
  // 返回函数的prototype等于fNOP函数的实例实现继承
  fBound.prototype = new fNOP();
  // 以上三句相当于Object.create(this.prototype)
  return fBound;
}

var func = foo.es3Bind({ a: 1 }, '1st');
func('2nd');  // 1 100 1st 2nd
func.call({ a: 2 }, '3rd'); // 1 100 1st 3rd
new func('4th');  //undefined 100 1st 4th

es6实现

Function.prototype.es6Bind = function (context, ...rest) {
  if (typeof this !== 'function') throw new TypeError('invalid invoked!');
  var self = this;
  return function F(...args) {
    if (this instanceof F) {
      return new self(...rest, ...args)
    }
    return self.apply(context, rest.concat(args))
  }
}

var func = foo.es3Bind({ a: 1 }, '1st');
func('2nd');  // 1 100 1st 2nd
func.call({ a: 2 }, '3rd'); // 1 100 1st 3rd
new func('4th');  //undefined 100 1st 4th