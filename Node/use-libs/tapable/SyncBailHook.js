// SyncBailHook
// SyncBailHook 为串行同步执行，如果事件处理函数执行时有一个返回值不为 undefined，则跳过剩下未执行的事件处理函数：
// 创建实例
const { SyncBailHook } = require("tapable");

let userSyncHook = new SyncBailHook(["name", 's']);

// 注册事件
userSyncHook.tap("login", (name, sq) => {
  console.log(name, sq)
  return undefined // 返回值不为 undefined
});

userSyncHook.tap("register", (name, sq, a) => {
  console.log(name, sq, a)
});

// 触发事件，让监听函数执行
userSyncHook.call("huang", 'sq');  // 只会打印一次
