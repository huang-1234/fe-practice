

// let obj = {
//   name: 'sq',
//   age:18,
// }
// console.log(obj instanceof Object);
// console.log(obj.__proto__.__proto__);
/* 
function ChildFunc(name = 'sq', fullName = 'huangsq', age = 18, sex = 'male') {
  this.name = name;
  this.fullName = fullName;
  this.age = age;
  this.sex = sex;
}
console.log(ChildFunc.prototype instanceof Function);
console.log(ChildFunc.prototype instanceof Object);
// console.log(Object instanceof ChildFunc.prototype);
console.log(ChildFunc.prototype);
 */

// 看下new的js本质
function newInstance(constructor) {
  var obj = {};
  obj.__proto__ = constructor.prototype;
  const sliceArguments = function (arguParam,index) {
    const outArr = [];
    for (let i = index, Len = arguParam.length;i < Len;i++){
      outArr[i-1] = arguParam[i]
    }
    return outArr
  }
  constructor.apply(obj, sliceArguments(arguments, 1));
  return obj;
}
function Employee(name) {
  this.name = name;
  this.getName = function () {
    return this.name
  };
}
var employee = newInstance(Employee, 'Jack');
var employee2 = newInstance(Employee, 'Jack2');
var employee3 = newInstance(Employee, 'Jack3');
function Coder(name, language) {
  this.name = name;
  this.language = language;
  this.getLanguage = function () { return this.language };
}
Coder.prototype = newInstance(Employee, '');

var coder = newInstance(Coder, 'Coder Jack', 'Java');
var coder2 = newInstance(Coder, 'Coder Lee', 'C#');
var coder3 = newInstance(Coder, 'Coder Liu', 'C++');
var coder4 = newInstance(Coder, 'Coder Liu', 'JavaScript');
console.log(coder,coder,coder,coder);