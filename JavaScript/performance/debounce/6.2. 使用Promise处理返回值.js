function debounce(method, wait, immediate) {
  let timeout, result
  let debounced = function(...args) {
    // 返回一个Promise，以便可以使用then或者Async/Await语法拿到原函数返回值
    return new Promise(resolve => {
      let context = this
      if (timeout) {
        clearTimeout(timeout)
      }
      if (immediate) {
        let callNow = !timeout
        timeout = setTimeout(() => {
          timeout = null
        }, wait)
        if (callNow) {
          result = method.apply(context, args)
          // 将原函数的返回值传给resolve
          resolve(result)
        }
      } else {
        timeout = setTimeout(() => {
          result = method.apply(context, args)
          // 将原函数的返回值传给resolve
          resolve(result)
        }, wait)
      }
    })
  }

  debounced.cancel = function() {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}


/* 使用方法一：在调用防抖后的函数时，使用then拿到原函数的返回值
function square(num) {
  return Math.pow(num, 2)
}

let debouncedFn = debounce(square, 1000, false)

window.addEventListener('resize', () => {
  debouncedFn(4).then(val => {
    console.log(`原函数的返回值为：${val}`)
  })
}, false)

// 停止缩放1S后输出：
// 原函数的返回值为：16
复制代码使用方法二：调用防抖后的函数的外层函数使用Async/Await语法等待执行结果返回
使用方法见代码：
function square(num) {
  return Math.pow(num, 2)
}

let debouncedFn = debounce(square, 1000, false)

window.addEventListener('resize', async () => {
  let val
  try {
    val = await debouncedFn(4)
  } catch (err) {
    console.error(err)
  }
  console.log(`原函数返回值为${val}`)
}, false)

// 停止缩放1S后输出：
// 原函数的返回值为：16

*/