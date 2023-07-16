if (!Promise.allSettled) {
  const rejectHandler = reason => ({ status: "rejected", reason })
  const resolveHandler = value => ({ status: "fulfilled", value })
  Promise.allSettled = promises =>
    Promise.all(
      promises.map((promise) =>
        Promise.resolve(promise)
          .then(resolveHandler, rejectHandler)
      )
      // 每个 promise 需要用 Promise.resolve 包裹下
      // 以防传递非 promise
    );
}

// 使用
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "don't be allowed");
})
const promises = [p1, p2, p3]
Promise.allSettled(promises).then(console.log)

{
  MyPromise.allSettled = function (promises) {
    return new MyPromise((resolve, reject) => {
      promises = Array.isArray(promises) ? promises : []
      let len = promises.length
      const argslen = len
      // 如果传入的是一个空数组，那么就直接返回一个resolved的空数组promise对象
      if (len === 0) return resolve([])
      // 将传入的参数转化为数组，赋给args变量
      let args = Array.prototype.slice.call(promises)
      // 计算当前是否所有的 promise 执行完成，执行完毕则resolve
      const compute = () => {
        if (--len === 0) {
          resolve(args)
        }
      }
      function resolvePromise(index, value) {
        // 判断传入的是否是 promise 类型
        if (value instanceof MyPromise) {
          const then = value.then
          then.call(value, function (val) {
            args[index] = { status: 'fulfilled', value: val }
            compute()
          }, function (e) {
            args[index] = { status: 'rejected', reason: e }
            compute()
          })
        } else {
          args[index] = { status: 'fulfilled', value: value }
          compute()
        }
      }

      for (let i = 0;i < argslen;i++) {
        resolvePromise(i, args[i])
      }
    })
  }

}

{
  MyPromise.allSettled = function (values) {
    let promises = [].slice.call(values)
    return new MyPromise((resolve, reject) => {
      let result = [], count = 0
      promises.forEach(promise => {
        MyPromise.resolve(promise).then(value => {
          result.push({ status: 'fulfilled', value })
        }).catch(err => {
          result.push({ status: 'rejected', value: err })
        }).finally(() => {
          if (++count === promise.length) {
            resolve(result)
          }
        })
      })
    })
  }

}