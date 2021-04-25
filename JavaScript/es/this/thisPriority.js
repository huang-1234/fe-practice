/* 
//new的this优先级大于bind
// var name = 'global02';
age = 18;
var obj = {
  name: 'local0',
  foo: function () {
    console.log('foo:',this,this.name);
    this.name = 'h';
  }
    // .bind(window)
};
var bar = new obj.foo();
setTimeout(function () {
  console.log('setTimeout:',this);
}, 0)
// console.log('global:',this,global);
// var bar
console.log(bar.name);
// console.log(arguments);
 */


// about setTimeout
let obj = {
  say: function () {
    // this: Window {window: Window, self: Window, document: document, name: "global0", location: Location, …}
    // 我已经注释掉了global0，但是window还是含有name="global0"
    // 当我重新打开一个浏览器窗口执行该脚本： print: {say: ƒ, print: ƒ}thisPriority.js: 31 this: Window {window: Window, self: Window, document: document, name: "",
    console.log('this:', this);  //延迟执行函数中的this
    console.log(this.name); // this: Window {window: Window, self: Window, document: document, name: "global0", location: Location, …}thisPriority.js: 30 global0
  },
  print: function () {
    console.log('print:', this); //print: {say: ƒ, print: ƒ}
    // 
    setTimeout(this.say, 0); //setTimeout调用环境中的this，指向调用者即obj
  }
};

obj.print(); //当该对象调用他的方法时，方法中的this指向该对象

