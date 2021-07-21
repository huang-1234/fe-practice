/* 最近几年，作为一名前端面试官，每次提问候选人时，我会经常提问 TypeScirpt 的这两个知识点：一个是如何使用 TypeScript
实现与 call（或者 apply） 功能类似的函数，重在考察候选人对泛型的应用；另一个是什么是泛型？泛型的作用是什么？
重在考察候选人对泛型的理解。
如今，TypeScript 可谓是前端必须掌握的基本技能之一，而泛型则是 TypeScript 中非常基本、非常精华（有挑战）的特性，
属于 TypeScript 入门（重在基础知识）和进阶（重在应用实践）之间衔接和升华的内容。因此，我把泛型的相关知识放在了 10 讲进行讲解。 */
/* 什么是泛型？
关于什么是泛型这个问题不是太好回答，比如在面试中，如果有候选人反过来问我这个问题，可能我也给不出一个特别标准的答案。
不过，我们可以借用 Java 中泛型的释义来回答这个问题：泛型指的是类型参数化，即将原来某种具体的类型进行参数化。和定义函数参数一样，
我们可以给泛型定义若干个类型参数，并在调用时给泛型传入明确的类型参数。设计泛型的目的在于有效约束类型成员之间的关系，
比如函数参数和返回值、类或者接口成员和方法之间的关系。 */
/* 泛型类型参数
泛型最常用的场景是用来约束函数参数的类型，我们可以给函数定义若干个被调用时才会传入明确类型的参数。
比如以下定义的一个 reflect 函数 ，它可以接收一个任意类型的参数，并原封不动地返回参数的值和类型，那我们该如何描述这个函数呢？
好像得用上 unknown 了（其实我想说的是 any，因为 any is 魔鬼，所以还是用 unknown 吧）。 */
{
  function reflect(param: unknown) {
    return param;
  }
  const str = reflect('string'); // str 类型是 unknown
  const num = reflect(1); // num 类型 unknown
  /* 此时，reflect 函数虽然可以接收一个任意类型的参数并原封不动地返回参数的值，不过返回值类型不符合我们的预期。
  因为我们希望返回值类型与入参类型一一对应（比如 number 对 number、string 对 string），而不是无论入参是什么类型，
  返回值一律是 unknown。
  此时，泛型正好可以满足这样的诉求，那如何定义一个泛型参数呢？首先，我们把参数 param 的类型定义为一个（类型层面的）
  参数、变量，而不是一个明确的类型，等到函数调用时再传入明确的类型。 */
  {
    function reflectWithGenericity<P>(param: P) : P{
      return param
    }
    const number1 = 25;
    let genericityValue1 = reflectWithGenericity<number>(number1)
    let genericityValue2 = reflectWithGenericity<string>('huang')
    genericityValue1 = 15;
    console.log(genericityValue1)
  }
}
/* 泛型不仅可以约束函数整个参数的类型，还可以约束参数属性、成员的类型，比如参数的类型可以是数组、对象，如下示例： */
{
  function reflectArray<P>(param: P[]) {
    return param;
  }
  const reflectArr = reflectArray([1, '1',new Array(25)]); // reflectArr 是 (string | number)[]
  /* 通过泛型，我们可以约束函数参数和返回值的类型关系。举一个我们比较熟悉的实际场景 React Hooks useState 为例，
  如下示例中，第 2 行 return 的元组（因为 useState 返回的是长度为 2、元素类型固定的数组）的第一个元素的类型就是泛型 S，
  第二个函数类型元素的参数类型也是泛型 S。 */
  function useState<S>(state: S, initialValue?: S) {
    return [state, (s: S) => void 0] as unknown as [S, (s: S) => void];
  }
  // 注意：函数的泛型入参必须和参数/参数成员建立有效的约束关系才有实际意义。 比如在下面示例中，我们定义了一个仅约束返回值类型的泛型，
  // 它是没有任何意义的。
  function uselessGenerics<P>(): P {
    return void 0 as unknown as P;
  }
  // 可以给函数定义任何个数的泛型入参，如下代码所示：
  function reflectExtraParams<P, Q>(p1: P, p2: Q): [P, Q] {
    return [p1, p2];
  }
}
/* 泛型类
在类的定义中，我们还可以使用泛型用来约束构造函数、属性、方法的类型，如下代码所示： */
{
  class Memory<S> {
    store: S;
    constructor(store: S) {
      this.store = store;
    }
    set(store: S) {
      this.store = store;
    }
    get() {
      return this.store;
    }
  }
  const numMemory = new Memory<number>(1); // <number> 可缺省
  const getNumMemory = numMemory.get(); // 类型是 number
  console.log(getNumMemory)
  numMemory.set(2); // 只能写入 number 类型
  const strMemory = new Memory(''); // 缺省 <string>
  const getStrMemory = strMemory.get(); // 类型是 string
  strMemory.set('string'); // 只能写入 string 类型
}
/* React组件
小贴士：对于 React 开发者而言，组件也支持泛型，如下代码所示。 */
// componnetUseGenericity.tsx