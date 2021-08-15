/* EventEmitter 简介
EventEmitter 是 NodeJS 的核心模块 events 中的类，用于对 NodeJS 中的事件进行统一管理，用 events 特定的 API 对事件进行添加、触发和移除等等，核心方法的模式类似于发布订阅。

实现 EventEmitter
1、EventEmitter 构造函数的实现 */
// 文件：events.js
function EventEmitter() {
  this._events = Object.create(null);
}

/*
* 其他方法
*/

// 导出自定义模块
module.export = EventEmitter;

/* 在构造函数 EventEmitter 上有一个属性 _events，类型为对象，用于存储和统一管理所有类型的事件，在创建构造函数的时候导出了 EventEmitter，后面实现其他方法的代码将放在构造函数与导出中间。

2、事件最大监听个数
在 EventEmitter 中监听的每一类事件都有最大监听个数，超过了这个数值，事件虽然可以正常执行，但是会发出警告信息，其目的是为了防止内存泄露。 */

// 默认事件最大监听个数
EventEmitter.defaultMaxListeners = 10;

// 操作最大事件监听个数
// 设置同类型事件监听最大个数
EventEmitter.prototype.setMaxListeners = function (count) {
  this._count = count;
}

// 获取同类型事件监听最大个数
EventEmitter.prototype.getMaxListeners = function () {
  return this._count || EventEmitter.defaultMaxListeners;
}

/* 3、添加事件监听
在给 EventEmitter 的实例添加事件监听时，在 _event 对象中会以事件的类型作为属性名，值为一个数组，每次添加这个类型事件的时候，会将要执行的函数存入这个数组中进行统一管理。

添加事件监听的方法有 on、once、addListener、prependListener 和 prependOnceListener：

on 等同于 addListener 将函数正常添加到 _event 对应事件类型的数组中；
once 将函数添加到 _event 对应事件类型的数组中，但是只能执行一次；
prependListener 将函数添加到 _event 对应事件类型的数组中的前面；
prependOnceListener 将函数添加到 _event 对应事件类型的数组中的前面，但只能执行一次。
在 EventEmitter 中正常添加事件有四点需要注意：
1、如果其他的类使用 util 模块的 inherits 方法继承 EventEmitter 时是无法继承实例属性的，在调用操作 _events 的方法中因为无法获取到 _events 导致报错，为了兼容这种继承的情况，在获取不到 _events 时应添加一个 _events 到继承 EventEmitter 的类的实例上；
2、如果添加事件的类型为 newListener，传入要执行的函数会有一个参数 type ，是事件的类型，之后再添加事件的时候，就会执行 newListener 的函数，对添加的事件的事件类型进行处理；
3、on 方法表面上有两个参数，实际上有第三个参数，为布尔值，代表是否从 _events 对应事件类型的数组前面追加函数成员；
4、在添加事件的时候需要判断是否超出这个类型事件的最大监听个数，如果超出要打印警告信息。

on 方法和 addListener 方法的实现： */
// on 和 addListener 方法
// 添加事件监听
EventEmitter.prototype.on = EventEmitter.prototype.addListener = function (type, callback, flag) {
  // 兼容继承不存在 _events 的情况
  if (!this._events) this._events = Object.create(null);

  // 如果 type 不是 newListener 就去执行 newListener 的回调
  if (type !== "newListener") {
    // 如果没添加过 newListener 事件就忽略此处的逻辑
    if (this._events["newListener"] && this._events["newListener"].length) {
      this._events["newListener"].forEach(fn => fn(type));
    }
  }

  // 如果不是第一次添加 callback 存入数组中
  if (this._events[type]) {
    // 是否从数组前面添加 callback
    if (flag) {
      this._events[type].unshift(callback);
    } else {
      this._events[type].push(callback);
    }
  } else {
    // 第一次添加，在 _events 中创建数组并添加 callback 到数组中
    this._events[type] = [callback];
  }

  // 获取事件最大监听个数
  let maxListeners = this.getMaxListeners();

  // 判断 type 类型的事件是否超出最大监听个数，超出打印警告信息
  if (this._events[type].length - 1 === maxListeners) {
    console.error(`MaxListenersExceededWarning: ${maxListeners + 1} ${type} listeners added`);
  }
}

/* 通过上面代码可以看出 on 方法的第三个参数其实是服务于 prependListener 方法的，其他添加事件的方法都是基于 on 来实现的，只是在调用 on 的外层做了不同的处理，而我们平时调这些添加事件监听的方法时都只传入 type 和 callback。

prependListener 方法的实现： */

// prependListener 方法
// 添加事件监听，从数组的前面追加
EventEmitter.prototype.prependListener = function (type, callback) {
    // 第三个参数为 true 表示从 _events 对应事件类型的数组前面添加 callback
    this.on(type, callback, true);
}

// once 方法的实现：

// once 方法
// 添加事件监听，只能执行一次
EventEmitter.prototype.once = function (type, callback, flag) {
    let wrap = (...args) => {
        callback(...args);

        // 执行 callback 后立即从数组中移除 callback
        this.removeListener(type, wrap);
    }

    // 存储 callback，确保单独使用 removeListener 删除传入的 callback 时可以被删除掉
    wrap.realCallback = callback;

    // 调用 on 添加事件监听
    this.on(type, wrap, flag);
}

/* 想让事件只执行一次，需要在执行 callback 之后就立即在数组中移除这个函数，由于是同步执行，直接操作 callback 是很难实现的，添加事件其实就是添加 callback 到 _events 对应类型的数组中，我们在使用 once 的时候将 callback 包一层函数名为 wrap，将这个外层函数存入数组，wrap 的内部逻辑就是真正 callback 的调用和移除 wrap，这里涉及到事件监听的移除方法 removeListener 在后面来详细说明。

once 的第三个参数是为了 prependOnceListener 服务的，prependOnceListener 与 prependListener 实现方式类似，不同的是 prependOnceListener 是基于 once 实现的。

prependOnceListener 方法的实现： */

// prependOnceListener 方法
// 添加事件监听，从数组的前面追加，只执行一次
EventEmitter.prototype.prependOnceListener = function (type, callback) {
  // 第三个参数为 true 表示从 _events 对应事件类型的数组前面添加 callback
  this.once(type, callback, true);
}