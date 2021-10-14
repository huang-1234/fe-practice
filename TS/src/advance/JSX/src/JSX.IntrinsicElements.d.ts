/* 固有元素使用特殊的接口JSX.IntrinsicElements来查找。 默认地，如果这个接口没有指定，会全部通过，不对固有元素进行类型检查。 然而，如果这个接口存在，那么固有元素的名字需要在JSX.IntrinsicElements接口的属性里查找。  */
declare namespace JSX {
  interface IntrinsicElements {
    foo: any
  }
}
declare namespace JSX {
  interface IntrinsicElements {
      [elemName: string]: any;
  }
}

// <foo />; / / 正确
//   < bar />; // 错误