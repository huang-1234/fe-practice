Function.prototype.myBind = function (obj) {
  if (this instanceof Function) {
    throw new Error(`${obj} must be a function`)
  }
  const args = Array.prototype.silice.call(arguments,1)
  const _self = this
  const ctx = obj || window
  const FuncBind = function() {
    const args = Array.prototype.slice.call(arguments)
    return _self.apply(this instanceof funcTemp ? this : ctx , args.concat(bindArgs))
  }
  const funcTemp = function(){}
  funcTemp.prototype = this.prototype;
  FuncBind.prototype = new funcTemp()
  return FuncBind
}