function debounce(method, wait, immediate, callback) {
  let timeout, result
  let debounced = function(...args) {
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
        // 使用回调函数处理函数返回值
        callback && callback(result)
      }
    } else {
      timeout = setTimeout(() => {
        result = method.apply(context, args)
        // 使用回调函数处理函数返回值
        callback && callback(result)
      }, wait)
    }
  }

  debounced.cancel = function() {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}


/* 这样我们就可以在函数防抖时传入一个回调函数来处理函数的返回值，使用代码如下： 
function square(num) {
  return Math.pow(num, 2)
}

let debouncedFn = debounce(square, 1000, false, val => {
  console.log(`原函数的返回值为：${val}`)
})

window.addEventListener('resize', () => {
  debouncedFn(4)
}, false)

// 停止缩放1S后输出：
// 原函数的返回值为：16
*/