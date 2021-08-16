/*
// all
let wake = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time / 1000}秒后醒来`)
    }, time)
  })
}

let p1 = wake(3000)
let p2 = wake(2000)

Promise.all([p1, p2]).then((result) => {
  console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
}).catch((error) => {
  console.log(error)
}); */

//
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 500)
})

Promise.race([p1, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  // 打开的是 'failed'
})


/**
 * ach Promise.all by myself
 */
Promise.prototype.all = function (promises) {
  let count = 0;
  const resAll = []
  return new Promise((resolve, reject) => {
    for (let i = 0, promisesLen = promises.length;i < promisesLen;i++) {
      promises[i].then(
        res => {
          count++;
          resAll.push(res)
        },
        err => {
          reject(err)
          break;
        }
      )
    }
    if (count === promises.length) {
      resolve(resAll)
    } else {
      reject()
    }
  })
}