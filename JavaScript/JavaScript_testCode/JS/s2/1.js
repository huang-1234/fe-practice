// let messages = 'Hello';

// function test() {
//     // let messages = 'Hello';
//     console.log(messages);
// }
// test();
// console.log(messages);
/*2
function foo() {

    console.log(a);
    var a = 'Hello';
    console.log(a);
}
foo();
*/

/*3
if (typeof myname === 'undefined') {
    let myname = 'huangshuiqing';
    console.log(myname);
}
myname = 'marraya';
console.log(myname);
*/
// ==========================
// var A = {
//     a: 1,
//     b: 2
// };
// for (let key in A) {
//     console.log(key);

//     console.log();
// 
/*4
let arr = [1, 2, 3, 'names'];
console.log('the lenth of the arr is ' + arr.length);
for (let arr1 of arr) {
    console.log(arr1);
}

// let str1 = 'huangshuiqing';

obj = undefined;
let bln = Boolean
    (obj);
console.log(bln);
*/
/*5
let octalNum1 = 021;
let hexNum1 = 0x10;

console.log(octalNum1);
console.log(hexNum1);

const the_mutiply = octalNum1 * hexNum1;
console.log(the_mutiply);

const minimalNum = 1 / 3;
const theint = parseInt(minimalNum);
console.log(minimalNum);
console.log(theint);
*/
/* 6
a = 0.05;
b = 0.25;
const bn = (a + b === 0.3);
console.log(bn);
const the_MIN = Number.MIN_VALUE;
console.log(the_MIN);

const the_MAX = Number.MAX_VALUE;
console.log(the_MAX);
*/
/* 7
const s = 255;
let t = parseInt(s, 6);
console.log(t);

// const s2 = 'huangshuiqing';
// let s3 = s2[0:5];
// for (word of s3) {
//     console.log(word);
// }
// let a = \u03a3;
a = 12;

console.log('\u03a3');
*/
/* 8
let value = 5;
let ex = 'second';
let str1 = `${value} to the ${ex} power is ${value * value}`; //..特别注意这个不是单引号，只是个斜引号，位置感叹号的左边

console.log(str1);
*/
/** 探索对象 */
/* 9
// `use strict`
let person = {
    name: 'not name',
    sex: 'not sex',
    hight: 'undefined',
};
// console.log(person);

let SetName = function(inobj, name) {
    inobj.name = name;
    return inobj.name;
};
// console.log(inobj.name); //inobj is not defined
SetName(person, 'huang');

Object.defineProperty(person, 'name', {
    //这三个数据属性都必须得小写，否则设定的true或者false都无效
    
    //  * configurable：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或能否把属性修改为访问器属性，默认为true
    //  * enumerable:表示能否通过for-in循环返回属性
    //  * writable：表示能否修改属性的值
    //  * value：包含该属性的数据值。默认为undefined
    //  *
    writable: true,
    configurable: false,
    enumerable: true,
    value: 'huangshuiqing',
    //访问器属性：
    get: function() {
        return this._name;
    },
    set: function(newName) {
        this._name = newName;
    }

});
// 访问器属性的修改 下面的代码出现这个结果： Maximum call stack size exceeded
person.__defineGetter__('sex', function() {
    return this.sex;
});
person.__defineSetter__('sex', function(newSex) {
    this.sex = newSex;
});
person._name = 'hello';
person.sex = 'boy';
// console.log(person);
// 读取属性的特性
let pn_decp = Object.getOwnPropertyDescriptor(person, 'name');
console.log(pn_decp.value);
console.log(pn_decp.configurable);

console.log(person);
delete person._name;
console.log(person);
*/
/* 10
function Person(name, sex, age, job) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log('my name is : ' + this.name);
    };
    // return this;
}
Person.prototype = {
    name: 'Jack',
    sex: 'god',
    age: 0,
    job: "create people"
};
let str = Object.keys(Person.prototype);
for (let p in Person) {
    console.log(p);
}
console.log(str);
console.log(Person.prototype.constructor);
let p1 = new Person('huang', 'boy', '18', 'programan');
// console.log(p1);
// console.log('this is : ' + typeof p1);
// console.log('this is : ' + typeof Person);
// let key = Object.keys(p1);
// console.log(key);
// function person(name, sex, age, job) {
//     let contens = 'my name is ' + name + 'I am ' + age + 'years old. now!I am a ' + job + '.I believe that i am good ' + sex
//     console.log(contens);

// }
// let p2 = person('huang', 'boy', '18', 'programan');
// console.log(typeof p2);
// console.log(typeof person);
*/
//===================

