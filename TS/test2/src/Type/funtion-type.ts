/* 需要注意的是，这里的=>与 ES6 中箭头函数的=>有所不同。TypeScript 函数类型中的=>用来表示函数的定义，其左侧是函数的参数类型，右侧是函数的返回值类型；而 ES6 中的=>是函数的实现。
如下示例中，我们定义了一个函数类型（这里我们使用了类型别名 type，详见 07 讲），并且使用箭头函数实现了这个类型。*/
{
  type Adder = (a: number, b: number) => number; // TypeScript 函数类型定义
  const add: Adder = (a, b) => a + b; // ES6 箭头函数
}
/* 可缺省和可推断的返回值类型
幸运的是，函数返回值的类型可以在 TypeScript 中被推断出来，即可缺省。
函数内是一个相对独立的上下文环境，我们可以根据入参对值加工计算，并返回新的值。从类型层面看，我们也可以通过类型推断（回想一下 04 讲中的类型推断、上下文类型推断）加工计算入参的类型，并返回新的类型 */
{
  function computeTypes(one: string, two: number) {
    const nums = [two];
    const strs = [one]
    return {
      nums,
      strs
    } // 返回 { nums: number[]; strs: string[] } 的类型
  }
  /* 请记住：这是一个很重要也很有意思的特性，函数返回值的类型推断结合泛型（我们会在 10 讲中详细介绍）
  可以实现特别复杂的类型计算（本质是复杂的类型推断，这里称之为计算是为了表明其复杂性），
  比如 Redux Model 中 State、Reducer、Effect 类型的关联。 */
}
/* Generator 函数的返回值
ES6 中新增的 Generator 函数在 TypeScript 中也有对应的类型定义。
Generator 函数返回的是一个 Iterator 迭代器对象，我们可以使用 Generator 的同名接口泛型或者 Iterator 的同名接口泛型
（在 10 讲会介绍）表示返回值的类型（Generator 类型继承了 Iterator 类型） */
{
  type AnyType = boolean;
  type AnyReturnType = string;
  type AnyNextType = number;
  function* gen(): Generator<AnyType, AnyReturnType, AnyNextType> {
    const nextValue = yield true; // nextValue 类型是 number，yield 后必须是 boolean 类型
    return `${nextValue}`; // 必须返回 string 类型
  }
}
/* 可选参数和默认参数
在实际工作中，我们可能经常碰到函数参数可传可不传的情况，当然 TypeScript 也支持这种函数类型表达，如下代码所示： */
{
  function introduction(name: string, age: number | string = 18) {
    console.log(`hello iam ${name} ,now iam ${age} years old.`)
  }
  introduction('Code Artist')
}
/* 剩余参数
在 ES6 中，JavaScript 支持函数参数的剩余参数，它可以把多个参数收集到一个变量中。同样，在TypeScript 中也支持这样的参数类型定义，如下代码所示：
复制代码
 */
{
  function sum(...nums: number[]) {
    return nums.reduce((a, b) => a + b, 0);
  }
  sum(1, 2); // => 3
  sum(1, 2, 3); // => 6
  // sum(1, '2'); // ts(2345) Argument of type 'string' is not assignable to parameter of type 'number'
}
/* this
众所周知，在 JavaScript 中，函数 this 的指向一直是一个令人头痛的问题。因为 this 的值需要等到函数被调用时才能被确定，
更别说通过一些方法还可以改变 this 的指向。也就是说 this 的类型不固定，它取决于执行时的上下文。
但是，使用了 TypeScript 后，我们就不用担心这个问题了。通过指定 this 的类型（严格模式下，必须显式指定 this 的类型），
当我们错误使用了 this，TypeScript 就会提示我们，如下代码所示： */
{
  {
    function say() {
      console.log(this.name); // ts(2683) 'this' implicitly has type 'any' because it does not have a type annotation
    }
    say();
  }
  /* 在上述代码中，如果我们直接调用 say 函数，this 应该指向全局 window 或 global（Node 中）。但是，在 strict 模式下的
  TypeScript 中，它会提示 this 的类型是 any，此时就需要我们手动显式指定类型了。
那么，在 TypeScript 中，我们应该如何声明 this 的类型呢？
在 TypeScript 中，我们只需要在函数的第一个参数中声明 this 指代的对象（即函数被调用的方式）即可，比如最简单的作为对象的方法的
 this 指向，如下代码所示： */
  {
    function say2(this: Window, name: string) {
      console.log(this.name);
    }
    window.say2 = say2;
    window.say2('hi');
    const obj = {
      say2
    };
    console.log(this)
    // obj.say2('hi'); // ts(2684) The 'this' context of type '{ say: (this: Window, name: string) => void; }'
    // say2('hi'); // ts(2684) The 'this' context of type '{ say: (this: Window, name: string) => void; }'
    // is not assignable to method's 'this' of type 'Window'.
  }
  /* 此时，我们可以通过调用 window.say() 来避免这个错误，这也是一个安全的设计。因为在 JavaScript 的严格模式下，
  全局作用域函数中 this 的指向是 undefined。 */
  /* 同样，我们也可以显式限定类（class 类的介绍详见 06 讲）函数属性中的 this 类型，TypeScript 也能检查出错误的使用方式，如下代码所示： */
  {
    class Component {
      onClick(this: Component) { }
    }
    const component = new Component();
    interface UI {
      addClickListener(onClick: (this: void) => void): void;
    }
    const ui: UI = {
      addClickListener() { }
    };
    ui.addClickListener(new Component().onClick); // ts(2345)
    /* 在链式调用风格的库中，使用 this 也可以很方便地表达出其类型 */
    class Container {
      private val: number;
      constructor(val: number) {
        this.val = val;
      }
      map(
        cb: (x: number) => number
      ): this {
        this.val = cb(this.val);
        return this;
      }
      log(): this {
        console.log(this.val);
        return this;
      }
    }
    const instance = new Container(1)
      .map((x) => x + 1)
      .log() // => 2
      .map((x) => x * 3)
      .log(); // => 6
  }
}
/* 函数重载
JavaScript 是一门动态语言，针对同一个函数，它可以有多种不同类型的参数与返回值，这就是函数的多态。
而在 TypeScript 中，也可以相应地表达不同类型的参数和返回值的函数，如下代码所示： */
{
  {
    function convert(x: string | number | null): string | number | -1 {
      if (typeof x === 'string') {
        return Number(x);
      }
      if (typeof x === 'number') {
        return String(x);
      }
      return -1;
    }
    const x1 = convert('1'); // => string | number
    const x2 = convert(1); // => string | number
    const x3 = convert(null); // => string | number
  }
  /* 在上述代码中，我们把 convert 函数的 string 类型的值转换为 number 类型，number 类型转换为 string 类型，
  而将 null 类型转换为数字 -1。此时， x1、x2、x3 的返回值类型都会被推断成 string | number 。
  那么，有没有一种办法可以更精确地描述参数与返回值类型约束关系的函数类型呢？有，这就是函数重载（Function Overload），
  如下示例中 1~3 行定义了三种各不相同的函数类型列表，并描述了不同的参数类型对应不同的返回值类型，
  而从第 4 行开始才是函数的实现。*/
  {
    function convert(x: string): number;
    function convert(x: number): string;
    function convert(x: null): -1;
    function convert(x: string | number | null): any {
      if (typeof x === 'string') {
        return Number(x);
      }
      if (typeof x === 'number') {
        return String(x);
      }
      return -1;
    }
    const x1 = convert('1'); // => number
    const x2 = convert(1); // => string
    const x3 = convert(null); // -1
  }
  /* 为了方便你理解这部分内容， 下面我们通过以下一个示例进行具体说明。 */
  {
    interface P1 {
      name: string;
    }
    interface P2 extends P1 {
      age: number;
    }
    function convert(x: P1): number;
    function convert(x: P2): string;
    function convert(x: P1 | P2): any { }
    const x1 = convert({ name: "" } as P1); // => number
    const x2 = convert({ name: "", age: 18 } as P2); // number
  }
  /* 类型谓词（is）
    在 TypeScript 中，函数还支持另外一种特殊的类型描述，如下示例 ： */
  {
    function isString(s): s is string { // 类型谓词
      return typeof s === 'string';
    }
    function isNumber(n: number) {
      return typeof n === 'number';
    }
    function operator(x: unknown) {
      if (isString(x)) { // ok x 类型缩小为 string
      }
      if (isNumber(x)) { // ts(2345) unknown 不能赋值给 number
      }
    }
  }
}