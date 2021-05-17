
// 字符串是一个类似数组的对象，也原生具有 Iterator 接口。
const someString = "hi";
const out = typeof someString[Symbol.iterator]
// "function"
var iterator = someString[Symbol.iterator]();
const out0 = iterator.next()  // { value: "h", done: false }
const out1 = iterator.next()  // { value: "i", done: false }
const out2 = iterator.next()  // { value: undefined, done: true }
console.log(out,out0,out1,out2);