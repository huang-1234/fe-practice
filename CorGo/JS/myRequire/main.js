// main.js
const mod = require('./lib');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3

/* 上面代码说明，lib.js模块加载以后，它的内部变化就影响不到输出的mod.counter了。
这是因为mod.counter是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。
 */