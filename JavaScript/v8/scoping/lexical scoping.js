/* 作用域
作用域是指程序源代码中定义变量的区域。

作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。

JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域。

静态作用域与动态作用域
因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。

而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。

让我们认真看个例子就能明白之间的区别： */
// {
//   var value = 1;

//   function foo() {
//     console.log(value);
//   }
//   function bar() {
//     var value = 2;
//     foo();
//   }
//   bar();
//   // 结果是 ??
// }

// 最后，让我们看一个《JavaScript权威指南》中的例子：
{
  {
    var scope = "global scope";
    function checkscope() {
      var scope = "local scope";
      function f() {
        return scope;
      }
      return f();
    }
    console.log(checkscope())

  }
  {
    var scope = "global scope";
    function checkscope() {
      var scope = "local scope";
      function f() {
        return scope;
      }
      return f;
    }
    console.log(checkscope()())
  }
  /* JavaScript 函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。嵌套的函数
  f() 定义在这个作用域链里，其中的变量 scope 一定是局部变量，不管何时何地执行函数 f(),这种绑定在执行 f() 时依然有效。
  但是在这里真正想让大家思考的是：
  虽然两段代码执行的结果一样，但是两段代码究竟有哪些不同呢？
  如果要回答这个问题，就要牵涉到很多的内容，词法作用域只是其中的一小部分，让我们期待下一篇文章————《JavaScript深入之执行上下文栈》。 */
}