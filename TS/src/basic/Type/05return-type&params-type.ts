/* 返回值类型
在 JavaScript 中，我们知道一个函数可以没有显式 return，此时函数的返回值应该是 undefined：
需要注意的是，在 TypeScript 中，如果我们显式声明函数的返回值类型为 undfined，将会得到如下所示的错误提醒。 */
{
  function fn(): undefined { // ts(2355) A function whose declared type is neither 'void' nor 'any' must return a value
    // TODO
  }
  /* 此时，正确的做法是使用 03 讲介绍的 void 类型来表示函数没有返回值的类型（这是“废柴” void 类型唯一有用的场景） */
  function fn1(): void {
  }
  fn1().doSomething(); // ts(2339) Property 'doSomething' does not exist on type 'void'.
}
/* 可缺省和可推断的返回值类型
幸运的是，函数返回值的类型可以在 TypeScript 中被推断出来，即可缺省。
函数内是一个相对独立的上下文环境，我们可以根据入参对值加工计算，并返回新的值。从类型层面看，我们也可以通过类型推断（回想一下 04 讲中的类型推断、上下文类型推断）加工计算入参的类型，并返回新的类型，示例如下： */
{
  function computeTypes(one: string = 'huang', two: number = 18) {
    const nums = [two];
    const strs = [one]
    return {
      nums,
      strs
    } // 返回 { nums: number[]; strs: string[] } 的类型
  }
  const num_str = computeTypes('huangsq', 19);
  console.log(num_str)
}
/* Generator 函数的返回值
ES6 中新增的 Generator 函数在 TypeScript 中也有对应的类型定义。
Generator 函数返回的是一个 Iterator 迭代器对象，我们可以使用 Generator 的同名接口泛型或者 Iterator 的同名接口泛型（在 10 讲会介绍）表示返回值的类型（Generator 类型继承了 Iterator 类型） */
{
  type AnyType = boolean;
  type AnyReturnType = string;
  type AnyNextType = number;
  function* gen(): Generator<AnyType, AnyReturnType, AnyNextType> {
    const nextValue = yield true; // nextValue 类型是 number，yield 后必须是 boolean 类型
    return `${nextValue}`; // 必须返回 string 类型
  }
}