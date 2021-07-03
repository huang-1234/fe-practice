{
  let str: string = 'this is string';
  let num: number = 1;
  let bool: boolean = true;
}
{
  const str: string = 'this is string';
  const num: number = 1;
  const bool: boolean = true;
}
/* 看着上面的示例，可能你在 02 讲中已经嘀咕了：定义基础类型的变量都需要写明类型注解，TypeScript 太麻烦了吧？在示例中，
使用 let 定义变量时，我们写明类型注解也就罢了，毕竟值可能会被改变。可是，使用 const 常量时还需要写明类型注解，那可真的很麻烦。
实际上，TypeScript 早就考虑到了这么简单而明显的问题。
在很多情况下，TypeScript 会根据上下文环境自动推断出变量的类型，无须我们再写明类型注解。因此，上面的示例可以简化为如下所示内容： */
{
  let str = 'this is string'; // 等价
  let num = 1; // 等价
  let bool = true; // 等价
}
{
  const str = 'this is string'; // 不等价
  const num = 1; // 不等价
  const bool = true; // 不等价
}
{
  /* 实际上，定义单个的字面量类型并没有太大的用处，它真正的应用场景是可以把多个字面量类型组合成一个联合类型（详见 08 讲），
  用来描述拥有明确成员的实用的集合。
  如下代码所示，我们使用字面量联合类型描述了一个明确、可 'up' 可 'down' 的集合，这样就能清楚地知道需要的数据结构了。 */
  type Direction = 'up' | 'down';
  function move(dir: Direction) {
    // ...
  }
  move('up'); // ok
  move('right'); // ts(2345) Argument of type '"right"' is not assignable to parameter of type 'Direction'
}
/* Literal Widening
所有通过 let 或 var 定义的变量、函数的形参、对象的非只读属性，如果满足指定了初始值且未显式添加类型注解的条件，
那么它们推断出来的类型就是指定的初始值字面量类型拓宽后的类型，这就是字面量类型拓宽。*/
{
  // 字符串字面量的示例来理解一下字面量类型拓宽
  {
    let str = 'this is string'; // 类型是 string
    let strFun = (str = 'this is string') => str; // 类型是 (str?: string) => string;
    const specifiedStr = 'this is string'; // 类型是 'this is string'
    let str2 = specifiedStr; // 类型是 'string'
    let strFun2 = (str = specifiedStr) => str; // 类型是 (str?: string) => string;
  }
  /* Type Widening
比如对 null 和 undefined 的类型进行拓宽，通过 let、var 定义的变量如果满足未显式声明类型注解且被赋予了
null 或 undefined 值，则推断出这些变量的类型是 any： */
  {
    let x = null; // 类型拓宽成 any
    let y = undefined; // 类型拓宽成 any
    /** -----分界线------- */
    const z = null; // 类型是 null
    /** -----分界线------- */
    let anyFun = (param = null) => param; // 形参类型是 null
    let z2 = z; // 类型是 null
    let x2 = x; // 类型是 null
    let y2 = y; // 类型是 undefined
  }
}
/* Type Narrowing */
{
  /* 在 TypeScript 中，我们可以通过某些操作将变量的类型由一个较为宽泛的集合缩小到相对较小、较明确的集合，这就是 "Type Narrowing"。 */
  {
    let func = (anything: any) => {
      if (typeof anything === 'string') {
        return anything; // 类型是 string 
      } else if (typeof anything === 'number') {
        return anything; // 类型是 number
      }
      return null;
    };
  }
  /* 当然，我们也可以通过字面量类型等值判断（===）
  或其他控制流语句（包括但不限于 if、三目运算符、switch 分支）将联合类型收敛为更具体的类型 */
  {
    type Goods = 'pen' | 'pencil' |'ruler';
    const getPenCost = (item: 'pen') => 2;
    const getPencilCost = (item: 'pencil') => 4;
    const getRulerCost = (item: 'ruler') => 6;
    const getCost = (item: Goods) =>  {
      if (item === 'pen') {
        return getPenCost(item); // item => 'pen'
      } else if (item === 'pencil') {
        return getPencilCost(item); // item => 'pencil'
      } else {
        return getRulerCost(item); // item => 'ruler'
      }
    }
  }
}