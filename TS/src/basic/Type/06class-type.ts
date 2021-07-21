/* 继承
在 TypeScript 中，使用 extends 关键字就能很方便地定义类继承的抽象模式，如下代码所示： */
{

  class Animal {
    type = 'Animal';
    say(name: string) {
      console.log(`I'm ${name}!`);
    }
  }

  // class Dog extends Animal {
  //   bark() {
  //     console.log('Woof! Woof!');
  //   }
  // }
  // const dog = new Dog();
  // dog.bark(); // => 'Woof! Woof!'
  // dog.say('Q'); // => I'm Q!
  // console.log(dog.type); // => Animal

  /* 面的例子展示了类最基本的继承用法。比如第 8 ～12 行定义的Dog是派生类，它派生自第 1～6 行定义的Animal基类，此时Dog实例继承了基类Animal的属性和方法。因此，在第 15～17 行我们可以看到，实例 dog 支持 bark、say、type 等属性和方法。
  说明：派生类通常被称作子类，基类也被称作超类（或者父类）。
  细心的你可能发现了，这里的 Dog 基类与第一个例子中的类相比，少了一个构造函数。这是因为派生类如果包含一个构造函数，则必须在构造函数中调用 super() 方法，这是 TypeScript 强制执行的一条重要规则。 */
  {
    class Dog extends Animal {
      name: string;
      constructor(name: string) { // ts(2377) Constructors for derived classes must contain a 'super' call.
        super();
        this.name = name;
      }

      bark() {
        console.log('Woof! Woof!');
      }
    }
    const dog1 = new Dog('wangcai')
  }
}