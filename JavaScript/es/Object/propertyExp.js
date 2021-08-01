/* 属性名表达式 § ⇧
JavaScript 定义对象的属性，有两种方法。 */


/* 注意，属性名表达式与简洁表示法，不能同时使用，会报错。 */
{
/*   // 报错
  const foo = 'bar';
  const bar = 'abc';
  // const baz = { [foo] };

  // 正确
  const foo = 'bar';
  // const baz = { [foo]: 'abc' };

  /* 注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心。 */
  const keyA = {a: 1};
  const keyB = {b: 2};
  const myObject = {
    [keyA]: 'valueA',
    [keyB]: 'valueB'
  };
  myObject // Object {[object Object]: "valueB"} */
}

{
  Object(true) // {[[PrimitiveValue]]: true}
  Object(10)  //  {[[PrimitiveValue]]: 10}
  console.log(Object('abc')); // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
}
