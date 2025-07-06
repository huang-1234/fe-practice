// SyncHook 钩子的使用
const { SyncHook } = require("tapable");

// 创建实例
let syncHook = new SyncHook(["name", 'huangsq']);

// 注册事件
syncHook.tap("login", (name, lastName) => console.log(name, lastName)); // gaollard
syncHook.tap("register", (name) => console.log(name)); // gaollard

// 触发事件
syncHook.call('huang', 'sq');
