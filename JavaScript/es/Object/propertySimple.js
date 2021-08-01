/* 注意，简写的对象方法不能用作构造函数，会报错。但是别用简洁写法就不会报错 */
{
  const obj = {
    f() {
      this.foo = 'bar';
    },
    F:function() {
      this.foo = 'bar';
    }
  };
  new obj.f() // 报错
}