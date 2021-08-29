function O (age) {
  this.age = age;
}
var o = new O(1);
var age = 3;
O.prototype.age = 2;

setTimeout( () => {
  age = 4;
  O(5);
  console.log(o.age, age)  // 判断结果
}, 1000)