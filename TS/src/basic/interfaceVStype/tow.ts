/* 在上述代码中，乍看上去有点像是在定义变量，只不过这里我们把 let 、const 、var 关键字换成了 type 罢了。
此外，针对接口类型无法覆盖的场景，比如组合类型、交叉类型（详见 08 讲），我们只能使用类型别名来接收，如下代码所示： */
{
  {
    /** 联合 */
    type MixedType = string | number;
    /** 交叉 */
    type IntersectionType = { id: number; name: string; } & { age: number; name: string };
    /** 提取接口属性类型 */
    type AgeType = ProgramLanguage['age'];
    const person: IntersectionType = {
      id: 10086,
      name: 'huang',
      age: 18
    }
  }
}
// 个人理解，交叉类型，可以以组合的方式实现继承
/* 合并接口类型
联合类型真正的用武之地就是将多个接口类型合并成一个类型，从而实现等同接口继承的效果，也就是所谓的合并接口类型，如下代码所示： */
{
  type IntersectionType = { id: number; name: string; }
    & { age: number };
  const mixed: IntersectionType = {
    id: 1,
    name: 'name',
    age: 18
  }
  /* 在上面示例中，我们首先为 IPerson 和 IWorker 类型定义了不同的成员，然后通过 & 运算符定义了 IStaff 交叉类型，
  所以该类型同时拥有 IPerson 和 IWorker 这两种类型的成员。那么现在问题来了，假设在合并多个类型的过程中，刚好出现某些类型
  存在相同的成员，但对应的类型又不一致，比如： */
  {
    interface X {
      c: string;
      d: string;
    }
    interface Y {
      c: number;
      e: string
    }
    type XY = X & Y;
    type YX = Y & X;
    let p: XY = {
      // c: 'huang',  // 不能将类型“string”分配给类型“never”。ts(2322)
      c:
        d: 'huang',
      e: 'sq'
    }
    let q: YX;
    /* 为什么接口 X 和接口 Y 混入后，成员 c 的类型会变成 never 呢？这是因为混入后成员 c 的类型为 string & number，
    即成员 c 的类型既是 string 类型又是 number 类型。很明显这种类型是不存在的，所以混入后成员 c 的类型为 never。
    在上面示例中，刚好接口 X 和接口 Y 中内部成员 c 的类型都是基本数据类型，那么如果是非基本数据类型的话，又会是什么情形。
    我们来看个具体的例子： */
    {
      interface D { d: boolean; }
      interface E { e: string; }
      interface F { f: number; }
      interface A { x: D; }
      interface B { x: E; }
      interface C { x: F; }
      type ABC = A & B & C;
      let abc: ABC = {
        x: {
          d: true,
          e: 'semlinker',
          f: 666
        }
      };
      console.log('abc:', abc);
    }
  }
}
/* 二、使用示例
在实际项目开发过程中，我们经常需要开发一些功能函数，为了保证函数的灵活性和可复用性，这些函数往往会定义一些输入参数，
而这些参数根据是否必填，又可分为必填参数和可选参数。当必填参数和可选参数有大部分参数是相同的情况下，我们就可以利用
TypeScript 交叉类型来解决复用问题。好了，废话不多说，直接看个示例： */
{
  {
    export interface ParseFn<T> {
      url: string;
      params: string;
    }
    // ArgBase 接口
    export interface ArgBase<T> {
      name?: string;
      description?: string;
      hidden?: boolean;
      parse: ParseFn<T>;
      default?: T | (() => T);
      input?: string;
      options?: string[];
    }
    // RequiredArg 接口
    export type RequiredArg<T> = ArgBase<T> & {
      required: true;
      value: T;
    }
    // OptionalArg 接口
    export type OptionalArg<T> = ArgBase<T> & {
      required: false;
      value?: T;
    }
    const objOptionalArg: OptionalArg<string[]> = {
      name:'huangsq',
      parse: {
        url: 'www.baidu.com',
        params:'?id=5',
      },
      required: false,
      value: ['huang', 'sq', 'age'],

    }
  }
  /* 我们大多是在混入（mixins）或其它不适合典型面向对象模型的地方看到交叉类型的使用。 （在JavaScript里发生这种情况的场合很多！） 下面是如何创建混入的一个简单例子： */
  {
    function extend<T, U>(first: T, second: U): T & U {
      let result = <T & U>{};
      for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
      }
      for (let id in second) {
        if (!result.hasOwnProperty(id)) {
          (<any>result)[id] = (<any>second)[id];
        }
      }
      return result;
    }
    class Person {
      constructor(public name: string) { }
    }
    interface Loggable {
      log(): void;
    }
    class ConsoleLogger implements Loggable {
      log() {
        // ...
      }
    }
    var jim = extend(new Person("Jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();
  }
}