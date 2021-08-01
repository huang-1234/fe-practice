/* 另外，我们还需要注意类兼容性特性：实际上，在判断两个类是否兼容时，我们可以完全忽略其构造函数及静态属性和方法是否兼容，
只需要比较类实例的属性和方法是否兼容即可。如果两个类包含私有、受保护的属性和方法，则仅当这些属性和方法源自同一个类，它们才兼容。 */
{
  class C1 {
    name = '1';
    private id = 1;
    protected age = 30;
  }
  class C2 {
    name = '2';
    private id = 1;
    protected age = 30;
  }
  let InstC1: C1;
  let InstC2: C2;
  InstC1 = InstC2; // ts(2322)
  InstC2 = InstC1; // ts(2322)
}
{
  class CPar {
    private id = 1;
    protected age = 30;
  }
  class C1 extends CPar {
    constructor(inital: string) {
      super();
    }
    name = '1';
    static gender = 'man';
  }
  class C2 extends CPar {
    constructor(inital: number) {
      super();
    }
    name = '2';
    static gender = 'woman';
  }
  let InstC1: C1;
  let InstC2: C2;
  InstC1 = InstC2; // ok
  InstC2 = InstC1; // ok
}
