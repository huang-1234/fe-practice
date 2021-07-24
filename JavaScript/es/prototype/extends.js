var obj1 = {
  x:1,
  foo: function  () {
      console.log(this.x);
  }
}
var obj2 = {
  x:2,
  __proto__:obj1
}
obj2.foo();  //2