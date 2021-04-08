/* 1
//#region 
const user = {
  cname: '',
  cage: 0,
}
function show(name, age) {
  console.log(this.global)
  // let { name, age } = this.props;
  const welcome = 'hello I am ' + name + '. I am ' + age + ' years old.';
  return welcome;
}
const {cname,cage} = user
console.log(show(cname, cage));
//#endregion */

/* 
2
var x = 1;
function foo(x = x) {
  // ...
}
foo() // ReferenceError: x is not defined
 */

/* // 3
var x = 1;
function foo(x, y = function() { x = 2; }) {
  var x = 3; // 输出3 1 如果去掉这个var，则输出2   1
  y();
  console.log(x);
}

foo() // 3
console.log(x); // 1
 */

