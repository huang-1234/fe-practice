export function debounce(fn, delay) {
  let timeid;
  return function (...args) {
    const ctx = this;
    const params = args;
    if (timeid) {
      clearTimeout(timeid);
    } else {
      setTimeout(() => {
        fn.apply(ctx, params);
      },delay)
    }
  }
}