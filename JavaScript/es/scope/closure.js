

// //setTimeout
// for (var i = 1;i < 5;i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// 解决方法有 3 种

// 第一种，使用`立即执行函数`方式
for (var i = 1;i < 5;i++) {
  (function(j){
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
}

// // 第二种，使用 ES6 的`let`
// for (let i = 1;i < 5;i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// // 第三种，使用`setTimeout的第三个参数`
// for (var i = 1;i < 5;i++) {
//   setTimeout(
//     function timer(j) {
//       console.log(j);
//     },
//     i * 1000,
//     i
//   );
// }
