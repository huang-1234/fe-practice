
/* // ypeof操作符返回一个字符串，表示未经计算的操作数的类型。
console.log(typeof 37);// print: "number"
console.log( typeof 'hsq');// print: "string"
console.log(typeof true);// print: "boolean"
console.log(typeof declaredButUndefinedVariable);
// 使用typeof 操作一个未定义的变量// print: "undefined" */

//
/* // Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管NaN是"Not-A-Number"的缩写
typeof Number(1) === 'number'; // 但不要使用这种形式!
// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof总是返回一个字符串
typeof String("abc") === 'string'; // 但不要使用这种形式!
// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // 但不要使用这种形式!
 */


//
/* // Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';
 */


//
/* // Undefined
console.log(typeof null); // object
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';
 */


/* //
let a = 1;// a 已经声明并且是数字
typeof a === "number"
// b 是为定义的变量，并且当前块作用域中，没有与之同名的通过let和const声明的变量
typeof b === "undefined"
//当前块作用域中，通过let声明了c，在c未被初始化之前，存在暂时性死区，此时使用 typeof 抛出 ReferenceErrortypeof c 
// ReferenceErrorlet c; */

//
/* // 函数
typeof function () { } === 'function';
typeof class C { } === 'function';
typeof Math.sin === 'function';
typeof new Function() === 'function';
// */


//
/* // 对于不是函数的引用类型的值，使用 typeof 操作符时，会返回 "object"
typeof { a: 1 } === 'object';
typeof [1, 2, 4] === 'object';
typeof new Date() === 'object';// 下面的容易令人迷惑，不要使用！
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String("abc") === 'object';
 */

console.log(typeof (()=>{}));
