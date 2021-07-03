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
  