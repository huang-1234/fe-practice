Function.prototype.myBind = function(thisArg) {
  if (typeof this !== 'function') {
    return;
  }
  var _self = this;
  var args = Array.prototype.slice.call(arguments, 1) //从第二个参数截取
  return function() {
    return _self.apply(thisArg, args.concat(Array.prototype.slice.call(arguments))); // 注意参数的处理
  }
}