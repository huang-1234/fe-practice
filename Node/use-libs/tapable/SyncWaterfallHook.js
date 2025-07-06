
const { SyncWaterfallHook } = require("tapable");

// 创建实例
let userSyncHook = new SyncWaterfallHook(["name", 's']);

// 注册事件
userSyncHook.tap("login", (name) => {
  console.log('login', name) // 打印 gaollard
});

userSyncHook.tap("register", (name, sq) => {
  console.log('register', name, sq) // login回调未返回值, 所以参数为 "gaollard"
  return "hello"
});

userSyncHook.tap("enroll", (name) => {
  console.log("enroll", name) // register回调返回"hello", 所以参数为 "hello"
});

// 触发事件
userSyncHook.call("huang", 'sq');
