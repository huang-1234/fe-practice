const { promises } = require('../generatePromise');

function selfAll(promises, limit) {
  let [cnt, promiseLen] = [0, promises.length];
  const result = new Array(promiseLen);

  return new Promise((resolve, reject) => {
    for (let i = 0;i < promiseLen;i++) {
      const req = promises[i];
      req.then(res => {
        result[i] = res;
        if (cnt === promiseLen - 1) {
          resolve(result);
        }
      }).catch(err => {
        result[i] = err;
        reject(err);
      }).finally(() => {
        cnt++;
      })
    }
  });
}

// Object.defineProperty(Promise, 'selfAll', {
//   writable: false,
//   value: function(promises) {
//     let [cnt, promiseLen] = [0, promises.length];
//     const result = new Array(promiseLen);

//     return new Promise((resolve, reject) => {
//       for (let i = 0;i < promiseLen;i++) {
//         const req = promises[i];
//         req.then(res => {
//           result[i] = res;
//           if (cnt === promiseLen - 1) {
//             resolve(result);
//           }
//         }).catch(err => {
//           result[i] = err;
//           reject(err);
//         }).finally(() => {
//           cnt++;
//         })
//       }
//     });
//   }
// })

selfAll(promises, 3).then(resAll => {
  console.log('resAll', resAll)
}).catch(err => {
  console.error(err);
}).finally(() => {
  console.log('all finally')
})