
/*
function Foo() {
  this.value = 42;
  this.method = function () {
    // this 指向全局对象
    console.log(this)   // 输出window  第二个this
    console.log(this.value); // 输出：undefined   第二个this
  };
  setTimeout(this.method, 500);  // this指向Foo的实例对象  第一个this
}
new Foo();
 */

var value = 33;
function Foo() {
  this.value = 42;
  this.method = function () {
    // this 指向全局对象
    console.log(this)   // 输出window    第二个this
    console.log(this.value); // 输出：33   第二个this. 浏览器宿主对象
  };
  setTimeout(this.method, 500);  // 这里的this指向Foo的实例对象  第一个this
}
new Foo();