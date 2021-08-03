/*
{
  function Foo() { }
  const a1 = new Foo()

  Foo.prototype.constructor = function Gotcha() {

  }
  a1.constructor
  a1.constructor.name
  a1
}
 */

/*  */
{
  var Foo = {};
  var a1 = Object.create(Foo)
  console.log(a1)
  Object.defineProperty(Foo, "constructor", {
    enumerable: false,
    value: function Gotcha() {

    }
  })
  console.log(a1);
}