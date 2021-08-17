function debounce(func, wait, options) {
  let lastArgs,   // 存储 func 函数执行时的参数， 执行 debounced 函数的时候，被赋值
    lastThis,     // 存储 func 函数执行时的作用域， 执行 debounced 函数的时候，被赋值
    maxWait,      // 最长等待时间
    result,       // 存储 func 函数的返回值
    timerId,      // 定时器 id
    lastCallTime  // 最近一次 执行 debounced 函数时的时间

  // 最近一次执行 func 时的时间戳
  // 正常情况下，lastCallTime 与 lastInvokeTime 是相差无几的。
  let lastInvokeTime = 0
  // 是否 在延迟开始前 调用函数 - 它的作用，类似我上面实现的 throttle 方法中的 firstInvoke
  let leading = false
  // options 是否 传入了 maxWait
  let maxing = false
  // 是否 在延迟结束后 调用函数
  let trailing = true
  // 可以看到， debounce 函数，默认是 leading = false, trailing = true。也就意味着，默认在延迟结束后调用 func 函数

  // 如果 没有传入 wait， 且 wait 不等于 0， 且浏览器支持 requestAnimationFrame时
  // useRAF 会等于 true， 表示启用  requestAnimationFrame
  const useRAF = (
    !wait &&
    wait !== 0 &&
    typeof root.requestAnimationFrame === 'function'
  )

  // 如果 没有传入 func， 直接抛出错误
  if (typeof func != 'function') {
    throw new TypeError('Expected a function')
  }

  // 设置 wait 的默认值为 0
  wait = +wait || 0

  // 初始化 options 选项的 默认参数
  if (isObject(options)) {
    leading = !!options.leading
    maxing = 'maxWait' in options
    // 处理 maxWait 参数，如果用户自己定义了 maxWait， 则和 wait 参数比较，取他们的最大值
    // 这里是为了防止，用户 传入的 wait 大于 maxWait 的情况
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }

  // 封装执行函数， 用于立即执行 func
  function invokeFunc(time) {
    // 参数
    const args = lastArgs
    // 作用域
    const thisArg = lastThis
    // 重置
    lastArgs = lastThis = undefined
    // 记录 func 函数执行时的时间戳
    lastInvokeTime = time
    // 执行函数
    result = func.apply(thisArg, args)
    return result
  }

  // 开启定时器
  function startTimer(pendingFunc, wait) {
    if (useRAF) {
      return root.requestAnimationFrame(pendingFunc)
    }
    return setTimeout(pendingFunc, wait)
  }

  // 清除定时器
  function cancelTimer(id) {
    if (useRAF) {
      return root.cancelAnimationFrame(id)
    }
    clearTimeout(id)
  }

  // 在延迟开始前调用
  // 对 invokeFunc 的封装，返回 invokeFunc 函数的返回值
  function leadingEdge(time) {
    // 记录 函数被调用时 的时间戳
    lastInvokeTime = time
    // 开启一个定时器
    timerId = startTimer(timerExpired, wait)
    // 如果 leading 为 true，则表示需要在延迟开始前 先执行一次 func 函数
    return leading ? invokeFunc(time) : result
  }

  // 在延迟结束后调用
  // 对 invokeFunc 的封装，返回 invokeFunc 函数的返回值
  function trailingEdge(time) {
    timerId = undefined

    // 这里加了个 lastArgs 的判断，lastArgs 会在 debounced 函数执行时赋值
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }

    // 重置 参数和 作用域
    lastArgs = lastThis = undefined
    return result
  }

  //
  function remainingWait(time) {
    // 计算 time 与最近一次调用 debounced 函数的时间差
    const timeSinceLastCall = time - lastCallTime
    // 计算 time 与最近一次调用 func 函数的时间差
    const timeSinceLastInvoke = time - lastInvokeTime
    // 用 wait 减去已经等待的时间
    const timeWaiting = wait - timeSinceLastCall

    return maxing
      // 如果设置了最大等待时长，
      // 则需要 比较 ( wait 减去已经等待的时间 ) 和 ( maxWait 减去已经等待的时间 )，取最小值
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      // 否则直接返回 wait 减去已经等待的时间
      : timeWaiting
  }

  // 根据时间判断是否可以执行函数
  function shouldInvoke(time) {
    // 计算 time 与最近一次调用 debounced 函数的时间差
    const timeSinceLastCall = time - lastCallTime
    // 计算 time 与最近一次调用 func 函数的时间差
    const timeSinceLastInvoke = time - lastInvokeTime

    return (
      // 判断是不是第一次执行 debouned 函数，如果是第一次执行，肯定可以调用 func 函数
      lastCallTime === undefined
      // 判断距离最近一次调用 debounced 函数的时间差，是否大于等于 wait，如果是的话，也就意味着可以调用 func 函数
      || (timeSinceLastCall >= wait)
      // 正常情况 timeSinceLastCall 不会小于 0， 除非手动调整了系统时间
      || (timeSinceLastCall < 0)
      // 如果设置了 maxWait，判断距离上一次调用 func 函数的时间差，是否超过了最大等待时长
      || (maxing && timeSinceLastInvoke >= maxWait))
  }

  // 封装执行函数，用于 wait 延迟结束后执行
  function timerExpired() {
    const time = Date.now()
    // 根据时间来判断是否可以执行 func 函数
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }
    // 重新计算时间，重新建一个定时器
    timerId = startTimer(timerExpired, remainingWait(time))
  }

  function debounced(...args) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)

    lastArgs = args
    lastThis = this
    lastCallTime = time

    // 如果可以执行 func。第一次执行的时候，isInvoking 肯定是 true
    if (isInvoking) {
      // 第一次执行时
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
      // 如果可以执行 func，且又有 timerId 。说明 func 可以执行了，可是又没有执行 trailingEdge
      // 如果又已经设置了 maxWait，就立即执行 func
      // 什么时候会出现这种情况， 我还不明白。
      if (maxing) {
        // 开启一个定时器
        timerId = startTimer(timerExpired, wait)
        // 立即执行 func 函数
        // 为什么设置 maxWait 就需要理解执行 func ，下面分析 throttle 的时候就明白了
        return invokeFunc(lastCallTime)
      }
    }

    // 什么情况下 不是第一次执行, 却又没有 timerId 呢？
    // 因为 trailingEdge 函数内部会执行 timerId = undefined
    // 如果刚好 trailingEdge 函数执行之后，又触发了 debounced ，就会出现这种情况
    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait)
    }

    return result
  }

  // 返回一个闭包
  return debounced
}
