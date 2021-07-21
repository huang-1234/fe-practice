{
  class Memory<S> {
    store: S;
    constructor(store: S) {
      this.store = store;
    }
    set(store: S) {
      this.store = store;
    }
    get() {
      return this.store;
    }
  }
  const numMemory = new Memory<number>(1); // <number> 可缺省
  const getNumMemory = numMemory.get(); // 类型是 number
  console.log(getNumMemory)
  numMemory.set(2); // 只能写入 number 类型
  const strMemory = new Memory(''); // 缺省 <string>
  const getStrMemory = strMemory.get(); // 类型是 string
  strMemory.set('string'); // 只能写入 string 类型
}