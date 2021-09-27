/* 我们平时都是基于promise来封装异步请求的，这里也主要是针对异步请求来展开。
串行：一个异步请求完了之后在进行下一个请求
并行：多个异步请求同时进行
通过定义一些promise实例来具体演示串行/并行。 */
// 串行
var p = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("1000");
      resolve();
    }, 1000);
  });
};
var p1 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("2000");
      resolve();
    }, 2000);
  });
};
var p2 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("3000");
      resolve();
    }, 3000);
  });
};

p()
  .then(() => {
    return p1();
  })
  .then(() => {
    return p2();
  })
  .then(() => {
    console.log("end");
  });

/* 并行
通常，我们在需要保证代码在多个异步处理之后执行，会用到： */
