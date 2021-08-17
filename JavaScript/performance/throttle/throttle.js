function throttle(fn, wait) {
  let callback = fn;
  let timerId = null;

  // 是否是第一次执行
  let firstInvoke = true;

  function throttled() {
    let context = this;
    let args = arguments;

    // 如果是第一次触发，直接执行
    if (firstInvoke) {
      callback.apply(context, args);
      firstInvoke = false;
      return;
    }

    // 如果定时器已存在，直接返回。 这里很重要，时间还没到之前，直接返回空值，根本都不会触发定时器
    if (timerId) {
      return;
    }

    timerId = setTimeout(function () {
      // 注意这里 将 clearTimeout 放到 内部来执行了
      clearTimeout(timerId);
      timerId = null;

      callback.apply(context, args);
    }, wait);
  }

  // 返回一个闭包
  return throttled;
}

// test
let resizeFun = function (e) {
  console.log('resize');
};
window.addEventListener('resize', throttle(resizeFun, 500));
