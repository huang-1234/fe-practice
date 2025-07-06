// 第二版
Function.prototype.bind2 = function (context) {

  const self = this;
  // 实现第3点，因为第1个参数是指定的this,所以只截取第1个之后的参数
  // arr.slice(begin); 即 [begin, end]
  const args = Array.prototype.slice.call(arguments, 1);

  return function () {
    // 实现第4点，这时的arguments是指bind返回的函数传入的参数
    // 即 return function 的参数
    const bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs));
  }
}

// 第三版
Function.prototype.bind2 = function (context) {
  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);

  const fBound = function () {
    const bindArgs = Array.prototype.slice.call(arguments);

    // 注释1
    return self.apply(
      this instanceof fBound ? this : context,
      args.concat(bindArgs)
    );
  }
  // 注释2
  fBound.prototype = this.prototype;
  return fBound;
}

// 第五版
Function.prototype.bind2 = function (context) {

  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);

  const fNOP = function () { };

  const fBound = function () {
    const bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}