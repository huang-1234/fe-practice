Function.prototype.BindMe = function (context) {
  console.log('first:', context);
  // const context = arguments[0];console.log(context);

  const args = Array.prototype.slice.call(arguments, 1); console.log(args);
  if (typeof this !== 'function') throw new TypeError('this must be function');
  
  var _this = this;
  let self = context || window;
  
  const funcBind = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    // 返回函数的执行结果
    // 判断函数是作为构造函数还是普通函数
    // 构造函数this instanceof fNOP返回true，将绑定函数的this指向该实例，可以让实例获得来自绑定函数的值。
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return _this.apply(this instanceof fnNOP ? this : context, args.concat(bindArgs));
  }
  var fnNOP = function () { }
  fnNOP.prototype = this.prototype; // fNOP函数的prototype为绑定函数的prototype
  funcBind.prototype = new fnNOP();
  // 以上三句相当于Object.create(this.prototype)
  return funcBind;
}

function sayName(place) {
  console.log(`my name is ${this.name}. I am in ${place}. I want ${this.$fn}`);
}
let o = {
  name: 'hsq',
  $fn: 'many money'
}
sayName.BindMe(o, 'changsha')();