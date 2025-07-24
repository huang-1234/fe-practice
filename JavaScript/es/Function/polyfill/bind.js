if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    let aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this, // 此处的 this 指向目标函数
      fNOP = function () { },
      fBound = function () {
        return fToBind.apply(this instanceof fNOP
          ? this // 此处 this 为 调用 new obj() 时所生成的 obj 本身
          : oThis || this, // 若 oThis 无效则将 fBound 绑定到 this
          // 将通过 bind 传递的参数和调用时传递的参数进行合并, 并作为最终的参数传递
          aArgs.concat(Array.prototype.slice.call(arguments)));
      };

    // 将目标函数的原型对象拷贝到新函数中，因为目标函数有可能被当作构造函数使用
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}