/* 通过泛型，我们可以约束函数参数和返回值的类型关系。举一个我们比较熟悉的实际场景 React Hooks useState 为例，
如下示例中，第 2 行 return 的元组（因为 useState 返回的是长度为 2、元素类型固定的数组）的第一个元素的类型就是泛型 S，
第二个函数类型元素的参数类型也是泛型 S。 */
{
  function useState<S>(state: S, initialValue?: S) {
    return [state, (s: S) => void 0] as unknown as [S, (s: S) => void];
  }
  /* 泛型不仅可以约束函数整个参数的类型，还可以约束参数属性、成员的类型，比如参数的类型可以是数组、对象，如下示例： */
  function reflectArray<P>(param: P[]) {
    return param;
  }
  const reflectArr = reflectArray([1, '1']); // reflectArr 是 (string | number)[]
}