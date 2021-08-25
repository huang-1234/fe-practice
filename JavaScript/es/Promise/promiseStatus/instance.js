const p1 = Promise.reject(25);
setTimeout(console.log, 0,p1);
// console.log(p1);