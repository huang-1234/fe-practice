// DiDi 一面
function debounce(cb, waiting, immediate) {
  let timer;
  const debounced = (...args) => {
    const ctx = this;
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) {
        method.apply(ctx, args)
      }
    } else {
      timer = setTimeout(() => cb.apply(ctx, ...args), waiting);
    }
  }
  return debounced;
}