let a = 9;
b = 8;
// console.log(global.a, global.b);
// console.log(window.a, window.b);

console.log(Object.getOwnPropertyDescriptor(global, 'a'));
console.log(Object.getOwnPropertyDescriptor(global, 'b'));