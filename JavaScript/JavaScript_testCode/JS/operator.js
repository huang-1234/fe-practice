let a = new Object();
console.log(true && a); // {} 输出一个对象
console.log(a && true); // true 输出true
console.log(false && a); //false 只要有一个false，就输出false