// AsyncParallelHook
// AsyncParallelHook 为异步并行执行，通过 tapAsync 注册的事件，通过 callAsync 触发；通过 tapPromise 注册的事件，通过 promise 触发（返回值可以调用 then 方法）

// tapAsync/callAsync
const { AsyncParallelHook } = require("tapable");

// 创建实例
let asyncParallelHook = new AsyncParallelHook(["name"]);

console.time("time");

// 注册事件
asyncParallelHook.tapAsync("login", (name, done) => {
  setTimeout(() => {
    console.log("login", name, new Date());
    // done();
  }, 3000);
});

asyncParallelHook.tapAsync("register", (name, done) => {
  setTimeout(() => {
    console.log("register", name, new Date());
    // done();
    console.timeEnd("time");
  }, 2000);
});

// 触发事件, callAsync 的最后一个参数为回调函数，在所有事件处理函数执行完毕后执行。
asyncParallelHook.callAsync("manbax", () => {
  console.log("complete");
});
