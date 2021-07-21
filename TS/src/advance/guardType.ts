/* 类型守卫
JavaScript 作为一种动态语言，意味着其中的参数、值可以是多态（多种类型）。
因此，我们需要区别对待每一种状态，以此确保对参数、值的操作合法。举一个常见的场景为例，如下我们定义了一个可以接收
字符串或者字符串数组的参数 toUpperCase，并将参数转成大写格式输出的函数 convertToUpperCase。 */
{
  const convertToUpperCase = (strOrArray) => {
    if (typeof strOrArray === 'string') {
      return strOrArray.toUpperCase();
    } else if (Array.isArray(strOrArray)) {
      return strOrArray.map(item => item.toUpperCase());
    }
  }
  {
    const convertToUpperCase = (strOrArray: string | string[]) => {
      if (typeof strOrArray === 'string') {
        return strOrArray.toUpperCase();
      } else if (Array.isArray(strOrArray)) {
        return strOrArray.map(item => item.toUpperCase());
      }
    }
  }
}
/* 如何区分联合类型？
首先，我们看一下如何使用类型守卫来区分联合类型的不同成员，常用的类型守卫包括
switch、字面量恒等、typeof、instanceof、in 和自定义类型守卫这几种。 */
{
  /* 1. switch
    我们往往会使用 switch 类型守卫来处理联合类型中成员或者成员属性可枚举的场景，即字面量值的集合，如以下示例： */
  {
    const convert = (c: 'a' | 1) => {
      switch (c) {
        case 1:
          return c.toFixed(); // c is 1
        case 'a':
          return c.toLowerCase(); // c is 'a'
      }
    }
    const feat = (c: { animal: 'panda'; name: 'China'; feat: "video" } | { feat: 'video'; name: 'Japan' }) => {
      switch (c.name) {
        case 'China':
          return c.animal; // c is "{ animal: 'panda'; name: 'China' }"
        case 'Japan':
          return c.feat; // c is "{ feat: 'video'; name: 'Japan' }"
      }
    };
  }
  /* 2. 字面量恒等
  switch 适用的场景往往也可以直接使用字面量恒等比较进行替换，比如前边的 convert 函数可以改造成以下示例： */
  const convert1 = (c: 'a' | 1) => {
    if (c === 1) {
      return c.toFixed(); // c is 1
    } else if (c === 'a') {
      return c.toLowerCase(); // c is 'a'
    }
  }
  /* 3. typeof
  反过来，当联合类型的成员不可枚举，比如说是字符串、数字等原子类型组成的集合，这个时候就需要使用 typeof。
  typeof 是一个比较特殊的操作符（15 讲中会再详细地介绍它），我们可以使用它对 convert 函数进行改造，如下代码所示： */
  const convert2 = (c: 'a' | 1) => {
    if (typeof c === 'number') {
      return c.toFixed(); // c is 1
    } else if (typeof c === 'string') {
      return c.toLowerCase(); // c is 'a'
    }
  }
  /* 4. instanceof
  此外，联合类型的成员还可以是类。比如以下示例中的第 9 行和第 11 行，我们使用了 instanceof 来判断 param 是 Dog 还是 Cat 类。 */
  {
    class Dog {
      wang = ['wang', 'wang', 'wang',];
    }
    class Cat {
      miao = ['miao', 'miao',];
    }
    const getName = (animal: Dog | Cat) => {
      if (animal instanceof Dog) {
        return animal.wang;
      } else if (animal instanceof Cat) {
        return animal.miao;
      }
    }
  }
  /* 如何区别枚举类型？
  如 09 讲中介绍，枚举类型是命名常量的集合，所以我们也需要使用类型守卫区分枚举类型的成员。
   先回想一下枚举类型的若干特性，因为这将决定使用哪几种类型守卫来区分枚举既是可行的，又是安全的。
   特性 1：枚举和其他任何枚举、类型都不可比较，除了数字枚举可以与数字类型比较之外；
   特性 2：数字枚举极其不稳定。
   熟悉了这些特性后，得出一个结论：最佳实践时，我们永远不要拿枚举和除了自身之外的任何枚举、类型进行比较。 */
  {
    enum A {
      one, two
    }
    enum B {
      one, two
    }
    const cpWithNumber = (param: A) => {
      if (param === 1) { // bad
        return param;
      }
    }
    const cpWithOtherEnum = (param: A) => {
      if (param === B.two as unknown as A) { // ALERT bad
        return param;
      }
    }
    const cpWithSelf = (param: A) => {
      if (param === A.two) { // good
        return param;
      }
    }
  }
}
