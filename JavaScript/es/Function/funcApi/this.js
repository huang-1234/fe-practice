/* 
var name = "windowsName";
var a = {
  name: "Cherry",
  func1: function () {
    console.log(this.name)
  },
  func2: function () {
    setTimeout(() => {
      this.func1()
    }, 100);
  }
};
a.func2()     // Cherry复制代码
 */

/* 
// apply
Function.prototype.Apply = function (thisArg, argsArr) {
  console.log(typeof this);
  console.log(thisArg);
  if (typeof this !== 'function') throw new TypeError('thisArg must be function');
  let self = thisArg || window;
  const uniqueTag = '00' + Math.random();
  console.log('this:',this);
  self[uniqueTag] = this;
  const funApply = self[uniqueTag](argsArr)
  delete self[uniqueTag];
  return funApply;
}

function sayName(place) {
  console.log(`my name is ${this.name}. I am in ${place}. I want ${this.$fn}`);
}
let o = {
  name: 'hsq',
  $fn:'many money'
}
sayName.Apply(o, ['changsha']);
 */

//实现bind
Function.prototype.es5Bind = function (thisArg) {
  
}