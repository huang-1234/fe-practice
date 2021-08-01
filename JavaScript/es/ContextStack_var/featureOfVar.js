/*
var param1 = 'huangsq';

function f1(param1) {
  var param1 = 'abc'
  console.log(this.param1);
  console.log(param1);
}
var f2 = f1
f2(param1)
 */

{

  function saySomething() {
    var name = 'mokou';
    return function () {
      console.log(name);
    }
  }
  var say = saySomething()
  say()
}

/* {
  var name = 'hahaha'
  function saySomething(name) {
    var name = 'mokou';
    return function (name) {
      console.log(name);
    }
  }
  var say = saySomething()
  say(name)
} */


/* 以下是单例模式的实现： */
{
  const Singleton = (function () {
    var _instance;
    return function (obj) {
      return _instance || (_instance = obj);
    }
  })();
  var a = new Singleton({
    x: 1
  });
  var b = new Singleton({
    y: 2
  });
  console.log(a === b);
}