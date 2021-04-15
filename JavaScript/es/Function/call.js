let p = {
  name: 'hsq',
  sex: 'male',
  sayName() {
    console.log(this.name);
  }
}
let _this;
let sayName = function () {
  console.log(this.name);
}
let fun = {
  name: 'func',
  sayHi() {
    console.log('hi');
  },
  sayName() {
    console.log(this.name);
  }
}
sayName.bind(p.this)