/* function add(rest) {
  return rest;
}

const numbers = [4, 38,1];
console.log(add(...numbers))// 42 */

// ES5 的写法
function f(x, y, z) {
  console.log(x,y,z);
}
var args = [0, 1, 2];
f.apply(args);