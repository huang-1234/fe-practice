/* 合并联合类型
另外，我们可以合并联合类型为一个交叉类型，这个交叉类型需要同时满足不同的联合类型限制，也就是提取了所有联合类型的相同类型成员。
这里，我们也可以将合并联合类型理解为求交集。
在如下示例中，两个联合类型交叉出来的类型 IntersectionUnion 其实等价于 'em' | 'rem'，所以我们只能把 'em' 或者 'rem' 字符串赋值给
 IntersectionUnion 类型的变量。 */
{
  type UnionA = 'px' | 'em' | 'rem' | '%';
  type UnionB = 'vh' | 'em' | 'rem' | 'pt';
// 取既属于UnionA的类型，同时也属于UnionB的属性，如果两者没有相同的属性，则取得的类型为never
  type IntersectionUnion = UnionA & UnionB;
  const intersectionA: IntersectionUnion = 'em'; // ok
  const intersectionB: IntersectionUnion = 'rem'; // ok
  const intersectionC: IntersectionUnion = 'px'; // 不能将类型“"pt"”分配给类型“"em" | "rem"”。ts(2322)
  const intersectionD: IntersectionUnion = 'pt'; // ts(2322)
  type myString = string;
  type myNumber = number;
  type myType = myString & myNumber
  /* 联合、交叉组合
  在前面的示例中，我们把一些联合、交叉类型抽离成了类型别名，再把它作为原子类型进行进一步的联合、交叉。其实，联合、交叉类型本身就可以直接组合使用，这就涉及 |、& 操作符的优先级问题。实际上，联合、交叉运算符不仅在行为上表现一致，还在运算的优先级和 JavaScript 的逻辑或 ||、逻辑与 && 运算符上表现一致 。
  联合操作符 | 的优先级低于交叉操作符 &，同样，我们可以通过使用小括弧 () 来调整操作符的优先级。 */
  {
    type UnionIntersectionA = { id: number; } & { name: string; } | { id: string; } & { name: number; }; // 交叉操作符优先级高于联合操作符
    type UnionIntersectionB = ('px' | 'em' | 'rem' | '%') | ('vh' | 'em' | 'rem' | 'pt'); // 调整优先级
    const objUnionIntersectionA: UnionIntersectionA={
      // id: 10086,       // ok
      // name:'huangsq',  // ok
      name: 10086,        // ok
      id:'huangsq',       // ok
    }
    type BorderColor1 = 'black' | 'red' | 'green' | 'yellow' | 'blue' | string; // 类型缩减成 string
    /* 在上述代码中，我们希望 IDE 能自动提示显示注解的字符串字面量，但是因为类型被缩减成 string，所有的字符串字面量 black、red 等都无法自动提示出来了。
    不要慌，TypeScript 官方其实还提供了一个黑魔法，它可以让类型缩减被控制。如下代码所示，我们只需要给父类型添加“& {}”即可。 */
    type BorderColor2 = 'black' | 'red' | 'green' | 'yellow' | 'blue' | string & {}; // 字面类型都被保留
    const color:BorderColor2= 'black'
  }
}