//
// 构造函数模式用于定义实例属性，而原型模式用于定义方法和共享属性。
// 实例属性在构造函数中，实例方法使用原型模式创建。
// 2. 代码实例
// 集两种模式之长。
// 示例
/*
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        alert(this.name);
    }
};

var person1 = new Person("Nicholas", 29, "Software");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push('Huang');
console.log(person1.friends);
console.log(person2.friends);

// 这种构造函数与原型模式混成的模式，是目前在ECMAScript中使用最广泛的、认同度最高的一种创建自定义类型的方法。这是用来定义引用类型的一种默认模式。
*/
//============================

// 稳妥构造对象
function Person(name, age, job) {
    let o = new Object();
    o.sayName = function() {
        console.log(name);
    };
    return o;
}
let friend = Person('huang', 20, 'Software Engineer');
console.log(friend);
console.log(friend.sayName());
let obj1 = get

/*14
// 普通的构造函数
function Friend(name, sex) {
    this.name = name;
    this.sex = sex;
}
let fri1 = new Friend('shui', 'boy');
console.log(fri1);
console.log(fri1.name);
*/
//==============
/* 15
var foo = {
    name: "mingming",
    logName: function(adj, sex) {
        console.log(this.name + ' is a ' + adj + ' ' + sex);
    }
};
var bar = {
    name: "xiaowang",
    logName: function(sex) {
        console.log(this.name + ' is a' + sex);
    }
};
let args1 = ['good', 'boy'];
foo.logName.apply(bar, args1); //xiaowang
//========
let args2 = ['bad', 'girl'];
foo.logName.call(bar, args2[0], args2[1]);
* /
// =========================================
/* 6.3.2  借用构造函数继承
// function SuperType(){
//     this.friends=["gay1","gay2"];
// }
// function SubType(){
// }
// SubType.prototype=new SuperType();
// var instance1=new SubType();
// var instance1.friends.push("gay3");
// alert(instance1.friends);
// var instance2=new SubType();
// alert(instance2.friends);  
// alert(instance1 instanceof SuperType);  //true
// //gay1,gay2,gay3 这个实例里为什么会有gay3 可以简单解释为 SuperType中的friends是instance1和instance2所在的作用域链共享的
//==================
//构造函数无参数
function SuperType() {
    this.friends = ["gay1", "gay2"];
}
SubType.prototype = new SuperType(); //继承
function SubType() {
    SuperType.call(this); //这样实现了继承 与上段代码的继承方式有什么不同?
}
var instance1 = new SubType();
var instance2 = new SubType();
instance1.friends.push("gay3");
console.log(instance1.friends); //gay1,gay2,gay3
console.log(instance2.friends); //gay1,gay2

//-----------------------------邪恶的分割线-------------------------//
//构造函数有参数
function SuperType(name) {
    this.name = name;
}

function SubType(name) {
    SuperType.call(this, name); //等同于SuperType.apply(this,[name]) 或 SuperType.apply(this,arguments)
}
var instance1 = new SubType("nUll");
var instance2 = new SubType("mywei");
alert(instance1.name); //nUll
alert(instance1.name); //mywei
alert(instance1 instanceof SuperType); //false
*/
//=========================
/**组合继承 */
function SuperType(name) {
    this.colors = ["red", "blue", "green"]; // 父类对象中存在着引用类型，这里是一个数组类型
    this.name = name;
}

SuperType.prototype.sayName = function() {
    alert(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name); // 别忘记将this对象传递进去,继承了SuperType的属性
    this.age = age;
}

SubType.prototype = new SuperType(); // 继承方法
SubType.prototype.constructor = SubType;

SubType.prototype.sayAge = function() {
    alert(this.age);
};

window.onload = function() {
    var instance_1 = new SubType("大头", 22);
    instance_1.colors.push("black");
    alert(instance_1.colors);
    alert("name : " + instance_1.name + " age : " + instance_1.age);

    var instance_2 = new SubType("shenlei", 23);
    alert(instance_2.colors);
    alert("name : " + instance_2.name + " age : " + instance_2.age);
};