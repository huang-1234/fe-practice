/*
function func() {
  console.log(arguments);
  for (let i = 0;i < arguments.length;++i){
    console.log(arguments[i]);
  }
  // let args = arguments.slice(1);
  console.log(typeof arguments)
}
let o = {
  name: 'hsq',
  age:18,
}
// func(o,1,2,3,4)
console.log(o.__proto__ == Object);
 */

// Object.create()

// let p1 = Object.create(o1);
// console.log(typeof str)

Object.prototype.CreateMe = function (o) {
  if (typeof o !== 'object') throw new Error('o must be a object');
  let obj = {};
  // const prototype
  obj.__proto__ = o;
  return obj;
}
let o1 = {
  name: 'hsq',
  sayName() {
    console.log(`my name is ${this.name}`)
  }
}
let p1 = Object.CreateMe(o1)
console.log(p1.__proto__);

/*  arguments.callee.caller */
{
  function outer() {
    console.log('output the outer1');
    inner();
    console.log('output the outer2');
  }

  function inner() {
    console.log('output the inner1');
    console.log(arguments.callee);
    console.log(arguments.callee.caller);
    console.log('output the inner2');
  }
  outer();
}