
function checkType(obj, debug = false) {
  debug && console.log(Object.prototype.toString.call(obj));
  return Object.prototype.toString.call(obj).slice(8, -1);
}

// 这个方法代表着需要克隆一个函数、这个函数与原函数完全独立（地址不同）你看这个代码正确吗、如果是错误的、指出来
// function cloneFunction(fn) {
//   return eval("(" + fn + ")");
// }
/**
 * @description 函数克隆
 * @example
 * 1. 无法拷贝函数的词法环境、比如闭包
 * @param {Function} source 源函数
 * @returns {Function} 克隆后的函数
 */
const cloneFunctionUseEval = (source) => {
  // 使用 eval 创建新函数，确保是完全独立的实例
  const fnStr = source.toString();
  const fnBody = fnStr.substring(fnStr.indexOf('{') + 1, fnStr.lastIndexOf('}'));
  const fnParams = fnStr.substring(fnStr.indexOf('(') + 1, fnStr.indexOf(')'));

  // 使用 eval 创建新函数，确保是完全独立的实例
  const newFn = eval(`(${fnParams}) => {${fnBody}}`);

  // 复制函数属性
  Object.getOwnPropertyNames(source).forEach(prop => {
    if (prop !== 'length' && prop !== 'name' && prop !== 'prototype') {
      const descriptor = Object.getOwnPropertyDescriptor(source, prop);
      if (descriptor) {
        Object.defineProperty(newFn, prop, descriptor);
      }
    }
  });
  // 设置原型
  Object.setPrototypeOf(newFn, Object.getPrototypeOf(source));
  return newFn;
}
/**
 * 创建一个函数的深拷贝
 * @example const fn = (a, b) => a + b;
 * @example const newFn = cloneFunctionUseFunc(fn);
 * @access 可以拷贝一个函数的词法环境、比如闭包
 * @param {Function} source
 * @returns {Function}   函数的深拷贝
 */
const cloneFunctionUseFunc = (source) => {
  const bound = Function.prototype.bind.call(source);
  const newFn = Object.create(source.prototype);
  newFn.prototype = Object.create(source.prototype);
  return Object.defineProperties(bound, Object.getOwnPropertyDescriptors(source));
};
function deepCopy(source, wm = new WeakMap()) {
  const type = checkType(source);
  if (type === "Object" || type === "Array") {
    const target = type === "Object" ? {} : [];
    if (wm.get(source)) {
      return wm.get(source);
    }
    wm.set(source, target);
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = deepCopy(source[key], wm);
      }
    }
  }
  switch (type) {
    case 'Number':
      return +source;
    case 'String':
      return source + ''
    case 'Boolean':
      return !!source;
    case 'Function':
      return source.bind(this);
    case "Array":
      for (let i = 0;i < source.length;i++) {
        target[i] = deepCopy(source[i], wm);
      }
    case "Object":
      let target = {};
      if (wm.get(source)) {
        return wm.get(source);
      }
      wm.set(source, target);
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          target[key] = deepCopy(source[key], wm);
        }
      }
  }
}


if (typeof module !== "undefined") {
  let a = {
    a1: 1,
    b: 2,
    c: [1, 2, 3],
    d: {
      a: 1,
      b: 2,
      c: [1, 2, 3],
      fa: function () {
        console.log('fa')
      }
    }
  }
  function fa() {
    console.log('fa', a)
  }
  fa.__proto__.toStr = () => {
    console.log('toStr')
  }
  const cfa = cloneFunctionUseFunc(fa)
  // cfa()
  console.log(cfa === fa)
}