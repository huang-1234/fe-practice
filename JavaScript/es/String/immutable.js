//JS字符串的不可变性

//例1
let str = "hello";
console.log(str[1]);
str[1] = "W";
console.log(str)  //"hello"

//例2
// let str = 'abc';
// console.log(str); //abc
// str = 'red';
// console.log(str); //red