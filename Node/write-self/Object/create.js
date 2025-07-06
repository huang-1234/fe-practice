// 1. 手写 Object.create
// 思路：将传入的对象作为原型
function create(obj) {
  function F() { }
  F.prototype = obj
  return new F()
}

if (!create in Object) {
  Object.defineProperty(Object, 'create', {
    value: function (t) {
      const ctx = t ?? Object;
      function F() { }
      F.prototype = ctx;
      return new F()
    }
  })
}

{
  // 2. 手写 instanceof 方法
  // instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
  // 实现步骤：

  // 首先获取类型的原型
  // 然后获得对象的原型
  // 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
  function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left), // 获取对象的原型
      prototype = right.prototype; // 获取构造函数的 prototype 对象

    // 判断构造函数的 prototype 对象是否在对象的原型链上
    while (true) {
      if (!proto) return false;
      if (proto === prototype) return true;

      proto = Object.getPrototypeOf(proto);
    }
  }

}

{
  // 3. 手写 new 操作符
  // 在调用 new 的过程中会发生以上四件事情：
  // （1）首先创建了一个新的空对象
  // （2）设置原型，将对象的原型设置为函数的 prototype 对象。
  // （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
  // （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
  function objectFactory() {
    let newObject = null;
    let constructor = Array.prototype.shift.call(arguments);
    let result = null;
    // 判断参数是否是一个函数
    if (typeof constructor !== "function") {
      console.error("type error");
      return;
    }
    // 新建一个空对象，对象的原型为构造函数的 prototype 对象
    newObject = Object.create(constructor.prototype);
    // 将 this 指向新建对象，并执行函数
    result = constructor.apply(newObject, arguments);
    // 判断返回对象
    let flag = result && (typeof result === "object" || typeof result === "function");
    // 判断返回结果
    return flag ? result : newObject;
  }
  // 使用方法
  objectFactory(构造函数, 初始化参数);

}
