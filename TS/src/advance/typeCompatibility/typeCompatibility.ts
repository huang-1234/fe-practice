/* （1）any
在 03 讲中，我们提及了万金油 any 类型可以赋值给除了 never 之外的任意其他类型，反过来其他类型也可以赋值给 any。也就是说 any 可以兼容除 never 之外所有的类型，同时也可以被所有的类型兼容（即 any 既是 bottom type，也是 top type）。因为 any 太特殊，这里我就不举例子了。
 再次强调：Any is 魔鬼，我们一定要慎用、少用。*/
/*（2）never
never 的特性是可以赋值给任何其他类型，但反过来不能被其他任何类型（包括 any 在内）赋值（即 never 是 bottom type）。
比如以下示例中的第 5~7 行，我们可以把 never 赋值给 number、函数、对象类型。 */
/* {
  {
    let never: never = (() => {
      throw Error('never');
    })();
    let a: number = never; // ok
    let b: () => any = never; // ok
    let c: {} = never; // ok
  }
  // （3）unknown
  //   unknown 的特性和 never 的特性几乎反过来，即我们不能把 unknown 赋值给除了 any 之外任何其他类型，反过来其他类型都可以赋值给
  //   unknown（即 unknown 是 top type）。比如以下示例中的第 3~5 行提示了一个 ts(2322) unknown 类型不能赋值给其他任何类型的错误。
  {
    let unknownValue: unknown;
    const a: number = unknownValue; // ts(2322)
    const b: () => any = unknownValue; // ts(2322)
    const c: {} = unknownValue; // ts(2322)
    console.log(unknownValue, a, b, c)
  }
} */
/* 类型兼容性
除了前边提到的所有特例，TypeScript 中类型的兼容性都是基于结构化子类型的一般原则进行判定的。
下面我们从结构化类型和子类型这两方面了解一下一般原则。 */
{
  const one = 1;
  let num: number = one; // ok
  interface IPar {
    name: string;
  }
  interface IChild extends IPar {
    id: number;
  }
  let Par: IPar;
  let Child: IChild;
  Par = Child; // ok
  class CPar {
    cname = '';
  }
  class CChild extends CPar {
    cid = 1;
  }
  let ParInst: CPar;
  let ChildInst: CChild;
  ParInst = ChildInst; // ok
  let mixedNum: 1 | 2 | 3 = one; // ok
}
