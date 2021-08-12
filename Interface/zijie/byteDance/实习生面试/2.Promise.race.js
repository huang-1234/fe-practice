/**
 * 二、Promise.race()
 * 核心思路：
 * 谁先决议那么就返回谁，所以将all的计数器和逻辑判断全部去除掉就可以了。
 */

Promise.race = function (iterators) {
  return new Promise((resolve, reject) => {
    for (const p of iterators) {
      Promise.resolve(p)
        .then((res) => {
          resolve(res)
        })
        .catch(e => {
          reject(e)
        })
    }
  })

}
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value);
  // Both resolve, but promise2 is faster
});

// Promise.race = function (promises) {
//   let res = null;
//   return new Promsie((resolve, reject) => {
//     res = promises.some((item) => {
//       Promise.resolve(item).then((data) => {
//         resovle(data)
//       })
//     })
//     return res
//   })
// }