/*
{
  var test = {
    a: 40,
    init: function() {
      console.log(this.a);
      function go() {
        this.a = 5000;
        console.log(this.a);
      }
      go.prototype.a = 50;
      return go;
    }
  };
  var p = test.init();
  p();
}
 */


// 关于剪头函数 this 的问题, 剪头函数的 this 在定义的时候就已经确定,
// 其 this 继承最近上层函数的 this
{
  var test = {
    a: 40,
    init: () => {
      console.log(this.a);
      function go() {
        this.a = 5000;
        console.log(this.a);
      }
      go.prototype.a = 50;
      return go;
    }
  };
  var p = test.init();
  p();
}