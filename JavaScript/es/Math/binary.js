console.log(21.999999 >> 1);
console.log(4 >>> 1);
console.log(-1 >>> 0)// 上面代码表示，-1作为32位整数时，内部的储存形式使用无符号整数格式解读

// 10
// 2
// 4294967295 值为 4294967295（即(2^32)-1