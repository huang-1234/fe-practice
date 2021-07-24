class MyMath {
  static sayHi() {
  console.log('hello world')
}
  static readonly   PI = 3.14159265358979343846
  static readonly   E = 2.718281828
  static readonly   LN2 = 0.693 // 2 的自然对数，约等于 0.693。
  static readonly   SQRT1_2 = 0.707  // 二分之一 ½ 的平方根，同时也是 2 的平方根的倒数 12，约等于 0.707。

  static abs(x: number) {
    if(x>=0) return x
    else return -x
  }
}

console.log(Math.PI)