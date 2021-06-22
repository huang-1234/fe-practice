/* 有些时候我们需要在不可触发的这段时间内能够手动取消防抖，代码实现如下： */

function debounce(method, wait, immediate) {
  let timeout
  // 将返回的匿名函数赋值给debounced，以便在其上添加取消方法
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
        method.apply(context, args)
      }
    } else {
      timeout = setTimeout(() => {
        method.apply(context, args)
      }, wait)
    }
  }

  // 加入取消功能，使用方法如下
  // let myFn = debounce(otherFn)
  // myFn.cancel()
  debounced.cancel = function() {
    clearTimeout(timeout)
    timeout = null
  }
}
