class UnionFind {
  constructor(size){
    this.ids = new Array(size); // 存储数据所对应的集合的编号
    const len = this.ids.length;
  }
  find(index) {
    if (index < 0 || index >= this.ids.length) throw new Error('index is out of bound');
    return this.ids[index]
  }
  getsize() {return this.ids.length;}

  unionElements(q, p) {
    const qId = this.find(q);
    const pId = this.find(p);
    if (qId === pId) return;

    for (let i = 0;i < this.ids.length;i++){
      if (pId === this.ids[i]) this.ids[i] = qId;
    }
  }
  isConnected(q,p) {
    return this.ids[q]===this.ids[p]
  }
  getItems() {
    return this.ids
  }
};

let union1 = new UnionFind(10);

union1.unionElements(1, 3)
console.log(union1.getItems());
