// 不可枚举属性getFoo
const obj = {
  name: 'hsq',
  age:18
}
let myObj = Object.create(null, {
  getFoo: {
    value: function () { return this.foo; },
    writable: false,
    enumerable: true,
    configurable: false
  },
  id: {
    value: '0001',
    writable:false
  },
  

});
Object.setPrototypeOf(myObj.getFoo,null)
console.log(myObj);
// {
//   firstname: 'h',
//   lastname:'sq'
// }
// console.log(myObj.id);
const deses = Object.getOwnPropertyDescriptors(myObj);
// console.log(deses);
const des = Object.getOwnPropertyDescriptor(myObj,'id');
// console.log(des);

for (item in myObj) {
  // console.log(item);
}