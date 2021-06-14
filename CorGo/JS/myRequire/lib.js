

/* 
// CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，
// 模块内部的变化就影响不到这个值。请看下面这个模块文件lib.js的例子。

const counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};
 */



// lib.js模块加载以后，它的内部变化就影响不到输出的mod.counter了。
// 这是因为mod.counter是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  get counter() {
    return counter
  },
  incCounter: incCounter,
};
// 运行main.js  得到下面的输出
// $ node "g:\Study\Code\Web\learnFrontTest\CorGo\JS\myRequire\main.js"
// 3
// 4