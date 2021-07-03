{
  /* 类型断言（Type Assertion）
  TypeScript 类型检测无法做到绝对智能，毕竟程序不能像人一样思考。有时会碰到我们比 TypeScript 更清楚实际类型的情况，比如下面的例子： */
  const arrayNumber11: number[] = [1, 2, 3, 4];

  const greaterThan12: number = arrayNumber11.find(num => num > 2); // 提示 ts(2322)
  console.log(greaterThan12)

  const arrayNumber21: number[] = [1, 2, 3, 4];

  const greaterThan22: number = arrayNumber21.find(num => num > 2) as number;
  console.log(greaterThan22)
}