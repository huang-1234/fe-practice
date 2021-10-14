/* window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行 */

/** */
let mySetTimeout = (fn: Function, delay: number, ...args: unknown[]) => {
  const ctx = this
  const startTime = +new Date();
  let timer: number, now: number;
  const loop = () => {
    timer = window.requestAnimationFrame(loop);
    now = +new Date()
    if(now - startTime >= delay){
      fn.apply(this, args)
      window.cancelAnimationFrame(timer)
    }
  }
  window.requestAnimationFrame(loop)
}

function showName(){
  console.log("Hello")
}
let timerID = mySetTimeout(showName, 1000);
// 在 1 秒后打印 “Hello”