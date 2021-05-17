var a = 9;
b = 8;
// console.log(global.a, global.b);
// console.log(window.a, window.b);

// console.log(Object.getOwnPropertyDescriptor(global, 'a'));
// console.log(Object.getOwnPropertyDescriptor(global, 'b'));

console.log(Object.getOwnPropertyDescriptor(window, 'a'));
console.log(Object.getOwnPropertyDescriptor(window, 'b'));
// global.ab = 5;
// console.log(Object.prototypeObject.getOwnPropertyDescriptor(global, 'ab'));