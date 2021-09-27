
/*
var name = '黄水清';
var doSth = function () {
  console.log(this);
  console.log(this.name);
}
var student = {
  name: 'vnues',
  doSth: doSth,
  other: { name: 'other', doSth: doSth, }
}
student.doSth(); // 'vnues'
student.other.doSth(); // 'other'
 */


/* //
function Say() {
  'user strict'
  var name = 'hsq'
  console.log(name);
}
Say();
 */

/* //

let name = 'h'
function sayName() {
  'use strict'
  let name = 'hsq';
  // console.log(this);
  console.log('name:',this.name);
}
sayName();
// console.log(window.name);
 */

/* // new操作符
function Person(name, age, sex) {
  this.name = name; this.age = age; this.sex = sex;
}
let p = new Person('hsq', 18, 'male')
console.log('name:', p.name)
 */

/* // this和return
function fn() {
  this.name = 'hsq';
  return {
    name: 'h',
    age:18
  };
}
let p1 = new fn;
console.log(p1.anme); //undefined

function fn() {
  this.name = 'hsq';
  return 1;
}
let p2 = new fn;
console.log(p2.name); //hsq
 */

/* // generator
const http = require('http')
function* getData(data) {
  const res1 = yield http.post(data);
  const res2 = yield http.post(res1);
  const res3 = yield http.post(res2);
  const res4 = yield http.post(res3);
  return http.post(res4);
}
const g = getData(123);
console.log('g:',g);
const res1 = g.next(); 						// {value: res1,done: false}
const res2 = g.next(res1.value);	// {value: res2,done: false}
const res3 = g.next(res2.value);	// {value: res3,done: false}
const res4 = g.next(res3.value);	// {value: res4,done: false}
const res5 = g.next(res4.value);	// {value: res5,done: true}
const res6 = g.next()							// {value: undefined,done: true}
 */

/* // 怎么让一个对象调用一个别个对象的函数，解决方法是让该函数调用其原型对象上的call()方法
function greet(age, place) {
  console.log(`Hello, my name is ${this.name}, I am ${age} years old.
  Now I am in ${place}`)
}

const user = {
  name: 'hsq',
  age: 27,
}
greet.call(user,18,'changsha')
greet.apply(user,[18,'changsha'])

 */

/* //使用 apply
var a = {
  name: "孙悟空",
  func1: function () {
    console.log(this.name);
  },
  func2: function () {
    setTimeout(
      function () {
        this.func1();
      }.apply(a),
      100
    );
  }
};
a.func2();
 */

/* // 使用bind
var a = {
  name: "孙悟空",
  func1: function () {
    console.log(this.name);
  },
  func2: function () {
    setTimeout(
      function () {
        console.log(this);
        this.func1();
      }.bind(a)()
      ,100
    );
  }
};
a.func2();
// 输出：{name: "孙悟空", func1: ƒ, func2: ƒ}func1: ƒ ()func2: ƒ ()name: "孙悟空"__proto__: Object
//孙悟空
 */

/* //
function say() {
  console.log('this.name:',this.name);
}
var name = 'hsq';
say.call(null)
 */


/* //Mybind
Function.prototype.myBind = function (context, ...args) {
  console.log('context:',context);
  if (typeof this !== "function") {
    throw new Error("this must be a function");
  }
  console.log(this);
  var self = this;
  var fBind = function () {
    console.log('fBindThis:', this);
    console.log('this:', self);
    console.log(this instanceof self);
    self.apply(this instanceof self
      ? this : context
      , args.concat(Array.prototype.slice.call(arguments)));
  }
  if (this.prototype) {
    fBind.prototype = Object.create(this.prototype);
  }
  return fBind;
}
var obj = {
  name: 'hsq',
  age:18,
}
// var name = 'h'
// console.log(window.name);
function sayName(place) {
  console.log(`my name is ${ this.name },I am in ${place}`);
}
sayName.myBind(null)('changsha')
 */