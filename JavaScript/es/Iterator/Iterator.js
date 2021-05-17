let o = {
  name: 'sq',
  age: 18,
  place: 'changsha',
  sayName() {
    console.log(`I am ${this.name}`);
  }
}

let out = o[Symbol.iterator];
console.log(out);