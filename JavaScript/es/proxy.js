const target = { 
  foo: 'bar',
  id:'2021'
}; 
const handler = { 
 // 捕获器在处理程序对象中以方法名为键
  get(trapTarget, property, receiver) { 
    console.log('get:',trapTarget === target); 
    console.log('get:',property); 
    console.log('get:',receiver === proxy); 
    return 'handler override'; 
  },
  set(newVal) {
    console.log(newVal);
    return `the newVal is ${newVal}`
  },
  enumerable: true, //可枚举（可以遍历）
  configurable: true, //可配置（比如可以删除
  writable:true,
};
const log = console.log;
const proxy = new Proxy(target, handler); 
console.log(target.foo); // bar 
console.log(proxy.foo); // handler override 
proxy.id = 5;
log(proxy.id)
// console.log(target['foo']); // bar 
// console.log(proxy['foo']); // handler override 
// console.log(Object.create(target)['foo']); // bar 
// console.log(Object.create(proxy)['foo']); // handler override