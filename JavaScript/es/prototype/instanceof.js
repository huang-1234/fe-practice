/*
function Parent() {
  this.name = 'parent'
}
Parent.prototype.sayHi = function () {
  console.log('hello');
}
let child = new Parent()
console.log(child instanceof Parent);
 */
{
  function Foo(){}
  console.log(Object instanceof Object);//1  true
  console.log(Function instanceof Function);//2  true
  console.log(Number instanceof Number);//3  false
  console.log(String instanceof String);//4  false
  console.log(Boolean instanceof Boolean);//
  console.log(Function instanceof Object);//5   true
  console.log(Foo instanceof Function);//6  true
  console.log(Foo instanceof Foo);//7  false
}
{
  console.log(Object,Function,String,Number,Boolean, Foo);
  /***
  *  结果如下
  *   function Object() { [native code] }
  *   function Function() { [native code] }
  *   function String() { [native code] }
  *   function Number() { [native code] }
  *   function Foo(){}
  */
}