/* 

let obj = ' '
// console.log(Boolean(obj));
str = true;
// let str2 = str.toString(); console.log(str2[1]);

// let num = 10;console.log(num.toString());

let t = {} + [];
console.log(t)
console.log([] + {})
 */
/* 
let a = 4 + [1, 2, 3]
console.log(typeof a);
 */
/* 
function SayName() {
  name2: 'h',
  this.name='sq',
  console.log( 'this.name:', this.name); // this指向全局对象或者window
  console.log('name:', name)
}
SayName();
 */
/* // 2. 作为方法调用
var name = "XL";
var person = {
  name: "xl",
  showName: function () {
    console.log(this.name);
  }
}
person.showName();  //输出  xl
//这里是person对象调用showName方法，很显然this关键字是指向person对象的，所以会输出name

var showNameA = person.showName;
showNameA();    //输出  XL
//这里将person.showName方法赋给showNameA变量，此时showNameA变量相当于window对象的一个属性，
//因此showNameA()执行的时候相当于window.showNameA(), 
//即window对象调用showNameA这个方法，所以this关键字指向window
 */

/*
let personA = {
  name: "xl",
  showName: function () {
    console.log(this.name);
  }
}
let personB = {
  name: "XL",
  sayName: personA.showName
}

personB.sayName();  //输出 XL
//虽然showName方法是在personA这个对象中定义，但是调用的时候却是在personB这个对象中调用，因此this对象指向 
*/

/* // 构造函数
function Person(name) {
  this.name = name;
}
var personA = Person("xl");
console.log(personA.name); // 输出  undefined
console.log(window.name);//输出  xl
//上面代码没有进行new操作，相当于window对象调用Person("xl")方法，那么this指向window对象，并进行赋值操作window.name="xl".
var personB = new Person("xl");
console.log(personB.name);// 输出 xl
 */

/* //new 操作符
//下面这段代码模拟了new操作符(实例化对象)的内部过程
function Person(name) {
  var o = {};
  o.__proto__ = Person.prototype;  //原型继承
  Person.call(o, name);
  return o;
}
var personB = Person("xl");

console.log(personB.name);  // 输出  xl
 */

/* //
function test(person) {
  person.age = 18
  person = {
    name: 'Andy',
    age: 19
  }
  return person
}
const p1 = {
  name: 'sq',
  age: 20
}
const p2 = test(p1)
console.log(p1) // -> ?
console.log(p2) // -> ? */

console.log(typeof null); //object