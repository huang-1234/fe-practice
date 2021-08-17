/* throttle 其实就是设置了 leading 和 maxWait的 debounce。 */

function throttle(func, wait, options) {
  let leading = true
  let trailing = true

  if (typeof func != 'function') {
      throw new TypeError('Expected a function')
  }

  // 初始化 leading 和 trailing 的默认值
  if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading
      trailing = 'trailing' in options ? !!options.trailing : trailing
  }

  // 默认情况下，leading 为 true， trailing 为 true。
  // 表示 在延迟开始前，和延迟结束后，都需要调用 func
  // 还传入了一个 maxWait
  return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
  })
}
