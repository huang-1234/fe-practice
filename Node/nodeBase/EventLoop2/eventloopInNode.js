/* 根据Node.js官方介绍，每次事件循环都包含了6个阶段，对应到 libuv 源码中的实现，如下图所示
timers 阶段：这个阶段执行timer（setTimeout、setInterval）的回调
I/O callbacks 阶段：执行一些系统调用错误，比如网络通信的错误回调
idle, prepare 阶段：仅node内部使用
poll 阶段：获取新的I/O事件, 适当的条件下node将阻塞在这里
check 阶段：执行 setImmediate() 的回调
close callbacks 阶段：执行 socket 的 close 事件回调
我们重点看timers、poll、check这3个阶段就好，因为日常开发中的绝大部分异步任务都是在这3个阶段处理的。
*/

/* 
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function() {
      console.log('promise1')
  })
}, 0)

setTimeout(()=>{
  console.log('timer2')
  Promise.resolve().then(function() {
      console.log('promise2')
  })
}, 0)
 */

/* 
setTimeout(() => {
  console.log('timeout')
}, 0)
setImmediate(() => {
  console.log('immediate')
})
 */

// 输出结果：不一定，受机器上其它运行程序影响
// 13770@HSQ MINGW64 /g/Study/Code/Web/learnFrontTest (master)
// $ node "g:\Study\Code\Web\learnFrontTest\JavaScript\EventLoop\eventloopInNode.js"
// immediate
// timeout

// 13770@HSQ MINGW64 /g/Study/Code/Web/learnFrontTest (master)
// $ node "g:\Study\Code\Web\learnFrontTest\JavaScript\EventLoop\eventloopInNode.js"
// timeout
// immediate



/* event loop 的每个阶段都有一个任务队列
当 event loop 到达某个阶段时，将执行该阶段的任务队列，直到队列清空或执行的回调达到系统上限后，才会转入下一个阶段
当所有阶段被顺序执行一次后，称 event loop 完成了一个 tick
 */
/* 
const fs = require('fs')
fs.readFile('test.txt', () => {
  console.log('readFile')
  setTimeout(() => {
    console.log('timeout')
  }, 0)
  setImmediate(() => {
    console.log('immediate')
  })
})
 */



// ==============================================================
/* process.nextTick() VS setImmediate()
In essence, the names should be swapped. process.nextTick() fires more immediately than setImmediate()

来自官方文档有意思的一句话，从语义角度看，setImmediate() 应该比 process.nextTick() 先执行才对，而事实相反，命名是历史原因也很难再变。

process.nextTick() 会在各个事件阶段之间执行，一旦执行，要直到nextTick队列被清空，才会进入到下一个事件阶段，
所以如果递归调用 process.nextTick()，会导致出现I/O starving（饥饿）的问题，比如下面例子的readFile已经完成，但它的回调一直无法执行：
 */
const fs = require('fs')
const starttime = Date.now()
let endtime
fs.readFile('text.txt', () => {
  endtime = Date.now()
  console.log('finish reading time: ', endtime - starttime)
})
let index = 0

function handler () {
  if (index++ >= 1000) return
  console.log(`nextTick ${index}`)
  process.nextTick(handler)
  // console.log(`setImmediate ${index}`)
  // setImmediate(handler)
}
handler()