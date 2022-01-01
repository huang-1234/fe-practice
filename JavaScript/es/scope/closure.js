

// //setTimeout
// for (var i = 1;i < 5;i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// 解决方法有 3 种

// 第一种，使用`立即执行函数`方式
for (var i = 1;i < 5;i++) {
  (function(j){
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
}

// // 第二种，使用 ES6 的`let`
// for (let i = 1;i < 5;i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// // 第三种，使用`setTimeout的第三个参数`
// for (var i = 1;i < 5;i++) {
//   setTimeout(
//     function timer(j) {
//       console.log(j);
//     },
//     i * 1000,
//     i
//   );
// }

/*
// 示例
function foo() {
  var myName = "huangsq369"
  let test1 = 1
  const test2 = 2
  var innerBar = {
    getName: function () {
      console.log(test1)
      return myName
    },
    setName: function (newName) {
      myName = newName
    }
  }
  return innerBar
}
var bar = foo()
bar.setName("huangsq")
bar.getName()
console.log(bar.getName())
 */

//
function makeAdder(a) {
  return function (b) {
    console.log(a + b);
    return a + b;
  }
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
add5(6); // 返回 11
add20(7); // 返回 27
/* 下面来说说，到底发生了什么了不得的事情。每当 JavaScript 执行一个函数时，都会创建一个作用域对象（scope object），用来保存在这个函数中创建的局部变量。
它使用一切被传入函数的变量进行初始化（初始化后，它包含一切被传入函数的变量）。这与那些保存的所有全局变量和函数的全局对象（global object）相类似，
但仍有一些很重要的区别：第一，每次函数被执行的时候，就会创建一个新的，特定的作用域对象；第二，与全局对象（如浏览器的 window 对象）不同的是，你不能从
JavaScript 代码中直接访问作用域对象，也没有 可以遍历当前作用域对象中的属性 的方法。
所以，当调用 makeAdder 时，解释器创建了一个作用域对象，它带有一个属性：a，这个属性被当作参数传入 makeAdder 函数。然后 makeAdder
返回一个新创建的函数（暂记为 adder）。通常，JavaScript 的垃圾回收器会在这时回收 makeAdder 创建的作用域对象（暂记为 b），但是，
makeAdder 的返回值，新函数 adder，拥有一个指向作用域对象 b 的引用。最终，作用域对象 b 不会被垃圾回收器回收，直到没有任何引用指向新函数adder。

作用域对象组成了一个名为作用域链（scope chain）的（调用）链。它和 JavaScript 的对象系统使用的原型（prototype）链相类似。 */
