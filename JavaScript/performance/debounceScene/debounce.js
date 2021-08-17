let count = 1;
const container = document.getElementById('container');

function getUserAction(e) {
  container.innerHTML = count++;
  // console.log(e);
};
// 第一版
function debounce(fn, delay) {
  let timeid;
  return function (...args) {
    console.log('args<<', args);
    const ctx = this;
    const params = args
    clearTimeout(timeid)

    timeid = setTimeout(() => {
      fn.apply(ctx,params)
    },
      delay)
  }
}
container.onmousemove = debounce(getUserAction, 1200)