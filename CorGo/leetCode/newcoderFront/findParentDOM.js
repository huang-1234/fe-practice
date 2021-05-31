
/* 
// 3. dom节点查找
// 查找两个节点的最近的一个共同父节点，可以包括节点自身

// 输入描述:
// oNode1 和 oNode2 在同一文档中，且不会为相同的节点
function commonParentNode(oNode1, oNode2) {
  if (oNode1.contains(oNode2)) {
    return oNode1
  } else {
    return commonParentNode(oNode1.parentNode, oNode2)
  }
}
 */

//
// 4. 根据包名，在指定空间中创建对象
// 根据包名，在指定空间中创建对象
// 输入描述:
// namespace({ a: { test: 1, b: 2 } }, ‘a.b.c.d’)
// 输出描述:
// { a: { test: 1, b: { c: { d: { } } } } }
function namespace(oNamespace, sPackage) {
  let scope = sPackage.split('.')
  let ns = oNamespace
  for (let i = 0;i < scope.length;i++) {
    // 如果对象中没有该元素，或者不是对象，那么就置为空对象
    if (!ns.hasOwnProperty(scope[i]) || Object.prototype.toString.call(ns[scope[i]]) !== '[object Object]') {
      ns[scope[i]] = {}
    }
    // 然后继续往下找
    ns = ns[scope[i]]
  }
  return oNamespace
}
let o = { a: { test: 1, b: 2 } }
// namespace(o, 'a.b.c.d');
// console.log(o);

function setObj(o) {
  o.a.test = 5;
}
setObj(o); console.log(o);

/* 
考察知识点：

判断对象的自身是否有某属性(hasOwnProperty)
hasOwnProperty / typeof / in / instanceof 的区别
hasOwnProperty 是判断对象自身有没有某属性，不包含原型链的方法。
in 是判断对象在自身和原型链上有没有该方法。
instanceof 是判断对象在原型链上有没有该方法。
typeof 判断操作数的类型，但是null也会判断为"object"
准确判断某值的类型
Object.prototype.toString.call(123) === “[object Number]”
Object.prototype.toString.call(‘aaa’) === “[object String]”
Object.prototype.toString.call(true) === “[object Boolean]”
Object.prototype.toString.call(undefined) === “[object Undefined]”
Object.prototype.toString.call(null) === ‘[object Null]’
Object.prototype.toString.call({}) === ‘[object Object]’
Object.prototype.toString.call([]) === ‘[object Array]’
Object.prototype.toString.call(Math) === “[object Math]”
Object.prototype.toString.call(new Date()) === “[object Date]”
Object.prototype.toString.call(new RegExp) === “[object RegExp]”
 */