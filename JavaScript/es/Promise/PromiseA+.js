

// 定义promise三种状态
let PENDING = 'PENDING'
let RESOLVED = 'RESOLVED' // 成功状态
let REJECTED = 'REJECTED'  // 失败状态
console.log('own')

const resolvePromise = (promise2, x, resolve, reject) => {
  // A+规范中  x和promise2引用同一个对象抛出类型错误
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  // 后续的条件要严格判断   保证代码能和别的库一起使用 
  // x可能是一个函数或者对象
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      let then = x.then;
      if (typeof then === 'function') {
        // 只能判断then是函数就认为其是promise
        then.call(x, y => {
          resolve(y)
        }, e => {
          reject(e)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      //TODO handle the exception
    }

  } else {
    resolve(x)
  }
}

class Promise {
  constructor(excutor) {
    this.status = PENDING
    // 成功和失败的原因需要保存
    this.value = undefined; // 成功的值
    this.reason = undefined; // 失败的值
    this.onResolvedCallbacks = [];  // 存储成功的回调函数数组
    this.onRejectedCallbacks = [];  // 存储失败的回调函数数组
    // 只有等待态的时候才能更改状态


    let resolve = (value) => {

      if (value instanceof Promise) {
        value.then(resolve, reject)  // 判断是promise.resolve 中如果传promise 递归解析 ，有延迟效果
      }

      if (this.status = PENDING) {
        this.value = value;
        this.status = RESOLVED;
        this.onResolvedCallbacks.forEach(fn => fn())
      }

    }
    let reject = (reason) => {
      if (this.status = PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    // 当函数发生异常直接抛出错误
    try {
      excutor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  // 关于then方法： 
  // 1: promise 成功或者失败会传递到外层的下一个then方法
  // 2: 返回的是普通值（除了promise之外的值）都会触底到下一then的成功中；出错的情况走到下一次的失败中；
  // 3: 错误处理 。自己最近的then没有错误处理，会向下传递错误直到有错误处理
  // 4: 每次执行完then 返回都是新的promise （一旦成功或者失败就不能够修改状态）
  then(onFulfilled, onRejected) {

    // 如果then中返回一个promise 我需要用x来决定是决定promise返回成功还是失败

    let promise2 = new Promise((resolve, reject) => {  // 链式调用
      if (this.status === RESOLVED) {
        setTimeout(() => { // 为了让resolvePromise拿到promise2
          try {
            // 如果状态是成功了，需要调用传入的第一个onFulfilled函数
            let x = onFulfilled(this.value)  //成功的回调直接执行；执行完成后拿到结果；ps: 成功之后返回的直接执行拿到结果存放到x中 
            // 但是返回的promise 还能继续then，继续传递成功的结果
            // x可能是promise,解析promise ，使用这个返回的结果决定下一个then是成功还是失败
            resolvePromise(promise2, x, resolve, reject) // 调用了下一个promise的resolve  
          } catch (error) {
            reject(error)
          }

        }, 0)
      }
      if (this.status === REJECTED) {
        setTimeout(() => { // 为了让resolvePromise拿到promise2
          try {
            // 如果状态失败了，就需要使用第二个函数讲失败的原因返回
            let x = onRejected(this.reason)
            // 处理失败
            resolvePromise(promise2, x, resolve, reject) //普通值都会传递到下一个的成功
          } catch (error) {
            reject(error)
          }

        }, 0)
      }
      // 调用then的时候可能是pending状态
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          // todo
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)

        })
        this.onRejectedCallbacks.push(() => {
          // todo
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })
    return promise2;
  }
  catch(errCallBack) {
    return this.then(null, errCallBack)
  }
  static resolve(data) {
    // 快速创建一个成功的promise
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  }
  static reject(reason) {
    // 快速创建一个失败的promise
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
}