/* 
// 例子一：变量提升
foo;  // undefined
// foo = function () {
//     console.log('foo1');
// }
// 上面一个函数和下面一个函数赋值,在该环境中有没有var 都是样的输出结果
var foo = function () {
  console.log('foo1');
}
foo();  // foo1，foo赋值
var foo = function () {
  console.log('foo2');
}
foo(); // foo2，foo重新赋值
 */

/* 
// 例子二：函数提升
foo();  // foo2
function foo() {
  console.log('foo1');
}

foo();  // foo2
function foo() {
  console.log('foo2');
}
foo(); // foo2
 */

// 例子三：声明优先级，函数 > 变量
foo();  // foo2
var foo = function () { // if we change the var into const ,there is a error will be find
  console.log('foo1');
}

foo();  // foo1，foo重新赋值

function foo() {
  console.log('foo2');
}

foo(); // foo1