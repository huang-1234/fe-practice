// SyncLoopHook
// SyncLoopHook 为串行同步执行，但是 SyncLoopHook 中的每一个事件回调函数都会被循环执行，事件处理函数返回 undefined 表示结束循环，当前的事件回调循环结束后进入到下一个回调函数中，直到整个流程结束：
const { SyncLoopHook } = require("tapable");

// 创建实例
let userSyncHook = new SyncLoopHook(["name"]);

let num1 = 1

// 注册事件
userSyncHook.tap("login", (name) => {
  console.log('login', name, num1)
  return (++num1) > 10 ? undefined : true
});

userSyncHook.tap("register", (name) => {
  console.log('register', name, num1)
  return (++num1) > 20 ? undefined : true
});

// 触发事件
userSyncHook.call("huang");
